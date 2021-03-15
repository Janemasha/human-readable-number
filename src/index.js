module.exports = function toReadable (number) {
    let mass = [
        ["", "one", "two", "three", "four", "five","six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen",],
        ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",],
        ["", "thousand", "million", "billion", "trillion", "quadrillion"]
      ];
  let str = String(number);
  let str_mass = str.split('');
  let ret_mass = str_mass.reverse();
  let n = 3;
  let subarray = [];
  let mass1 = [];
  for (let i = 0; i <Math.ceil(str_mass.length/n); i++){
    subarray[i] = str_mass.slice((i*n), (i*n) + n);
}
let newArr = subarray.map(function(item) {
  return item.reverse();
})
newArr = newArr.map(function(item) {
  return item.join('');
})
for (let i = 0; i < newArr.length; i++) {
  if (i >= 1) {
    let thous = mass[2][i];
    mass1.unshift(thous);
  }
    let m = newArr[i] % 100;
    if (m < 20) {
      let ed = mass[0][m];
      if (m != 0) {
      mass1.unshift(ed);
    }
      if (newArr[i].length === 3 && newArr[i][0] != 0) {
        let hun = newArr[i][0];
        let hundr = `${mass[0][hun]} hundred`;
      mass1.unshift(hundr);
      }
    } 
    if (m >= 20) {
      let ad = newArr[i] % 10;
      let ed = mass[0][ad];
      if (ad != 0) {
      mass1.unshift(ed);
    }
      if(newArr[i].length > 2 && newArr[i][1] != 0) {
        let ten = newArr[i][1];
        let ten1 = mass[1][ten-2]
        mass1.unshift(ten1);
      }
      if(newArr[i].length === 2 && newArr[i][0] != 0) {
        let ten = newArr[i][0];
        let ten1 = mass[1][ten-2]
        if (ten != 0) {
        mass1.unshift(ten1);
    }
      }
      if (newArr[i].length === 3 && newArr[i][0] != 0) {
        let hun = newArr[i][0];
        let hundr = `${mass[0][hun]} hundred`;
      mass1.unshift(hundr);
      }
    }
}
  let str_1 = mass1.join(" ");
  if (number === 0) {
      return "zero"
  } else {
   return str_1  
}
}