import { get } from 'lodash';
import throttle from 'lodash.throttle';

const feedbackFormEmail = document.querySelector('.feedback-form')
const textArea = document.querySelector(".feedback-form textarea")
const emailData = document.querySelector(".feedback-form input")
const LOCAL_KEY = "feedback-form-state";

let formData = {};

feedbackFormEmail.addEventListener("input", throttle(onText, 500))
feedbackFormEmail.addEventListener("submit", onSubmite)



function onText(event){
    
    formData[event.target.name]=event.target.value
    let message = JSON.stringify(formData)
    localStorage.setItem(LOCAL_KEY, message)
    console.log(formData)
}

if(localStorage.getItem(LOCAL_KEY)){
    formData = JSON.parse(localStorage.getItem(LOCAL_KEY))
    textArea.value = formData.message || "";
    emailData.value = formData.email || "";
    console.log(formData)

}


function onSubmite(ev){
    ev.preventDefault();
ev.currentTarget.reset()
localStorage.removeItem(LOCAL_KEY)
}

