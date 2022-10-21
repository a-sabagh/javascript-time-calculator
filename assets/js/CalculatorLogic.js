export default class CalculatorLogic {
	
	#timeList
	#operatorList

	constructor(){
		this.#timeList = new Array
		this.#operatorList = new Array
	}

	addTimeItem(time){
		this.#timeList.push(time)
	}

	addOperatorItem(operator){
		this.#operatorList.push(operator)
	}

	clearList(){
		this.#timeList = new Array
		this.#operatorList = new Array
	}

	calculate(){
		if(0 == this.#operatorList.length){
			return null
		}
		let times = this.#timeList.slice()
		let result = times.shift()
		for(let i=0;i<times.length;i++){
			let operator = this.#operatorList[i]
			let item = times[i]
			result = this[operator](result,item)
		}
		return result
	}

	plus(x,y){
		let xSeconds = parseInt(this.getSeconds(x))
		let ySeconds = parseInt(this.getSeconds(y))
		return this.getTimeArray(xSeconds+ySeconds)
	}

	minus(x,y){
		let xSeconds = parseInt(this.getSeconds(x))
		let ySeconds = parseInt(this.getSeconds(y))
		return this.getTimeArray(parseInt(xSeconds-ySeconds))
	}

	getSeconds([hours,minutes,seconds]){
		let calculatedSeconds = parseInt(hours) * 60 * 60
		calculatedSeconds += parseInt(minutes) * 60
		calculatedSeconds += parseInt(seconds)
		return calculatedSeconds
	}

	getTimeArray(seconds){
		return [
			this.formatNumber(parseInt(seconds/(60*60))),
			this.formatNumber(parseInt(seconds/60)),
			this.formatNumber(parseInt(seconds%60)),
		]
	}
	
	formatNumber(number){
		return `0${number}`.substr(-2)
	}

}
