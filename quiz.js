const choix = document.querySelectorAll('.choice-text')
const question = document.getElementById('question')
const difficulty = document.getElementById('difficulty')
const CHECK = document.getElementById('CHECK');
const loader = document.getElementById("loader");
const score = document.getElementById('score')
let scor = 0




function quiz(){
    CHECK.classList.add('loading')
    loader.classList.remove('loading')
    fetch('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple')

    .then ( res =>  res.json())
    .then( (res) => {
       
        console.log(res);
        question.innerHTML = res.results[0].question
        difficulty.innerHTML = res.results[0].difficulty
        const a = Math.floor(Math.random() * 3)

        choix[a].innerHTML= res.results[0].correct_answer
        console.log(res.results[0].correct_answer);

         j=0
        for(let i=0; i < choix.length ; i++){
            if(i!= a){
                choix[i].innerHTML=res.results[0].incorrect_answers[j]
                j++
            }
            
            
        }
       
        
    //    choix.forEach((e)=>{
    //     e.addEventListener('click', (this)=>{
    //         console.log(this);
    //     })
    //    })
       
       
    choix.forEach( indi=> indi.addEventListener('click' , (e)=>{
        e.target.style.backgroundColor = 'red'
        if(  choix[a].textContent == e.target.textContent){
            score.innerHTML = scor += 1
            // score.innerHTML = localStorage.getItem(scor)
        }
        else{
            console.log('mauvaise reponse')
        }
           
        

    })

    )
        
       


        
       CHECK.classList.remove('loading')
       loader.classList.add('loading')
    })

    //CIBLAGE
    choix.forEach(  indi=>{ 
        for(let i of choix){
            
            i.style.backgroundColor = '#ffffc7';
        }
        
    } )
    
}




CHECK.addEventListener( 'click' , quiz)
quiz();


// function scoree (){
//     const a = Math.floor(Math.random() * 3)
//     if(){
        
//         score.innerHTML= scor++;
//         console.log(score);
//     } 
//  }

//fonction score 


 
 

