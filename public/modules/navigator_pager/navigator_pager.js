import { Slider } from "./slider.js";

class NavigatorPager extends HTMLElement {
  constructor() {
    super();

    this.template = `
    
        <div class="pager-image">   
            <div>
            <img src="https://www.boldare.com/static/95b2bbcd30e40d6edf07fe570ebbe24d/ace8e/boldare-wireframe-mock.webp" />
            </div>


            <div class="pager-descriptor">
              <div class = "title">Title </div>
              <div class="description">Description </div>   
              
              <div>
              <pip-more-txt class="arrow" theme="white"> </pip-more-txt>
              </div>
            </div>

             <div class="pager-navigator">
                  <div>
                  <svg class="icon"><use xlink:href="/svgs/icons.svg#icon-arrow-left"></svg>
                  </div>
                  
                  <div>
                  <svg class="icon"><use xlink:href="/svgs/icons.svg#icon-arrow-right"></svg>
                  </div>
           </div>
       </div>

       <div class="pager-wrapper ">
          <div class="move"> </div>
        </div>
        `;

    this.data = [
      {
        title: "Web and mobile development",
        description:
          "We design and create web and mobile apps that help reach business goals,We design and create web and mobile apps that help reach business goals,",
        url:
          "https://www.boldare.com/static/95b2bbcd30e40d6edf07fe570ebbe24d/ace8e/boldare-wireframe-mock.webp",
      },
      {
        title: "Product design and UX/UI",
        description:
          "Great design not only looks good, but has significant influence on profitability. ",
        url:
          "https://www.boldare.com/static/031979217d41fafe3c2763b57eba9d73/ace8e/mobiles.webp",
      },
      {
        title: "Full product development",
        description:
          "Great design not only looks good, but has significant influence on profitability.",
        url:
          "https://www.boldare.com/static/f405365eefb6e9611a96085d7d4da3cd/ace8e/about-us-founders.webp",
      },
    ];

    this.colors = [
      "#e83e8c",
      "#dc3545",
      "#ffbd54",
      "#007bff",
      " #ff525c",
      "#343a40",
    ];

    this.count = this.data.length;
    this.currrentIndex = 0;
    this.isRunning = false;
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
    container.classList.add("pager-container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/navigator_pager/navigator_pager.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    let image_wrapper = container.querySelector(".pager-image div img");
    const slide = new Slider(image_wrapper);

    //Check if backdrop is diabled
    let theme = this.getAttribute("backdrop"); // -> "A new value"
    if (theme === "true") {
      console.log("Use Backdrop");
      // container.classList.add("dark");
      container.classList.add("enable_backdrop");
      this.backdrop = true;
    } else {
      container.querySelector(".pager-wrapper").style.display = "none";
      this.backdrop = false;
      console.log("Disable Backdrop");
      // container.classList.add("white");

      container.classList.add("disable_backdrop");
    }

    this.startDataSquence(container);
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

  /**
   * Update Component
   */

  update(container, data, next) {
    container.querySelector(".description").textContent = data.description;
    container.querySelector(".title").textContent = data.title;
    container.querySelector(".pager-image div img").src = data.url;

    //check if backdrop is enabled
    if (this.backdrop) {
      let pager = document.createElement("div");
      pager.classList.add("move");
      pager.style.backgroundColor = `${
        this.colors[this.currrentIndex % this.colors.length]
      }`;

      let pager_wrapper = container.querySelector(".pager-wrapper");
      pager_wrapper.innerHTML = "";
      pager_wrapper.appendChild(pager);
    }
  }

  startDataSquence(container) {
    //Run before Run in Interval
    //TODO Remove Code Duplicate
    this.currrentIndex = this.currrentIndex % this.count;
    console.log(this.currrentIndex + " is current Index");
    this.currrentIndex++;
    let nextIndex = this.currrentIndex % this.count;
    console.log(nextIndex + " is next Index");
    this.update(
      container,
      this.data[this.currrentIndex - 1],
      this.data[nextIndex]
    );

    this.intervalSeq = setInterval(() => {
      this.currrentIndex = this.currrentIndex % this.count;
      console.log(this.currrentIndex + " is current Index");
      this.currrentIndex++;
      let nextIndex = this.currrentIndex % this.count;
      console.log(nextIndex + " is next Index");
      this.update(
        container,
        this.data[this.currrentIndex - 1],
        this.data[nextIndex]
      );
    }, 9000);
  }
}

//Export Navigator
window.customElements.define("navigator-pager", NavigatorPager);
