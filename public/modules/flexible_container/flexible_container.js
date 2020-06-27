class FlexibleContainer extends HTMLElement {
  constructor() {
    super();

    this.template = `
        `;

    this.data = [
      {
        num: "01",
        title: "Full Cycle Product Development",
        description:
          "We design and create web and mobile apps that help reach business goals,",
        url:
          "https://res.cloudinary.com/de4rvmslk/image/upload/f_auto,q_auto,w_1920/v1//img/team-meetings.jpg",
        list: ["Prototype Development", "MVP Development", "App Development"],
      },
      {
        num: "02",
        title: "Product Design and Development",
        description:
          "We design and create web and mobile apps that help reach business goals,",
        url:
          "https://res.cloudinary.com/de4rvmslk/image/upload/f_auto,q_auto,w_1920/v1//img/team-meetings.jpg",
        list: ["Prototype Development", "MVP Development", "App Development"],
      },
      {
        num: "03",
        title: "Development Teams",
        description:
          "We design and create web and mobile apps that help reach business goals,",
        url:
          "https://res.cloudinary.com/de4rvmslk/image/upload/f_auto,q_auto,w_1920/v1//img/team-meetings.jpg",
        list: ["Prototype Development", "MVP Development", "App Development"],
      },
      {
        num: "04",
        title: "Machine Learning",
        description:
          "We design and create web and mobile apps that help reach business goals,",
        url:
          "https://res.cloudinary.com/de4rvmslk/image/upload/f_auto,q_auto,w_1920/v1//img/team-meetings.jpg",
        list: ["Prototype Development", "MVP Development", "App Development"],
      },
      {
        num: "05",
        title: "Digital Transformation",
        description:
          "We design and create web and mobile apps that help reach business goals,",
        url:
          "https://res.cloudinary.com/de4rvmslk/image/upload/f_auto,q_auto,w_1920/v1//img/team-meetings.jpg",
        list: ["Prototype Development", "MVP Development", "App Development"],
      },
    ];
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
    container.classList.add("flexible-container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/flexible_container/flexible_container.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    for (let i = 0; i < 5; i++) {
      let d_list = document.createElement("pip-detailed-list");
      d_list.setAttribute("data", JSON.stringify(this.data[i]));
      container.appendChild(d_list);
    }
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

window.customElements.define("pip-flexible-container", FlexibleContainer);
