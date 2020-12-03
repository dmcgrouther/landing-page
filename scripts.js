// https://www.w3schools.com/jsref/jsref_getfullyear.asp
console.log('hi')
function myFunction() {
  var d = new Date();
  var n = d.getFullYear();
  // document.getElementById("copy-right-year-all-rights-reserved").innerHTML = `&#169; ${n} All Rights Reserved.`;
  let newText = `&#169; ${n} All Rights Reserved.`

  console.log(newText)

  document.getElementById("copy-right-year-all-rights-reserved").innerHTML=newText;
}

myFunction()