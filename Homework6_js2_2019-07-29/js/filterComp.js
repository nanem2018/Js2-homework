let filter = ({
	props: ['product', 'img'],
template:`
                <div class="product-item">
                    <img :src="img" alt="Some img">
                    <div class="desc">
                        <h3> {{ product.product_name }} </h3>
                        <p>{{ product.price }} $</p>
                        <!--button class="buy-btn" @click="$root.$refs.cart.addProduct (product)">Купить</button-->
                        <button class="buy-btn" @click="$parent.addProduct (product)">Купить</button>
                    </div>
            </div>
    `
}


let filters = {
    props: [],
    data () {
        return {
            filtered: [],
            products: [],
            userSearch:'',
		    imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: `/catalogData.json`
        }
    },
    methods: {
    	filter(){
			let regExp = new RegExp (this.userSearch,'i')
			this.filtered = this.products.filter (el => regExp.test (el.product_name))
		}
        addProduct (product) {
			console.log (product.id_product)
		}
    },
    template: `
        <div class="products">
              <product
              v-for="product of filtered"
              :key="product.id_product"
              :img="imgCatalog"
              :product="product"
              ></product>  
        </div>
    `,
    components: {
        product
    },
    mounted () {
        this.$parent.getJSON(`${API_URL + this.catalogUrl}`)
			.then (data => {
				for (let el of data) {
					this.products.push (el)
					this.filtered.push (el)
				}
		})
    }
}

    

