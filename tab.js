// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).click(function() {
//         openTab(i);
//     });
// }

$('.list').click(function(e) {
    //탭열기(내가 누른 버튼에 숨겨진 숫자)
    openTab(e.target.dataset.id);
});

function openTab(num) {
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(num).addClass('active');
    $('.tab-content').eq(num).addClass('show');
}
var obj = {brand: 'BMW', model: 520};

// document.getElementsByClassName('tab-content')[0].querySelector('h4').innerText = obj.brand;
// document.getElementsByClassName('tab-content')[0].querySelectorAll('p')[1].innerText = obj.model;

var data = [{brand: 'BMW'}, {model: 520}];

$('#title').html(data[0].brand);
$('#text').html(data[1].model);
