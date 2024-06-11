{/* <div id="joke" class="joke">Awesome joke is loading....</div>
<button id="jokeBtn" class="btn">Next JOKE</button> */}

//PROMISES
//GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');  //1
const jokeBtn = document.querySelector('#jokeBtn');


// const generateJokes = () => {      //3

//     const setHeader = {      //4
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader) //3
//     .then((res) => res.json() )
//     .then( (data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })

// }

//simplify the  promises using the async and await method
const generateJokes = async () => {
    try{
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`the error is ${err}`);
    }
}

jokeBtn.addEventListener('click', generateJokes); //2
generateJokes();
