// Formater methods
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3
})

const formatter2 = new Intl.NumberFormat('en-US');


//Styles for the range fields
const onChangeRange = (target) => {
    const min = target.min
    const max = target.max
    const val = target.value
  
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}


//Initial Values 
let industryValue = document.querySelector('.industrySelector').value
let dealSizeValue = document.querySelector('.dealSize').value
let prospectsValue = document.querySelector('.prospects').value
let ratioLDBValue = document.querySelector('.ratioLDB').value
let approximate 
let price 
let spents 
let roiValue

// Create multiples Instances
let allCalculators = document.querySelectorAll('.calculator__container');


/**
 * Methods
 */

const calculatorLDB = () =>{
    approximate = Math.round(prospectsValue * (industryValue / 1000))
    price = Math.round(approximate * (ratioLDBValue / 100) * dealSizeValue * 12)
    spents = prospectsValue * 3 * 12
    roiValue = Math.round(((price - spents) / spents * 100))
}

// Update values to all instances
const updateCalculations = (item) => {
    // Variables for each instance - Labels
    let dealSizeLabel = item.querySelector('.dealSizeLabel')
    let prospectsLabel = item.querySelector('.prospectsLabel')
    let ratioLabel = item.querySelector('.ratioLabel')
    let ldbPrice = item.querySelector('.ldbPrice')
    let ldbApproximate = item.querySelector('.ldbApproximate')
    let ldbROI = item.querySelector('.ldbROI')

    calculatorLDB()

    dealSizeLabel.innerHTML = dealSizeValue
    prospectsLabel.innerHTML = prospectsValue
    ratioLabel.innerHTML = ratioLDBValue   
    ldbPrice.innerHTML = price
    ldbApproximate.innerHTML = approximate
    ldbROI.innerHTML = roiValue 
}

allCalculators.forEach( calculator => updateCalculations(calculator) )


const onChangeIndustry = (e) => {
    industryValue = e.target.value
    allCalculators.forEach( calculator => {
        calculator.querySelector('#industrySelector').value = industryValue
        updateCalculations(calculator)
    })
}

const onDealSizeChange = (e) => {
    dealSizeValue = e.target.value
    // onChangeRange(e.target)
    allCalculators.forEach( calculator => {
        calculator.querySelector('.dealSize').value = dealSizeValue
        updateCalculations(calculator)
        onChangeRange(calculator.querySelector('.ratioLDB'))
    })

}

const onProspectsChange = (e) => {
    prospectsValue = e.target.value
    allCalculators.forEach( calculator => {
        calculator.querySelector('.prospects').value = prospectsValue
        updateCalculations(calculator)
        onChangeRange(calculator.querySelector('.ratioLDB'))
    })
}

const onRatioChange = (e) => {
    ratioLDBValue = e.target.value
    allCalculators.forEach( calculator => {
        calculator.querySelector('.ratioLDB').value = ratioLDBValue
        updateCalculations(calculator)
        onChangeRange(calculator.querySelector('.ratioLDB'))
    })  
}


