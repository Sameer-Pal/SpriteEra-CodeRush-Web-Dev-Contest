

function showsecndPage(){
    var p1 = document.getElementById('page1');
    var p2 = document.getElementById('page2');

    if (p1  && p2){
        p2.style.display = 'block';
        p1.style.display = 'none';
        startTimer(5,0);
    }
}
function startTimer(minutes,seconds) {
    var timerDisplay = document.getElementById('timer');

    var intervalId = setInterval(function() {
        if (minutes === 0 && seconds ===0) {
            clearInterval(intervalId);
            submitAnswers(); 
        } else {
                if (seconds === 0){
                    minutes--;
                    seconds=59;
                }
                else{
                    seconds--;
                }
        }
        timerDisplay.innerText = `${minutes}:${seconds <10 ? '0' : ''}${seconds}`;

    }, 1000);
}


function submitAnswers() 
{
    var p2 =  document.getElementById('page2');
    var p3 =  document.getElementById('page3');
    var timeTakenEle = document.getElementById('timeTaken');
    var usersAnswersElement = document.getElementById('userAnswers');

    if (p2 && p3 && timeTakenEle && usersAnswersElement){
        p2.style.display = 'none';
        p3.style.display = 'block';
    
    var timerElement = document.getElementById('timer');
    var timeTaken = 5*60 - parseInt(timerElement.innerText.split(':')[0]) * 60 - parseInt(timerElement.innerText.split(":")[1]);
    timeTakenEle.innerText = `${Math.floor(timeTaken / 60)} minutes and ${timeTaken % 60} seconds`;

    var userAnswers = "User's Answer: ";
    var  radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    radioButtons.forEach(function (radioButton) {
        userAnswers += `${radioButton.value}, `;
    });
    usersAnswersElement.innerText = userAnswers.slice(0,-2);
}
}