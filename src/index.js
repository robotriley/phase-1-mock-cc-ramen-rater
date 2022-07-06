// write your code here
let form = document.querySelector('#new-ramen')
let newName = document.querySelector('#new-name')
let newRestaurant = document.querySelector('#new-restaurant')
let newImage = document.querySelector('#new-image')
let newComment = document.querySelector('#new-comment')
let ramenMenu = document.querySelector('#ramen-menu')

let entries = [newName, newRestaurant, newImage, newComment]


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let input = event.target.entries
    fetch(`http://localhost:3000/${ramens}`)
    .then(req => req.json())
    .then(data => console.log(data))
})