console.log('Задание 4')

function Device (name, power) {
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

Device.prototype.getName = function(){
	return this.name
};

Device.prototype.getPower = function(){
	return this.power
};

Device.prototype.turnOn = function(){
	this.turn = true
};

Device.prototype.turnOff = function(){
	this.turn = false
};

Device.prototype.getTurn = function () {
	return this.turn
}


Device.prototype.getCategory = function(){
	if (!this.category) {
		if (power<300)
		this.category = 'small'
	else if (power < 1500) {
		this.category = 'middle'
	}
	else{
		this.category = 'big'
	}
	}

	return this.category
};

Device.prototype.checkExpense = function(voltage, amperage){
	return voltage*amperage 
};

function DeskLamp(name, power, model){
	this.name = name
	this.power = power
	this.model = model
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

DeskLamp.prototype = new Device()

DeskLamp.prototype.changeLamp = function(power){
	this.power = power
};

function Television (name,power,model,maker, os) {
	
	this.name = name
	this.power = power
	this.model = model
	this.maker = maker
	this.os = os
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

Television.prototype = new Device()

Television.prototype.changeOs = function(os){
	this.os = os
	
	};

const lamp = new DeskLamp('Лампа', 20, 'power3000')
const tv = new Television('Тв', 100, 'LG StanbyME Go 27LX5QKNA', 'LG', 'webOS 22')

console.log(lamp)
console.log(tv)

lamp.turnOn()
console.log(lamp.getTurn() ? lamp.getName() + ' Включена': lamp.getName() + ' Выключена')

