
// document.addEventListener('DOMContentLoaded', function () {
//     const cont = document.querySelector(".container");
//     const table = document.querySelector("#dataTable");
//     const paginationContainer = document.querySelector(".pagination");
//     let productsData = [];
//     let currentPage = 1;

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
//             showData(currentPage);
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//         });

//     function showData(pageNumber, searchTerm = '') {
//         table.innerHTML = "";
//         const startIndex = (pageNumber - 1) * 4;
//         const endIndex = pageNumber * 4;
//         const tableHead = document.createElement("tr");
//         tableHead.innerHTML = `<th>ID</th>
//                                <th>Title</th>
//                                <th>Category</th>
//                                <th>Brand</th>`;
//         table.appendChild(tableHead);

//         const filteredProducts = productsData.filter(product => productMatchesSearchTerm(product, searchTerm));
//         const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

//         paginatedProducts.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td> 
//                              <td>${product.category}</td>
//                              <td>${product.brand}</td>`;
//             table.appendChild(trow);
//         });

//         renderPagination(filteredProducts.length);
//     }

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

//     function renderPagination(totalProducts) {
//         paginationContainer.innerHTML = "";
//         const totalPages = Math.ceil(totalProducts / 4);
//         for (let i = 1; i <= totalPages; i++) {
//             const pageLink = document.createElement("a");
//             pageLink.href = "#";
//             pageLink.textContent = i;
//             pageLink.addEventListener("click", function () {
//                 currentPage = i;
//                 showData(currentPage);
//                 setActivePageButton(this); // Add this line
//             });
//             paginationContainer.appendChild(pageLink);
//         }
//         setActivePageButton(paginationContainer.querySelector("a")); // Add this line to set the first page as active initially
//     }

//     function setActivePageButton(activeButton) {
//         const allPageLinks = paginationContainer.querySelectorAll("a");
//         allPageLinks.forEach(link => link.classList.remove("active"));
//         activeButton.classList.add("active");
//     }

//     document.querySelector("#ip").addEventListener("input", function () {
//         const searchTerm = this.value.trim().toLowerCase();
//         showData(1, searchTerm);
//     });
// });
