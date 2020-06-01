//class
export class SearchModel {
  constructor(searchTerm) {
    this.searchTerm = searchTerm;
  }
  //get search result using json
  getSearchResults(displaySearchResult) {
    let http = new XMLHttpRequest();
    http.open(
      "get",
      `http://forkify-api.herokuapp.com/api/search?&q=${this.searchTerm}`
    );
    http.send();
    http.addEventListener("readystatechange", function () {
      if (http.readyState == 4 && http.status == 200) {
        let recipes = JSON.parse(http.response).recipes;
        displaySearchResult(recipes); //displar array of objects recipes
      }
    });
  }
}
