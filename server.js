


// document.addEventListener('DOMContentLoaded', function () {
//     const cont = document.querySelector(".container");

//     fetch("https://dummyjson.com/products")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log(responseData);
//             showData(responseData.products);
//         })
//         .catch(error =>
//             console.error("Error fetching data:", error);
//         });

//     function showData(products) {
//         const table = document.querySelector("table");
//         table.innerHTML = "<tr><th>ID</th><th>Title</th><th>Description</th></tr>";
//         products.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td>
//                              <td>${product.description}</td>`;
//             table.appendChild(trow);
//         });
//     }

//     function filterProductsByTitle(products, substring) {
//         return products.filter(product => product.title.toLowerCase().includes(substring.toLowerCase()));
//     }

//     function updateTableWithFilteredData(products) {
//         const table = document.querySelector("table");
//         table.innerHTML = "<tr><th>ID</th><th>Title</th><th>Description</th></tr>";
//         products.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td>
//                              <td>${product.description}</td>`;
//             table.appendChild(trow);
//         });
//     }

//     document.querySelector("#searchBtn").addEventListener("click", function () {
//         const searchTerm = document.querySelector("#ip").value.trim();
//         console.log("Search Term:", searchTerm);
//         fetch("https://dummyjson.com/products")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(responseData => {
//                 const filteredProducts = filterProductsByTitle(responseData.products, searchTerm);
//                 updateTableWithFilteredData(filteredProducts);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     });
// });










    // Update table based on checkbox state
    /* function updateTable() {
         const checkboxes = document.querySelectorAll(".checkbox");
         const table = document.querySelector("#dataTable");
         const rows = table.querySelectorAll("tr");

         rows.forEach(row => {
             const cells = row.querySelectorAll("td");
             checkboxes.forEach((checkbox, index) => {
                 cells[index].style.display = checkbox.checked ? "" : "none";
             });
         });
     }*/










     /* function updateTable() {
        const checkboxes = document.querySelectorAll(".checkbox");
        const table = document.querySelector("#dataTable");
        const rows = table.querySelectorAll("tr");

        rows.forEach((row, rowIndex) => {
            if (rowIndex === 0) return;
            const cells = row.querySelectorAll("td");
            checkboxes.forEach((checkbox, index) => {
                if (checkbox.id === "idCheckbox") {
                    cells[0].style.display = checkbox.checked ? "" : "none";
                } else if (checkbox.id === "titleCheckbox") {
                    cells[1].style.display = checkbox.checked ? "" : "none";
                } else if (checkbox.id === "descriptionCheckbox") {
                    cells[2].style.display = checkbox.checked ? "" : "none";
                }
            });
        });
    }*/




















    // correct ---->


    

// document.addEventListener('DOMContentLoaded', function () {
//     const cont = document.querySelector(".container");
//     let productsData = [];

//     fetch("https://dummyjson.com/products")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log(responseData);
//             productsData = responseData.products;
//             showData(productsData);
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//         });

//     function showData(products) {
//         const table = document.querySelector("#dataTable");
//         table.innerHTML = "";
//         const tableHead = document.createElement("tr");
//         tableHead.innerHTML = `<th>ID</th>
//                                <th>Title</th>
//                                <th>category</th>
//                                <th>brand</th>`;
//         table.appendChild(tableHead);

//         products.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td> 
//                              <td>${product.category}</td>
//                              <td>${product.brand}</td>`;
//             table.appendChild(trow);
//         });

//         document.querySelector("#searchBtn").addEventListener("click", function () {
//             const searchTerm = document.querySelector("#ip").value.trim().toLowerCase();
//             const checkboxes = document.querySelectorAll('.checkbox');
//             let checkedFields = [];

//             checkboxes.forEach(checkbox => {
//                 if (checkbox.checked) {
//                     checkedFields.push(checkbox.id);
//                 }
//             });

//             let filteredProducts = productsData.filter(product => {
//                 return checkedFields.some(field => {
//                     switch (field) {
//                         case '_id':
//                             return product.id.toString().toLowerCase().includes(searchTerm);
//                         case 'title':
//                             return product.title.toLowerCase().includes(searchTerm);
//                         case 'category':
//                             return product.category.toString().toLowerCase().includes(searchTerm);
//                         case 'brand':
//                             return product.brand.toString().toLowerCase().includes(searchTerm);
//                         default:
//                             return false;
//                     }
//                 });
//             });

