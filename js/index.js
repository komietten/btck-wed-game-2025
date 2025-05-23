function renderMovies (parentClass, keyJson) {
    const parent = document.querySelector(parentClass); 
    fetch("./data/data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const games = data[keyJson];
        let output = ""; 
        for (let index = 0; index <= 5; index += 1) {
            let game = games[index]; 
            output += `
            <div class="col-lg-2">
                <div class="game" data-id=${game.id} data-category=${game.category}>
                    <div class="game-image">
                        <img src="${game.image_url}" alt="">
                    </div>
                    <div class="game-desc">
                        <p>${game.name}</p>
                    </div>
                </div>
            </div>
            `
        }
        parent.innerHTML = output; 
        const listGame = document.querySelectorAll(".game"); 
        for (let index = 0; index < listGame.length; index += 1) {
            let game = listGame[index];
            
            const id = game.getAttribute("data-id")
            const category = game.getAttribute("data-category")

            console.log(id);
            console.log(category);
             
            game.addEventListener("click", function (e) {
                window.location.href = `detail.html?id=${id}&category=${category}`;
            })
        }
    })
    .catch((exception) => {
        console.log("exception: ", exception);
    })
}

renderMovies(".game-trending-row", "hot_games"); 
