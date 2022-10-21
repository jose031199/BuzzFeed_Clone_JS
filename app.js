//Inserting the question into the quiz

document.addEventListener('DOMContentLoaded',function(){
    displayQuestions();
})

function displayQuestions() {
    const questionDisplay = document.querySelector('#questions');

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
                    text: "Volskwagen",
                    image: "https://images.unsplash.com/photo-1607853203100-69829c08b88e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
                    alt: "Photo of Volskwagen",
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

            //Populate answers options
            question.answers.forEach((answer)=>{
                const answerBlock= document.createElement('div')
                answerBlock.classList.add('answer-block')
                answersBlock.addEventListener('click',handlerClick)

                //Creating image atribute and eding attributes
                const answerImg = document.createElement('img')
                answerImg.setAttribute('src',answer.image)
                answerImg.setAttribute('alt',answer.alt)

                

                answerBlock.append(answerImg)
            })

            questionDisplay.append(answersBlock); 
        })
}

function handlerClick(){
    console.log('Click')
}