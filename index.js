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
const modalButton = document.querySelector("#modalButton")
const modalClose = document.querySelector("#modal-close")
//Mechanic

let num = 0
let currentArray = []
let storageArray = []

function setText() {
    currentPointParagraph.textContent = num
}
window.addEventListener("load", function() {
    //TODO Add some kinf of save state
    setText()
})
function increment() {
    num++
    setText()
}

function decrement() {
    num--
    setText()
}
function updateModal() {
    let obj = {}

    for (let i = 0; i < currentArray.length; i++) {
        const current = currentArray[i]
        if (obj[current]) {
            obj[current]++
        } else {
            obj[current] = 1
        }
    }    
    let highestFrequency = 0
    let lowestFrequency = Infinity
    for (const key in obj) {
        const frequency = obj[key]
        if (frequency > highestFrequency) {
            highestFrequency = key
        } 
        if (frequency < lowestFrequency) {
            lowestFrequency = key
        }
    }
    const middlePoint = currentArray[Math.round((currentArray.length - 1) / 2)]
    const total = currentArray.reduce((acc, item) => acc + item)
    const highest = Math.max(...currentArray)
    const lowest = Math.min(...currentArray)
    const average = Math.floor(total / currentArray.length)
    medianPointParagraph.textContent = `Middle Num of Sequence = ${middlePoint}`
    totalPointParagraph.textContent = `Sum of Numbers = ${total}`
    highestPointParagraph.textContent = `Highest Number = ${highest}`
    lowestPointParagraph.textContent = `Lowest Number = ${lowest}`
    averagePointParagraph.textContent = `Average Sum = ${average}`
    highestSequencePointParagraph.textContent = `Most Frequent = ${highestFrequency}`
    lowestSequencePointParagraph.textContent = `Least Frequent = ${lowestFrequency}`
}
incrementButton.addEventListener("click", increment)
decrementButton.addEventListener("click", decrement)

saveButton.addEventListener("click", function() {
    currentArray.push(num)
    sequencePointParagraph.textContent = currentArray.map(item => `${item}`).join(' | ');
    num = 0
    setText()
    updateModal()
})

deleteOnceButton.addEventListener("click", function() {
    currentArray.pop() 
    sequencePointParagraph.textContent = currentArray.map(item => `${item}`).join(' | ');
})

saveSequenceButton.addEventListener("click", function() {
    if (currentArray.length !== 0) {
        storageArray.push(currentArray)
        currentArray = []
        num = 0
        setText()
        sequencePointParagraph.textContent = ""
        sequenceStorage.innerHTML = storageArray.map(item => `<li>${item}</li>`).join("")        
    }
})

deleteAllButton.addEventListener("click", function() {
    currentArray = []
    num = 0
    setText()
    sequencePointParagraph.textContent = ""
})

modalButton.addEventListener("click", function() {
    advancedModalDiv.style.display = "block"
})
modalClose.addEventListener("click", function() {
    advancedModalDiv.style.display = "none"
})