class DataGrid extends HTMLElement {
  constructor() {
    super();

    this.template = `
            
        `;

    this.data = {
      title: "STAQS",
      items: [
        {
          title: "Core Values",
          description:
            "We have lots of fun doing work we love—and these tenets drive everything we do.",
          image:
            "https://images.ctfassets.net/3cttzl4i3k1h/1Q3n2li0qqOPI8Dfcq7cfX/a409060835b8860846e3d994f7b57263/WTDurhamDay30520_2.jpg?w=719&h=487&q=80&fm=&f=&fit=fill",
        },

        {
          title: "Core Values",
          description:
            "We have lots of fun doing work we love—and these tenets drive everything we do.",
          image:
            "https://images.ctfassets.net/3cttzl4i3k1h/1Q3n2li0qqOPI8Dfcq7cfX/a409060835b8860846e3d994f7b57263/WTDurhamDay30520_2.jpg?w=719&h=487&q=80&fm=&f=&fit=fill",
        },

        {
          title: "Core Values",
          description:
            "We have lots of fun doing work we love—and these tenets drive everything we do.",
          image:
            "https://images.ctfassets.net/3cttzl4i3k1h/1Q3n2li0qqOPI8Dfcq7cfX/a409060835b8860846e3d994f7b57263/WTDurhamDay30520_2.jpg?w=719&h=487&q=80&fm=&f=&fit=fill",
        },

        {
          title: "Core Values",
          description:
            "We have lots of fun doing work we love—and these tenets drive everything we do.",
          image:
            "https://images.ctfassets.net/3cttzl4i3k1h/1Q3n2li0qqOPI8Dfcq7cfX/a409060835b8860846e3d994f7b57263/WTDurhamDay30520_2.jpg?w=719&h=487&q=80&fm=&f=&fit=fill",
        },
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
    this.container.classList.add("container");
    this.shadowRoot.appendChild(this.container);

    //append HTML Template to container
    this.container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/data_grid/data_grid.css";
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

    this.buildItems(this.data);
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

  buildSingleGridItem(container, data) {
    let wrapper = document.createElement("div");
    wrapper.classList.add("grid-item");

    let holder = `
      <div class="text"> 
         <div>${data.title} </div>
         <div>${data.description} </div>
      </div>
      <div class="image">  </div>
    `;

    wrapper.innerHTML = holder;
    container.appendChild(wrapper);
  }
  buildItems(data) {
    for (const item of data.items) {
      this.buildSingleGridItem(this.container, item);
    }
  }
}

window.customElements.define("pip-data-grid", DataGrid);
