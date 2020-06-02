import * as elements from "../elements.js";

export class SearchView {
  constructor() {}
  
  //recipes get from API
  displaySearchResult(recipes) {
    let markUp = ``;
    for (let i = 0; i < recipes.length; i++) {
      markUp += ` <div class="media py-3">
            <img
              class="align-self-center mr-3 rounded-circle"
              src="${recipes[i].image_url}"
              alt="${recipes[i].title}"
            />
            <div class="media-body">
            <a href="#${recipes[i].recipe_id}">
              <h6 class="mt-0">${recipes[i].title}</h6>
              <p> by <span> ${recipes[i].publisher}</span></p>
              </a>
            </div>
          </div>`;
    }
    elements.seachResult.innerHTML = markUp;
  }
  //get search input
  getSearchInputValue() {
    return elements.seachInput.value;
  } 
}
