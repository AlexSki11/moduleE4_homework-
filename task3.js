console.log('Задание 3')

function create_obj_without_proto (obj) {
	return Object.create(null)
}

const obj_without_proto = create_obj_without_proto()
console.log(obj_without_proto)