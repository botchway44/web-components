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
    preloadLink.href = "/modules/simple_text/simple_text.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let title = `Work For Transformation`;
    let des = `Continuing its commitment to digital innovation, Staq’s decided to redesign the company’s robust POS from the ground up, with an eye toward delivering a more modern, user-friendly experience. Together we pioneered greenfield design concepts that furthered Staq’s advantage by creating a system that increases team member efficiency, reduces user errors, and speeds time to mastery for new team members.`;

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
