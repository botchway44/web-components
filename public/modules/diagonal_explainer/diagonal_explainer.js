class DiagonalExplainer extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <span class = "title">Test</span>
        `;
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    // var att = this.getAttribute("data"); // -> "Hello World"

    // // console.log(JSON.parse(encodeURIComponent('{}')));
    // let obj = JSON.parse(att);
    // console.log(att);

    // console.log(obj.name);

    // list.setAttribute("data", "A new value");

    //Create Container Element
    let container = document.createElement("div");
    container.classList.add("text-container");
    this.shadowRoot.appendChild(container);

    //Check Theme
    let theme = this.getAttribute("theme"); // -> "A new value"
    if (theme === "dark") {
      console.log("Theme Dark");
      container.classList.add("dark");
    } else {
      console.log("Theme White");

      container.classList.add("white");
    }

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/diagonal_explainer/diagonal_explainer.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let title = `We'd love to help with your product. Let’s talk`;

    container.querySelector(".title").textContent = title;
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ["theme"];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    // if (attr === 'foo') this.doSomething();
    // console.log("Attribute Changed");
  }
}

window.customElements.define("diagonal-explainer", DiagonalExplainer);
