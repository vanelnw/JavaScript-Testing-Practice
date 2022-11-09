function stringLength(string) {
    if (string.length <= 10 && string.length >= 1) {
      return string.length;
    } else {
      throw new Error("Check fail: doesn't match");
    }
};

function reverseString(string) {
    return [...string].reverse().join('');
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



module.exports = { stringLength, reverseString, capitalize };