//             showFilteredData(filteredProducts);
//         });
//     }

//     function showFilteredData(filteredProducts) {
//         const table = document.querySelector("#dataTable");
//         table.innerHTML = "";
//         const tableHead = document.createElement("tr");
//         tableHead.innerHTML = `<th>ID</th>
//                                <th>Title</th>
//                                <th>category</th>
//                                <th>brand</th>`;
//         table.appendChild(tableHead);

//         filteredProducts.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td> 
//                              <td>${product.category}</td>
//                              <td>${product.brand}</td>`;
//             table.appendChild(trow);
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const cont = document.querySelector(".container");
//     let productsData = [];

//     fetch("https://dummyjson.com/products")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log(responseData);
//             productsData = responseData.products;
//             showData(productsData);
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//         });

//     // Function to show data based on search term and checked fields
//     function showData(searchTerm = '') {
//         const table = document.querySelector("#dataTable");
//         table.innerHTML = "";
//         const tableHead = document.createElement("tr");
//         tableHead.innerHTML = `<th>ID</th>
//                                <th>Title</th>
//                                <th>category</th>
//                                <th>brand</th>`;
//         table.appendChild(tableHead);

//         productsData.forEach(product => {
//             // Check if the product matches the search term
//             if (productMatchesSearchTerm(product, searchTerm)) {
//                 const trow = document.createElement("tr");
//                 trow.innerHTML = `<td>${product.id}</td>
//                                  <td>${product.title}</td> 
//                                  <td>${product.category}</td>
//                                  <td>${product.brand}</td>`;
//                 table.appendChild(trow);
//             }
//         });
//     }

//     // Function to check if a product matches the search term and checked fields
//     function productMatchesSearchTerm(product, searchTerm) {
//         const checkboxes = document.querySelectorAll('.checkbox');
//         const checkedFields = Array.from(checkboxes)
//             .filter(checkbox => checkbox.checked)
//             .map(checkbox => checkbox.id);

//         return checkedFields.some(field => {
//             switch (field) {
//                 case '_id':
//                     return product.id.toString().toLowerCase().includes(searchTerm);
//                 case 'title':
//                     return product.title.toLowerCase().includes(searchTerm);
//                 case 'category':
//                     return product.category.toString().toLowerCase().includes(searchTerm);
//                 case 'brand':
//                     return product.brand.toString().toLowerCase().includes(searchTerm);
//                 default:
//                     return false;
//             }
//         });
//     }

//     // Event listener for input field changes
//     document.querySelector("#ip").addEventListener("input", function () {
//         const searchTerm = this.value.trim().toLowerCase();
//         showData(searchTerm);
//     });
// });

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// correct strat



// // document.addEventListener('DOMContentLoaded', function () {
// //     const container = document.querySelector(".container");
// //     const table = document.querySelector("#dataTable");
// //     const paginationContainer = document.querySelector(".pagination");
// //     let productsData = [];
// //     let currentPage = 1;
// //     let fields = []; 
// //     let limit=4;

    
// // function generateCheckboxesAndHeaders() {
// //     const checkboxOuter = document.querySelector(".checkbox-outer");
// //     const tableHeadRow = table.querySelector('thead tr');
// //     fields.forEach(field => {
       
// //         const checkbox = document.createElement('input');
// //         checkbox.type = 'checkbox';
// //         checkbox.className = 'checkbox';
// //         checkbox.id = field;
// //         checkbox.checked = true;
// //         const label = document.createElement('label');
// //         label.htmlFor = field;
// //         label.textContent = field.toUpperCase();
// //         checkboxOuter.appendChild(checkbox);
// //         checkboxOuter.appendChild(label);
// //         const th = document.createElement('th');
// //         th.innerText = field.toUpperCase();
// //         tableHeadRow.appendChild(th);
// //     });
// // }

  
// // function populateTable(data) {
// //     const tbody = table.querySelector('tbody');
// //     tbody.innerHTML = '';
// //     data.forEach(product => {
// //         const row = document.createElement('tr');
// //         fields.forEach(field => {
// //             const cell = document.createElement('td');
// //             if (field === 'images') {
              
