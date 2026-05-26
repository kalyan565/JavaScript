function Range(from, to) {
    return {
        from,to,[Symbol.iterator]() {
            let cur = this.from;
            let end = this.to;
            return{
                next() {
                    if(cur <= end) {
                        return {
                            value: cur++,
                            done: false
                        }
                    }
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}
for(const n of Range(3,7)) {
    console.log(n);
}
console.log([...Range(1,3)])