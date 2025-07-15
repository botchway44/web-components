
function callAnimation(element) {
    // const element = document.getElementById('some-element-you-want-to-animate');
    let start;

    function step(timestamp) {
        if (start === undefined)
            start = timestamp;
        const elapsed = timestamp - start;

        // `Math.min()` is used here to make sure that the element stops at exactly 200px.
        element.style.transform = 'translateY(' + Math.min(0.1 * elapsed, 200) + 'px)';
        // element.classList.add('anim-slide-right')

        if (elapsed < 2000) { // Stop the animation after 2 seconds
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

function simpleEaseIn(element) {
    // easing function
    function easeInOutExpo(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }

    // setup
    var test = document.getElementById('test');
    var start = new Date().getTime();
    var from = 10;
    var to = 100;
    var duration = 1000;

    // animation
    (function animate() {
        var now = (new Date().getTime() - start);
        var ease = easeInOutExpo(0, now, 0, 1, duration);
        element.style.bottom = (from + (to - from) * ease) + 'px';
        if (now < duration) {
            setTimeout(animate, 1000 / 60);
        }
    })();
}

function basic(element) {
    var target = document.querySelector('.box');
    var player = target.animate([
        { transform: 'translate(0)' },
        { transform: 'translate(100px, 100px)' }
    ], 500);
    player.addEventListener('finish', function () {
        target.style.transform = 'translate(100px, 100px)';
    });
}