// //                 product[field].forEach(imageUrl => {
// //                     const img = document.createElement('img');
// //                     img.src = imageUrl;
// //                     img.style.width="40px"
// //                     cell.appendChild(img);
// //                 });
// //             } else {
// //                 cell.textContent = product[field];
// //             }
// //             row.appendChild(cell);
// //         });
// //         tbody.appendChild(row);
// //     });
// // }




   
// //     function renderPagination(totalProducts) {
// //         paginationContainer.innerHTML = "";
// //         const totalPages = Math.ceil(totalProducts / limit);
// //         for (let i = 1; i <= totalPages; i++) {
// //             const pageLink = document.createElement("a");
// //             pageLink.href = "#";
// //             pageLink.textContent = i;
// //             pageLink.addEventListener("click", function () {
// //                 currentPage = i;
// //                 showData(currentPage);
// //                 setActivePageButton(this);
// //             });
// //             paginationContainer.appendChild(pageLink);
// //         }
// //         setActivePageButton(paginationContainer.querySelector("a"));
// //     }

// //     function setActivePageButton(activeButton) {
// //         const allPageLinks = paginationContainer.querySelectorAll("a");
// //         allPageLinks.forEach(link => link.classList.remove("active"));
// //         activeButton.classList.add("active");
// //     }


// // function filterData(searchTerm = '') {
// //     const checkboxes = document.querySelectorAll('.checkbox');
// //     const checkedFields = Array.from(checkboxes)
// //         .filter(checkbox => checkbox.checked)
// //         .map(checkbox => checkbox.id);
    
  
// //     if (checkedFields.length === 0) {
// //         return productsData.filter(product => {
// //             if (searchTerm.trim() === '') {
// //                 return true; 
// //             } else {
// //                 return Object.values(product).some(value => {
// //                     if (typeof value === 'string') {
// //                         return value.toLowerCase().includes(searchTerm.toLowerCase());
// //                     } else if (Array.isArray(value)) {
// //                         return value.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
// //                     } else if (typeof value === 'number') {
// //                         return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
// //                     } else {
// //                         return false;
// //                     }
// //                 });
// //             }
// //         });
// //     } else {
       
// //         return productsData.filter(product => {
// //             return checkedFields.some(field => {
// //                 const value = product[field];
// //                 if (typeof value === 'string') {
// //                     return value.toLowerCase().includes(searchTerm.toLowerCase());
// //                 } else if (Array.isArray(value)) {
// //                     return value.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
// //                 } else if (typeof value === 'number') {
// //                     return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
// //                 } else {
// //                     return false;
// //                 }
// //             });
// //         });
// //     }
// // }

// //     function showData(pageNumber = 1, searchTerm = '') {
// //         const startIndex = (pageNumber - 1) * limit;
// //         const endIndex = pageNumber * limit;
// //         const filteredData = filterData(searchTerm);
// //         const paginatedData = filteredData.slice(startIndex, endIndex);
// //         populateTable(paginatedData);
// //         renderPagination(filteredData.length);
// //     }

    
// // function fetchData() {
// //     fetch("https://dummyjson.com/products")
// //         .then(response => {
// //             if (!response.ok) {
// //                 throw new Error("Network response was not ok");
// //             }
// //             return response.json();
// //         })
// //         .then(responseData => {
// //             console.log(responseData);
// //             productsData = responseData.products;
// //             fields = Object.keys(productsData[0]);
// //             generateCheckboxesAndHeaders();
// //             showData(currentPage);
// //         })
// //         .catch(error => {
// //             console.error("Error fetching data:", error);
// //         });
// // }

    
// //     document.querySelector("#ip").addEventListener("input", function () {
// //         const searchTerm = this.value.trim();
// //         const searchTerms= searchTerm.split(" ").filter(term  =>term  !== "");
// //         searchTerms.forEach(search=>{
// //             showData([search]);
// //         })
        
// //     });

// //     // document.querySelector("#ip").addEventListener("input", function () {
// //     //     const searchTerm = this.value.trim();
// //     //     const searchTerms = searchTerm.split(" ").filter(term => term !== "");
     
// //     //     searchTerms.forEach(search => {
// //     //         showData(1, search); 
// //     //     });
// //     // });
    

// //     // document.querySelector("#searchBtn").addEventListener("click", function () {
// //     //     const searchTerm = document.querySelector("#ip").value.trim();
// //     //     showData(1, searchTerm);
// //     // });

