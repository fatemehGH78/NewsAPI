
const onload = document.querySelector('body');
function retrieve(){
    
    let url = 'https://newsapi.org/v2/everything?q=iran&apiKey=a51c33b53780474ebc44a0ec6cfeb009'

    fetch(url).then(res=>res.json())
        
    .then(data=>{
        console.log(data)

        document.getElementById('img-item1').src = data.articles[0].urlToImage
        document.getElementById('img-item2').src = data.articles[1].urlToImage
        document.getElementById('img-item3').src = data.articles[2].urlToImage
        document.getElementById('img-item4').src = data.articles[3].urlToImage
        document.getElementById('img-item5').src = data.articles[4].urlToImage
        document.getElementById('img-item6').src = data.articles[5].urlToImage
        document.getElementById('img-item7').src = data.articles[6].urlToImage
        document.getElementById('img-item8').src = data.articles[7].urlToImage
        document.getElementById('img-item9').src = data.articles[8].urlToImage
        document.getElementById('img-item10').src = data.articles[9].urlToImage
        document.getElementById('img-item11').src = data.articles[10].urlToImage
        document.getElementById('img-item12').src = data.articles[11].urlToImage

        document.getElementById('p-item1').innerHTML = data.articles[0].title
        document.getElementById('p-item2').innerHTML = data.articles[1].title
        document.getElementById('p-item3').innerHTML = data.articles[2].title
        document.getElementById('p-item4').innerHTML = data.articles[3].title
        document.getElementById('p-item5').innerHTML = data.articles[4].title
        document.getElementById('p-item6').innerHTML = data.articles[5].title
        document.getElementById('p-item7').innerHTML = data.articles[6].title
        document.getElementById('p-item8').innerHTML = data.articles[7].title
        document.getElementById('p-item9').innerHTML = data.articles[8].title
        document.getElementById('p-item10').innerHTML = data.articles[9].title
        document.getElementById('p-item11').innerHTML = data.articles[10].title
        document.getElementById('p-item12').innerHTML = data.articles[11].title


        document.getElementById('a-item1').href = data.articles[0].url
        document.getElementById('a-item2').href = data.articles[1].url
        document.getElementById('a-item3').href = data.articles[2].url
        document.getElementById('a-item4').href = data.articles[3].url
        document.getElementById('a-item5').href = data.articles[4].url
        document.getElementById('a-item6').href = data.articles[5].url
        document.getElementById('a-item7').href = data.articles[6].url
        document.getElementById('a-item8').href = data.articles[7].url
        document.getElementById('a-item9').href = data.articles[8].url
        document.getElementById('a-item10').href = data.articles[9].url
        document.getElementById('a-item11').href = data.articles[10].url
        document.getElementById('a-item12').href = data.articles[11].url



    })

    
}






// { <div class="card " >
// <div class="card-body">
// <img class="card-img-top" src="" alt="">${post.urlToImage}
// <h2>${post.name}</h2>
// <div class="card-text">
// <p>${post.description}</p>
// </div>
// </div>
// </div> }