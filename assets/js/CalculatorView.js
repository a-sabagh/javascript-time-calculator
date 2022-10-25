import CalculatorLogic from './CalculatorLogic.js'

export default class CalculatorView {

	#time
	#timeString
	#timeArray
	#operator
	#calculatorLogic

	constructor(){
		this.#time = '-- : -- : --'
		this.#operator = null
		this.#timeString = ''
		this.#timeArray = new Array
		this.#calculatorLogic = new CalculatorLogic
	}

	getTime(){
		return this.#time
	}

	setTime(time){
		this.#time = time
		return this
	}

	updateScreen(content){
		document.getElementById('screen').innerHTML = content
	}
	

	handleNumber(event){
		event.preventDefault()
		let number = event.target.getAttribute('data-number')
		this.#timeString = `${this.#timeString}${number}`
		if(this.#operator){
			this.#calculatorLogic.addOperatorItem(this.#operator)
			this.#operator = null
		}
		let end = '------'.substr(0,parseInt(6-this.#timeString.length))
		let time = `${this.#timeString}${end}`
		let timeArr = this.#timeArray =  time.match(/.{1,2}/g)
		let timeScreen = timeArr.join(' : ')
		this.updateScreen(timeScreen)
	}

	handleOperator(event){
		event.preventDefault()
		this.#timeString = ''
		this.#operator = event.target.getAttribute('data-operator')
		if(this.#timeArray){
			this.#calculatorLogic.addTimeItem(this.#timeArray)
			this.#timeArray = null
		}
		let result = this.#calculatorLogic.calculate()
		if(result){
			this.updateScreen(result.join(' : '))
		}
	}

	handleEqual(event){
		event.preventDefault()
		if(undefined == this.#timeArray){
			return
		}
		this.#calculatorLogic.addTimeItem(this.#timeArray)
		let result = this.#calculatorLogic.calculate()
		this.#timeString = ''
		this.#timeArray = null
		this.updateScreen(result.join(' : '))
	}

	allClear(event){
		event.preventDefault()
		this.#calculatorLogic.clearList()
		this.clearCurrent(event)
	}

	clearCurrent(event){
		event.preventDefault()
		this.#timeString = ''
		this.#operator = ''
		this.#timeArray = new Array
		this.updateScreen(this.#time)
	}
}
