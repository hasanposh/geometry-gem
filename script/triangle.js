function calcTraingle(){
    // triiangle base
    const triangleBase  = document.getElementById('traingle-base')
    const triangleBaseText = triangleBase.value
    const base = parseFloat(triangleBaseText)
    console.log( base) 

    // triangle heiight
    const traingleHeight = document.getElementById('triangle-height')
    const traingleHeightText = traingleHeight.value
    const height = parseFloat(traingleHeightText)
    console.log(height)

    // formula
    const area = 0.5 * base * height;
    
    // show the area
    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText = area
}