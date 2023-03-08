function f(x) {
    console.log(x);
}

const delay = function (f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };

};

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");