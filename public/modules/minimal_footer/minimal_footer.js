class MinimalFooter extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <div class="footer-details">
            <div class="site-details">
            <span class="name">Software Staqs </span> -  <span class="year"> 2020 </span>, Inc. All rights reserved.
            </div>

            <div class="site-details">
            + Quick Links <br>   


            <div class="icon-container">
              
           </div>

            </div>
        </div>
        `;

    // this.data = {
    //   name: " Software Stack",
    //   year: "2020",

    //   socialIcons: [
    //     { name: "facebook", link: "index.html" },
    //     { name: "instagram", link: "" },
    //     { name: "twitter", link: "" },
    //     { name: "linkedin", link: "" },
    //   ],
    // };
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    this.data = JSON.parse(this.getAttribute("data")) || {}; // -> "Hello World"

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

    container.querySelector(".name").innerHTML = this.data.name;
    container.querySelector(".year").innerHTML = this.data.year;

    // let theme = this.getAttribute("theme"); // -> "A new value"
    // if (theme === "dark") {
    //   console.log("Theme Dark");
    //   container.classList.add("dark");
    // } else {
    //   console.log("Theme White");
    //   container.classList.add("white");
    // }

    this.createSocialIcons(
      container.querySelector(".icon-container"),
      this.data.socialIcons
    );
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ["data", "theme"];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    // if (attr === 'foo') this.doSomething();
    // console.log("Attribute Changed");
  }

  createSocialIcons(container, data) {
    if (data) {
      for (const item of data) {
        let link = document.createElement("a");
        link.href = item.link;
        const svg = `  <svg class="icon"><use xlink:href="/svgs/icons.svg#icon-${item.name}"></svg>`;
        link.innerHTML = svg;
        container.appendChild(link);
      }
    }
  }
}

window.customElements.define("pip-minimal-footer", MinimalFooter);
