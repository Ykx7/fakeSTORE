let url = 'https://fakestoreapi.com/products/';
fetch(url)
    .then(res => res.json())
    .then(data => {
        let container = document.querySelector(".container");

        data.forEach(product => {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h1>${product.title}</h1>
                <span>Price: $${product.price}</span>
                <span>Category: ${product.category}</span>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.log('ERROR:', error));