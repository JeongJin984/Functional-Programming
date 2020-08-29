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

const L = {};
L.range = function*(l) {
	let i = -1;
	while(++i < l) {
		yield i
	}
}

const take = _.curry((l, iter) => {
	let res = [];
	for(const a of iter) {
		res.push(a);
		if(res.length == l) return res
	}
	return res;
})

const map = _.curry(_.map)
const filter = _.curry(_.filter)

const Lmap = _.curry(_.Lmap)
const Lfilter = _.curry(_.Lfilter)

console.log(_.go(
	range(10),
	map(n => n + 10),
	filter(n => n % 2),
	take(2)
));

console.log(_.go(
	L.range(10),
	Lmap(n => n + 10),
	Lfilter(n => n % 2),
	take(2)
));