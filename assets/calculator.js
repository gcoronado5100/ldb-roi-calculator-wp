// Formater methods

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3
})

const formatter2 = new Intl.NumberFormat('en-US');


// Variables
let industry = document.querySelector('#industrySelector').value

let dealSize = document.querySelector('#dealSize').value
document.querySelector('#dealSizeLabel').innerHTML = formatter.format(dealSize)

let prospects = document.querySelector('#prospects').value
document.querySelector('#prospectsLabel').innerHTML = formatter2.format(prospects)

let ratioLDB = document.querySelector('#ratioLDB').value
ratioLabel = document.querySelector('#ratioLabel').innerHTML = `${ratioLDB} %`


// Event listener

//Styles for the range fields
const onChangeRange = (target) => {
    const min = target.min
    const max = target.max
    const val = target.value
  
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

// Intialize the styles for the input fields type "Range"
onChangeRange(document.querySelector('#dealSize'))
onChangeRange(document.querySelector('#prospects'))
onChangeRange(document.querySelector('#ratioLDB'))



const onChangeIndustry = (e) => {
    industry = document.querySelector('#industrySelector').value
    calculatorLDB()
}

const onDealSizeChange = (e) => {
    dealSize = document.querySelector('#dealSize').value
    document.querySelector('#dealSizeLabel').innerHTML = formatter.format(dealSize)
    onChangeRange(document.querySelector('#dealSize'))
    calculatorLDB()
}

const onProspectsChange = (e) => {
    prospects = document.querySelector('#prospects').value
    document.querySelector('#prospectsLabel').innerHTML = formatter2.format(prospects)
    onChangeRange(document.querySelector('#prospects'))
    calculatorLDB()
}

const onRatioChange = (e) => {
    ratioLDB = document.querySelector('#ratioLDB').value
    ratioLabel = document.querySelector('#ratioLabel').innerHTML = `${ratioLDB} %`
    onChangeRange(document.querySelector('#ratioLDB'))  
    calculatorLDB()
}

const calculatorLDB = () =>{
    const approximate = Math.round(prospects * (industry / 1000))
    document.querySelector('#ldbApproximate').innerHTML = approximate
    const price = Math.round(approximate * (ratioLDB / 100) * dealSize * 12)
    document.querySelector('#ldbPrice').innerHTML = `${formatter.format(price)}/year`
    const spents = prospects * 3 * 12

    const roiValue = Math.round(((price - spents) / spents * 100))
    document.querySelector('#ldbROI').innerHTML = roiValue
}

calculatorLDB()

