class AfterHeader extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <div class="image"> </div>
        <div class="text"> 
            <div class="title"> Here, you’re not “just” a developer or a designer! </div>
        
            <div class="description"> Here, you change the way people use technology. So, let's step into the world where digital products not only work but also matter to the world, where you pave the way to your own achievements and where excellent team vibes can’t be faked. </div>
           
            <div class="sub-description"> Feels like home? We bet it does. Take your chances and join #BoldareTeam! </div>
            </div>
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
    // list.getAttribute("data"); // -> "A new value"
    let container = document.createElement("div");
    container.classList.add("header-container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/after_header/after_header.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let des = `Case Study`;

    let theme = this.getAttribute("theme"); // -> "A new value"
    if (theme === "dark") {
      console.log("Theme Dark");
      container.classList.add("dark");
    } else {
      console.log("Theme White");
      container.classList.add("white");
    }
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ["data", "theme"];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    // if (attr === 'foo') this.doSomething();
    // console.log("Attribute Changed");
  }
}

window.customElements.define("pip-after-header", AfterHeader);
