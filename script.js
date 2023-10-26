

const getCocktails = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

  try {
    const repsonse = await fetch(url); 
    return await response.json();
  } catch(error) {
    console.log(error); 
  }
};

const showCocktails = async () => {
  let cocktails = await getCocktails(); 
  let cocktailsSection = document.getElementById("main-content"); 

  cocktails.forEach((cocktail) => 
    cocktailsSection.append(getCocktailsItem(cocktail))
  );
}

const getCocktailsItem = (cocktail) => {
  const cocktailsSection = document.createElement("section");
  cocktailsSection.classList.add("cocktail");

  const a = document.createElement("a"); 
  a.href = cocktails.website_url; 
  cocktailsSection.append(a); 

  const h3 = document.createElement("h3");
  h3.innerText = cocktails.strDrink; 
  a.append(h3); 


};