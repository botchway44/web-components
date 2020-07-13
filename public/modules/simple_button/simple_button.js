class SimpleButon extends HTMLElement {
  constructor() {
    super();

    this.template = `
       
        `;
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    let container = document.createElement("button");
    container.classList.add("button-container");
    this.shadowRoot.appendChild(container);

    let text = this.getAttribute("text") || "";
    container.textContent = text;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/simple_button/simple_button.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    let theme = this.getAttribute("theme"); // -> "A new value"
    if (theme === "dark") {
      console.log("Theme Dark");
      container.id = "dark";
    } else {
      console.log("Theme White");
      container.id = "white";
    }
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ["data"];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    // if (attr === 'foo') this.doSomething();
    // console.log("Attribute Changed");
  }
}

window.customElements.define("pip-simple-button", SimpleButon);
