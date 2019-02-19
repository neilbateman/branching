$(document).ready(function() {
  var animal = prompt("Enter one of these animals: rattlesnake, bear or cat.").toUpperCase();
  


  if(animal === "RATTLESNAKE") {
    $('#Rattlesnake').show()
  } else if (animal ==="BEAR") {
    $('#Bear').show()
  } else if (animal ==="CAT") {
    $('#Cat').show()
  } else {
    alert("Enter one of these animals: rattlesnake, bear or cat.")
  }
});
