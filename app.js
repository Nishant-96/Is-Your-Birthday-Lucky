var birthDate = document.querySelector("#birth-date");              
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output-container");
var errorBox = document.querySelector("#error-box"); 


//processing
checkButton.addEventListener("click", checkIfLucky);

function checkIfLucky(){
    var dob=birthDate.value;
    var sum=calculateTheSumofDate(dob);
    errorBox.style.display = "none";            //hides error message box   
    outputBox.style.display = "none";           //hides output message box
    if(sum&&luckyNumber.value){
        if(sum%luckyNumber.value===0){
            outputBox.style.display = "block";  //showes output message box
            outputBox.innerText="Woah! You are Lucky...🤩";
        }else{
            outputBox.style.display = "block";  //showes output message box
            outputBox.innerText="Its better if you don't believe in luck...😢";
        }
    }else{
        errorBox.style.display = "block";       //shows error message box 
        errorBox.innerText="Please fillout both the fields."
    }
    
}

function calculateTheSumofDate(dob){
    dob=dob.replaceAll("-","");
    var sum=0;
    for(var i=0; i<dob.length;i++){
        sum=sum+ Number(dob.charAt(i));
    }
    return sum;
}