const loadAllDataSort = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => data.data.tools.sort((first, second) => first.published_in - second.published_in));
    

}

const loadAllData = () => {
    document.getElementById("spinner").classList.remove("d-none");
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => {
        document.getElementById("spinner").classList.add("d-none");
        showAllData(data.data.tools.slice(0,6))});
    

}
const showAllData = (data) => {
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
                <button onclick="showModalData('${data.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-target">
                    Details
                </button>
        </div>

        `
        container.appendChild(div);
    });
}

// show more button work

const showAllDataTogether = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data =>{ 
        showAllData(data.data.tools);
        document.getElementById('show-more').classList.add("d-none");
    });
    
}


// modal work
const showModalData = (id) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
    .then(res => res.json())
    .then(data => showModalDataDetails(data.data))
}


const showModalDataDetails =(value) => {
    const modalContainer =document.getElementById('modal-details');
    modalContainer.innerHTML="";
    const div = document.createElement('div');
    div.classList.add('modal-content');
    div.innerHTML = `
                            <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex flex-sm-column flex-lg-row">
                                <div class="left-side w-100 h-100 bg-danger-subtle p-4 rounded m-2">
                                    <h3 class="fs-5 fw-bold">${value.description}</h3>
                                    <div class="pricing d-flex flex-sm-column flex-lg-row justify-content-between ">
                                        <div class="price p-4 bg-white rounded m-2">
                                            <p class="text-success">${value.pricing[0].price ? value.pricing[0].price : "Free Of Cost"} <span>${value.pricing[0].plan ? value.pricing[0].plan : " "}</span></p>
                                        </div>
                                        <div class="price p-4 bg-white rounded m-2">
                                            <p class="text-primary">${value.pricing[1].price ? value.pricing[1].price : "Free Of Cost"} <span>${value.pricing[1].plan ? value.pricing[1].plan : " "}</span></p>
                                        </div>
                                        <div class="price p-4 bg-white rounded m-2">
                                            <p class="text-info">${value.pricing[2].price ? value.pricing[2].price : "Free Of Cost"} <span>${value.pricing[2].plan ? value.pricing[2].plan : "Enjoy!!! "}</span></p>
                                        </div>
                                        
                                    </div>

                                    <div class="features d-flex flex-sm-column flex-lg-row justify-content-between ">
                                        <div class="py-4 m-2">
                                            <h3 class="fs-5 fw-bold">Features</h3>
                                            <ul>
                                                <li>${value.features[1].feature_name ? value.features[1].feature_name : "No data Found"}</li>
                                                <li>${value.features[2].feature_name ? value.features[2].feature_name : "No data Found"}</li>
                                                <li>${value.features[3].feature_name ? value.features[3].feature_name : "No data Found"}</li>
                                            </ul>
                                        </div>
                                        <div class="py-4 m-2">
                                            <h3 class="fs-5 fw-bold">Integration</h3>
                                            <ul>
                                                <li>${value.integrations[0] ? value.integrations[0] : "No data found"}</li>
                                                <li>${value.integrations[1] ? value.integrations[1] : "No data found"}</li>
                                                <li>${value.integrations[2] ? value.integrations[2] : "No data found"}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-side w-100 m-2 h-100">
                                    <div class="card image p-2">
                                        <img class="img-fluid" src="${value.image_link[0]}" alt="...">
                                        <span class="badge text-bg-success">${value.accuracy.score ? value.accuracy.score + " % Accuracy" : "Accuracy not available"}</span>
                                        <div class="card-body text-center">
                                          <h3 class="fs-5 fw-bold">${value.input_output_examples[1].input}</h3>
                                          <p class="card-text">${value.input_output_examples[1].output ? value.input_output_examples[1].output : "No! Not Yet! Take a break!!!"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

    `
    modalContainer.appendChild(div);
}


loadAllData();
