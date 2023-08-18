const apiUrl = "http://192.168.99.100:8000/countries"

var buttonReset = document.getElementById("reset");

buttonReset.addEventListener("click", function() {
    location.reload()
});





function get_countries() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#data-table tbody");
            data.forEach(item => {
                const row = document.createElement('tr');

                const idCell = document.createElement('td');
                idCell.textContent = item.id;
                row.appendChild(idCell);

                const codeCell = document.createElement('td');
                codeCell.textContent = item.code;
                row.appendChild(codeCell);

                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;
                row.appendChild(nameCell);

                const createdAtCell = document.createElement('td');
                createdAtCell.textContent = item.created_at;
                row.appendChild(createdAtCell);

                const actionCell = document.createElement('td');
                actionCell.innerHTML = `<div class="btn-group" role="group" aria-label="Basic example">\n` +
                    `  <button type="button" class="btn btn-primary country-view-${item.id}">View</button>\n` +
                    `  <button type="button" class="btn btn-danger">Delete</button>\n` +
                    `</div>`
                row.appendChild(actionCell);

                tableBody.appendChild(row);

                document.querySelector(`.country-view-${item.id}`).addEventListener("click", function() {
                    get_country(item.id)
                });
            });

        })
        .catch(error => console.error("Error fetching data:", error));
}



function get_country(pk) {
    fetch(apiUrl + '/' + pk)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#data-table");
            tableBody.innerHTML = '';

            if (Object.keys(data).length !==0) {
                const countryCard = document.querySelector("#country-card");
                countryCard.style.display = 'block';

                const tableBody = document.querySelector("#data-table");
                tableBody.innerHTML = '';

                const searchGroup = document.querySelector(".input-group-prepend");
                searchGroup.innerHTML = '';

                const searchInput = document.querySelector("#search-input");
                searchInput.style.display = 'none';

                const searchButton = document.querySelector("#search");
                searchButton.style.display = 'none';

                const cardImageView = document.querySelector(".card-img-top");
                cardImageView.src = data["flag"];

                const countryView = document.querySelector(".card-title.name");
                countryView.textContent = data["name"];

                const codeView = document.querySelector(".card-text.code");
                codeView.textContent = data["code"];

                const createdAtView = document.querySelector(".card-text.created_at");
                createdAtView.textContent = data["created_at"];

                const isIndependentView = document.querySelector(".card-text.is_independent");
                isIndependentView.textContent = data["is_independent"];

                const currencyView = document.querySelector(".card-text.currency");
                currencyView.textContent = data["currency"];

                const currencySymbolView = document.querySelector(".card-text.currency_symbol");
                currencySymbolView.textContent = data["currency_symbol"];

                const capitalView = document.querySelector(".card-text.capital");
                capitalView.textContent = data["capital"];

                const regionView = document.querySelector(".card-text.region");
                regionView.textContent = data["region"];

                const areaView = document.querySelector(".card-text.area");
                areaView.textContent = data["area"];

                const populationView = document.querySelector(".card-text.population");
                populationView.textContent = data["population"];
            } else{
                const countryWarning = document.querySelector("#country-warning");
                countryWarning.style.display = 'block';
                countryWarning.dataset.pk = pk;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}

var buttonReFetch = document.getElementById("re-fetch");
buttonReFetch.addEventListener("click", function() {
    const countryWarning = document.querySelector("#country-warning");
    countryWarning.style.display = 'none';
    get_country(countryWarning.dataset.pk);
});

get_countries()
