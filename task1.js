function check_obj (obj) {
	
	for (let key in obj){
		if (obj.hasOwnProperty(key))
			console.log(`Ключ - ${key}, значение - ${obj[key]}`)

	}

}

const obj = {'1':0, '2':1}
console.log(obj)
check_obj(obj)

const obj2 = Object.create(obj)

obj2['3'] = 2
console.log(obj2)
check_obj(obj2)