const myButton = document.getElementById("mybutton");

myButton.addEventListener("click", () => {
  alert("click en el botón");
});

$("#mybutton").click(() => console.log("Hola, estoy utilizando jQuery"));
