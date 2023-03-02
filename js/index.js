const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => showAllData(data));

}
const showAllData = (data) => {
    console.log(data);
}
loadAllData();