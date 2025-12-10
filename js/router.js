// js/router.js
import Layout from "./components/layout.js";
import subLayout from "./components/subLayout.js";

export function loadPage(page = "reservation") {
    const container = document.getElementById("page-container");

    import(`./components/${page}.js`).then((module) => {
        const content = module.default();
        container.innerHTML = Layout(content, page);

        // Call component init() if it exists (for logic)
        if (typeof module.init === "function") {
            module.init();
        }

        document.dispatchEvent(
            new CustomEvent("page-loaded", { detail: { page } })
        );
    });
}
export function supLoadPage(page = "reservation") {
    const container = document.getElementById("page-container");

    import(`./components/${page}.js`).then((module) => {
        const content = module.default();
        container.innerHTML = subLayout(content, page);

        // Call component init() if it exists (for logic)
        if (typeof module.init === "function") {
            module.init();
        }

        document.dispatchEvent(
            new CustomEvent("page-loaded", { detail: { page } })
        );
    });
}
