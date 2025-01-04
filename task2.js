// Задание 2

console.log('Задание 2')
function check_key (name, obj) {
	return name in obj

}


const obj = {
	'1':0,
	0:1,
	'name':'Alex',
	five:5,

}

console.log("Проверка на наличие свойств с именем '1' и '0' ")
console.log(check_key('1', obj))
console.log(check_key(0, obj))
console.log(check_key('none', obj))



