/*  
   Assignment4
   Student: Xiaojing Li
   Student ID: 301144319
   Section: 006
   Date: 14/Mar/2021 
*/
 

//validate all fields
function validateAllFields() {
   var inputElements = document.querySelectorAll("#form input");
   var errorDivArray = document.querySelectorAll("#form p");
   var errorMsgArray = ["Please provide your first name","Please provide your last name",
                        "Please provide your address","Please provide your city","","","","","",""]
   var validFieldsCount = 0;
   var isAllErrorClear = true;
   
   //check if each field has input
   for (var i = 0; i < inputElements.length  - 2; i++) {
      if (inputElements[i].value !== "") {
         inputElements[i].style.background = "";
         errorDivArray[i].innerHTML = "";
         validFieldsCount++;
      } 
      else {
         inputElements[i].style.background = "rgb(255,233,233)";
         errorDivArray[i].style.display = "block";
         errorDivArray[i].innerHTML = errorMsgArray[i];
         
      }
   }
   //check validation of specific fields
   validatePostalCode();
   validateProvince();
   validateAge();
   validatePassword();
   validateEmail();

   //check if all errors cleared
   for(var i = 0; i < inputElements.length  - 2; i++){
      if(errorDivArray[i].innerHTML != ""){
         isAllErrorClear = false;
         break;
      }
      else{
         isAllErrorClear = true;
      }
   }
   if(validFieldsCount == 10 && isAllErrorClear == true){
      window.alert("Thanks for registering with our website, your customer record was created successfully.");
   }
      
}

//validate postal code 
function validatePostalCode(){
   var postalCodeInput = document.getElementById("postalCode");
   var postalCodeErrorDiv = document.getElementById("postalCodeError");
   var postalCodeCheck = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
   try {
      if (postalCodeCheck.test(postalCodeInput.value) === false) {
         throw "Postal code has to be in the a0a0a0 format. e.g. L1A2S3";
      }
      postalCodeInput.style.background = "";
      postalCodeErrorDiv.innerHTML = "";
      postalCodeErrorDiv.style.display = "none";
   }
   catch(msg) {
      postalCodeErrorDiv.innerHTML = msg;
      postalCodeErrorDiv.style.display = "block";
      postalCodeInput.style.background = "rgb(255,233,233)";
   }

}

//validate province
function validateProvince(){
   var provinceInput = document.getElementById("province");
   var provinceValiditon = true;
   var provinceArray = ["QC", "ON", "MN", "SK", "AB", "BC"];
   var provinceErrorDiv = document.getElementById("provinceError");

   provinceInput.value = provinceInput.value.toUpperCase();
   for(var i = 0; i < provinceArray.length; i++){
      if(provinceInput.value == provinceArray[i]){
         provinceValiditon = true;
         break;
      }
      else{
         provinceValiditon = false;
      }   
   }
   try {
      if (provinceValiditon == false) {
         throw "Province should be either QC or ON or MN or SK or AB or BC";
      }
      provinceInput.style.background = "";
      provinceErrorDiv.innerHTML = "";
      provinceErrorDiv.style.display = "none";
   }
   catch(msg) {
      provinceErrorDiv.innerHTML = msg;
      provinceErrorDiv.style.display = "block";
      provinceInput.style.background = "rgb(255,233,233)";
   }
}

//validate age
function validateAge(){
   var ageInput = document.getElementById("age");
   var ageErrorDiv = document.getElementById("ageError");
   try {
      if (ageInput.value < 18) {
         throw "Age has to be at least 18 yrs. old";
      }
      ageInput.style.background = "";
      ageErrorDiv.innerHTML = "";
      ageErrorDiv.style.display = "none";
   }
   catch(msg) {
      ageErrorDiv.innerHTML = msg;
      ageErrorDiv.style.display = "block";
      ageInput.style.background = "rgb(255,233,233)";
   }
}

// validate entered password
function validatePassword() {
   var pw1Input = document.getElementById("password");
   var pw2Input = document.getElementById("passwordConfirm");
   var passwdErrorDiv = document.getElementById("passwordError");
   try {
      if (/.{6,}/.test(pw1Input.value) === false) {
         throw "Password must be at least 6 characters";
      } 
      else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
         throw "Passwords must match";
      } 
      else if (/[A-Z]/.test(pw1Input.value) === false) {
         throw "Password must contain at least one upper-case character";
      } 
      else if (/\d/.test(pw1Input.value) === false) {
         throw "Password must contain at least one number";
      } 
   // remove any password error styling and message
   pw1Input.style.background = "";
   pw2Input.style.background = "";
   passwdErrorDiv.style.display = "none";
   passwdErrorDiv.innerHTML = "";
   }
   catch(msg) {
      // display error message
      passwdErrorDiv.style.display = "block";
      passwdErrorDiv.innerHTML = msg;
      // change input style
      pw1Input.style.background = "rgb(255,233,233)";
      pw2Input.style.background = "rgb(255,233,233)";      
   }
}


// validate entered email
function validateEmail() {
var emailInput = document.getElementById("emailbox");
var emailErrorDiv = document.getElementById("emailError");
var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
   try {
      if (emailCheck.test(emailInput.value) === false) {
         throw "Please provide a valid email address";
      }
      // remove any email error styling and message
      emailInput.style.background = "";
      emailErrorDiv.innerHTML = "";
      emailErrorDiv.style.display = "none";
      // convert email address to lowercase
      emailInput.value = emailInput.value.toLowerCase();
   }
   catch(msg) {
      // display error message
      emailErrorDiv.innerHTML = msg;
      emailErrorDiv.style.display = "block";
      // change input style
      emailInput.style.background = "rgb(255,233,233)";
   }
}

//clear all inputs and all error messages
function clearForm(){
   var inputElements = document.querySelectorAll("#form input");
   var errorDivArray = document.querySelectorAll("#form p");
   for(var i = 0; i < inputElements.length - 2; i++){
      inputElements[i].style.background = "";
      errorDivArray[i].innerHTML = "";
      errorDivArray[i].style.display = "none";
   }
}

var submit = document.getElementById("submit");
if (submit.addEventListener){
   submit.addEventListener("click", validateAllFields, false);
} else if (submit.attachEvent){
   submit.attachEvent("onclick", validateAllFields);
}

var submit = document.getElementById("clearForm");
if (submit.addEventListener){
   submit.addEventListener("click", clearForm, false);
} else if (submit.attachEvent){
   submit.attachEvent("onclick", clearForm);
}



