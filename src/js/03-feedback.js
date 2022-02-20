import throttle from 'lodash.throttle';

const feedbackFormEmail = document.querySelector('.feedback-form')
const textArea = document.querySelector(".feedback-form textarea")
const emailData = document.querySelector(".feedback-form input")
const LOCAL_KEY = "feedback-form-state";

console.log((emailData))
const formData = {};

feedbackFormEmail.addEventListener("input", throttle(onText, 500))
feedbackFormEmail.addEventListener("submit", onSubmite)


function onText(event){

    formData[event.target.name]=event.target.value
    const message = JSON.stringify(formData)
    const saveMessage = localStorage.setItem(LOCAL_KEY, message);

}


function onSubmite(ev){
    ev.preventDefault();
ev.currentTarget.reset()
localStorage.removeItem(LOCAL_KEY)
}


function saveData(){
    const saveMessage = JSON.parse(localStorage.getItem(LOCAL_KEY))
    if(saveMessage){
        emailData.value = saveMessage.email || "";
        textArea.textContent = saveMessage.message || "";
    } 
}
saveData()



