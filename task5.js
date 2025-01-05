console.log('Задание 5')

console.log('Задание 4')

class Device {
	constructor(name, power){
		this.name = name
		this.power = power
		this.turn = false

		if (power<300){
			this.category = 'small'
		}
		else if (power < 1500) {
			this.category = 'middle'
		}
		else{
			this.category = 'big'
		}
		}

	getName(){
		return this.name
	}

	getPower(){
		return this.power
	}

	turnOn(){
		this.turn = true
	}

	turnOff(){
		this.turn = false
	}

	getTurn(){
		return this.turn
	}

	getCategory(){
		if (!this.category) {
			if (power<300){
				this.category = 'small'
			}
			else if (power < 1500) {
				this.category = 'middle'
			}
			else{
				this.category = 'big'
			}
		}

		return this.category
	}

	checkExpense(voltage, amperage){
		return voltage*amperage 
	}
}



class DeskLamp extends Device{
	constructor(name, power, model){
		super(name,power);
		this.model = model
	}

	changeLamp(power){
		this.power = power
	}
}

class Television extends Device{
	constructor(name,power,model,maker, os){
		super(name,power)	

		this.model = model
		this.maker = maker
		this.os = os

	}

	changeOs(os){
		this.os = os
	}
}



const lamp = new DeskLamp('Лампа', 20, 'power3000')
const tv = new Television('Тв', 100, 'LG StanbyME Go 27LX5QKNA', 'LG', 'webOS 22')

console.log(lamp)
console.log(tv)

lamp.turnOn()
console.log(lamp.getTurn() ? lamp.getName() + ' Включена': lamp.getName() + ' Выключена')