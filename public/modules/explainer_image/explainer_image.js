class ExplainerImage extends HTMLElement {
  constructor() {
    super();

    //Has a container Wrapper
    this.template = `

        <div class="description-container">
              <div class="text-description"> 
                  <div class="title">Software STAQS </div>
                  <div class="description"> As Frank Sinatra said, “if I can make it there, I can make it anywhere.” While our roots are in central Ghana, part of us belongs to the Southern. Between hosting Staqs workshops in Accra to teaching our process to some of the biggest agencies in the world, our Accra team is growing in size and services. With our  presence, we help clients take a big bite out of the Big Apple. </div>
                  
                  <br>

                  <div >
                    <div> Accra, Ghana </div>
                    <div> +233 2466 92602 </div>
                  </div>
              </div>

              <div class="image-container"> 
                <img src="https://www.rootstrap.com/img/locations/rootstrap-locations-new-york.jpg" />
              </div>
        </div>
       
        <div class="backdrop">
          
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

    //Create Container Element
    let container = document.createElement("div");
    container.classList.add("container");
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

    var position = this.getAttribute("position"); // -> "Hello World"
    if (
      position === "reverse" ||
      position === "Reverse" ||
      position === "REVERSE"
    ) {
      container.querySelector(".description-container").classList.add("left");
      container.querySelector(".backdrop").style.left = "0px";
    } else {
      container.querySelector(".description-container").classList.add("right");
      container.querySelector(".backdrop").style.right = "0px";
    }
    //create a handler for description

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
