const loadAllData = () => {
  document.getElementById("spinner").classList.remove("d-none");
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("spinner").classList.add("d-none");
      showAllData(data.data.tools.slice(0, 6));
    });
};
const showAllData = (data) => {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  data.forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
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

        `;
    container.appendChild(div);
  });
};

// show more button work

const showAllDataTogether = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      showAllData(data.data.tools);
      sortingdata(data.data.tools);

      document.getElementById("show-more").classList.add("d-none");
    });
};

const sortingdata = (data) => {
  consol.log(data);
};

// modal work
const showModalData = (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showModalDataDetails(data.data));
};

const showModalDataDetails = (value) => {
  const accuracy = document.getElementById("accuracy");
  const modalContainer = document.getElementById("modal-details");
  modalContainer.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("modal-content");

  div.innerHTML = `
                            <div class="modal-header">
                            <button class="text-white" type="button" data-bs-dismiss="modal" aria-label="Close"> Close Modal <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6585 4.92888C18.049 4.53836 18.6822 4.53835 19.0727 4.92888C19.4632 5.3194 19.4632 5.95257 19.0727 6.34309L13.4158 12L19.0727 17.6568C19.4632 18.0473 19.4632 18.6805 19.0727 19.071C18.6822 19.4615 18.049 19.4615 17.6585 19.071L12.0016 13.4142L6.34481 19.071C6.3387 19.0771 6.33254 19.0831 6.32632 19.089C5.93455 19.4614 5.31501 19.4554 4.93059 19.071C4.6377 18.7781 4.56447 18.3487 4.71092 17.9876C4.75973 17.8672 4.83296 17.7544 4.93059 17.6568L10.5874 12L4.93059 6.34314C4.54006 5.95262 4.54006 5.31945 4.93059 4.92893C5.32111 4.5384 5.95428 4.5384 6.3448 4.92893L12.0016 10.5857L17.6585 4.92888Z" fill="white"/>
                            </svg></button>
                            </div>
                            <div class="modal-body d-flex flex-column flex-sm-column flex-md-row px-5 py-4">
                                <div class="left-side w-100 h-100 bg-danger-subtle p-4 rounded m-2">
                                    <h3 class="fs-5 fw-bold">${
                                      value.description === null
                                        ? "Description not Available"
                                        : value.description
                                    }</h3>
                                    <div class="pricing d-flex flex-column flex-sm-column flex-md-row justify-content-between ">
                                        <div class="price p-4 bg-white rounded m-2">
                                            <p class="text-success fw-bold">${
                                              value.pricing === null
                                                ? "Free Of Cost"
                                                : value.pricing[0].price
                                            } <span>${
    value.pricing === null ? " " : value.pricing[0].plan
  }</span></p>
                                        </div>
                                        <div class="price p-4 bg-white rounded m-2">
                                            <p class="text-primary fw-bold">${
                                              value.pricing === null
                                                ? "Free Of Cost"
                                                : value.pricing[1].price
                                            } <span>${
    value.pricing === null ? " " : value.pricing[1].plan
  }</span></p>
                                        </div>
                                        <div class="price p-4 bg-white rounded m-2">
                                            <p class="text-info fw-bold">${
                                              value.pricing === null
                                                ? "Free Of Cost"
                                                : value.pricing[2].price
                                            } <span>${
    value.pricing === null ? " " : value.pricing[2].plan
  }</span></p>
                                        </div>
                                        
                                    </div>

                                    <div class="features d-flex flex-wrap flex-sm-column flex-lg-row justify-content-between ">
                                        <div class="py-4 m-2">
                                            <h3 class="fs-5 fw-bold">Features</h3>
                                            <ul style="list-style:none; padding-left:.8em;">
                                                <li class="mb-1">${
                                                  value.features[1].feature_name
                                                    ? value.features[1]
                                                        .feature_name
                                                    : "No data Found"
                                                }</li>
                                                <li class="mb-1">${
                                                  value.features[2].feature_name
                                                    ? value.features[2]
                                                        .feature_name
                                                    : "No data Found"
                                                }</li>
                                                <li class="mb-1">${
                                                  value.features[3].feature_name
                                                    ? value.features[3]
                                                        .feature_name
                                                    : "No data Found"
                                                }</li>
                                            </ul>
                                        </div>
                                        <div class="py-4 m-2">
                                            <h3 class="fs-5 fw-bold">Integration</h3>
                                            <ul style="list-style:none; padding-left:.8em;">
                                                <li class="mb-1">${
                                                  value.integrations === null ||
                                                  value.integrations[0] ===
                                                    undefined
                                                    ? "no data found"
                                                    : value.integrations[0]
                                                } </li>
                                                <li class="mb-1">${
                                                  value.integrations === null ||
                                                  value.integrations[1] ===
                                                    undefined
                                                    ? ""
                                                    : value.integrations[1]
                                                }</li>
                                                <li class="mb-1">${
                                                  value.integrations === null ||
                                                  value.integrations[2] ===
                                                    undefined
                                                    ? ""
                                                    : value.integrations[2]
                                                }</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-side w-100 m-2 h-100">
                                    <div class="card image p-2">
                                        <img class="img-fluid" src="${
                                          value.image_link[0]
                                        }" alt="...">
                                        <span id="accuracy" class="badge text-bg-success">${
                                          value.accuracy.score === null
                                            ? ""
                                            : value.accuracy.score * 100 +
                                              " % Accuracy"
                                        }</span>
                                        <div class="card-body text-center">
                                          <h3 class="fs-5 fw-bold">${
                                            value.input_output_examples === null
                                              ? "Can You Give me any information?"
                                              : value.input_output_examples[1]
                                                  .input
                                          }</h3>
                                          <p class="card-text">${
                                            value.input_output_examples === null
                                              ? "No! Not Yet! Take a break!!!"
                                              : value.input_output_examples[1]
                                                  .output
                                          }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

    `;
  modalContainer.appendChild(div);
};

loadAllData();
