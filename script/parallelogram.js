
function calculateParallelogram(){
    // const baseParallelogram = document.getElementById('parallelogram-base')
    // const base = parseFloat(baseParallelogram.value)
    // console.log(base)
    const base = getInputValueById('parallelogram-base')
    const height = getInputValueById('parallelogram-height')
    // console.log(base,height)
    const area = base * height;
    console.log(area)
    setInnerTextById('parallelogram-area' , area)
    
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText)
    return inputValue;
    // console.log(inputValue)
    // const heightParallelogram = document.getElementById(inputValue)
    // const height = parseFloat(heightParallelogram.value)
    // console.log(height)
}

function setInnerTextById(elementId , area){
    const element = document.getElementById(elementId)
    const areaValue = element.innerText = area;
    return areaValue
}