
const veznici = ["i", "pa", "te", "ni", "niti", "a", "ali", "nego", "no", "da", "ako", "jer"];

const button = document.getElementById("buttonSend");
const textOut = document.getElementById("textOutput");
const textIn = document.getElementById("textIn");
const buttonRefresh = document.getElementById("buttonRf")

button.addEventListener("click", function() {
  let userText = document.getElementById("textIn").value
  let selectedValue = document.getElementById("standard-select").value
  console.log("Korisnik je upisao: ", userText)
 // console.clear();

  if(selectedValue == "ime_osobe") {
    imeOsobe(userText);
  } else if(selectedValue == "ime_mjesta"){
    console.log(0);
    imeMjesta(userText);
  } else if(selectedValue == "ime_blagdana"){
    imeBlagdana(userText);
  } else if(selectedValue == "ime_zupanija"){
    imeZupanija(userText);
  } else if(selectedValue == "ime_povjesnih_dogadaja"){
    imePovjesnihDog(userText);
  } else if(selectedValue == "ime_povjesnih_dogadaja_bezvremena"){
    imePovjesnihDogBezVrem(userText);
  } else {
    alert("Pogreška u kodu, refreshajte stranicu da se ponovo postavi program.")
  }
});
function imeOsobe(userText) {
  let str = userText
let numberOfWords = (str.split(' ').length);
  odabiranjeFunkOsobe(numberOfWords, str);
}


function imeMjesta(userText) {
  let str = userText
  let numberOfWords = (str.split(' ').length);
  odabiranjeFunkMjesta(numberOfWords, str);
}

function imeBlagdana(userText) {
  let str = userText
  let numberOfWords = (str.split(' ').length);
  odabiranjeFunkBlagdana(numberOfWords, str);
}

function imeZupanija(userText) {
  let str = userText
  let numberOfWords = (str.split(' ').length);
  console.log(str.split(' ').length);
  if(numberOfWords == "2") {
    let mystring = str;
    mystring = mystring.replace('-',' ');
    funkZupanija(mystring)
  } else {
  alert("Pokvaren upis.")
  }
}

function imePovjesnihDog(userText) {
  let str = userText
  console.log(str.split(' ').length)
  let numberOfWords = (str.split(' ').length);
  odabirfunkPovjesnihDog(numberOfWords, str)
}

function imePovjesnihDogBezVrem(userText) {
  let str = userText
  console.log(str.split(' ').length)
  let numberOfWords = (str.split(' ').length);
  odabirfunkPovjesnihDogBezVrem(numberOfWords, str)
}

// Pomoćne funkcije

function odabiranjeFunkBlagdana(number, str) {
  if(number == "1"){
    blagdanJednaRijec(str);
   } else if(number == "2") {
    blagdanDvijeRijeci(str);
   } else if(number == "3") {
    blagdanTriRijeci(str);
   }
}

function blagdanJednaRijec(str) {
  if(startsWithCapital(str)) {
    textIn.style.background = "#00FF00";
    console.log("Ime blagdana je točno napisano.")
  } else if(!startsWithCapital(str)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = str.charAt(0).toUpperCase() + str.slice(1)    
    console.log("Ime blagdana je krivo napisano.")
  }
}

function blagdanDvijeRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]

  if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme)) {
    console.log("Ime blagdana je točmo napisano.");
    textIn.style.background = "#00FF00";
  } else if(!startsWithCapital(prvoIme) && !startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme
    console.log("Prva riječ imena nije točno napisana.");
  } else if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1)
    console.log("Druga riječ imena nije točno napisana.")
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1)
    console.log("Ime blagdana krivo je napisano.")
  }
}

function blagdanTriRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]
  let treceIme = str.split(" ")[2]

  if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    console.log("Ime blagdana je točno napisano!");
    textIn.style.background = "#00FF00";
  } else if (!startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(drugoIme)) {
    console.log("Prva riječ imena je krivo napisana.");
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme + " " + treceIme
  } else if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    console.log("Druga riječ imena je krivo napisana.")
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme
  } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && startsWithCapital(drugoIme)) {
    console.log("Trece riječ imena je krivo napisana.")
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme + " " + treceIme.charAt(0).toLowerCase() + treceIme.slice(1)
  } else {
    console.log("Ime blagdana je krivo napisano.")
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme.charAt(0).toLowerCase() + treceIme.slice(1)
  }
}


