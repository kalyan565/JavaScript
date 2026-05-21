// const ids = [1, 2, 3];

// // BUG — finishes before any fetch completes
// async function bug() {
//   console.log("start");
//   ids.forEach(async (id) => {
//     const p = await fetchProduct(id);     // Promise returned but ignored by forEach
//     console.log("got", p);
//   });
//   console.log("end");                     // logs BEFORE any "got"
// }

// // FIX 1 — for...of (sequential)
// async function sequential() {
//   console.log("start");
//   for (const id of ids) {
//     const p = await fetchProduct(id);
//     console.log("got", p);
//   }
//   console.log("end");                     // logs AFTER all "got"
// }

// // FIX 2 — Promise.all + map (parallel, preferred)
// async function parallel() {
//   console.log("start");
//   const results = await Promise.all(
//     ids.map((id) => fetchProduct(id)),    // each returns a Promise; map collects them
//   );
//   results.forEach((p) => console.log("got", p));
//   console.log("end");
// }

// bug();
// sequential();
// parallel();


fetchUser(7).
    then(u => fetchOrders(u.id)).
    then(orders => console.log(orders.length)).
    catch(e => console.error(e))

function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: id, name:"kalyan"});
        }, 300)
    })
}

function fecthOrders(userID) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve([
                {orderId : 101},
                {orderId : 102},
                {orderId : 103}
            ]);
        },300)
    });
}

async function fetchOrders(userId) {
    try {
        const user = await fetchUser(id);
        const orders = await fetchOrders(user.id);
        console.log(orders.length)
    } catch(e) {
        console.error(e);
    }
}
showOrders(7);