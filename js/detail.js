// Lấy thông tin id và category
const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const category = params.get('category')


const parent = document.querySelector(".detail"); 
    fetch("./data/data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const games = data[category]
        let game; 
        for (let index = 0; index < games.length; index += 1) {
            if (games[index].id == id) {
                game = games[index]; 
            }
        }
        console.log(game);
        
        let output = `<img src="${game.image_url}" alt="">`; 
        parent.innerHTML = output; 
        
    })
    .catch((exception) => {
        console.log("exception: ", exception);
    })