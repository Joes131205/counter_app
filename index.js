// Variables to access the main divs
const pointsDiv = document.getElementById("points")
const sequenceDiv = document.getElementById("sequence")
const pointButtonDiv = document.getElementById("point-button")
const advancedModalDiv = document.getElementById("advanced-modal")

// Variables to access the paragraph elements
const currentPointParagraph = document.getElementById("point-current")
const sequencePointParagraph = document.getElementById("point-sequence")
const highestPointParagraph = document.getElementById("highest-point")
const lowestPointParagraph = document.getElementById("lowest-point")
const highestSequencePointParagraph = document.getElementById("highest-point-sequence")
const lowestSequencePointParagraph = document.getElementById("lowest-point-sequence")
const totalPointParagraph = document.getElementById("total-point")
const averagePointParagraph = document.getElementById("average-point")
const medianPointParagraph = document.getElementById("median-point")

// Buttons
const incrementButton = document.getElementById("incrementButton")
const decrementButton = document.getElementById("decrementButton")
const saveButton = document.getElementById("saveButton")
const deleteOnceButton = document.getElementById("deleteOnceButton")
const deleteAllButton = document.getElementById("deleteAllButton")
const saveSequenceButton = document.getElementById('saveSequenceButton')
const sequenceStorage = document.getElementById("sequence-storage")
const modalButton = document.getElementById("modalButton")
const modalClose = document.getElementById("modal-close")
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