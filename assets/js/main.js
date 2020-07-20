// • Formel für Menschen mit einem zierlichen und schmalen Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9
 //weight = [(height - 100) + (age/10)] * 0.9 * 0.9;

// • Formel für Menschen mit einem eher breiten Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1
 //weight = [(height - 100) + (age/10)] * 0.9 * 1.1;


function calculateWeight() {
    let height = Number(document.getElementById("height").value);
    let age = Number(document.getElementById("age").value);
    let smaller = document.getElementById("smaller").checked;
    let bigger = document.getElementById("bigger").checked;
    let weight;

    if (bigger == true) {
        weight = [(height - 100) + (age / 10)] * 0.9 * 1.1;
        document.getElementById("warning").innerHTML = "";
    } else if (smaller == true) {
        weight = [(height - 100) + (age / 10)] * 0.9 * 0.9;
        document.getElementById("warning").innerHTML = "";
    }
    document.getElementById("result").innerHTML = "Your optimal weight is " + Math.floor(weight) + " kg";

    // if missing field
  if (age == 0 || height == 0) {
    document.getElementById("warning").innerHTML = "Try again!";
    document.getElementById("result").innerHTML = "";
  }
}