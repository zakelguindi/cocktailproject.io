

const getCocktails = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

  try {
    const link = await fetch(url); 
    console.log(link); 
    return await link.json();
  } catch(error) {
    console.log(error); 
  }
};

const showCocktails = async () => {
  let cocktails = await getCocktails(); 
  let cocktailsSection = document.getElementById("main-content"); 
  // cocktailsSection.append(getCocktailsItem(cocktails));
  cocktails.drinks.forEach((cocktail) => {
    cocktailsSection.append(getCocktailsItem(cocktail))
  });
};

const getCocktailsItem = (cocktail) => {
  const cocktailsSection = document.createElement("section");
  cocktailsSection.classList.add("cocktail");

  const a = document.createElement("a"); 
  a.href = cocktail.website_url; 
  cocktailsSection.append(a); 

  const h3 = document.createElement("h3");
  h3.innerText = cocktail.strDrink; 
  a.append(h3); 

  const p = document.createElement("p"); 
  p.textContent = `Instructions: ${cocktail.strInstructions}`; 
  a.append(p); 

  const img = document.createElement("img"); 
  img.src = cocktail.strDrinkThumb; 
  img.classList.add("img-format"); 
  a.append(img); 

  return cocktailsSection;


};

window.onload = () => showCocktails(); 