const test = (ev, a) => {
    console.log ("Log");
    console.log (ev);
    console.log (a);
    console.log( double(a, 4))
}

const double = (a, b) => a*b;
window.addEventListener('DOMContentLoaded', x => {
    test(x, 5);
});
