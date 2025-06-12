/*                                                                           */
/* URL PARAMETERS                                                            */
/*                                                                           */

// URL PARAMETERS -> GET
const GET = Object.fromEntries((
    new URLSearchParams(window.location.search)
).entries());


/*                                                                           */
/* API                                                                       */
/*                                                                           */

// API -> REQUEST
function curl(script, data, timeout = 5000) {
    const scriptDir = window.location.pathname.substring(
        0, 
        window.location.pathname.lastIndexOf('/')
    );
    const signal = AbortSignal.timeout(timeout);
    return fetch(
        `${window.location.protocol === "https:" ? 'https' : 'http'}://${window.location.host}${scriptDir}/${`api/${script}`.replace(/^\/+/, '')}`,
        {
            cache: "no-store",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            signal
        }
    ).then(response => {response.json()});
}


/*                                                                           */
/* GENERAL                                                                   */
/*                                                                           */

// GENERAL -> REDIRECT
function redirect(target) {
    window.location.href = `./${target}`
}

// GENERAL -> FORCE ASPECT RATIO
window.addEventListener("resize", function() {
    if (
        window.innerWidth / window.innerHeight < 3 / 2 && 
        window.location.pathname.split("/").pop() !== "error"
    ) {
        window.location.href = "error";
    }
});

// GENERAL -> REACT VARIABLE
function mkvar(initialValue) {
    const [value, setValue] = useState(initialValue);
    return { value, set: setValue };
}