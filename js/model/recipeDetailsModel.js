import { displayReciepe } from "../view/recipeDetailsView.js";
//class
export class RecipeDetails {
  constructor(id) {
    this.id = id;
  }
  //get search result using json
  getRecipeDetails(callback) {
    let http = new XMLHttpRequest();
    http.open(
      "get",
      `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
    );
    http.send();
    http.addEventListener("readystatechange", function () {
      if (http.readyState == 4 && http.status == 200) {
        let recipeDetails = JSON.parse(http.response).recipe;
        console.log(recipeDetails);
        callback(recipeDetails);
        //getRecipeDetails(recipeDetails); //display recipe
      }
    });
  }
}
