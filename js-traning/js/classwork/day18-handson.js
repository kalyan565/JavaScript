// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");
// Promise.resolve().then(() => console.log("D"));


// //Task 2. 

// function delayLog(msg, ms, cb) {
// setTimeout(() => {
//      console.log(msg); cb(null); }, ms);
// }

// function delayLogPromise(msg, ms) {
// return new Promise((resolve, reject) => {
// delayLog(msg, ms, (err) => {
// if (err) reject(err);
// else resolve();
// });
// });
// }

// delayLogPromise("1", 300)
// .then(() => delayLogPromise("2", 200))
// .then(() => delayLogPromise("3", 100))
// .then(() => console.log("done"));
// // Logs: 1 (after 300ms), 2 (after 200ms more), 3 (after 100ms more), done


// // Fetch a single post using Promises
// function fetchPostWithPromise(postId) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(post => {
//       console.log('Post:', post.title);
//       console.log('Content:', post.body);
//     })
//     .catch(error => {
//       console.error('Error fetching post:', error.message);
//     });
// }

// fetchPostWithPromise(1);

// // Fetch user and their posts using Async/Await
// async function fetchUserWithPosts(userId) {
//   try {
//     // Fetch user data
//     const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     if (!userResponse.ok) throw new Error('User not found');
//     const user = await userResponse.json();
    
//     // Fetch user's posts
//     const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
//     const posts = await postsResponse.json();
    
//     console.log(`User: ${user.name} (${user.email})`);
//     console.log(`Number of posts: ${posts.length}`);
//     console.log('First post title:', posts[0]?.title);
    
//     return { user, posts };
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// fetchUserWithPosts(1);


console.log("-----------------------------------------------------------------")
fetch("https://jsonplaceholder.typicode.com/todos") 
.then(response => response.json())


function calSquare(numb, callback) {
    setTimeout(function() {
        if(typeof numb != 'number') {
            callback(new Error("number is expected"))
            return;
        }
        const  result = numb * numb
        callback(null, result)
    },1000)
}

calSquare('kalyan',(err,result) => {
    if(err) {
        console.log(err.message)
    } else {
    console.log(result)
    }
    })

