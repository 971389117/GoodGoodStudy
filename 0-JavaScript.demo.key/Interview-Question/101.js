// for (var i = 0; i < 100; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, Math.floor(Math.random() * 1000));
// }

function print(n) {
    setTimeout((() => {
        console.log(n)
        return () => {}
    }).call(n, []), Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 100; i++) {
    print(i);
}
