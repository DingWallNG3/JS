
        $('.show-product').click(function () {
            $.ajax({
                url: 'https://codingapple1.github.io/data.json',
                type: 'GET'
            }).done(function(data) {
                $('.card-img-top').attr('src', data.img);
                $('.card-title').html(data.brand + ' ' + data.model);
                $('.card-text').html(data.price);
            }).fail(function() {

            }).always(function() {

            });
        });