// //     fetchData();
// // });
// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.querySelector(".container");
//     const table = document.querySelector("#dataTable");
//     const paginationContainer = document.querySelector(".pagination");
//     let productsData = [];
//     let currentPage = 1;
//     let fields = []; 
//     let limit = 4;

//     function generateCheckboxesAndHeaders() {
//         const checkboxOuter = document.querySelector(".checkbox-outer");
//         const tableHeadRow = table.querySelector('thead tr');
//         fields.forEach(field => {
//             const checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkbox.className = 'checkbox';
//             checkbox.id = field;
//             checkbox.checked = true;
//             const label = document.createElement('label');
//             label.htmlFor = field;
//             label.textContent = field.toUpperCase();
//             checkboxOuter.appendChild(checkbox);
//             checkboxOuter.appendChild(label);
//             const th = document.createElement('th');
//             th.innerText = field.toUpperCase();
//             tableHeadRow.appendChild(th);
//         });
//     }

//     function populateTable(data) {
//         const tbody = table.querySelector('tbody');
//         tbody.innerHTML = '';
//         data.forEach(product => {
//             const row = document.createElement('tr');
//             fields.forEach(field => {
//                 const cell = document.createElement('td');
//                 if (field === 'images') {
//                     product[field].forEach(imageUrl => {
//                         const img = document.createElement('img');
//                         img.src = imageUrl;
//                         img.style.width="40px"
//                         cell.appendChild(img);
//                     });
//                 } else {
//                     cell.textContent = product[field];
//                 }
//                 row.appendChild(cell);
//             });
//             tbody.appendChild(row);
//         });
//     }

//     function renderPagination(totalProducts) {
//         paginationContainer.innerHTML = "";
//         const totalPages = Math.ceil(totalProducts / limit);
//         for (let i = 1; i <= totalPages; i++) {
//             const pageLink = document.createElement("a");
//             pageLink.href = "#";
//             pageLink.textContent = i;
//             pageLink.addEventListener("click", function () {
//                 currentPage = i;
//                 showData(currentPage);
//                 // Call setActivePageButton without argument to handle the active class
//                 setActivePageButton();
//             });
//             paginationContainer.appendChild(pageLink);
//         }
//         // Set active class initially
//         setActivePageButton();
//     }

//     function setActivePageButton() {
//         const allPageLinks = paginationContainer.querySelectorAll("a");
//         allPageLinks.forEach(link => link.classList.remove("active"));
//         // Set active class to the current page link
//         allPageLinks[currentPage - 1].classList.add("active");
//     }

//     function filterData(searchTerm = '') {
//         const checkboxes = document.querySelectorAll('.checkbox');
//         const checkedFields = Array.from(checkboxes)
//             .filter(checkbox => checkbox.checked)
//             .map(checkbox => checkbox.id);
//         if (checkedFields.length === 0) {
//             return productsData.filter(product => {
//                 if (searchTerm.trim() === '') {
//                     return true; 
//                 } else {
//                     return Object.values(product).some(value => {
//                         if (typeof value === 'string') {
//                             return value.toLowerCase().includes(searchTerm.toLowerCase());
//                         } else if (Array.isArray(value)) {
//                             return value.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
//                         } else if (typeof value === 'number') {
//                             return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
//                         } else {
//                             return false;
//                         }
//                     });
//                 }
//             });
//         } else {
//             return productsData.filter(product => {
//                 return checkedFields.some(field => {
//                     const value = product[field];
//                     if (typeof value === 'string') {
//                         return value.toLowerCase().includes(searchTerm.toLowerCase());
//                     } else if (Array.isArray(value)) {
//                         return value.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
//                     } else if (typeof value === 'number') {
//                         return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
//                     } else {
//                         return false;
//                     }
//                 });
//             });
//         }
//     }

//     function showData(pageNumber = 1, searchTerm = '') {
//         const startIndex = (pageNumber - 1) * limit;
//         const endIndex = pageNumber * limit;
//         const filteredData = filterData(searchTerm);
//         const paginatedData = filteredData.slice(startIndex, endIndex);
//         populateTable(paginatedData);
//         renderPagination(filteredData.length);
//     }

//     function fetchData() {
//         fetch("https://dummyjson.com/products")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(responseData => {
//                 console.log(responseData);
//                 productsData = responseData.products;
//                 fields = Object.keys(productsData[0]);
//                 generateCheckboxesAndHeaders();
//                 showData(currentPage);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }

