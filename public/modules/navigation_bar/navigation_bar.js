class NavigationBar extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <div class="navigation-wrapper">
            <div class = "nav-title"> <strong>STAQS</strong> </div>
                <div class = "nav-links">
                    <a href="#" class = "nav-items" > Services </a>
                    <a href="#" class = "nav-items" > Case studies </a>
                    <a href="#" class = "nav-items" > About us </a>
                    <a href="#" class = "nav-items" > Career </a>
                    <a href="#" class = "nav-items" > Blog </a>
                    <a href="#" class = "nav-items" > Contact </a>

                    <pip-shadow-button></pip-shadow-button>
                 </div>

        </div>

        <div class="mobile-nav"> 
            <div class = "mobile-title"> <strong>STAQS</strong> </div>
        </div>

        <div class="nav-description">
            <div class="description">Description</div>
            <div class="subdescription">SubText</div>
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
    container.classList.add("navigation-container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/navigation_bar/navigation.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let des = `The digital product design & development
        company and your guide on the digital
        transformation journey.`;

    let sub = `Do you have a product in mind?
        <br>
        Get in touch.`;

    container.querySelector(".description").textContent = des;
    container.querySelector(".subdescription").innerHTML = sub;

    // let des_tag = document.createElement("div");
    // des_tag.textContent = des;
    // let nav_description = container.querySelector('.nav-description');
    // nav_description.appendChild(des_tag);

    window.addEventListener("load", (event) => {
      window.addEventListener("scroll", (event) => {
        if (this.isInViewport(this)) {
          // console.log("In View")
          // container.classList.add('anim-slide-right')
          // container.style.transform = 'translate(0, -10px)';
          // // transition: transform 500ms ease-in-out;
          // container.style.transition = "transform 400ms ease-in-out"
        } else {
          // console.log("Out View")
        }

        //Make the NavBar static
        // if (window.scrollY == 0) {
        //   //user is at the top of the page; no need to show the back to top button
        //   container.style.position = "relative";
        // } else {
        //   container.style.position = "fixed";
        // }
      });
    });
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ["data"];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    // if (attr === 'foo') this.doSomething();
    // console.log("Attribute Changed");
  }

  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

window.customElements.define("pip-navigation", NavigationBar);
