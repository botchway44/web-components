class MinimalFooter extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <hr width="95%">
        <div class="footer-details">
            <div class="site-details">
            Software Staqs - 2020, Inc. All rights reserved.
            </div>

            <div class="site-details">
            + Quick Links <br>   


            <div class="icon-container">
                <a href="#">
                <svg class="icon"><use xlink:href="/svgs/icons.svg#icon-facebook"></svg>
                </a>

                <a href="#">
                <svg class="icon"><use xlink:href="/svgs/icons.svg#icon-linkedin"></svg>
                </a>

                <a href="#">
                <svg class="icon"><use xlink:href="/svgs/icons.svg#icon-twitter"></svg>
                </a>

                <a href="#">
                <svg class="icon"><use xlink:href="/svgs/icons.svg#icon-instagram"></svg>
                </a>
           </div>

            </div>
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
    container.classList.add("container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/minimal_footer/minimal_footer.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

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

window.customElements.define("pip-minimal-footer", MinimalFooter);
