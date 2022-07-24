const joke = document.getElementById('joke') 
const btnjoke = document.getElementById('btn')

btnjoke.addEventListener('click',getjoke)

getjoke()

   async function getjoke(){
        const config = {
            headers: {'Accept': 'application/json'}
        }

        const response = await  fetch('https://icanhazdadjoke.com',config)
        const data = await response.json()
        joke.innerHTML = data.joke
       
                
    }
