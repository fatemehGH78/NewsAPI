let url = "https://jsonplaceholder.typicode.com/posts";
let app = document.querySelector("#app");

async function getArticles(url) {
  let response = await fetch(url);
  let data = await response.json();
  data.forEach((post) => {
    app.innerHTML += ` 
    <article>
        <h2 class="h4">${post.title}</h2>
        <small class="badge badge-second">${post.userId}</small>
        <p>${post.body}</p>
        <hr>
    </article> `;
  });
}

getArticles(url);

