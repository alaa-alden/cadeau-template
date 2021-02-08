const ageSelector = document.getElementById("age");
if (ageSelector)
  for (let i = 12; i < 100; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    ageSelector.appendChild(option);
  }
else {
    console.log("noe")
}