function odabirfunkPovjesnihDogBezVrem(number, str) {
  if(number == "1"){
    povBezVremJednaRijeci(str);
   } else if(number == "2") {
    povBezVremDvijeRijeci(str);
   } else if(number == "3") {
    povBezVremTriRijeci(str);
   }
}

function povBezVremJednaRijeci(str) {
  if(!startsWithCapital(str)) {
    console.log("Točno je upisano jednoriječno ime povijesnog događaja.");
    textIn.style.background = "#00FF00";
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = str.charAt(0).toLowerCase() + str.slice(1)
    console.log("Krivo je napisano ime povijesnog događaja.");
  }
}

function povBezVremDvijeRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]

  if(!startsWithCapital(prvoIme) && !startsWithCapital(drugoIme)) {
    textIn.style.background = "#00FF00";
    console.log("Ime je točno napisano.");
  } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toLowerCase() + prvoIme.slice(1) + " " + drugoIme
    console.log("Prva riječ imena je krivo napisana.")
  } else if(!startsWithCapital(prvoIme) && startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1)
    console.log("Druga riječ imena nije točno napisana.")
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toLowerCase() + prvoIme.slice(1) + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1)
    console.log("Ime povijesnog događaja nije točno napisano.")
  }
}

function povBezVremTriRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]
  let treceIme = str.split(" ")[2]

  if(!startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textIn.style.background = "#00FF00";
    console.log("Ime je točno napisano.");
  } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toLowerCase() + prvoIme.slice(1) + " " + drugoIme + " " + treceIme
    console.log("Prva riječ imena nije točno napisana.");
  } else if(!startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme
    console.log("Druga riječ imena nije točno napisana.");
  } else if(!startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme + " " + treceIme.charAt(0).toLowerCase() + treceIme.slice(1)
    console.log("Treca riječ imena nije točno napisana.");
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toLowerCase() + prvoIme.slice(1) + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme.charAt(0).toLowerCase() + treceIme.slice(1)
    console.log("Ime povjesnog događaja nije točno napisano.")
  }
}


function odabirfunkPovjesnihDog(number, str) {
  if(number == "1"){
   povJednaRijeci(str);
  } else if(number == "2") {
   povDvijeRijeci(str);
  } else if(number == "3") {
   povTriRijeci(str);
  }
}

function povJednaRijeci(str) {
if(startsWithCapital(str)) {
  textIn.style.background = "#00FF00";
  console.log("Ime jednoriječnog povijesnog razdoblja je točno napisano.");
 } else {
  textOut.style.display = "block";
  textIn.style.background = "#FF0000"
  textOut.style.background = "#00FF00"
  textOut.value = str.charAt(0).toUpperCase() + str.slice(1) 
  console.log("Ime jednoriječnog povijesnog razdoblja nije točno napisano.")
 }
}

function povDvijeRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]

  if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme)) {
    textIn.style.background = "#00FF00";
    console.log("Ime dvojriječnog povijesnog razdoblja je točno napisano.")
  } else if(!startsWithCapital && !startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toLowerCase() + prvoIme.slice(1) + " " + drugoIme
    console.log("Prva riječ imena je krivo napisana.")
  } else if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1)
    console.log("Druga riječ imena je krivo napisana.")
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toCase() + prvoIme.slice(1) + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1)
    console.log("Ime povijesnog razdoblja je krivo napisano.")
  }
}

function povTriRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]
  let treceIme = str.split(" ")[2]

  if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textIn.style.background = "#00FF00";
    console.log("Ime povijesnog razdoblja je točno napisano.")
  } else if(!startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme + " " + treceIme
    console.log("Prva riječ nije točno napisana.")
  } else if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme
    console.log("Druga riječ imena nije točno napisana.")
  } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme + " " + treceIme.charAt(0).toLowerCase() + treceIme.slice(1)
    console.log("Treca rijec imena nije točno napisana.")
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1)+ " " + treceIme.charAt(0).toLowerCase() + treceIme.slice(1)
    console.log("Ime povijesnog razdoblja nije točno napisano.")
  }
}

