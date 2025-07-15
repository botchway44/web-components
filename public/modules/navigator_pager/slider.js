export class Slider {
  constructor(container) {
    this.container = container;

    this.clickDown = this.clickDown.bind(this);
    this.clickUp = this.clickUp.bind(this);
    this.checkSlide = this.checkSlide.bind(this);

    this.container.addEventListener("mousemove", this.clickDown);
    this.container.addEventListener("mouseout", this.clickUp);
  }

  clickDown(event) {
    this.x = event.clientX;
    this.y = event.clientY;
    this.container.addEventListener("pointermove", this.checkSlide);
  }

  clickUp(event) {
    this.container.removeEventListener("pointermove", this.checkSlide);
  }

  checkSlide(event) {
    event.preventDefault();
    //event.currentTarget.setPointerCapture(event.pointerId);

    // console.log("x =" + event.clientX);
    // console.log("y ="+ event.clientY);

    if (event.clientX < this.x) {
      console.log("slide left");

      //   this.container.style.transform = "translateX(10px)";
      //   transition: transform 500ms ease-in-out;
      //   this.container.style.transition = "translate 400ms ease-in-out";
      //   this.container.style.animation = "translateX(200px)";
      //   this.container.style.animation = `slide-in-left 10s cubic-bezier(0.39, 0.575, 0.565, 1) `;
    }

    if (event.clientX > this.x) {
      console.log("slide right");

      //   this.container.style.transform = "translateX(-10px)";
      //   transition: transform 500ms ease-in-out;
      //   this.container.style.animation = `slide-in-right 10s cubic-bezier(0.39, 0.575, 0.565, 1) `;
    }

    if (event.clientY > this.y) {
      console.log("slide down");
    }

    if (event.clientY < this.y) {
      console.log("slide up");
    }
  }
}
