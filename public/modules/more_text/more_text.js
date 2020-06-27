class MoreText extends HTMLElement {
    constructor() {
        super();

        this.template = `
        <span class = "text">This is the Text </span>
        <span class="arrow-forward">
        <img width="15px;" class="arrow-btn" src="/images/vector.png" alt="" srcset="">
        </span>
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
        let container = document.createElement('div');
        container.classList.add("text-container");
        this.shadowRoot.appendChild(container);

        //append HTML Template to container
        container.innerHTML = this.template;
        //Load Stylesheet this way
        var preloadLink = document.createElement("link");
        preloadLink.href = "/modules/more_text/more_text.css";
        preloadLink.rel = "stylesheet";
        this.shadowRoot.appendChild(preloadLink);


        //create a handler for description
        let des = `Case Study`;



        container.querySelector('.text').textContent = des;

        // let des_tag = document.createElement("div");
        // des_tag.textContent = des;
        // let nav_description = container.querySelector('.nav-description');
        // nav_description.appendChild(des_tag);


        this.addEventListener("mouseover", (event) => {
            console.log("mouse entered")
            container.querySelector('.arrow-forward img').classList.remove("anim-slide-left");
            container.querySelector('.arrow-forward img').classList.add("anim-slide-right");
        });


        this.addEventListener("mouseout", (event) => {
            console.log("mouse out")
            container.querySelector('.arrow-forward img').classList.add("anim-slide-left");
            container.querySelector('.arrow-forward img').classList.remove("anim-slide-right");
        });

    }


    disconnectedCallback() {

    }

    static get observedAttributes() { return ['data']; }
    attributeChangedCallback(attr, oldValue, newValue) {
        // if (attr === 'foo') this.doSomething();
        // console.log("Attribute Changed");
    }
}


window.customElements.define('pip-more-txt', MoreText);
