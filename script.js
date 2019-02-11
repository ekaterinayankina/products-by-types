'use strict';
$(function () {
    //получить аяксом JSON
    let getData = $.getJSON('products.json', function(data){

    })
        .success(function(data) {
            alert("Успешное выполнение");
            let items = [];
            $.each(data, function(key, val){
                items.push('<li id="' + key + '">' + val + '</li>');
            });

            $('<ul/>', {
                'class': 'my-new-list',
                html: items.join('')
            }).appendTo('body');
        })
        .error(function() { alert("Ошибка выполнения"); })
        .complete(function() { alert("Завершение выполнения"); });
});
