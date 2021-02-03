const button = document.getElementById("click")
const add = document.getElementById('add')
const animal = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou"]
  function create(){
    add.innerHTML = "";
    animal.forEach(element => {
      const container = document.createElement('dive');
      container.className = "container";
      const para = document.createElement('p');
      para.textContent = element;
      container.appendChild(para);
      add.appendChild(container);
      
  })
};
button.addEventListener('click',create);