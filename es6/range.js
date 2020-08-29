const _ = require('./_js')

const add = (a, b) => a + b

const range = l => {
	let i = -1;
	let res = [];
	while( ++i < l) {
		res.push(i)
	}
	return res;
};

var list = range(4);
console.log(list);
console.log(_.reduce(add, list));

const L = {};
L.range = function*(l) {
	let i = -1;
	while(++i < l) {
		yield i
	}
}

var list = L.range(4)
console.log(list);
console.log(_.reduce(add, list));

function test(name, time, f) {
	console.time(name);
	while(time--) f()
	console.timeEnd(name)
}

test('range', 10, () => _.reduce(add, range(1000000)))
test('range', 10, () => _.reduce(add, L.range(1000000)))