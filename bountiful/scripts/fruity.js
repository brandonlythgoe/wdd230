// Toggle active/not active buttons

var gridSelector = document.querySelector('#directory-data');


gridSelector.addEventListener('click', () => {
  if (!gridSelector.classList.contains('active')) {
    gridSelector.classList.add('active');
    listSelector.classList.remove('active');
    directoryData.classList.add('directory-cards')
    directoryData.classList.remove('directory-list')
  }
});





const url = "./data/fruity.json";

const displayfruits = (fruits) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element
  console.log(cards)
  fruits.forEach((fruits) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.innerHTML = `
    <p>${fruits.name}</p>
    

    `;

    let cont = document.querySelector("#fruitsCont")
    cont.appendChild(card)

  }); // end of forEach loop

}; // end of function expression

async function getfruityData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayfruits(data.fruits);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getfruityData();