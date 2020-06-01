import { SearchModel } from "./js/model/searchModeles.js";
import { SearchView } from "./js/view/searchResultView.js";
import * as elements from "./js/elements.js";
import { RecipeDetails } from "./js/model/recipeDetailsModel.js";
import { displayReciepe } from "./js/view/recipeDetailsView.js";
//controller
let controlSearch = () => {
  // object of class serchview
  let serchview = new SearchView();
  //object of class SearchModel
  let inputValue = serchview.getSearchInputValue();
  let search = new SearchModel(inputValue);

  search.getSearchResults(serchview.displaySearchResult);
};
//start to get search result
elements.seachBtn.addEventListener("click", controlSearch);
//elements.seachInput.addEventListener('keydown',controlSearch);
//elements.seachInput.addEventListener('keyup',controlSearch);
////////////////
let controlRecipe = () => {
    //get id without #
  let recipeId = window.location.hash.replace("#", "");
  let recipDetails = new RecipeDetails(recipeId);
  recipDetails.getRecipeDetails(displayReciepe);
};
window.addEventListener("hashchange", controlRecipe);
