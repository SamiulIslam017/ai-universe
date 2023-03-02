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
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ol>
        <hr>
        <div class="card-footer">
            <div class="left-section">
                <h2>h</h2>
                <p>j</p>
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