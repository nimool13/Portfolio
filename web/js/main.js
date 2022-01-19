
let heros = ["Juggernut","Bane","Zeus","Moonrider","Axe","Slark","Lina","Dazzle","Puck","Phantom","Lion","Doom","Skymage","Templar","Ember",
"Medusa","Magnus","Kunka","Enigma","Mirana","Necrophos","Marci"];
let rn=heros[Math.floor(Math.random() * heros.length)];

function getRandomItem(){
document.getElementById("random-word").innerHTML = rn;
document.getElementById("upperCase").innerHTML = rn.toUpperCase();
document.getElementById("lowerCase").innerHTML = rn.toLowerCase();


let button = document.getElementById("chk");
button.addEventListener("click", checkArray ());
button.addEventListener("click", checkVowel (rn));
button.addEventListener("click", checkCons (rn)); 
}



function checkArray(){
  let button = document.getElementById("chk");
  button.addEventListener("click", function () {
    let attempt =document.getElementById("txt").value;
    if (rn.toLowerCase().includes(attempt)) {
      document.getElementById("exist").innerHTML = "Yes, the character is in the random word.";
    } else {

      document.getElementById("_exist").innerHTML = "No, the character is not in the random word.";
    }
  });
}

function checkVowel(word){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let button = document.getElementById("chk");
  button.addEventListener("click", function (){
    let counts = 0;
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(word[i])) {
      counts++;
      }
  }
  return document.getElementById("vowels").innerHTML="The number of vowel(s) is/are " + counts;
} 
)}

function checkCons(str) {
  let button = document.getElementById("chk")
  button.addEventListener("click", function (){
	var countConsonants = 0;

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) !== "a" && str.charAt(i) !== "e" && str.charAt(i) !== "i" 
			&& str.charAt(i) !== "o" && str.charAt(i) !== "u") {
			countConsonants++;
		}
  }
    return document.getElementById("consonants").innerHTML= "The number of consonant(s) is/are " + countConsonants;
})}
