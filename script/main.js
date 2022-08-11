const planets = document.querySelector('.planets');
const result = document.querySelector('.result');

planets.addEventListener('change', (event) => {
    fetch(`http://localhost:8000/planets/${event.target.value}`)
        .then(res => res.json())
        .then(data => result.innerHTML = `<h1>${data.name}</h1>
        <img src =${data.image} width="500" height="500" class=".embed-responsive-4by3">
        <div>number: ${data.number}</div>
        <div>radius: ${data.radius}<div>
        <div>mass: ${data.mass}<div>`)
});



















// const requestURL = 'http://localhost:8000/planets';

// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     }).then(response =>  {
//        if(response.ok){
//         return response.json()
//     }

//     return response.json().then(err =>{
//         const e = new Error('Щось пішло не так')
//         e.data = error
//         throw e
//         })
//     })
// }