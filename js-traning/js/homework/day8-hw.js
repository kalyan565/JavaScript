const book = {
    title : "abc",
    author : "xyz",
    year : 2002,
    pages : 1000,

    summary() {
        return `${this.title} by ${this.author} (${this.year})`
    }
}

console.log(book["title"])
console.log(book.summary())

Object.entries(book).forEach(([key,value]) => {
   console.log(`${key} : ${value}`) 
});

console.log("------------------------------------------------------")
const obj = {...book};
obj.title = 'kal';


Object.entries(obj).forEach(([key,value]) => {
    console.log(`${key} : ${value}`) 
});

console.log("------------------------------------------------------")

Object.entries(book).forEach(([key,value]) => {
   console.log(`${key} : ${value}`) 
});