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
  props: ['info'],
  template: '<span class="mdc-toolbar__title">{{ info.name }}</span>'
})

var app = new Vue({
  el: '#app',
  data: {
    shop_info: {
      id: 24,
      name: "My Material Store"
    },
    products: [
      {
        title: 'My cool shirt',
        price: '39.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://unsplash.it/200/300/?random',
        url: '',
        category: 'Shirts'
      },
      {
        title: 'A nice hat',
        price: '30',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://unsplash.it/200/300/?random',
        url: '',
        category: 'Hats'
      },
      {
        title: 'Shirt of Gold',
        price: '199',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://unsplash.it/200/300/?random',
        url: '',
        category: 'Shirts'
      },
      {
        title: 'Snakeskin Socks',
        price: '49.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://unsplash.it/200/300/?random',
        url: '',
        category: 'Socks'
      },
      {
        title: 'A Used Shirt',
        price: '9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://unsplash.it/200/300/?random',
        url: '',
        category: 'Shirts'
      }
    ],
    categories: [
      {
        name: "Shirts",
        count: 3
      },
      {
        name: "Socks",
        count: 2
      },
      {
        name: "Hats",
        count: 2
      }
    ],
    pages: [
      {
        title: "Shipping",
        slug: "/shipping"
      },
      {
        title: "About us",
        slug: "/about-us"
      },
      {
        title: "Contact",
        slug: "/contact"
      }
    ]
  }
})
