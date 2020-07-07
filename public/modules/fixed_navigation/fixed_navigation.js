class FixedNavigationBar extends HTMLElement {
  constructor() {
    super();

    this.template = `
        
    <div class="navigation">
    <div class="nav-brand">
      <a href="/">
          Staqs
    </a>
    </div>
    <div class="nav-item nav-links">
        <a href="/" class="nav-link"> <span >Services</span></a>
        <a href="/" class="nav-link"> <span >Case Studies</span></a>
        <a href="/" class="nav-link"><span >About Us </span></a>
        <a href="/" class="nav-link"><span >Career </span></a>
        <a href="/" class="nav-link"><span >Blog</span></a>
        <a href="/" class="nav-link"><span >Contact</span></a>

    </div>

    <div class="logo-menu">
      <!-- <div class="logo-menu-item mg-3">
        <i class="fas fa-search mg-3"></i> Search
      </div> -->
      <div id="menu_btn" class="logo-menu-item ">
       <div class="open"> <i class="fas fa-bars mg-3"> </i> Menu</div>
       
       <div class="close hidden"><i class="fas fa-times mg-3"></i> </i> Close</div>
      </div>
    </div>

    <div id="mobile_nav" class="navigation-m-only ">
      <div class="mob-nav-wrapper font-2">
        <a href="/" class="mob-nav-link" style="border-left: 6px solid  #007bff !important;"><span >Home </span></a>
        <a href="/about" class="mob-nav-link" style="border-left: 6px solid  #f59088 !important;"><span >About </span></a>
        <a href="/projects" class="mob-nav-link" style="border-left: 6px solid  #f2d535 !important;"><span >Projects </span></a>
        <a href="/programs" class="mob-nav-link" style="border-left: 6px solid  #b4539b !important"><span >Events & Training</span></a>
        <a href="/chapters" class="mob-nav-link" style="border-left: 6px solid  #5684b2 !important"><span >Chapters</span></a>
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
    // container.classList.add("navigation-container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/fixed_navigation/fixed_navigation.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    this.menu_clicked = true;
    this.nav = container.querySelector("#mobile_nav");
    nav.classList.add("hidden");
    this.button = container.querySelector("#menu_btn");
    this.open = container.querySelector(".open");
    this.close = container.querySelector(".close");

    // let container = document.querySelector(".main_page");

    this.button.addEventListener("click", () => {
      if (menu_clicked) {
        this.showMenu();
        this.menu_clicked = false;
      } else {
        this.hideMenu();
        this.menu_clicked = true;
      }
    });

    // add empty space event listener
    // let empty_space = document.querySelector("#mobile_nav");
    // empty_space.addEventListener("click", event => {
    //   hideMenu();
    //   menu_clicked = true;
    // });

    //Show the error loading image
    // var error = bodymovin.loadAnimation({
    //   container: document.querySelector(".error-image"),
    //   renderer: "svg",
    //   loop: true,
    //   autoplay: true,
    //   path: "./anims/fail.json"
    // });

    //Show the error loading image
    // var arrow = bodymovin.loadAnimation({
    //   container: document.querySelector(".arrow-down"),
    //   renderer: "svg",
    //   loop: true,
    //   autoplay: true,
    //   path: "./anims/2810-arrow-down.json"
    // });

    this.navigation = container.querySelector(".navigation");
    //Make the NavBar static
    document.addEventListener("scroll", (ev) => {
      if (this.inView()) {
        //user is at the top of the page; no need to show the back to top button
        // container.style.position = "relative";
        console.log("Navigationn not fixed");
        console.log(this.navigation);
        this.navigation.style.display = "none";
      } else {
        // container.style.position = "fixed";

        this.navigation.classList.remove("hidden");
        console.log("Navigation fie");
        this.navigation.style.display = "flex";
      }
    });
  }

  inView() {
    return window.scrollY == 0 ? true : false;
  }

  showMenu() {
    document.body.classList.add("no-scroll");
    // nav.classList.add("slidein");
    this.nav.classList.add("mobile-nav");
    this.nav.classList.add("mobin");

    this.nav.classList.remove("mobout");
    this.nav.classList.remove("hidden");

    this.open.classList.add("hidden");
    this.close.classList.remove("hidden");
    this.close.classList.add("swap");
  }

  hideMenu() {
    document.body.classList.remove("no-scroll");
    this.nav.classList.remove("mobile-nav");
    this.nav.classList.remove("mobin");
    this.nav.classList.add("mobout");
    this.nav.classList.add("hidden");

    this.open.classList.remove("hidden");
    this.close.classList.add("swapout");
    this.close.classList.add("hidden");
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

window.customElements.define("pip-fixed-navigation", FixedNavigationBar);
