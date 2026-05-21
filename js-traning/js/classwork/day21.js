// 

const user = {
    name: "Priya",
    age: 25,
  address: {
    city: "Jaipur",
    pin: 302001,
    place: { area: "xyz",zip: 123 }
  },
  hobbies: ["reading", "trekking"]
};

const u2 = {
    ...user,
    address: {
        ...user.address,
        place: {
            ...user.address.place, area : "abc"
        }
    }
}
console.log(u2.address.place.area)