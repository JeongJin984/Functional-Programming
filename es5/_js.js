const _keys = (obj) => Object.keys(obj)

const each = (list, fn) => {
	var keys = _keys(list)
	for(var i = 0; i<list.length; i++) {
		fn(list[keys[i]])
	}
}

const filter = (list, predi) => {
	var new_list = [];
	each(list, (val) => predi(val) && new_list.push(val))
	return new_list
}

const map = (list, mapper) => {
	var new_list = [];
	each(list, (val) => new_list.push(mapper(val)))
	return new_list
}

const curry = (fn) => (
	x => y => fn(x, y)
)

const curryr = (fn) => (
	x => y => fn(y, x)
)

const get = curryr( (obj, key) => obj ? obj[key] : undefined )

module.exports = {
	filter, map, curry, curryr, get
}