let awesomestring = "Follow david.webdev on IG!";
const result = awesomestring.split("", 2);

for (index in result) {
  result[index] += `${result[1]}`;
}

console.log(result[0]);
