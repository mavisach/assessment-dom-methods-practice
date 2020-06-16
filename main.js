const bodyElement = document.querySelector('body')

const buttonElement = document.createElement('button')
bodyElement.append(buttonElement)
buttonElement.append('hello')
buttonElement.addEventListener('click', function () {
    mainElement.remove()
})
const mainElement = document.createElement('main')
bodyElement.append(mainElement)

const scriptElement = document.createElement('script')
bodyElement.append(scriptElement)

const imageElement = document.createElement('img')
mainElement.append(imageElement)
imageElement.src = "https://i.pinimg.com/originals/de/5e/1d/de5e1de87303f59291f0197431f59c30.jpg"
imageElement.width = 300

const justElement = document.createElement('a')
mainElement.append(justElement)
justElement.href = 'https://www.gettyimages.com/photos/kente?mediatype=photography&phrase=kente&sort=mostpopular'
justElement.append('link to images')

const removeElementButton = document.createElement('button')
bodyElement.append(removeElementButton)
removeElementButton.addEventListener('click', function () {
    // get the value of user input
    // get hold of the first element of the page 
    // remove the selected element

})

const textInput = document.createElement('input')
bodyElement.append(textInput)
// textInput.addEventListener('click', function () {

// })

const addButton = document.createElement('button')
bodyElement.append(addButton)
addButton.addEventListener('click', function () {

    const divElement = document.createElement('div')
    bodyElement.append(divElement)
    // get value from user input
    // append the value to the div element
})









