class LoginPage extends HTMLElement {
  constructor() {
    super();

    this.template = `
      <div class="side-page">
        <div class="left-head-title"> Staqs </div>
            <div class="left-head-description"> 
                <div class="title"> Good Luck !!</div>
                <div class="description"> 
                Pass Staq's programming tests and get 
                matched to long-term remote software
                job opportunities! 
                </div>
            </div>
      </div>
      <div class="side-page sign-in" >
            <div class="sign-im-container">
                <div> Sign In </div>
                <div> or create an account </div>
                <div> for Software Engineers </div>

                <pip-simple-button theme="dark" text="Sign in"> </pip-simple-button>
                <br>
                <pip-simple-button theme="white" text="Sign in with Facebook"> </pip-simple-button>
                  <br>
                <pip-simple-button theme="white" text="Sign in with Google"> </pip-simple-button>
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
    container.classList.add("container");
    this.shadowRoot.appendChild(container);

    //append HTML Template to container
    container.innerHTML = this.template;
    //Load Stylesheet this way
    var preloadLink = document.createElement("link");
    preloadLink.href = "/modules/login_page/login_page.css";
    preloadLink.rel = "stylesheet";
    this.shadowRoot.appendChild(preloadLink);

    //create a handler for description
    let des = `Case Study`;

    let theme = this.getAttribute("theme"); // -> "A new value"
    if (theme === "dark") {
      console.log("Theme Dark");
      container.classList.add("dark");
    } else {
      console.log("Theme White");
      container.classList.add("white");
    }
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ["data", "theme"];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    // if (attr === 'foo') this.doSomething();
    // console.log("Attribute Changed");
  }
}

window.customElements.define("pip-login_page", LoginPage);