function funkZupanija(str) {

  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]
  let treceIme = str.split(" ")[2]

  if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textIn.style.background = "#00FF00";
    console.log("Ime županije je točno napisano!")
  } else if (!startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + "-" + drugoIme + " " + treceIme
    console.log("Prva riječ imena nije točna.")
  } else if (startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + "-" + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme
    console.log("Druga riječ imena nije točno napisana.")
  } else if (startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + "-" + drugoIme + " " + treceIme.charAt(0).toLowerCase() + treceIme.slice(1)
    console.log("Treća riječ nije točno napisana.")
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + "-" + drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme.charAt(0).toLowerCase() + treceIme.slice(1)
    console.log("Ime županije nije točno napisano.")
  }
}

function odabiranjeFunkOsobe(number, str) {
  if (number == "1") {
    osobaJednaRijec(str);
  } else if (number == "2") {
    osobaDvijeRijeci(str);
  } else if (number == "3") {
    osobaTriRijeci(str);
  }
}

function osobaJednaRijec(str) {
  if(startsWithCapital(str)) {
    console.log("Jednoriječno ime je točno napisano.")
    textIn.style.background = "#00FF00";
    textOut.style.display = "none";
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = str.charAt(0).toUpperCase() + str.slice(1)
  }
}

function osobaDvijeRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]
  
  if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme)) {
    textIn.style.background = "#00FF00";
    textOut.style.display = "none";
    console.log("Dvoriječno ime je točno napisano.")
  }else if(!startsWithCapital(prvoIme) && startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme
    console.log("Prva rijeć je krivo napisano.")
  } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " +  drugoIme.charAt(0).toUpperCase() + drugoIme.slice(1)
    console.log("Druga rijeć je krivo napisano")
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " +  drugoIme.charAt(0).toUpperCase() + drugoIme.slice(1)
    console.log("Obe rijeći su krivo napisane.")
  }
}

function osobaTriRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]
  let treceIme = str.split(" ")[2]

  if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
    console.log("Ime je točno napisano!")
    textIn.style.background = "#00FF00"
  } else if(!startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme + " " + treceIme
    console.log("Prva riječ imena nije točno napisana!")
  } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme.charAt(0).toUpperCase() + drugoIme.slice(1) + " " + treceIme
    console.log("Druga riječ imena nije točno napisana!")
  } else if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && !startsWithCapital(treceIme))  {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " + drugoIme + " " + treceIme.charAt(0).toUpperCase() + treceIme.slice(1)
    console.log("Treća riječ imena nije točno napisana!")
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme.charAt(0).toUpperCase() + drugoIme.slice(1) + " " + treceIme.charAt(0).toUpperCase() + treceIme.slice(1)
    console.log("Ime je krivo napisano.")
  }
}

function odabiranjeFunkMjesta(number, str) {
  if (number == "1") {
    mjestoJednaRijec(str);
  } else if (number == "2") {
    mjestoDvijeRijeci(str);
  } else if (number == "3") {
    mjestoTriRijeci(str);
  }
}

function mjestoJednaRijec(str) {
  if(startsWithCapital(str)) {
    console.log("Jednoriječno ime je točno napisano.")
    textIn.style.background = "#00FF00";
    textOut.style.display = "none";
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = str.charAt(0).toUpperCase() + str.slice(1)
  }
}

function mjestoDvijeRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]
  
  if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme)) {
    textIn.style.background = "#00FF00";
    textOut.style.display = "none";
    console.log("Dvoriječno ime je točno napisano.")
  }else if(!startsWithCapital(prvoIme) && startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " + drugoIme
    console.log("Prva rijeć je krivo napisano.")
  } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme)) {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme + " " +  drugoIme.charAt(0).toUpperCase() + drugoIme.slice(1)
    console.log("Druga rijeć je krivo napisano")
  } else {
    textOut.style.display = "block";
    textIn.style.background = "#FF0000"
    textOut.style.background = "#00FF00"
    textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " +  drugoIme.charAt(0).toUpperCase() + drugoIme.slice(1)
    console.log("Obe rijeći su krivo napisane.")
  }
}

