let cards = document.querySelector(".cards");
const colorArr = ["maroon", "#628141", "#1B211A", "#8BAE66", "#F79A19", "red"];

async function fetchUser() {
    try {
        let rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
        let actualData = await rawData.json();
        console.log(actualData);
        let sum = "";
        actualData.forEach((el) => {
            let rnum = Math.floor(Math.random() * 5) + 1;
            sum += `<div style="color:white;background:conic-gradient(${colorArr[rnum]}, ${colorArr[colorArr.length % rnum]},${colorArr[rnum]})" class="card">
            <h1>ID: <span id="idNum"> ${el.id}</span></h1>
            <h3>Title : <span id="title"> ${el.title}</span></h3>
        </div>
        `;
        });

        cards.innerHTML = sum;
    } catch (error) {
        console.error(error);
    }
}

fetchUser();
