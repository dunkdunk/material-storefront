$(document).ready(function() {
  const shopData = 'https://raw.githubusercontent.com/dunkdunk/material-storefront/master/data/shop.json';

  $.getJSON(shopData, function(data) {
    $('.mdc-toolbar__title').append(data.shop_info.name);

    $.each(data.products, function(i, val) {
      $('#products').append('<div class="mdc-layout-grid__cell"><div class="mdc-card"><img class="mdc-card__media-item mdc-card__media-item--fit" src="' + val.image + '"></img><section class="mdc-card__primary"><h1 class="mdc-card__title mdc-card__title--large">' + val.title + '</h1><h2 class="mdc-card__subtitle">$' + val.price + '</h2></section></div></div>');
    });

    $.each(data.categories, function(i, val) {
      $('#categories').append('<li class="mdc-list-item"><span class="mdc-list-item__text">' + val.name + '<span class="mdc-list-item__text__secondary">' + val.count + ' products</span></span></li>');
    });

    $.each(data.pages, function(i, val) {
      $('#pages').append('<li class="mdc-list-item">' + val.title + '</li>');
    });
  });
});
