'use strict';
$(function () {
    //получить аяксом JSON
    $.getJSON('products.json', function(data) {
        let sale = data.filter(function(product) {
            return product.type==='sale';
        });
        let promo = data.filter(function(product) {
            return product.type==='promo';
        });
        let recommended = data.filter(function(product) {
            return product.type==='recommended';
        });
        let sortDataSet = [
                {title:'Распродажа', item: sale},
                {title:'Промо акция', item: promo},
                {title:'Рекомендуемые товары', item: recommended}
        ];
    });
    var tmpl = _.template(document.getElementById('productTemplate').innerHTML);
    var result = tmpl({sortDataSet});
    document.write( result );
});
