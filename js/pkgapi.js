const getbtn = document.querySelector('#get-btn')

const sendhttprequest = (method , url , ) =>{
    return fetch((url) 
    .then(res =>{
        return res.json()
    })
}
const getData = ()=>{

    sendhttprequest('GET', 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-02&sortBy=publishedAt&apiKey=a51c33b53780474ebc44a0ec6cfeb009' )
    .then(resData=>{
        console.log(resData)
    })
}

getbtn.addEventListener('click',getData)





//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res=> {
//     return res.json()
//   })
//   .then(resData=>{
//     console.log(resData)
//   })








// const url='https://newsapi.org/v2/everything?q=tesla&from=2022-08-02&sortBy=publishedAt&apiKey=a51c33b53780474ebc44a0ec6cfeb009'

// async function getnews(){
//     await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a51c33b53780474ebc44a0ec6cfeb009')
//     .then(res=>res.json())
//     .then(response => {
//       console.log(response.results)
//       for(var i=0;i<response.results.lenght;i++){
//         console.log(response.results[i].title)
//         const output = document.getElementById('output')
  
//         try{
//        output.innerHTML +=
//   `    <div class="card " >
//        <div class="card-body">
//        <img class="card-img-top" src="${response.results[i]['media'][0]['media-metadata'][2].url}" alt="${response.results[i]['media'][0].caption}">
//        <h2>${response.results[i].title}</h2>
//        <div class="card-text">
//        <p>${response.results[i].abstract}</p>
//   </div>
//       </div>
//       </div>
//   `
//         }
//         catch(err){
//           console.log(err)
//         }
//        }
//     })
//   }
  
//   getnews()