class ExplainerText extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <span class = "title">This is the Text </span>
        <span class = "description">This is the Text </span>
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
    preloadLink.href = "/modules/explainer_text/explainer_text.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let title = `Work`;
    let des = `You are about to join the place where +130 creative minds get along well,
         live and breathe with design and tech, mountain bike, 
         do yoga and travel the world together, but first -
          work with passion to build stunning digital products!`;

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

window.customElements.define("pip-explainer-txt", ExplainerText);
