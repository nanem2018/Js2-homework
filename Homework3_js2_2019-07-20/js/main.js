//ФЭЙК ЭПИ
const API_URL = 'https://raw.githubusercontent.com/nanem2018/online-store-api';

const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';

function makeGETRequest(url, callback) {
	let xhr;

	if (window.XMLHttpRequest) {
	  xhr = new XMLHttpRequest();
	} else if (window.ActiveXObject) { 
	  xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.onreadystatechange = function () {
	  if (xhr.readyState === 4) {
		callback(xhr.responseText);
	  }
	}

	xhr.open('GET', url, true);
	xhr.send();
  }

//Глобальные сущности 
var userCart = [];

class GoodsList {
	constructor () {
		this.goods = []
	}
	
	fetchGoods (cb) {
		makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
			this.goods = JSON.parse(goods);
			cb ()
		  })
	}
	render () {
		const block = document.querySelector ('.products')
		this.goods.forEach (product => {
			const prod = new Product (product)
			block.insertAdjacentHTML ('beforeend', prod.render ())
		})
	}
}

const list = new GoodsList();
list.fetchGoods(() => {
  list.render()
})

class Product {
	constructor (product) {
		this.id = product.id_product
		this.title = product.product_name
		this.price = product.price
		this.img = image
	}
	render () {
		return `<div class="product-item">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.title}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-name="${this.title}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
	}
}
