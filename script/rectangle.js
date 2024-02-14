function rectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width')
    const widthInText = rectangleWidth.value;
    const width = parseFloat(widthInText)
    const rectangleLength = document.getElementById('rectangle-length')
    const length = parseFloat(rectangleLength.value)
    const area = length * width 
    document.getElementById('rectangle-area').innerText = area
    console.log(area)
 }