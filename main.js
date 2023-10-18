// Volume and surfaace area of a cylinder

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let num1 = document.getElementById("radius").value;
  let num2 = document.getElementById("height").value;

  let volume = num1 ** 2 * Math.PI * num2;
  document.getElementById("outputV").innerHTML = Math.round(volume);

  let surfaceArea = 2 * Math.PI * num1 ** 2 + 2 * Math.PI * num1 * num2;
  document.getElementById("outputSA").innerHTML = Math.round(surfaceArea);
}
