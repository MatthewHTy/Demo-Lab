let entry = document.querySelector(`form`);
    entry.addEventListener(`submit`, addIngredient);
const message = document.querySelector('#message')

// console.log("Hello World")

let inputField = document.querySelector('input');
function addIngredient(evt) {

    evt.preventDefault()

    const ingredient = document.createElement('li');
    const ingredientName = document.createElement('span');
    ingredientName.textContent = inputField.value;
    ingredient.appendChild(ingredientName);

    const deleteBtn = document.createElement('Button');
    deleteBtn.textContent = "x";
    ingredient.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", deleteIngredient);


    const list = document.querySelector('ul');
    list.appendChild(ingredient);
    inputField.value = "";

}

function deleteIngredient(event){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}
// document.querySelector(`form`).addEventListener("submit", addMovie);

function crossOffIngredient(evt){
    evt.target.classlist.toggle('checked');

    if (evt.target.classList.toggle('checked') === true) {
        message.textContent = evt.target.textContent + 'Ingredient used!'
    } else {
        message.textContent = evt.target.textContent + 'Ingredient added back!'
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove("hide");
    setTimeout( () => message.classList.add("hide"), 1000);
}