const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => showAllData(data.data.tools.slice(0,6)));
    

}
const showAllData = (data) => {
    // console.log(data.slice(0,6));
    const container = document.getElementById('cards');
    container.innerHTML="";
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML=`
        <img src="${data.image}" alt="">
            <h2 class= "fs-3 fw-bold">Features</h2>
            <ol>
                <li>${data.features[0]}</li>
                <li>${data.features[1]}</li>
                <li>${data.features[2]}</li>
            </ol>
        
        <div class="card-footer">
            <div class="left-section">
                <h2 class= "fs-3 fw-bold">${data.name}</h2>
                <p>Published Data: ${data.published_in}</p>
            </div>
            <div class="right-side">
                <button>Details</button>
            </div>
        </div>

    

        `
        container.appendChild(div);
    });
}


const showAllDataTogether = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data =>{ 
        showAllData(data.data.tools);
        document.getElementById('show-more').classList.add(d-none);
    });
    
}
// const allData =(data) => {
//     console.log(data);
// }

loadAllData();