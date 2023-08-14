const apiSearchUrl = "http://192.168.99.100:8000/countries/search/"
var buttonSearch = document.getElementById("search");
var searchInput = document.getElementById("search-input");

buttonSearch.addEventListener("click", function() {
    if (searchInput.value) {
        fetch(apiSearchUrl + searchInput.value)
            .then(response => response.json())
            .then(country => {
                const tableBody = document.querySelector("#data-table tbody")
                tableBody.innerHTML = "";
                const row = document.createElement('tr');

                const idCell = document.createElement('td');
                idCell.textContent = country.id;
                row.appendChild(idCell);

                const codeCell = document.createElement('td');
                codeCell.textContent = country.code;
                row.appendChild(codeCell);

                const nameCell = document.createElement('td');
                nameCell.textContent = country.name;
                row.appendChild(nameCell);

                const createdAtCell = document.createElement('td');
                createdAtCell.textContent = country.created_at;
                row.appendChild(createdAtCell);

                tableBody.appendChild(row);
            })
            .catch(error => console.error("Error fetching data:", error));
    } else {
        alert('Search input has to be specified')
    }
});


