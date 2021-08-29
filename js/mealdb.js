const loadMealDB = () => {
    const searchFood = document.getElementById('search-field');
    const searchtext = searchFood.value;
    //clear input fiels
    searchFood.value = '';

    if(searchtext.length > 0){
        const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`);
        fetch(url)
        .then(res => res.json())
        .then(data => displayLoadMealDB(data.meals))
    }
    else{
        const error = document.getElementById('error-messege');
        error.textContent = '';
        const p = document.createElement('p');
        p.innerHTML = "<p class='text-center p-3 bg-danger'><b>Please enter a meal name...</b></p>";
        error.appendChild(p);
    }
    
}

const displayLoadMealDB = (meals) => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    
    for (const meal of meals){
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        const {strMeal, strMealThumb, strInstructions, idMeal} = meal;
        div.innerHTML = `
            <div onclick="loadMealDetails(${idMeal})" class="card h-100">
                <img src="${strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${strMeal}</h5>
                    <p class="card-text">${strInstructions.slice(0, 200)}</p>
                </div>
            </div>
            
        `;
        searchResult.appendChild(div) 
    }
}

const loadMealDetails = mealId => {
    // console.log(mealId);
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    window.scrollTo(0, 40);
    // console.log(meal);
    const detailsContainer = document.getElementById('meal-details');
    detailsContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    const {strMeal, strMealThumb, strInstructions, idMeal} = meal;
    div.innerHTML = `
    <div class="card h-100">
        <img src="${strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">${strInstructions.slice(0, 200)}</p>
        </div>
    </div>
    `;
    detailsContainer.appendChild(div);
}

