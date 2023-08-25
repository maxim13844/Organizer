const apiDeleteUrl = `http://${host}:8000/countries/`

var buttonDeleteAll = document.getElementById("delete-all");

buttonDeleteAll.addEventListener("click", function() {
    delete_all_country();
});

function delete_country(countryId){
    fetch(apiDeleteUrl + countryId, {method: 'DELETE'})
        .then(response => response.json())
        .then(data => {
            location.reload();
        })
        .catch(error => console.error("Error fetching data:", error));
}

function delete_all_country(){
    fetch(apiDeleteUrl, {method: 'DELETE'})
        .then(response => response.json())
        .then(data => {
            let userResponse = confirm('Task started. Reload page?');
            if (userResponse){
                location.reload();
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}