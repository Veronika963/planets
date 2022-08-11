const preloader = document.querySelector('.preloader');
const planets = document.querySelector('.planets');
const result = document.querySelector('.result');

planets.addEventListener('change', (event) => {
    preloader.style.opacity = 100;
    fetch(`http://localhost:8000/planets/${event.target.value}`)
        .then(res => res.json())
        .then(data => {
            result.innerHTML = `<h1>${data.name}</h1>
        <img src =${data.image} width="500" height="500" class=".embed-responsive-4by3">
        <div>number: ${data.number}</div>
        <div>radius: ${data.radius}<div>
        <div>mass: ${data.mass}<div>`
        preloader.style.opacity = 0;
        })
});
