//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.querySelector('button').addEventListener('click', findDrink)

function findDrink() {

    const inputVal = document.querySelector('input').value

    const url = ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputVal)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            // console.log(data.drinks[0])
            // console.log(data.drinks[0].strDrink)
            // console.log(data.drinks[0].strDrinkThumb)
            // console.log(data.drinks[0].strInstructions)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

