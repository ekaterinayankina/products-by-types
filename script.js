'use strict';
$(function () {
    $.fancybox.showLoading();
    setTimeout(function () {
        $.getJSON('products.json')
            .done(function (data) {
                showResult(data);
                console.log("Success");
            })
            .fail(function () {
                console.log("Try again");
            })
            .always(function () {
                $.fancybox.hideLoading();
                console.log("Complete");
            });
    }, 2000);
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

function showResult(products) {
    let sale = {
        title: "Распродажа",
        item: filterData(products, 'sale')
    };

    let promo = {
        title: "Промо-акция",
        item: filterData(products, 'promo')
    };

    let recommended = {
        title: "Рекомендуемые товары",
        item: filterData(products, 'recommended')
    };

    let tmpl = document.getElementById('productTemplate').innerHTML.trim();
    tmpl = _.template(tmpl);

    renderTemplate(sale, tmpl, "sale");
    renderTemplate(promo, tmpl, "promo");
    renderTemplate(recommended, tmpl, "recommended");
}