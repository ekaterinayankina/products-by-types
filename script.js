'use strict';
$(function () {
    $.fancybox.showLoading();
    setTimeout(function () {
        $.getJSON('products.json', function (data) {
            let sale = {
                title: "Распродажа",
                item: filterData(data, 'sale')
            };

            let promo = {
                title: "Промо-акция",
                item: filterData(data, 'promo')
            };

            let recommended = {
                title: "Рекомендуемые товары",
                item: filterData(data, 'recommended')
            };

            let tmpl = document.getElementById('productTemplate').innerHTML.trim();
            tmpl = _.template(tmpl);

            renderTemplate(sale, tmpl, "sale");
            renderTemplate(promo, tmpl, "promo");
            renderTemplate(recommended, tmpl, "recommended");
        })
            .done(function () {
                console.log("Success");
            })
            .fail(function () {
                console.log("Try again");
            })
            .always(function () {
                $.fancybox.hideLoading();
                console.log("Complete");
            });
    }, 3000);
});

function filterData(data, text) {
    return data.filter(function (product) {
        return product.type === text
    });
}

function renderTemplate(list, tmpl, id) {
    document.getElementById(id).innerHTML = tmpl({
        temp: list
    });
}
