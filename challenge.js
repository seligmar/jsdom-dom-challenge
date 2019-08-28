const counter = document.querySelector('#counter')
var seconds = 0  
const addButton = document.querySelectorAll('button')[1] 
const removeButton = document.querySelectorAll('button')[0] 
const heartButton = document.querySelectorAll('button')[2] 
const pauseButton = document.querySelectorAll('button')[3] 
const list = document.querySelector('#list')
const form = document.querySelector('#comment-form')
const commentBox = document.querySelector('h3')


function onCounter() {
    seconds += 1;  
        counter.innerText = seconds 
}

form.addEventListener('submit', addComment)

document.addEventListener("DOMContentLoaded", function() {
    intervalAll = setInterval(onCounter, 1000) }) 

addButton.addEventListener('click', function() {
seconds = parseInt(counter.innerText) + 1 } )

removeButton.addEventListener('click', function() {
seconds = parseInt(counter.innerText) - 1 } )

heartButton.addEventListener('click', function() {
    console.log(seconds)})

pauseButton.addEventListener('click', function() {
    if (pauseButton.innerText === "pause") {
    pauseButton.innerText = "resume" 
    removeButton.disabled = true
    heartButton.disabled = true 
    addButton.disabled = true 
    clearInterval(intervalAll) }
    else { 
        pauseButton.innerText = "pause" 
        removeButton.disabled = false
        heartButton.disabled = false 
        addButton.disabled = false  
        setInterval(onCounter, 1000)
    } } ) 

    function createComment(text) {
        let li = document.createElement('li');
        li.innerText = text; 
        let buttonNew = document.createElement('button');
        buttonNew.innerText = "X";
        li.append(buttonNew);
        buttonNew.addEventListener('click', deleteComment);
        commentBox.append(li) 
    }

    function addComment(e) {
     e.preventDefault(); 
     createComment(form[0].value);
     form.reset();
    }

    function deleteComment(e) {
        e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
    }