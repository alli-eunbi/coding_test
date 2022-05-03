function getFinalString(s) {
  // Write your code here

  let if_aws = 1;
  while (if_aws != -1) {
    s = s.split("AWS");
    s = s.join("");
    if_aws = s.indexOf("AWS");
  }
  if (s == 0) {
    return -1;
  } else {
    return s;
  }
}

console.log(getFinalString("AAWSWS"));
console.log(getFinalString("g"));
