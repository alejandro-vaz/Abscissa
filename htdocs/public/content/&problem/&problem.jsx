/*                                                                           */
/* RENDER                                                                    */
/*                                                                           */

// RENDER -> CONNECT TO ELEMENTS
let editor = document.getElementById("editor");
const visor = document.getElementById("visor");
const instructions = document.getElementById("instructions");
const info = document.getElementById('info')
const result = document.getElementById("result");
const validateButton = document.getElementById("validate");
const calculatorLinks = {
    "basic": {
        "ClassCalc": '<iframe src="https://app.classcalc.com/prod/embed?linkId=PL7HJaN2jPopAEjE9&hide#/basic" width="450px" height="600px" frameborder=0 \\>'
    }
}

// RENDER -> CONNECT TO CODEMIRROR
editor = renderCodeMirror(editor);

// RENDER -> LOAD PROBLEM
curl("problems", { "PROBLEM": getURLParameter("problem"), "LANG": "en" }).then(data => {
    curl("location", { "PROBLEM": data.problem, "LANG": "en" }).then(location => {
        // GET PROBLEM DATA
        let problem = JSON.parse(data.data_en);
        // SAVE ATTRIBUTES
        result.dataset.pre = problem.pre;
        result.dataset.post = problem.post;
        // CREATE TITLE
        ReactDOM.createRoot(info).render(
            <>
                <h2>{data["name_" + "en"]}</h2>
            </>
        )
        // INSTRUCTIONS TITLE
        ReactDOM.createRoot(instructions).render(
            <>
                <h3>Instructions</h3>
                <div>{problem.instructions}</div>
            </>
        )
        // SET UP EDITOR
        editor.setValue(problem.editorDefault);
        visor.textContent = problem.editorDefault;
        renderLaTeX(visor);
        // RUN RESULT
        result.textContent = problem.pre + problem.post;
        renderLaTeX(result);
        // VALIDATE RESULT
        validateButton.addEventListener("click", function() {
            if (problem.numerical) {
                if (((problem.answer[0] * (1 - problem.answer[1]) <= +answeris) && (problem.answer[0] * (1 + problem.answer[1]) >= +answeris) && (problem.answer[0] >= 0)) || ((problem.answer[0] * (1 - problem.answer[1]) >= +answeris) && (problem.answer[0] * (1 + problem.answer[1]) <= +answeris) && (problem.answer[0] <= 0))) {
                    alert("OK")
                } else {
                    alert("X")
                }
            } else {
                const index = problem.answer.findIndex(
                    element => rawLaTeX(element) === rawLaTeX(answeris)
                );
                if (index !== -1) {
                    alert("OK");
                } else {
                    alert("BAD");
                }
            }
        })
    })
});


/*                                                                           */
/* DYNAMIC                                                                   */
/*                                                                           */

// DYNAMIC -> RENDER VISOR ON CHANGE
editor.on("change", function(instance) {
    const content = instance.getValue();
    visor.textContent = content;
    renderLaTeX(visor);
    visor.scrollTop = visor.scrollHeight;
    // EXTRACT BOXED CONTENT AND RENDER IT ON RESULT
    const occurences = (content.match(/\\boxed\{/g) || []).length;
    if (occurences === 1) {
        const start = content.indexOf('\\boxed{') + '\\boxed{'.length;
        let depth = 1;
        let pos = start;
        while (pos < content.length && depth > 0) {
            const ch = content[pos];
            const prev = content[pos - 1];
            if ((ch === '{' || ch === '}') && prev !== '\\') {
                depth += ch === '{' ? 1 : -1;
            }
            pos += 1;
        }
        if (depth === 0) {
            const answer = result.dataset.pre + content.slice(start, pos - 1) + result.dataset.post
            globalThis.answeris = content.slice(start, pos - 1);
            result.textContent = answer;
            validateButton.disabled = false
        } else {
            const answer = "$$ \\red{Error} $$";
            globalThis.answeris = null;
            result.textContent = answer;
            validateButton.disabled = true
        }
    } else {
        const answer = result.dataset.pre + result.dataset.post;
        globalThis.answeris = null;
        result.textContent = answer;
        validateButton.disabled = true
    }
    renderLaTeX(result)
})