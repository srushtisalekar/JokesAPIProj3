{/* <div id="joke" class="joke">Awesome joke is loading....</div>
<button id="jokeBtn" class="btn">Next JOKE</button> */}

//PROMISES
//GET https://icanhazdadjoke.com/

 const jokes = document.querySelector('#joke');  //1
            const jokeBtn = document.querySelector('#jokeBtn');

                   /*first method:-*/

            // const generateJokes = () => {
            // fetch('https://icanhazdadjoke.com')
            // .then((res) => {
            //     console.log(res.json());
            // }).catch((error) => {
            //     console.log(error);
            // })

            /*above code can not used buz this api forment is in html
            form so that i will get the help the postman to convert to html to json*/
                
        //     const setHeader = {
        //         headers: {
        //             Accept : "application/json"
        //         }
        //     }
        //     fetch('https://icanhazdadjoke.com', setHeader)
        //     .then((res) => res.json() )
        //     .then( (data) => {
        //         jokes.innerHTML = data.joke;
        //     }).catch((error) => {
        //         console.log(error);
        //     })
        //   }

//  second method is the improve it above code 
          /*second methods:-*/
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
