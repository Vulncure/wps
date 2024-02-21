document.addEventListener("DOMContentLoaded", function () {
    // Function to add data to the table
    function populateTable(data) {
        const tableBody = document.querySelector("#writeupsTable tbody");

        data.forEach(item => {
            const row = document.createElement("tr");

            // Add data to the row
            row.innerHTML = `
                <td><a href="${item.Links[0].Link}" target="_blank">${item.Links[0].Title}</a></td>
                <td>${item.Authors.join(", ")}</td>
                <td>${item.Programs.join(", ")}</td>
                <td>${item.Bugs.join(", ")}</td>
                <td>$${item.Bounty}</td>
                <td>${item.PublicationDate}</td>
                <td>${item.AddedDate}</td>
            `;

            // Append the row to the table
            tableBody.appendChild(row);
        });
    }

    // Fetch data from the JSON file
    fetch('https://pentester.land/writeups.json')
        .then(response => response.json())
        .then(jsonData => {
            // Get the first 50 entries
            const fiftyEntries = jsonData.data.slice(0, 50);

            // Call the function with the sliced JSON data
            populateTable(fiftyEntries);
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
