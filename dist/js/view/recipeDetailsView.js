import * as elements from "../elements.js";

//recipe is array of object of one recepie
export function displayReciepe(recipe) {
  let recipeIngredients = recipe.ingredients; //array of strings
  let markUp = `<h3 class="p-2">${recipe.title}</h3>
    <img src="${recipe.image_url}" alt="" class="w-100" />
    <div class="reciepeingredients">
      <ul class="fa-ul d-flex flex-wrap p-4"> `;
  for (let i = 0; i < recipeIngredients.length; i++) {
    markUp += `  <li class="w-50 p-3">
            <span class="fa-li"><i class="fas fa-utensils"></i></span>${recipeIngredients[i]}
          </li>`;
        
  }
  markUp += `</ul> </div>`;
  elements.recepedetails.innerHTML = markUp;
}
