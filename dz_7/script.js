async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('данные не получены')
        }

        const data = await response.json();
        const content = document.querySelector('.content');
        const contentCart = document.querySelector('.content__cart');
        data.forEach(({ name, description, price, img }) => {

            const template = `
        <!-- карточка товара -->
        <div class="card">
            <!-- картинка товара -->
            <div class="image">
                <img src="${img}" alt="картинка товара">
            </div>
            <!-- название, описание, цена -->
                <div class="text__content">
                    <div class="text">
                        <div>${name}</div><br>
                        <div class="description">${description}</div><br>
                        <div class="price__text">${price}</div>
                    </div>
                    <div class="btn__div">
                        <button class="btn">купить</button>
                    </div>
                </div>`

            content.insertAdjacentHTML('beforeend', template)

        });


    } catch (error) {
        console.error(error)
    }
};

// ясно, что получать данные надо один раз и потом передавать в функцию, а не как у меня: для корзины и для списка товаров

// еще надо было сделать так, чтобы товар не добавлялся повторно в корзину

async function addCart() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('данные не получены')
        }

        const data = await response.json();
        const contentCart = document.querySelector('.content__cart');

        const buttonAddList = document.querySelectorAll('.btn');

        buttonAddList.forEach((buttonEl, idx) => {
            buttonEl.addEventListener('click', () => {
                document.querySelector('.content__cart').style.display = "block";

                const templateCart = `
                    <div class="cart__items">
                    <!-- картинка товара -->
                    <div class="img__cart">
                        <img style="max-height: 306px;" src="${data[idx].img}" alt="">
                    </div>
                    <!-- описание товара + кнопка "закрыть" -->
                    <div class="text__cont__cart">
                        <!-- заголовок + описание товара -->
                        <div>
                            <div class="header__product">
                                <p>${data[idx].name}</p>
                            </div>
                            <div class="text__product">
                            <p>color: ${data[idx].color}</p>
                            <p>size: ${data[idx].size}</p>
                            <p>price: ${data[idx].price}</p>
                                <div class="quan">
                                    <div style="margin-right: 15px ;">quantity</div>
                                    <input type="text" value="${data[idx].quantity}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- кнопка "закрыть" -->
                    <div class="btn__close"></div>
                    `
                    // тут надо бы сделать проверку:
                    // если карточка уже есть в корзине, то не добавлять ее второй раз
                contentCart.insertAdjacentHTML('beforeend', templateCart);

                const btnCloseAll = document.querySelectorAll('.btn__close');
                btnCloseAll.forEach((el) => {
                    el.addEventListener('click', () => {
                        el.closest('.cart__items').remove();
                        if (document.querySelectorAll('.btn__close').length == 0) {
                            document.querySelector('.content__cart').style.display = "none"
                        }
                    })
                })
            })
        })  
        
    } catch (error) {
        console.error(error)
    }
}

fetchData();
addCart();


