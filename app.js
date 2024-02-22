

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector(".container");
    const table = document.querySelector("#dataTable");
    const paginationContainer = document.querySelector(".pagination");
    let productsData = [];
    let currentPage = 1;
    let fields = []; 
    let limit = 4;

    function generateCheckboxesAndHeaders() {
        const checkboxOuter = document.querySelector(".checkbox-outer");
        const tableHeadRow = table.querySelector('thead tr');
        fields.forEach(field => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox';
            checkbox.id = field;
            checkbox.checked = true;
            const label = document.createElement('label');
            label.htmlFor = field;
            label.textContent = field.toUpperCase();
            checkboxOuter.appendChild(checkbox);
            checkboxOuter.appendChild(label);
            const th = document.createElement('th');
            th.innerText = field.toUpperCase();
            tableHeadRow.appendChild(th);
        });
    }

    function populateTable(data) {
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';
        data.forEach(product => {
            const row = document.createElement('tr');
            fields.forEach(field => {
                const cell = document.createElement('td');
                if (field === 'images') {
                    product[field].forEach(imageUrl => {
                        const img = document.createElement('img');
                        img.src = imageUrl;
                        img.style.width="40px"
                        cell.appendChild(img);
                    });
                } else {
                    cell.textContent = product[field];
                }
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
    }

    function renderPagination(totalProducts) {
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(totalProducts / limit);
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("a");
            pageLink.href = "#";
            pageLink.textContent = i;
            pageLink.addEventListener("click", function () {
                currentPage = i;
                showData(currentPage);
                setActivePageButton();
            });
            paginationContainer.appendChild(pageLink);
        }
        setActivePageButton();
    }

    function setActivePageButton() {
        const allPageLinks = paginationContainer.querySelectorAll("a");
        allPageLinks.forEach(link => link.classList.remove("active"));
        allPageLinks[currentPage - 1].classList.add("active");
    }

    function filterData(searchTerm = '') {
        if (searchTerm.trim() === '') {
            return productsData;
        } else {
            const searchWords = searchTerm.toLowerCase().split(" ").filter(word => word.trim() !== "");
            return productsData.filter(product => {
                return searchWords.some(word => {
                    return fields.some(field => {
                        const value = product[field];
                        if (typeof value === 'string') {
                            return value.toLowerCase().includes(word);
                        } else if (Array.isArray(value)) {
                            return value.some(item => item.toLowerCase().includes(word));
                        } else if (typeof value === 'number') {
                            return value.toString().toLowerCase().includes(word);
                        } else {
                            return false;
                        }
                    });
                });
            });
        }
    }

    function showData(pageNumber = 1, searchTerm = '') {
        const startIndex = (pageNumber - 1) * limit;
        const endIndex = pageNumber * limit;
        const filteredData = filterData(searchTerm);
        const paginatedData = filteredData.slice(startIndex, endIndex);
        populateTable(paginatedData);
        renderPagination(filteredData.length);
    }

    function fetchData() {
        fetch("https://dummyjson.com/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(responseData => {
                console.log(responseData);
                productsData = responseData.products;
                fields = Object.keys(productsData[0]);
                generateCheckboxesAndHeaders();
                showData(currentPage);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    document.querySelector("#ip").addEventListener("input", function () {
        const searchTerm = this.value.trim();
        showData(1, searchTerm);
    });

    fetchData();
});
