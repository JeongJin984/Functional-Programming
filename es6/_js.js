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

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

const Lmap = function* (f, iter) {
	for(const a of iter) yield f(a)
}

const Lfilter = function* (f, iter) {
	for(const a of iter) {
		if(f(a)) yield a
	}
}

module.exports = {
	filter,
	map,
	go,
	reduce,
	pipe,
	curry,
	Lmap,
	Lfilter
}