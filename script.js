async function getStorage(key) {
    return await window.AmoWidget.storage.get(key);
}

async function setStorage(key, value) {
    return await window.AmoWidget.storage.set(key, value);
}

function blockMenus() {
    const interval = setInterval(() => {
        const menu = document.querySelector('.sidebar__menu');
        if (!menu) return;

        const items = menu.querySelectorAll('li');

        items.forEach(item => {
            const text = item.innerText.toLowerCase();

            if (text.includes("início") || text.includes("inicio")) {
                item.style.display = "none";
            }

            if (text.includes("whatsapp")) {
                item.style.display = "none";
            }
        });

        clearInterval(interval);
    }, 800);
}

function applyCustomCode(css, js) {
    let cssTag = document.getElementById("alphaCustomCSS");
    if (!cssTag) {
        cssTag = document.createElement("style");
        cssTag.id = "alphaCustomCSS";
        document.head.appendChild(cssTag);
    }
    cssTag.innerHTML = css || "";

    let jsTag = document.getElementById("alphaCustomJS");
    if (!jsTag) {
        jsTag = document.createElement("script");
        jsTag.id = "alphaCustomJS";
        document.body.appendChild(jsTag);
    }
    jsTag.innerHTML = js || "";
}

async function loadValues() {
    const css = await getStorage("alpha_css");
    const js = await getStorage("alpha_js");

    document.getElementById("customCss").value = css || "";
    document.getElementById("customJs").value = js || "";

    applyCustomCode(css, js);
}

async function save() {
    const css = document.getElementById("customCss").value;
    const js = document.getElementById("customJs").value;

    await setStorage("alpha_css", css);
    await setStorage("alpha_js", js);

    alert("Configurações salvas!");
}

async function apply() {
    const css = document.getElementById("customCss").value;
    const js = document.getElementById("customJs").value;

    applyCustomCode(css, js);

    alert("Aplicado!");
}

document.addEventListener("DOMContentLoaded", async () => {
    blockMenus();
    await loadValues();

    document.getElementById("saveBtn").onclick = save;
    document.getElementById("applyBtn").onclick = apply;
});