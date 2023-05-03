/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

//! Solution #1
function reverse(str) {
  if (str.length <= 1) return str
  else {
    return str[str.length -1] + reverse(str.slice(0, str.length - 1))
  }
}

//! Solution #2
// function reverse(str) {
//   if (str.length === 0) return str
//   const retStr = reverse(str.slice(1))
//   return retStr + str[0]
// }
console.log(reverse("house")); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
