async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if(!response.ok) {
            throw new Error('данные не получены')
        }

        const data = await response.json();
        const content = document.querySelector('.content');
        data.forEach(({name, description, price, img}) => {
            
        const template = `
        <!-- карточка товара -->
        <div class="card">
            <!-- картинка товара -->
            <div class="image">
                <img src="${img}" alt="картинка товара">
            </div>
            <!-- название, описание, цена -->
            <div class="text">
                <p>${name}</p>
                <p class="description">${description}</p>
                <p class="price__text">${price}</p>
            </div>
        </div>`

            content.insertAdjacentHTML('beforeend', template)
        });

    } catch (error) {
        console.error(error)
    }
}

fetchData();

