const cocktailSection = document.querySelector('.cocktail');
const generateDrinkBtn = document.querySelector('button');

function generateDrink() {
    //clears section of any info generated by previous function executions
    cocktailSection.innerHTML = "";

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            let drinks = data;
            let drinkInfo = data.drinks[0];
            let drinkName = drinkInfo.strDrink;
            let instructions = drinkInfo.strInstructions;
            let ingredients = [];

            //accounting for whether or not ingredients are provided to determine if they should be added to the ingredients arr
            if (drinkInfo.strIngredient1 !== null && drinkInfo.strIngredient1 !== "") {
                ingredients.push(drinkInfo.strIngredient1);
            }
            if (drinkInfo.strIngredient2 !== null && drinkInfo.strIngredient2 !== "") {
                ingredients.push(drinkInfo.strIngredient2);
            }
            if (drinkInfo.strIngredient3 !== null && drinkInfo.strIngredient3 !== "") {
                ingredients.push(drinkInfo.strIngredient3);
            }
            if (drinkInfo.strIngredient4 !== null && drinkInfo.strIngredient4 !== "") {
                ingredients.push(drinkInfo.strIngredient4);
            }
            if (drinkInfo.strIngredient5 !== null && drinkInfo.strIngredient5 !== "") {
                ingredients.push(drinkInfo.strIngredient5);
            }
            if (drinkInfo.strIngredient6 !== null && drinkInfo.strIngredient6 !== "") {
                ingredients.push(drinkInfo.strIngredient6);
            }
            if (drinkInfo.strIngredient7 !== null && drinkInfo.strIngredient7 !== "") {
                ingredients.push(drinkInfo.strIngredient7);
            }
            if (drinkInfo.strIngredient8 !== null && drinkInfo.strIngredient8 !== "") {
                ingredients.push(drinkInfo.strIngredient8);
            }
            if (drinkInfo.strIngredient9 !== null && drinkInfo.strIngredient9 !== "") {
                ingredients.push(drinkInfo.strIngredient9);
            }
            if (drinkInfo.strIngredient10 !== null && drinkInfo.strIngredient10 !== "") {
                ingredients.push(drinkInfo.strIngredient10);
            }
            if (drinkInfo.strIngredient11 !== null && drinkInfo.strIngredient11 !== "") {
                ingredients.push(drinkInfo.strIngredient11);
            }
            if (drinkInfo.strIngredient12 !== null && drinkInfo.strIngredient12 !== "") {
                ingredients.push(drinkInfo.strIngredient12);
            }
            if (drinkInfo.strIngredient13 !== null && drinkInfo.strIngredient13 !== "") {
                ingredients.push(drinkInfo.strIngredient13);
            }
            if (drinkInfo.strIngredient14 !== null && drinkInfo.strIngredient14 !== "") {
                ingredients.push(drinkInfo.strIngredient14);
            }
            if (drinkInfo.strIngredient15 !== null && drinkInfo.strIngredient15 !== "") {
                ingredients.push(drinkInfo.strIngredient15);
            }
            
            //add generated info to cocktailSection
            cocktailSection.innerHTML = `
            <h1 class="drinkName">${drinkName}</h1>
            <p class="instructions">${instructions}</p>
            `;

            //make ul, attach li
            let ingredientsList = document.createElement('ul');
            ingredientsList.classList.add("ingredients");
            for (let i = 0; i < ingredients.length; i++) {
                ingredientsList.innerHTML += `<li>${ingredients[i]}</li>`;
            }

            //append ul and li to cocktailSection
            cocktailSection.appendChild(ingredientsList);

        });
}

//show random drink on page load
generateDrink();

generateDrinkBtn.addEventListener('click', generateDrink);