let url1 = new URL(window.location);
let params  = url1.searchParams;

// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    console.log(p);
}

let fruit1 = document.querySelector('#fruitchoice1').textContent = params.get("fruit1");
let fruit2 = document.querySelector('#fruitchoice2').textContent = params.get("fruit2");
let fruit3 = document.querySelector('#fruitchoice3').textContent = params.get("fruit3");
// const fruit1_cals = document.querySelector("#fruit1-calories")



const url2 = "./data/fruity.json";

// async function getfruityCal() {
//     const response = await fetch(url2);
//     if (response.ok) {
    
        
//         const data = await response.json();
//         console.log(data.fruits[0].name)
//         for (let i = 0; i < data.fruits.length; i++ ) {
//             if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
//                 console.log(data.fruits[i].nutritions.calories)
                
//             }
//         }
//     } else {
//       console.error("There was an error loading the data.");
      
//     }
//   }

//   async function getfruityProtein() {
//     const response = await fetch(url2);
//     if (response.ok) {
    
        
//         const data = await response.json();
//         console.log(data.fruits[0].name)
//         for (let i = 0; i < data.fruits.length; i++ ) {
//             if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
//                 console.log(data.fruits[i].nutritions.protein)
                
//             }
//         }
//     } else {
//       console.error("There was an error loading the data.");
      
//     }
//   }

//   async function getfruityFat() {
//     const response = await fetch(url2);
//     if (response.ok) {
    
        
//         const data = await response.json();
//         console.log(data.fruits[0].name)
//         for (let i = 0; i < data.fruits.length; i++ ) {
//             if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
//                 console.log(data.fruits[i].nutritions.fat)
                
//             }
//         }
//     } else {
//       console.error("There was an error loading the data.");
      
//     }
//   }

//   async function getfruitySugar() {
//     const response = await fetch(url2);
//     if (response.ok) {
    
        
//         const data = await response.json();
//         console.log(data.fruits[0].name)
//         for (let i = 0; i < data.fruits.length; i++ ) {
//             if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
//                 console.log(data.fruits[i].nutritions.sugar)
                
//             }
//         }
//     } else {
//       console.error("There was an error loading the data.");
      
//     }
//   }
  async function getfruityCarbs() {
    const response = await fetch(url2);
    let protein = 0 
    let calories = 0
    let fat = 0
    let sugar = 0
    let carbs = 0
    if (response.ok) {
    
        
        const data = await response.json();
        console.log(data.fruits[0].name)
        for (let i = 0; i < data.fruits.length; i++ ) {
            if (data.fruits[i].name === params.get("fruit1") || data.fruits[i].name === params.get("fruit2") || data.fruits[i].name === params.get("fruit3") ) {
                
                protein += data.fruits[i].nutritions.protein;
                calories += data.fruits[i].nutritions.calories;
                fat += data.fruits[i].nutritions.fat;
                sugar += data.fruits[i].nutritions.sugar;
                carbs += data.fruits[i].nutritions.carbohydrates
                
                
            }
        }
    } else {
      console.error("There was an error loading the data.");
      
    }
    document.querySelector("#drink-nutrition").textContent =` Calories: ${calories} `
    document.querySelector("#drink-pro").textContent =` Protein: ${protein} grams`
    document.querySelector("#drink-fat").textContent =` Fat: ${fat.toFixed(0)} grams`
    document.querySelector("#drink-carbs").textContent =` Carbohydrates: ${carbs.toFixed(0)} grams`
    document.querySelector("#drink-sugar").textContent =` Sugar: ${sugar} grams`
  }

  // fruit1_cals.innerHTML = `<strong>${getfruityCal(fruit1)}`;


getfruityCarbs()