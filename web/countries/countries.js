const apiUrl = "http://192.168.99.100:8000/countries"

var buttonReset = document.getElementById("reset");

buttonReset.addEventListener("click", function() {
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = '';
    get_countries()
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
                // const countryView = document.querySelector(".country-view");
                // countryView.addEventListener("click", function() {
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
            const currencySymbolView = document.querySelector(".card-text.currency_symbol");
            const capitalView = document.querySelector(".card-text.capital");
            const regionView = document.querySelector(".card-text.region");
            const areaView = document.querySelector(".card-text.area");
            const populationView = document.querySelector(".card-text.population");
            const flagView = document.querySelector(".card-text.flag");





            currencyView.textContent = data["currency"];
            currencySymbolView.textContent = data["currency_symbol"];
            capitalView.textContent = data["capital"];
            regionView.textContent = data["region"];
            areaView.textContent = data["area"];
            populationView.textContent = data["population"];
        })
        .catch(error => console.error("Error fetching data:", error));
}
get_countries()
