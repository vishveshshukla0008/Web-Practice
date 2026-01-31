// console.log("Hey 1")
// console.log("Hey 2")
// console.log("Hey 3")
// 
// setTimeout(() => {
//     console.log("Hey 4")
// }, 1000);
// 
// console.log("Hey 5")

// 
// function kuchDerBadChalunga(fnc) {
//     setTimeout(() => {
//         fnc()
//     }, 3000);
// }
// 
// kuchDerBadChalunga(function () {
//     console.log("Hii")
// })

// parameter is fnc :
// argument is function(){console.log("hii")}



// Synchronous -> Aisa code jo line by line execute ho that is synchronous code.
// Asycnhronous -> Aisa code jo jab chalne ke liye ready ho jai tab execute ho that is Asynchronous code .




let details = [{ _id: 121212, username: "Yash", city: "Lakhimpur Kheri", posts: [{ description: "Hello World" }, { description: "Hey This post is very nice !" }] }]

//Callbacks :

function profileLekarAao(username, cb) {
    setTimeout(() => {
        let dets = details.find((el) => el.username === username);
        cb(dets)
    }, 2000);
}

function sarepostslekaraao(id, cb) {
    setTimeout(() => {
        let allPosts = details.find(el => el._id === id).posts;
        cb(allPosts);
    }, 2000);
}

profileLekarAao("Yash", function (dets) {
    // console.log(dets)
    sarepostslekaraao(dets._id, function (posts) {
        console.log(posts);
    })
})

// console.log("Hello")