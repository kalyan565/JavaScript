const fruits = ["apple","banana","orange"]
for(let f of fruits) {
    console.log(f);
}

const name = "kalyan";
for(let i =0; i<name.length;i++) {
    console.log(name[i]);
}

const student = {name: "Anaya",age:21,city:"Jaipur",course:"B.Tech"};
const keys = Object.keys(student);
for(let k=0;k<keys.length;k++) {
    console.log(keys[k]," : ",student[keys[[k]]]);
}

let val= 7
for(let i=1;i<=10;i++) {
    console.log(`${val} * ${i} = ${val*i}`);
}