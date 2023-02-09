module.exports = function reverse (n) {
    let str = n.toString();
    let result = '';
      if(str[0] === '-') {
        str = str.slice(1);
      }
    for (let i = 0; i < str.length; i++) {
     result = `${str[i]}${result}`;
    }
  return Number(result);
}