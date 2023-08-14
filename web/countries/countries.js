const apiUrl = "http://192.168.99.100:8000/countries"

var buttonReset = document.getElementById("reset");

buttonReset.addEventListener("click", function() {
    get_countries()
});


function get_countries() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#data-table tbody")
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

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}

get_countries()
