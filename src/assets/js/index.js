import CalculatorView from './CalculatorView.js'

window.calculatorObject = new CalculatorView

window.onload = (event) => {
	calculatorObject.updateScreen(calculatorObject.getTime())
}
