//                                                                            
//  CODEMIRROR                                                                
//                                                                            

// CODEMIRROR -> RENDERING
function renderCodeMirror(textarea) {
    // OPTIONS
    var editor = CodeMirror.fromTextArea(textarea, {
        mode: 'stex',
        lineNumbers: false,
        theme: 'monokai',
        indentWithTabs: true,
        autocorrect: true,
        spellcheck: false,
        smartIndent: true,
        lineWrapping: true,
        indentUnit: 4,
        lineWiseCopyCut: false
    });

    // AUTOCOMPLETION
    const brackets = { 
        '[': ']', 
        '(': ')', 
        '{': '}'
    };
    editor.on("keydown", function(code, pressed) {
        // BRACKET AUTOCOMPLETION
        if (brackets[pressed.key]) {
            pressed.preventDefault();
            const selection = code.getSelection();
            if (selection) {
                const from = code.getCursor("from");
                const to = code.getCursor("to");
                code.replaceSelection(pressed.key + selection + brackets[pressed.key]);
                code.setSelection(
                    { line: from.line, ch: from.ch + 1 },
                    { line: to.line, ch: to.ch + 1 }
                );
            } else {
                const cursor = code.getCursor();
                code.replaceRange(pressed.key + brackets[pressed.key], cursor);
                code.setCursor({ line: cursor.line, ch: cursor.ch + 1 });
            }
            return true;
        }
        // REPLICATE LINE ABOVE
        if (pressed.altKey) {
            pressed.preventDefault();
            const cursor = code.getCursor();
            if (cursor.line > 0) {
                const lineText = code.getLine(cursor.line - 1).replaceAll("$", "").trim();
                const from = { line: cursor.line, ch: 0 };
                const to = { line: cursor.line, ch: code.getLine(cursor.line).length };
                code.replaceRange(lineText, from, to);
                code.setCursor({ line: cursor.line, ch: lineText.length });
            }
            return true;
        }
        // NEXT LINE WITH LINE BREAK
        if (pressed.key === "Enter" && !pressed.shiftKey) {
            pressed.preventDefault();
            const cursor = code.getCursor();
            const line = code.getLine(cursor.line);
            const beforeCursor = line.slice(0, cursor.ch);
            const afterCursor = line.slice(cursor.ch);
            const append = (beforeCursor.slice(-2) !== "\\\\") ? beforeCursor + "\\\\" : beforeCursor;
            code.replaceRange(append + "\n" + afterCursor,
                { line: cursor.line, ch: 0 },
                { line: cursor.line, ch: line.length }
            );
            code.setCursor({ line: cursor.line + 1, ch: 0 });
            return true;
        }
        // CHANGE AUTOMATICALLY * FOR CDOT
        if (pressed.key === "*") {
            pressed.preventDefault();
            const cursor =  code.getCursor();
            const line = code.getLine(cursor.line);
            let insert = "*"
            if (cursor.ch > 0) {
                const lastCh = line.charAt(cursor.ch - 1);
                if (!/[a-zA-Z]/.test(lastCh)) {
                    insert = "\\cdot "
                }
            } else {
                insert = "\\cdot "
            }
            code.replaceRange(insert, cursor);
            code.setCursor({ line: cursor.line, ch: cursor.ch + insert.length })
        }
        // AUTOCOMPLETE WITH TAB
        if (pressed.key === 'Tab') {
            pressed.preventDefault();
            const cursor = code.getCursor();
            if (cursor.line > 0) {
                const line = code.getLine(cursor.line - 1).replaceAll("$", "").trim();
                const newCh = line.charAt(cursor.ch) || '';
                code.replaceRange(newCh, cursor);
                code.setCursor({ line: cursor.line, ch: cursor.ch + newCh.length });
            }
        }
        // TRANSLATE PLUS-MINUS
        if (pressed.key === "-") {
            pressed.preventDefault();
            const cursor = code.getCursor();
            const lineText = code.getLine(cursor.line);
            let from, to, replacement;
            if (cursor.ch > 0 && lineText.charAt(cursor.ch - 1) === "+") {
                from = { line: cursor.line, ch: cursor.ch - 1 };
                to = { line: cursor.line, ch: cursor.ch };
                replacement = "\\pm ";
            } else {
                from = cursor;
                to   = cursor;
                replacement = "-";
            }
            code.replaceRange(replacement, from, to);
            const newCh = from.ch + replacement.length;
            code.setCursor({ line: cursor.line, ch: newCh });
        }
        // TRANSLATE FRAC
        if (pressed.key === "/") {
            pressed.preventDefault();
            const cursor = code.getCursor();
            const from = cursor;                                       
            const to = cursor;                                       
            const snippet = "\\frac{}{}";
            code.replaceRange(snippet, from, to);
            const newCh = cursor.ch + "\\frac{".length;
            code.setCursor({ line: cursor.line, ch: newCh });
        }
    })
    return editor;
}