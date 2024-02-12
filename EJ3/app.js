document.getElementById('loadProducts').addEventListener('click', function() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            const productListSection = document.getElementById('productList');
            productListSection.innerHTML = ''; // Limpiar la lista antes de añadir nuevos productos
            
            json.forEach(product => {
                const productElement = document.createElement('div');
                productElement.textContent = product.title + ' - ' + product.price + '€';
                productElement.style.cursor = 'pointer';
                productElement.addEventListener('mouseenter', () => {
                    document.getElementById('productImage').innerHTML = `<img src="${product.image}" alt="${product.title}" style="max-width: 100px;">`;
                });
                productListSection.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});
