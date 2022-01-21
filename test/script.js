//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const btn = document.getElementById("btn");
// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let selfAwareScore=0;
let manageEmoScore=0;
let motivateOneScore=0;
let empathyScore=0;
let socialSkillsScore=0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
	selfAwareScore=0;
	manageEmoScore=0;
	motivateOneScore=0;
	empathyScore=0;
	socialSkillsScore=0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.href="file:///C:/Users/himani.malakar/OneDrive%20-%20Accenture/SUD%20DOCS/techgarage/js/final/score.html";
 //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>'
	+ '<div class="option"><span>'+ questions[index].options[4] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
	console.log("length of options" +option.length);
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
	console.log (answer);
    let userAns = answer.textContent; //getting user selected option
    //let correcAns = questions[que_count].answer; //getting correct answer from array
	let topic = questions[que_count].topic;
	//let type =  questions[que_count].type;
    console.log("topic"  +topic);
	console.log("userAns"  +userAns);
	
		if(topic === "self awareness"){
		
		switch(userAns){
			case "Strongly disagree":
				selfAwareScore += 1;
				break;
			case "Somewhat disagree":
				selfAwareScore += 2;
				break;
			case "Neither agree nor disagree":
				selfAwareScore += 3;
				break;
			case "Somewhat agree":
				selfAwareScore += 4;
				break;
			case "Strongly agree":
				selfAwareScore += 5;
				break;
		}
		console.log("selfAwareScore"  +selfAwareScore);
		}
		
		if(topic === "managing emotions"){
			
		switch(userAns){
			case "Strongly disagree":
				manageEmoScore += 1;
				break;
			case "Somewhat disagree":
				manageEmoScore += 2;
				break;
			case "Neither agree nor disagree":
				manageEmoScore += 3;
				break;
			case "Somewhat agree":
				manageEmoScore += 4;
				break;
			case "Strongly agree":
				manageEmoScore += 5;
				break;
		}
		console.log("manageEmoScore"  +manageEmoScore);
		}
		
		if(topic === "motivating oneself"){
			
		switch(userAns){
			case "Strongly disagree":
				motivateOneScore += 1;
				break;
			case "Somewhat disagree":
				motivateOneScore += 2;
				break;
			case "Neither agree nor disagree":
				motivateOneScore += 3;
				break;
			case "Somewhat agree":
				motivateOneScore += 4;
				break;
			case "Strongly agree":
				motivateOneScore += 5;
				break;
		}
		console.log("motivateOneScore"  +motivateOneScore);
		}
		
		if(topic === "empathy"){
			
		switch(userAns){
			case "Strongly disagree":
				empathyScore += 1;
				break;
			case "Somewhat disagree":
				empathyScore += 2;
				break;
			case "Neither agree nor disagree":
				empathyScore += 3;
				break;
			case "Somewhat agree":
				empathyScore += 4;
				break;
			case "Strongly agree":
				empathyScore += 5;
				break;
		}
		console.log("empathyScore"  +empathyScore);
		}
		
		if(topic === "social skills"){
			
		switch(userAns){
			case "Strongly disagree":
				socialSkillsScore += 1;
				break;
			case "Somewhat disagree":
				socialSkillsScore += 2;
				break;
			case "Neither agree nor disagree":
				socialSkillsScore += 3;
				break;
			case "Somewhat agree":
				socialSkillsScore += 4;
				break;
			case "Strongly agree":
				socialSkillsScore += 5;
				break;
		}
		console.log("socialSkillsScore"  +socialSkillsScore);
		}
		
	
	
   
        answer.classList.add("correct"); //adding green color to correct selected option
 

  //      for(i=0; i < allOptions; i++){
  //          if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
  //              option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
  //            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                //console.log("Auto selected correct answer.");
  //          }
  //      }
    
	
	const allOptions = option_list.children.length; //getting all option items
	
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
	console.log("length of questions " +questions.length);
	console.log("que_count  que_count less than length -1 " +que_count);
	if(que_count < questions.length - 1) {
    next_btn.classList.add("show"); //show the next button if user selected any option
	}
	else {
		 btn.innerText = "Submit"
		 next_btn.classList.add("show");
	}
}
function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box

    const scoreText = result_box.querySelector(".score_text");
	const scoreText2 = result_box.querySelector(".score_text2");
	const scoreText3 = result_box.querySelector(".score_text3");
	const scoreText4 = result_box.querySelector(".score_text4");
	const scoreText5 = result_box.querySelector(".score_text5");
	console.log("selfAwareScore inside score function "  +selfAwareScore);
    /* if (selfAwareScore >= 35 && selfAwareScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span> Congrats! 🎉, You got <p>'+ selfAwareScore +' in the Self Awareness section. This area is a strength for you.</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(selfAwareScore >= 18 && selfAwareScore <= 34){ // if user scored more than 1
         let scoreTag = '<span> Good! 🎉, You got <p>'+ selfAwareScore +' in the Self Awareness section. Giving attention on self awareness will pay you dividends.</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span> Sorry 😐, You got only <p>'+ selfAwareScore +' in the Self Awareness section. You need developement in the self awareness section of the Emotional intelligence. Please make this a priority</p></span>';
        scoreText.innerHTML = scoreTag;
    }
	
	 if (manageEmoScore >= 35 && manageEmoScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span> Congrats! 🎉, You got <p>'+ manageEmoScore +' in the managing emotions section. This area is a strength for you.</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(manageEmoScore >= 18 && manageEmoScore <= 34){ // if user scored more than 1
         let scoreTag = '<span> Good! 🎉, You got <p>'+ manageEmoScore +' in the managing emotions section. Giving attention on managing emotions will pay you dividends.</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span> Sorry 😐, You got only <p>'+ manageEmoScore +' in the managing emotions section. You need developement in the managing emotions section of the Emotional intelligence. Please make this a priority</p></span>';
        scoreText.innerHTML = scoreTag;
    }
	
	if (motivateOneScore >= 35 && motivateOneScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span> Congrats! 🎉, You got <p>'+ motivateOneScore +' in the motivating oneself section. This area is a strength for you.</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(motivateOneScore >= 18 && motivateOneScore <= 34){ // if user scored more than 1
         let scoreTag = '<span> Good! 🎉, You got <p>'+ motivateOneScore +' in the motivating oneself section. Giving attention on motivating yourself will pay you dividends.</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span> Sorry 😐, You got only <p>'+ motivateOneScore +' in the motivating oneself section. You need developement in  motivating yourself. Please make this a priority</p></span>';
        scoreText.innerHTML = scoreTag;
    }
	
	if (empathyScore >= 35 && empathyScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span> Congrats! 🎉, You got <p>'+ empathyScore +' in the Empathy section. This area is a strength for you.</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(empathyScore >= 18 && empathyScore <= 34){ // if user scored more than 1
         let scoreTag = '<span> Good! 🎉, You got <p>'+ empathyScore +' in the Empathy section. Giving attention on Empathy will pay you dividends.</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span> Sorry 😐, You got only <p>'+ empathyScore +' in the Empathy section. You need developement in showing Empathy. Please make this a priority</p></span>';
        scoreText.innerHTML = scoreTag;
    }
	
	if (socialSkillsScore >= 35 && socialSkillsScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span> Congrats! 🎉, You got <p>'+ socialSkillsScore +' in the Social Skills section. This area is a strength for you.</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(socialSkillsScore >= 18 && socialSkillsScore <= 34){ // if user scored more than 1
         let scoreTag = '<span> Good! 🎉, You got <p>'+ socialSkillsScore +' in the Social Skills section. Giving attention on Social Skills will pay you dividends.</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = 'Sorry 😐, You got only <p>'+ socialSkillsScore +' in the Social Skills section. You need developement in the Social Skills. Please make this a priority</p>';
        scoreText.innerHTML = scoreTag;
    } */
	
	if (selfAwareScore >= 35 && selfAwareScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
		let scoreTag1 = '<span><p style="color:MediumSeaGreen;">Self Awareness Score:  '+ selfAwareScore +' (EQ Level: Excellent) </p> </span>';
        scoreText.innerHTML = scoreTag1;  //adding new span tag inside score_Text
    }
    else if(selfAwareScore >= 18 && selfAwareScore <= 34){ // if user scored more than 1
		let scoreTag1 = '<span><p style="color:Orange;">Self Awareness Score:  '+ selfAwareScore +' (EQ Level: Good) </p> </span>';
        scoreText.innerHTML = scoreTag1;
    }
    else{ // if user scored less than 1
        let scoreTag1 = '<span><p style="color:Tomato;">Self Awareness Score:  '+ selfAwareScore +' (EQ Level: Needs development) </p> </span>';
        scoreText.innerHTML = scoreTag1;
    }
	
	 if (manageEmoScore >= 35 && manageEmoScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
		let scoreTag2 = '<span><p style="color:MediumSeaGreen;">Managing Emotions Score: '+ manageEmoScore +' (EQ Level: Excellent) </p> </span>';
        scoreText2.innerHTML = scoreTag2;  //adding new span tag inside score_Text
    }
    else if(manageEmoScore >= 18 && manageEmoScore <= 34){ // if user scored more than 1
	let scoreTag2 = '<span><p style="color:Orange;">Managing Emotions Score: '+ manageEmoScore +' (EQ Level: Good) </p> </span>';
        scoreText2.innerHTML = scoreTag2;
    }
    else{ // if user scored less than 1
	 let scoreTag2 = '<span><p style="color:Tomato;">Managing Emotions Score:  '+ manageEmoScore +' (EQ Level: Needs development) </p> </span>';
        scoreText2.innerHTML = scoreTag2;
    }
	
	if (motivateOneScore >= 35 && motivateOneScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
		let scoreTag3 = '<span><p style="color:MediumSeaGreen;">Motivating Oneself Score: '+ motivateOneScore +' (EQ Level: Excellent) </p> </span>';
        scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text
    }
    else if(motivateOneScore >= 18 && motivateOneScore <= 34){ // if user scored more than 1
	let scoreTag3 = '<span><p style="color:Orange;">Motivating Oneself Score: '+ motivateOneScore +' (EQ Level: Good) </p> </span>';
        scoreText3.innerHTML = scoreTag3;
    }
    else{ // if user scored less than 1
	let scoreTag3 = '<span><p style="color:Tomato;">Motivating Oneself Score: '+ motivateOneScore +' (EQ Level: Needs development) </p> </span>';
        scoreText3.innerHTML = scoreTag3;
    }
	
	if (empathyScore >= 35 && empathyScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
		let scoreTag4 = '<span><p style="color:MediumSeaGreen;">Empathy Score: '+ empathyScore +' (EQ Level: Excellent) </p> </span>';
        scoreText4.innerHTML = scoreTag4;  //adding new span tag inside score_Text
    }
    else if(empathyScore >= 18 && empathyScore <= 34){ // if user scored more than 1
	let scoreTag4 = '<span><p style="color:Orange;">Empathy Score: '+ empathyScore +' (EQ Level: Good) </p> </span>';
        scoreText4.innerHTML = scoreTag4;
    }
    else{ // if user scored less than 1
	let scoreTag4 = '<span> <p style="color:Tomato;">Empathy Score: '+ empathyScore +' (EQ Level: Needs development)</p> </span>';
        
        scoreText4.innerHTML = scoreTag4;
    }
	
	if (socialSkillsScore >= 35 && socialSkillsScore <=50){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
       
	   let scoreTag5 = '<span><p style="color:MediumSeaGreen;">Social Skills Score '+ socialSkillsScore +' (EQ Level: Excellent) </p> </span>';
        scoreText5.innerHTML = scoreTag5;  //adding new span tag inside score_Text
    }
    else if(socialSkillsScore >= 18 && socialSkillsScore <= 34){ // if user scored more than 1
         let scoreTag5 = '<span><p style="color:Orange;">Social Skills Score '+ socialSkillsScore +' (EQ Level: Good) </p> </span>';
        scoreText5.innerHTML = scoreTag5;
    }
    else{ // if user scored less than 1
	let scoreTag5 = '<span><p style="color:Tomato;">Social Skills Score '+ socialSkillsScore +' (EQ Level: Needs development) </p> </span>';
        scoreText5.innerHTML = scoreTag5;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
           // let correcAns = questions[que_count].answer; //getting correct answer from array
            /* for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            } */
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
          if(que_count < questions.length - 1) {
    next_btn.classList.add("show"); //show the next button if user selected any option
	}
	else {
		 btn.innerText = "Submit"
		 next_btn.classList.add("show");
	} //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}