//     document.querySelector("#ip").addEventListener("input", function () {
//         const searchTerm = this.value.trim();
//         const searchTerms = searchTerm.split(" ").filter(term => term !== "");
//         searchTerms.forEach(search => {
//             showData(1, search); 
//         });
//     });

//     fetchData();
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.querySelector(".container");
//     const table = document.querySelector("#dataTable");
//     const paginationContainer = document.querySelector(".pagination");
//     let productsData = [];
//     let currentPage = 1;
//     let fields = []; 
//     let limit = 4;

//     function generateCheckboxesAndHeaders() {
//         const checkboxOuter = document.querySelector(".checkbox-outer");
//         const tableHeadRow = table.querySelector('thead tr');
//         fields.forEach(field => {
//             const checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkbox.className = 'checkbox';
//             checkbox.id = field;
//             checkbox.checked = true;
//             const label = document.createElement('label');
//             label.htmlFor = field;
//             label.textContent = field.toUpperCase();
//             checkboxOuter.appendChild(checkbox);
//             checkboxOuter.appendChild(label);
//             const th = document.createElement('th');
//             th.innerText = field.toUpperCase();
//             tableHeadRow.appendChild(th);
//         });
//     }

//     function populateTable(data) {
//         const tbody = table.querySelector('tbody');
//         tbody.innerHTML = '';
//         data.forEach(product => {
//             const row = document.createElement('tr');
//             fields.forEach(field => {
//                 const cell = document.createElement('td');
//                 if (field === 'images') {
//                     product[field].forEach(imageUrl => {
//                         const img = document.createElement('img');
//                         img.src = imageUrl;
//                         img.style.width="40px"
//                         cell.appendChild(img);
//                     });
//                 } else {
//                     cell.textContent = product[field];
//                 }
//                 row.appendChild(cell);
//             });
//             tbody.appendChild(row);
//         });
//     }

//     function renderPagination(totalProducts) {
//         paginationContainer.innerHTML = "";
//         const totalPages = Math.ceil(totalProducts / limit);
//         for (let i = 1; i <= totalPages; i++) {
//             const pageLink = document.createElement("a");
//             pageLink.href = "#";
//             pageLink.textContent = i;
//             pageLink.addEventListener("click", function () {
//                 currentPage = i;
//                 showData(currentPage);
//                 setActivePageButton();
//             });
//             paginationContainer.appendChild(pageLink);
//         }
//         setActivePageButton();
//     }

//     function setActivePageButton() {
//         const allPageLinks = paginationContainer.querySelectorAll("a");
//         allPageLinks.forEach(link => link.classList.remove("active"));
//         allPageLinks[currentPage - 1].classList.add("active");
//     }

//     function filterData(searchTerms = []) {
//         const checkboxes = document.querySelectorAll('.checkbox');
//         const checkedFields = Array.from(checkboxes)
//             .filter(checkbox => checkbox.checked)
//             .map(checkbox => checkbox.id);
//         return productsData.filter(product => {
//             return searchTerms.every(term => {
//                 return checkedFields.some(field => {
//                     const value = product[field];
//                     if (typeof value === 'string') {
//                         return value.toLowerCase().includes(term.toLowerCase());
//                     } else if (Array.isArray(value)) {
//                         return value.some(item => item.toLowerCase().includes(term.toLowerCase()));
//                     } else if (typeof value === 'number') {
//                         return value.toString().toLowerCase().includes(term.toLowerCase());
//                     } else {
//                         return false;
//                     }
//                 });
//             });
//         });
//     }

//     function showData(pageNumber = 1, searchTerms = []) {
//         const startIndex = (pageNumber - 1) * limit;
//         const endIndex = pageNumber * limit;
//         const filteredData = filterData(searchTerms);
//         const paginatedData = filteredData.slice(startIndex, endIndex);
//         populateTable(paginatedData);
//         renderPagination(filteredData.length);
//     }

//     function fetchData() {
//         fetch("https://dummyjson.com/products")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(responseData => {
//                 console.log(responseData);
//                 productsData = responseData.products;
//                 fields = Object.keys(productsData[0]);
//                 generateCheckboxesAndHeaders();
//                 showData(currentPage);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }

