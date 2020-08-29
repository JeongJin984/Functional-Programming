const filter = (f, iter) => {
	let res = []
	for(const a of iter) {
		if(f(a)) res.push(a)
	}
	return res
}

const map = (f, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(f(a))
	}
	return res
}

const reduce = (f, acc, iter) => {
	if(!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for(const a of iter) {
		acc = f(acc, a);
	}
	return acc
}

const go = (...args) => reduce((a, f) => f(a), args)

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)

module.exports = {
	filter,
	map,
	go,
	reduce,
	pipe
}