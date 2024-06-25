document.addEventListener("DOMContentLoaded", function() {
    const htmlCode = document.getElementById("html-code");
    const cssCode = document.getElementById("css-code");
    const jsCode = document.getElementById("js-code");
    const output = document.getElementById("output");

    function run() {
        try {
            output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";
            output.contentWindow.eval(jsCode.value);
        } catch (error) {
            console.error(error);
            output.contentDocument.body.innerHTML = `<pre style="color: red;">${error}</pre>`;
        }
    }

    function clearEditors() {
        htmlCode.value = '';
        cssCode.value = '';
        jsCode.value = '';
        output.contentDocument.body.innerHTML = '';
    }

    document.querySelectorAll('textarea').forEach(area => {
        area.addEventListener('keyup', run);
    });

    window.run = run;
    window.clearEditors = clearEditors;
});