//     document.querySelector("#ip").addEventListener("input", function () {
//         const searchTerm = this.value.trim();
//         const searchTerms = searchTerm.split(" ").filter(term => term !== "");
//         showData(1, searchTerms);
//     });

//     fetchData();
// });


///////////////////////////////////////////end


// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.querySelector(".container");
//     const table = document.querySelector("#dataTable");
//     const paginationContainer = document.querySelector(".pagination");
//     let productsData = [];
//     let currentPage = 1;
//     let fields = []; 
//     let limit = 4;

//     function generateCheckboxesAndHeaders() {
//         const checkboxOuter = document.querySelector(".checkbox-outer");
//         const tableHeadRow = table.querySelector('thead tr');
//         fields.forEach(field => {
//             const checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkbox.className = 'checkbox';
//             checkbox.id = field;
//             checkbox.checked = true;
//             const label = document.createElement('label');
//             label.htmlFor = field;
//             label.textContent = field.toUpperCase();
//             checkboxOuter.appendChild(checkbox);
//             checkboxOuter.appendChild(label);
//             const th = document.createElement('th');
//             th.innerText = field.toUpperCase();
//             tableHeadRow.appendChild(th);
//         });
//     }

//     function populateTable(data) {
//         const tbody = table.querySelector('tbody');
//         tbody.innerHTML = '';
//         data.forEach(product => {
//             const row = document.createElement('tr');
//             fields.forEach(field => {
//                 const cell = document.createElement('td');
//                 if (field === 'images') {
//                     product[field].forEach(imageUrl => {
//                         const img = document.createElement('img');
//                         img.src = imageUrl;
//                         img.style.width="40px"
//                         cell.appendChild(img);
//                     });
//                 } else {
//                     cell.textContent = product[field];
//                 }
//                 row.appendChild(cell);
//             });
//             tbody.appendChild(row);
//         });
//     }

//     function renderPagination(totalProducts) {
//         paginationContainer.innerHTML = "";
//         const totalPages = Math.ceil(totalProducts / limit);
//         for (let i = 1; i <= totalPages; i++) {
//             const pageLink = document.createElement("a");
//             pageLink.href = "#";
//             pageLink.textContent = i;
//             pageLink.addEventListener("click", function () {
//                 currentPage = i;
//                 showData(currentPage);
//                 setActivePageButton();
//             });
//             paginationContainer.appendChild(pageLink);
//         }
//         setActivePageButton();
//     }

//     function setActivePageButton() {
//         const allPageLinks = paginationContainer.querySelectorAll("a");
//         allPageLinks.forEach(link => link.classList.remove("active"));
//         allPageLinks[currentPage - 1].classList.add("active");
//     }

//     function filterData(searchTerm = '') {
//         const checkboxes = document.querySelectorAll('.checkbox');
//         const checkedFields = Array.from(checkboxes)
//             .filter(checkbox => checkbox.checked)
//             .map(checkbox => checkbox.id);
        
//         return productsData.filter(product => {
//             return checkedFields.some(field => {
//                 const value = product[field];
//                 if (typeof value === 'string') {
//                     return value.toLowerCase().includes(searchTerm.toLowerCase());
//                 } else if (Array.isArray(value)) {
//                     return value.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
//                 } else if (typeof value === 'number') {
//                     return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
//                 } else {
//                     return false;
//                 }
//             });
//         });
//     }

//     function showData(pageNumber = 1, searchTerm = '') {
//         const startIndex = (pageNumber - 1) * limit;
//         const endIndex = pageNumber * limit;
//         let filteredData = productsData;
//         if (searchTerm.trim() !== '') {
//             const searchTerms = searchTerm.trim().split(/\s+/);
//             searchTerms.forEach(term => {
//                 filteredData = filterData(term);
//             });
//         }
//         const paginatedData = filteredData.slice(startIndex, endIndex);
//         populateTable(paginatedData);
//         renderPagination(filteredData.length);
//     }

//     function fetchData() {
//         fetch("https://dummyjson.com/products")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(responseData => {
//                 console.log(responseData);
//                 productsData = responseData.products;
//                 fields = Object.keys(productsData[0]);
//                 generateCheckboxesAndHeaders();
//                 showData(currentPage);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }

//     document.querySelector("#ip").addEventListener("input", function () {
//         const searchTerm = this.value.trim();
//         showData(1, searchTerm);
//     });

//     fetchData();
// });
