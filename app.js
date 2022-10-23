//Inserting the question into the quiz
const unansweredQuestions = []
const chosenAnswers = []
const answersCombination = [
    {
        combination:["Emirates Stadium","Tacos","Honda Civic"],
        text: "Amazing Picking",
        alt:"Image of Fans",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Arsenal_v_Stoke_City_FC_-_Robin_Van_Persie_penalty_cropped.jpg/220px-Arsenal_v_Stoke_City_FC_-_Robin_Van_Persie_penalty_cropped.jpg"
    },
    {
        combination:["Old Trafford","Pizza","Ford"],
        text: "Amazing Picking",
        alt:"Image of Fans",
        image: "https://a.espncdn.com/photo/2020/0304/r674744_1296x1296_1-1.jpg"
    },

    {
        combination:["Stamford Bridge","Burgers","Toyota"],
        text: "Amazing Picking",
        alt:"Image of Fans",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Drogba_2008.jpg/180px-Drogba_2008.jpg"
    },
    {
        combination:["Anfield","Lasagna","Volskwagen"],
        text: "Amazing Picking",
        alt:"Image of Fans",
        image: "https://i.pinimg.com/736x/50/af/be/50afbec431c9db38efb11f7295d0a56d--steven-gerrard-liverpool.jpg"
    }
]
const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answers');

document.addEventListener('DOMContentLoaded',function(){
    displayQuestions();
})

function displayQuestions() {
   

    //Variable to add the question 
    const questions = [
        { // Start 1 question
            id:0,
            text: 'Pick your favorite stadium',
            answers:[
                {
                    text: "Emirates Stadium",
                    image: "https://images.unsplash.com/photo-1577224682146-dd7843c88d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    alt: "Photo of the Emirates Stadium held by Arsenal FC Games",
                    credit: "Nelson Ndongala"
                },
                {
                    text: "Old Trafford",
                    image: "https://images.unsplash.com/photo-1568194157720-8bbe7114ebe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
                    alt: "Photo of Old Trafford held by Man United FC Games",
                    credit: "Alex Motoc"
                },
                {
                    text: "Stamford Bridge",
                    image: "https://cdn.londonandpartners.com/asset/3eceb9838b2a4d2df72e79fce7e7f546.jpg",
                    alt: "Photo of Stamford Bridge held by Chelsea FC Games",
                    credit: "London Tour"
                },
                {
                    text: "Anfield",
                    image: "https://images.unsplash.com/photo-1643796903573-68834ffadcb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    alt: "Photo of Anfield held by Liverpool FC Games",
                    credit: "Trung Tran"
                }
            ]
        }, // End 1 question

        { // Start 2 question
            id: 1,
            text: "Pick Some Food",
            answers : [
                {
                    text: "Tacos",
                    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    alt: "Photo of Tacos",
                    credit: "Krisztian Tabori"
                },
                {
                    text: "Pizza",
                    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    alt: "Photo of Pizza",
                    credit: "Ivan Torres"
                },
                {
                    text: "Burgers",
                    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
                    alt: "Photo of Burger",
                    credit: "amirali mirhashemian"
                },
                {
                    text: "Lasagna",
                    image: "https://plus.unsplash.com/premium_photo-1664472658489-8bb2cf572db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=942&q=80",
                    alt: "Photo of Lasagna",
                    credit: "Unsplash+"
                }
            ]
        }, // End 2 question


        { // Start 3 question
            id: 2,
            text: "Pick a car",
            answers: [
                {
                    text: "Honda Civic",
                    image: "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
                    alt: "Photo of Honda",
                    credit: "Harrison Fitts"
                },
                {
                    text: "Ford",
                    image: "https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    alt: "Photo of Ford",
                    credit: "Caleb White"
                },
                {
                    text: "Toyota",
                    image: "https://images.unsplash.com/flagged/photo-1564153296137-400b51e1ff6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
                    alt: "Photo of Toyota",
                    credit: "Xavier Rabasa"
                },
                {
                    text: "Tsuru",
                    image: "https://img.remediosdigitales.com/1d4c47/sp01470028-source/450_1000.jpg",
                    //image: "https://images.unsplash.com/photo-1607853203100-69829c08b88e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
                    alt: "Photo of Tsuru",
                    credit: "Martin Katler"
                }
            ]
        } // End 3 question
    ] 
        //End questions

       // Add questions to the questionDisplay
        questions.forEach((question)=>{
            //Creating and adding the div for each question
            const title_block = document.createElement('div')
            title_block.id = question.id
            title_block.classList.add('title-block')

            //Creating and adding h2 tag for each question in the div 'title-block'
            const titleHeading = document.createElement('h2')
            titleHeading.textContent = question.text
            title_block.append(titleHeading)
            questionDisplay.append(title_block)

            //Creating and adding answers for each question
            const answersBlock = document.createElement('div')
            answersBlock.id = question.id+"-answers"
            answersBlock.classList.add('answer-options')

            //Pushing each question in the array
            unansweredQuestions.push(question.id)

            //Populate answers options
            question.answers.forEach((answer)=>{
                const answerBlock= document.createElement('div')
                answerBlock.classList.add('answer-block')
                answerBlock.addEventListener('click',()=>handlerClick(question.id,answer.text))

                //Creating image atribute and eding attributes
                const answerImg = document.createElement('img')
                answerImg.setAttribute('src',answer.image)
                answerImg.setAttribute('alt',answer.alt)

                //Creating an heading for the title 
                const answerTitle = document.createElement('h3')
                answerTitle.textContent = answer.text

                const answerInfo = document.createElement('p')
                const imageLink = document.createElement('a')
                imageLink.setAttribute('href',answer.image)
                imageLink.textContent = answer.credit
                const sourceLink = document.createElement('a')
                sourceLink.textContent = 'Unsplash'
                sourceLink.setAttribute('href','https://unsplash.com/es')
                answerInfo.append(imageLink,' to ',sourceLink)

                answerBlock.append(answerImg,answerTitle,answerInfo)
                answersBlock.append(answerBlock)
            })

            questionDisplay.append(answersBlock); 
        })
}

