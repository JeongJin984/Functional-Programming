const reduce = (f, acc, iter) => {
	if(!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for(const a of iter) {
		console.log(a.toString())
		acc = f(acc, a);
	}
	return acc
}

const go = (...args) => () => reduce((a, f) => f(a), args)

console.log(go(
	0,
	a => a + 1,
	a => a + 10,
	a => a + 100
)()); 