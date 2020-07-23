class Text extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <span class = "title">This is the Text </span>
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
    } else if (theme === "white") {
      console.log("Theme White");
      container.classList.add("white");
    } else {
      console.log("Theme None");
      container.classList.add("noBackground");
    }

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/text/text.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let title = this.getAttribute("text") || "Lorem Ipsum"; // -> "A new value"
    container.querySelector(".title").textContent = title;

    //Check Align
    let align = this.getAttribute("position") || "left";
    if (align === "left") {
      container.classList.add("align-left");
    }

    if (align === "right") {
      container.classList.add("align-right");
    }

    if (align === "center") {
      container.classList.add("align-center");
    }
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

window.customElements.define("pip-text", Text);
