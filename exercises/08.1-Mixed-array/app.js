var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
var tipes = [];
//your code here
for (let index = 0; index < mix.length; index++) {
    tipes.push(typeof mix[index]);
}
console.log(tipes);
