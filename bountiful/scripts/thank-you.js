let url1 = new URL(window.location);
let params  = url1.searchParams;

// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    console.log(p);
}

let fruit1 = document.querySelector('#fruitchoice1').textContent = params.get("fruit1");
let fruit2 = document.querySelector('#fruitchoice2').textContent = params.get("fruit2");
let fruit3 = document.querySelector('#fruitchoice3').textContent = params.get("fruit3");

const url2 = "./data/fruity.json";

async function getfruityCal() {
    const response = await fetch(url2);
    if (response.ok) {
    
        
        const data = await response.json();
        console.log(data.fruits[0].name)
        for (let i = 0; i < data.fruits.length; i++ ) {
            if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
                console.log(data.fruits[i].nutritions.calories)
                
            }
        }
    } else {
      console.error("There was an error loading the data.");
      
    }
  }

  async function getfruityProtein() {
    const response = await fetch(url2);
    if (response.ok) {
    
        
        const data = await response.json();
        console.log(data.fruits[0].name)
        for (let i = 0; i < data.fruits.length; i++ ) {
            if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
                console.log(data.fruits[i].nutritions.protein)
                
            }
        }
    } else {
      console.error("There was an error loading the data.");
      
    }
  }

  async function getfruityFat() {
    const response = await fetch(url2);
    if (response.ok) {
    
        
        const data = await response.json();
        console.log(data.fruits[0].name)
        for (let i = 0; i < data.fruits.length; i++ ) {
            if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
                console.log(data.fruits[i].nutritions.fat)
                
            }
        }
    } else {
      console.error("There was an error loading the data.");
      
    }
  }

  async function getfruitySugar() {
    const response = await fetch(url2);
    if (response.ok) {
    
        
        const data = await response.json();
        console.log(data.fruits[0].name)
        for (let i = 0; i < data.fruits.length; i++ ) {
            if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
                console.log(data.fruits[i].nutritions.sugar)
                
            }
        }
    } else {
      console.error("There was an error loading the data.");
      
    }
  }
  async function getfruityCarbs() {
    const response = await fetch(url2);
    if (response.ok) {
    
        
        const data = await response.json();
        console.log(data.fruits[0].name)
        for (let i = 0; i < data.fruits.length; i++ ) {
            if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
                console.log(data.fruits[i].nutritions.carbohydrates)
                
            }
        }
    } else {
      console.error("There was an error loading the data.");
      
    }
  }

// <p>${fruits.nutritions.carbohydrates}</p>
//     <p>${fruits.nutritions.protein}</p>
//     <p>${fruits.nutritions.fat}</p>
//     <p>${fruits.nutritions.sugar}</p>
//     <p>${fruits.nutritions.calories}</p>

getfruityCal()
getfruityProtein()
getfruityFat()
getfruitySugar()
getfruityCarbs()