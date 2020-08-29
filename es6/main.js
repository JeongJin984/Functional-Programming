const iterable = {
	[Symbol.iterator]() {
		let i=3;
		return {
			next() {
				return i==0 ? {done: true} : {value: i--, done: false}
			},
			[Symbol.iterator]() { return this }
		}
	}
}

let iterator = iterable[Symbol.iterator]();

//for(const a of iterator) console.log(a);

function* Infinity(i=0) {
	while(true) yield i++
}

function* limit(l, iter) {
	for(const a of iter) {
		yield a
		if(a==l) return
	}
}

function* odds(l) {
	for(const a of limit(l, Infinity(1))) {
		if(a % 2) yield a
	}
}

function* number() {
	for(const a of Infinity(1))
		yield a
}

const iter = odds(10)

console.log(...iter)
