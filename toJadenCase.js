/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
    return this.split(" ").map((x) => x[0].toUpperCase() + x.slice(1)).join(" ")
   }
  }
);

console.log("How can mirrors be real if our eyes aren't real".toJadenCase())
// How Can Mirrors Be Real If Our Eyes Aren't Real