function mjestoTriRijeci(str) {
  let prvoIme = str.split(" ")[0]
  let drugoIme = str.split(" ")[1]
  let treceIme = str.split(" ")[2]
  console.log(3);
  // Firstly, check if drugoIme's value is in array veznici, if it is call function drugoImeVeznik() else process further

  // If the drugoIme is not, make sure that all words are uppercased.

    console.log(4)
    if(drugoIme.includes("i")|| drugoIme.includes("I")) {
      console.log(5);
      if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
        console.log("Ime je točno napisano.")
        textIn.style.background = "#00FF00"
      } else if(!startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
        textOut.style.display = "block";
        textIn.style.background = "#FF0000"
        textOut.style.background = "#00FF00"
        textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " +  drugoIme + " " + treceIme
        console.log("Prva rijeć nije točno napisana.")
      } else if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
        textOut.style.display = "block";
        textIn.style.background = "#FF0000"
        textOut.style.background = "#00FF00"
        textOut.value = prvoIme + " " +  drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme
          console.log("Druga rijeć nije točno napisana.")
      } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
          console.log("Treća rijeć nije točno napisana.")
          textOut.style.display = "block";
          textIn.style.background = "#FF0000"
          textOut.style.background = "#00FF00"
          textOut.value = prvoIme + " " +  drugoIme + " " + treceIme.charAt(0).toUpperCase() + treceIme.slice(1)
        } else {
          textOut.style.display = "block";
          textIn.style.background = "#FF0000"
          textOut.style.background = "#00FF00"
          textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " +  drugoIme.charAt(0).toLowerCase() + drugoIme.slice(1) + " " + treceIme.charAt(0).toUpperCase() + treceIme.slice(1)
          console.log("Nijedna rijeć nije točno napisana.")
        }
    } else {
      console.log(6);
      if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
        console.log("Ime je točno napisano.")
        textIn.style.background = "#00FF00"
      } else if(!startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
        textOut.style.display = "block";
        textIn.style.background = "#FF0000"
        textOut.style.background = "#00FF00"
        textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " +  drugoIme + " " + treceIme
        console.log("Prva rijeć nije točno napisana.")
      } else if(startsWithCapital(prvoIme) && !startsWithCapital(drugoIme) && startsWithCapital(treceIme)) {
        textOut.style.display = "block";
        textIn.style.background = "#FF0000"
        textOut.style.background = "#00FF00"
        textOut.value = prvoIme + " " +  drugoIme.charAt(0).toUpperCase() + drugoIme.slice(1) + " " + treceIme
          console.log("Druga rijeć nije točno napisana.")
      } else if(startsWithCapital(prvoIme) && startsWithCapital(drugoIme) && !startsWithCapital(treceIme)) {
          console.log("Treća rijeć nije točno napisana.")
          textOut.style.display = "block";
          textIn.style.background = "#FF0000"
          textOut.style.background = "#00FF00"
          textOut.value = prvoIme + " " +  drugoIme + " " + treceIme.charAt(0).toUpperCase() + treceIme.slice(1)
        } else {
          textOut.style.display = "block";
          textIn.style.background = "#FF0000"
          textOut.style.background = "#00FF00"
          textOut.value = prvoIme.charAt(0).toUpperCase() + prvoIme.slice(1) + " " +  drugoIme.charAt(0).toUpperCase() + drugoIme.slice(1) + " " + treceIme.charAt(0).toUpperCase() + treceIme.slice(1)
          console.log("Nijedna rijeć nije točno napisana.")
        }
      }
}

function refresh() {
    textIn.value = ""
    textIn.style.background = "#fff"
    textOut.style.background = "#fff"
    textOut.style.display = ""
    textOut.style.display = ""
    console.clear();
}

function startsWithCapital(word){
  return word.charAt(0) === word.charAt(0).toUpperCase()
}

