class IntroPager extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <div class="pager-divider"> </div>
        <div class="pager-wrapper">
        <div class="pager-text">
            <div class = "title">Title </div>
            <div class="description">Description </div>
           
            <pip-more-txt> </pip-more-txt>
        </div>
        </div>

        <div class="pager-image"> 
        <img src="https://images.unsplash.com/photo-1486108334972-f02b6c78ba07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <div class="pager-navigator">Next : </div>
         </div>
        `;

    this.data = [
      {
        title: "Web and mobile development",
        description:
          "We design and create web and mobile apps that help reach business goals,",
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
    preloadLink.href = "/modules/intro_pager/intro_pager.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let des = `Developing a machine learning- based prototype in less than 48 hours.`;

    let head = `Predictive maintenance software for wind turbines`;

    container.querySelector(".description").textContent = des;
    container.querySelector(".title").innerHTML = head;

    // container.querySelector('.title').addEventListener()

    window.addEventListener("load", (event) => {
      this.startDataSquence(container);
      // window.addEventListener('scroll', (event) => {
      //     if (this.isInViewport(this)) {
      //         // console.log("In View")
      //         if (!this.isRunning) {
      //             this.isRunning = true;
      //             this.startDataSquence(container)
      //         }

      //     } else {
      //         // console.log("Out View")
      //         if (this.intervalSeq != null) {
      //             clearInterval(this.intervalSeq);
      //             this.isRunning = false;
      //         }
      //         // container.classList.remove('anim-slide-right')
      //     }
      // })
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

  /**
   * Update Component
   */

  update(container, data, next) {
    let pager_wrapper = container.querySelector(".pager-wrapper");

    let pager = document.createElement("div");
    pager.classList.add("pager-text");

    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = data.title;

    let description = document.createElement("div");
    description.classList.add("description");
    description.textContent = data.description;

    pager.appendChild(title);
    pager.appendChild(description);
    pager.appendChild(document.createElement("pip-more-txt"));
    pager_wrapper.innerHTML = "";
    pager_wrapper.appendChild(pager);

    //Setup pager Image
    let image_wrapper = container.querySelector(".pager-image");
    let image = document.createElement("img");
    // image.classList.add("");
    image.src = data.url;

    let nextData = document.createElement("div");
    nextData.classList.add("pager-navigator");
    nextData.classList.add("cursor");
    nextData.innerHTML = `<div><strong>Next : </strong> ${next.title}</div>`;
    nextData.addEventListener("click", (event) => {
      this.update(
        container,
        next,
        this.data[(this.currrentIndex + 1) % this.count]
      );
    });

    //create Animation Listeners
    // pager_text.style.transform = 'translate(5px, 0)';
    // transition: transform 500ms ease-in-out;
    // pager_text.style.transition = "transform 400ms ease-in-out"
    pager.classList.add("anim-slide-left");
    image_wrapper.innerHTML = "";
    image_wrapper.appendChild(image);
    image_wrapper.appendChild(nextData);
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

  updateFunction(container) {}
}

window.customElements.define("pip-pager", IntroPager);
