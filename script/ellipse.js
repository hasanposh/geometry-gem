function ellipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius')
    const minorRadius = getInputValueById('ellipse-minor-radius')
    area = 3.1416 * majorRadius * minorRadius
    setInnerTextById('ellipse-area', area)
    
}