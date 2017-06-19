Vue.component('product', {
  props: ['product'],
  template:
  `
    <div class="mdc-layout-grid__cell">
      <div class="mdc-card">
        <img class="mdc-card__media-item mdc-card__media-item--fit" :src="product.image"></img>
        <section class="mdc-card__primary">
          <h1 class="mdc-card__title mdc-card__title--large">{{ product.title }}</h1>
          <h2 class="mdc-card__subtitle">{{ '$' + product.price }}</h2>
        </section>
      </div>
    </div>
  `
})

Vue.component('category-item', {
  props: ['category'],
  template:
  `
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">{{ category.name }}
        <span class="mdc-list-item__text__secondary">{{ category.count }} products</span>
      </span>
    </li>
  `
})

Vue.component('page-item', {
  props: ['page'],
  template: '<li class="mdc-list-item">{{ page.title }}</li>'
})

Vue.component('cart', {
  props: ['itemCount', 'total'],
  template:
  `
  <span class="cart">
    <span>{{ itemCount }} items</span> &mdash; <span>{{ '$' + total }}</span> <i class="material-icons">shopping_cart</i>
  </span>
  `
})

Vue.component('store-info', {
  props: ['shopInfo'],
  template: '<span class="mdc-toolbar__title">{{ shopInfo.name }}</span>'
})

var app = new Vue({
  el: '#app',
  data: () => ({
    shop: [],
    errors: []
  }),

  // Fetches store info when the component is created.
  created() {
    axios.get(`https://raw.githubusercontent.com/dunkdunk/material-storefront/master/data/shop.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.shop = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
})