const handlerClick = (questionId,chosenAnswer) => {
    //console.log(`${questionId} - ${chosenAnswer}`)
    if(unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const position = unansweredQuestions.indexOf(questionId)


    if(position > -1) //There is still element in the array
        unansweredQuestions.splice(position,1)

    
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestions(questionId,chosenAnswer)
    const lowestquestionId = Math.min(...unansweredQuestions)
    location.href = '#'+lowestquestionId

    if(!unansweredQuestions.length){
        //Scroll to answer DIV
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = ()=>{

    let result

    answersCombination.forEach((answer)=>{
        if(chosenAnswers.includes(answer.combination[0])
        && chosenAnswers.includes(answer.combination[1])
        && chosenAnswers.includes(answer.combination[2])){
            result = answer
        }
    })

    //Condition to sdee if the result is still undefined will give you the first option
    if(result === undefined){
        result = answersCombination[0]
    }

    //console.log(result)

    const answerBlock= document.createElement('div')
    answerBlock.classList.add('result-block')

    const answerTitle= document.createElement('h3')
    answerTitle.textContent = result.text

    const answerImage = document.createElement('img')
    answerImage.setAttribute('src',result.image)
    answerImage.setAttribute('alt',result.alt)

    answerBlock.append(answerTitle,answerImage)
    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock=> answerBlock.replaceWith(answerBlock.cloneNode(true)))

    setTimeout(()=>{
        location.href = './index.html'
    },5000)
}

const disableQuestions = (questionId,chosenAnswer)=>{
     const currentQuestionBlock = document.getElementById(questionId+'-answers')

     Array.from(currentQuestionBlock.children).forEach(blocks => {
        if(blocks.children.item(1).innerText !== chosenAnswer){
            blocks.style.opacity = '50%'
        }
     })
}
