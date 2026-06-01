function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
const search = debounce((text) => {
    console.log("Searching:", text);
}, 5000);
search("k");
search("ka");
search("kal");
search("kaly");
search("kalyan");