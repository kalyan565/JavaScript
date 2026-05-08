function safeDivide(a, b) {
    try {
        if(b===0) {
            throw "division by zero exception";
        } else {
            return a/b;
        }

    }catch(err) {
        console.log(err)
    }
}

console.log(safeDivide(4,2))
console.log(safeDivide(4,0))

class NotFoundError extends Error {
    constructor(messg) {
        super(messg)
        this.messg = "Not found error";
    }
}

function getUserById(id) {
    try {
    if(id != 1 && id !=2 && id!=3) {
        throw new NotFoundError("id sould be 1,2 or 3")
    } 
        return `User ${id} found`;
        } catch (err) {
            if(err instanceof NotFoundError) {
            console.log(err.message)
            }
    }
}

console.log(getUserById(1))
