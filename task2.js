function check_key (name, obj) {
	
	for (key in obj){
		if (name === key){
			return true
		}

	}
	return false

}

const obj = {
	'1':0,
	0:1,
	'name':Alex,
	five:5,

}

check_key('1', obj)
check_key('0', obj)
check_key(five, obj)