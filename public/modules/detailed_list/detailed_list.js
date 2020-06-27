class DetailedList extends HTMLElement {
  constructor() {
    super();

    this.template = `
        <div class = "num">01 </div>
        <div class = "title">This is the Text </div>
        <div class = "description">This is the Text </div>
        <div class = "list">
        <ul class="list-elem"> 
        
        </ul>
        </div>
        
        <div class = "button">
        <button class="click-button">Learn More</button>
        </div>
        `;
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    var att = this.getAttribute("data"); // -> Object "{ name : }"

    // // console.log(JSON.parse(encodeURIComponent('{}')));
    let obj = JSON.parse(att);
    // console.log(att);

    // console.log(obj.name);

    // list.setAttribute("data", "A new value");
    // list.getAttribute("data"); // -> "A new value"
    this.data = JSON.parse(att);

    let container = document.createElement("div");
    container.classList.add("text-container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/detailed_list/detailed_list.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    container.querySelector(".num").textContent = this.data.num;
    container.querySelector(".title").textContent = this.data.title;
    container.querySelector(".description").textContent = this.data.description;

    let list_container = container.querySelector(".list .list-elem");
    for (let i = 0; i < this.data.list.length; i++) {
      let temp = document.createElement("li");
      temp.textContent = this.data.list[i];
      list_container.appendChild(temp);
    }

    window.addEventListener("load", (event) => {
      console.log("page is fully loaded");
      window.addEventListener("scroll", (event) => {
        if (this.isInViewport(this)) {
          // console.log("In View")
          // container.classList.add('anim-slide-right')

          container.style.transform = "translate(0, -10px)";
          // transition: transform 500ms ease-in-out;
          container.style.transition = "transform 400ms ease-in-out";
        } else {
          // console.log("Out View")

          container.classList.remove("anim-slide-right");
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

window.customElements.define("pip-detailed-list", DetailedList);
