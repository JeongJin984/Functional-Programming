const _ = require("./_js");

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

const take = (l, iter) => {
	let res = [];
	for(const a of iter) {
		res.push(a);
		if(res.length == l) return res
	}
	return res;
}

console.time('range')
console.log(take(5, range(100)));
console.timeEnd('range')
console.time('Lrange')
console.log(take(5, L.range(100)));
console.timeEnd('Lrange')

console.time('range')
console.log(_.go(
	range(10000),
	(iter) => take(5, iter),
	(iter) => _.reduce((a, b) => a + b, iter)
)); 
console.timeEnd('range')
console.time('Lrange')
console.log(_.go(
	L.range(10000),
	(iter) => take(5, iter),
	(iter) => _.reduce((a, b) => a + b, iter)
));
console.timeEnd('Lrange')
