// Variables to access the main divs
const pointsDiv = document.getElementById("points")
const sequenceDiv = document.getElementById("sequence")
const pointButtonDiv = document.getElementById("point-button")
const advancedModalDiv = document.getElementById("advanced-modal")

// Variables to access the paragraph elements
const currentPointParagraph = pointsDiv.querySelector("#point-current")
const sequencePointParagraph = sequenceDiv.querySelector("#point-sequence")
const highestPointParagraph = advancedModalDiv.querySelector("#highest-point")
const lowestPointParagraph = advancedModalDiv.querySelector("#lowest-point")
const highestSequencePointParagraph = advancedModalDiv.querySelector("#highest-point-sequence")
const lowestSequencePointParagraph = advancedModalDiv.querySelector("#lowest-point-sequence")
const totalPointParagraph = advancedModalDiv.querySelector("#total-point")
const averagePointParagraph = advancedModalDiv.querySelector("#average-point")
const medianPointParagraph = advancedModalDiv.querySelector("#median-point")

// Buttons
const incrementButton = pointButtonDiv.querySelector("#incrementButton")
const decrementButton = pointButtonDiv.querySelector("#decrementButton")
const saveButton = pointButtonDiv.querySelector("#saveButton")
const deleteOnceButton = pointButtonDiv.querySelector("#deleteOnceButton")
const deleteAllButton = pointButtonDiv.querySelector("#deleteAllButton")
const saveSequenceButton = document.querySelector('#saveSequenceButton')
const sequenceStorage = document.querySelector("#sequence-storage")

//Mechanic

let num = 0
let currentArray = []
let storageArray = []

function setText() {
    currentPointParagraph.textContent = num
}
window.addEventListener("load", function() {
    setText()
})

incrementButton.addEventListener("click", function() {
    num++
    setText()
})

decrementButton.addEventListener("click", function() {
    num--
    setText()
})

saveButton.addEventListener("click", function() {
    currentArray.push(num)
    sequencePointParagraph.textContent = currentArray.map(item => `${item}`).join(' | ');
    num = 0
    setText()
})

deleteOnceButton.addEventListener("click", function() {
    currentArray.pop() 
    sequencePointParagraph.textContent = currentArray.map(item => `${item}`).join(' | ');
})

saveSequenceButton.addEventListener("click", function() {
    storageArray.push(currentArray)
    sequenceStorage.innerHTML = storageArray.map(item => `<li>${item}</li>`)
})