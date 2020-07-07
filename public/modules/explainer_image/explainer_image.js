class ExplainerImage extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <span class = "description">This is the Text
        </span>
       
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
    preloadLink.href = "/modules/explainer_image/explainer_image.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description

    let des = `You are about to join the place where +130 creative minds get along well,`;

    // container.querySelector(".title").textContent = title;
    container.querySelector(".description").textContent = des;
    let svgImg = document.createElement("span");
    svgImg.innerHTML = `<svg class="icon"><use xlink:href="/svgs/icons.svg#icon-arrow-right"></svg> `;
    container.querySelector(".description").appendChild(svgImg);
    container.querySelector("svg").style.width = "34px";
    container.querySelector("svg").style.height = "20px";
    container.querySelector("svg").style.padding = "px 0px 0px 10px";
    container.querySelector("svg").style.objectFit = "contain";
    container.querySelector("svg").style.objectPosition = "cover";

    // container.addEventListener("mouseover", (evt) => {
    //   container.classList.add("anim-pan-in");
    // });

    // container.addEventListener("mouseleave", (evt) => {
    //   container.classList.remove("anim-pan-in");
    // });
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

window.customElements.define("pip-explainer-img", ExplainerImage);
