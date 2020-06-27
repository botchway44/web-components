class ShadowButton extends HTMLElement {
  constructor() {
    super();

    this.template = `
        
        <a href="#" class="button nav-link">

          <div class="bottom"></div>

          <div class="top">

          <div class="label">Register</div>
            
        		<div class="button-border button-border-left"></div>
        	  <div class="button-border button-border-top"></div>
        	  <div class="button-border button-border-right"></div>
        		<div class="button-border button-border-bottom"></div>

          </div>

        	</a>



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
    container.classList.add("button-container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/shadow_button/shadow_button.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    window.addEventListener("load", (event) => {
      console.log("page is fully loaded");
      window.addEventListener("scroll", (event) => {
        if (this.isInViewport(this)) {
          console.log("In View");
          // container.classList.add('anim-slide-right')

          //   container.style.transform = "translate(0, -10px)";
          // transition: transform 500ms ease-in-out;
          //   container.style.transition = "transform 400ms ease-in-out";
        } else {
          console.log("Out View");

          //   container.classList.remove("anim-slide-right");
        }
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

window.customElements.define("pip-shadow-button", ShadowButton);
