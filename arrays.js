// var a = [1,2,3,4,5]
// c = a.splice(0, 3);

// var b = a.slice (1,2);

// console.log("b= " + b);
// console.log("a= " + a);
// console.log("c =" + c);

// var string = "this is a string";
// var d = string.split(" is ");

// console.log("d= " + d);

// var m = [1,2,3,4,5]
// m.push([100, 5, 55, 3]);

// console.log("m= " + m);

// function sliceElements(givenArray) {
//    givenArray.splice(0,2)
//    return givenArray;
// };
// console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); // should return ["MIT Certificate", 4, 5]
// console.log(sliceElements([1, 2, [3, 4], "JavaScript"])); // should return [2, [3, 4], "JavaScript"]

// function splitElements(givenString) {
//     var f = givenString.split(" ");
//     console.log(f);
//     return f
//     //TODO: convert givenString into an array of words
// };

// var str = "MIT Certificate loves JavaScript";
// console.log(splitElements(str)); // should return ["MIT", "Certificate", "loves", "JavaScript"]


const x = 99;

function f1() {
    let y = 11;
    function f2(x) {
        x = x + 1;
        let y = 33;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
    f2(x);
}

f1()
console.log(x);