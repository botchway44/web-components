class SimpleText extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <span class = "title">This is the Text </span>
        <span class = "description">This is the Text </span>
        `;
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    this.data = JSON.parse(this.getAttribute("data")); // -> "Hello World"

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

    let size = this.getAttribute("size") || "small";
    if (size === "small") {
    }
    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/simple_text/simple_text.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let title = this.getAttribute("title") || this.data.title || "";
    let des = this.getAttribute("description") || this.data.description || "";

    container.querySelector(".title").textContent = title;
    container.querySelector(".description").textContent = des;
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

window.customElements.define("pip-simple-txt", SimpleText);
