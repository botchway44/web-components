class MinimalNavigationBar extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <div class="navigation-wrapper">
            
               

        </div>

        <div class="mobile-nav"> 
           
        </div>
        `;

    this.data = {
      title: "STAQS",
      links: [
        { name: "Services", route: "services.html" },
        { name: "Case Study", route: "case-study.html" },
        { name: "About Us", route: "about.html" },
        { name: "Career", route: "services.html" },
        { name: "Blog", route: "services.html" },
        { name: "Contact", route: "services.html" },
      ],
      description:
        "The digital product design & development company and your guide on the digital transformation journey.",
      miniDescription: "Do you have a product in mind? <br> Get in touch.",
      customNavElems: [
        { customElemName: "pip-shadow-button", route: "services.html" },
      ],
    };
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
    this.container = document.createElement("div");
    this.container.classList.add("navigation-container");
    this.shadowRoot.appendChild(this.container);

    //append HTML Template to container
    this.container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href =
      "/modules/minimal_navigation_bar/minimal_navigation_bar.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

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

    this.buildNavigationLinks(this.data);
    this.buildMobileNavigation(this.data);
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

  buildNavigationLinks(data) {
    let title = data.title;
    let holder = `
      <a href="services.html" class = "nav-items" > Services </a>
      <a href="case-study.html" class = "nav-items" > Case studies </a>
      <a href="#" class = "nav-items" > About us </a>
      <a href="#" class = "nav-items" > Career </a>
      <a href="#" class = "nav-items" > Blog </a>
      <a href="#" class = "nav-items" > Contact </a>

    
    `;

    let wrapper = document.createElement("div");
    wrapper.classList.add("nav-links");
    // wrapper.innerHTML = holder;
    for (const link of data.links) {
      let li = document.createElement("a");
      li.href = link.route;
      li.classList.add("nav-items");
      li.innerHTML = link.name;
      console.log(li);
      wrapper.appendChild(li);
    }

    //check if customNavElems is not empty
    if (this.data.customNavElems) {
      for (const customLink of data.customNavElems) {
        let li = document.createElement(customLink.customElemName);

        // li.classList.add("nav-items");
        // li.innerHTML = link.name;
        // console.log(li);
        wrapper.appendChild(li);
      }
    }
    //Create a shadow button
    // let shadowBtn =

    let containerElement = this.container.querySelector(".navigation-wrapper");
    //create the Title Element and append
    let titleElem = document.createElement("a");
    titleElem.classList.add("nav-title");
    titleElem.href = "/";
    titleElem.style.fontWeight = "Bold";
    titleElem.innerHTML = title;

    //append to the containerElement
    containerElement.appendChild(titleElem);
    console.log(containerElement);
    containerElement.appendChild(wrapper);
  }

  buildMobileNavigation(data) {
    let mobileContainer = this.container.querySelector(".mobile-nav");
    // <div class = "mobile-title"> <strong>STAQS</strong> </div>
    let titleElem = document.createElement("a");
    titleElem.classList.add("mobile-title");
    titleElem.href = "/";
    titleElem.style.fontWeight = "Bold";
    titleElem.innerHTML = this.data.title;

    mobileContainer.appendChild(titleElem);
  }
}

window.customElements.define("pip-min-navigation", MinimalNavigationBar);
