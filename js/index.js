const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => showAllData(data.data));

}
const showAllData = (data) => {
    data.tools.slice(0,6).forEach(data => {
        const cards = document.getElementById('cards');
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <img src="${data.image}">
        <h2>Features</h2>
        <ol>
            <li>${data.features[0]}</li>
            <li>${data.features[1]}</li>
            <li>${data.features[2]}</li>
        </ol>
        <hr>
        <div class="card-footer">
            <div class="left-section">
                <h2>${data.name}</h2>
                <p>Published-date : ${data.published_in}</p>
            </div>
            <div class="right-side">
                <button>Details</button>
            </div>
        </div>
        `
        cards.appendChild(div);
        console.log(data);
    });
}
loadAllData();