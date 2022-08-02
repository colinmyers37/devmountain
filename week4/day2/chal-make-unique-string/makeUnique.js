
function removeExtra(str) {
const removed = new Set(str);
const removedString = Array.from(removed).join(' ');
return removedString
}
console.log(removeExtra('iwantoclimbamountain'))
