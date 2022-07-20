import $ from "jquery";
import "slick-carousel";

$(".carousel").slick({
    dots: true
});


var arrLang = {
    'eng' : {
        'help' : 'We help those who need it',
        'city' : 'Kyiv • Borodyanka • Moschun • Bucha',
        'citydn' : '• Donetsk region •',
        'wewill' : 'We will live!',
        'orga' : 'A non-profit organization created to help the military and people in need',
        'wowe' : 'What are our duties?',
        'wowe1' : 'During the war more and more people Are incapable of satysfying their essential needs And the needs of their families’ - We provide high-quality nutritious food.',
        'wowe2' : 'A number of people have lost their homes and are in need of clothing - We give warmth hands-to-hands.',
        'wowe3' : 'Military personell also need ammunition, medication and neccesarry equipment - We help to defend our values in comfort.',
        'wowe4' : 'We are coping with other volunteers throughout the country - We are there where we are needed the most.',
        'wowe5' : 'This all needs funding for purchase and providing - Your help will be a big difference!',
        'wowe6' : 'How are we achieving this?',
        'ourr' : 'Our plans',
        'our1' : 'Providing food and clothing to all who need it',
        'our2' : 'Buying transport and ammunition for employees',
        'our3' : 'Sending humanitarian aid to the war zone',
        'our4' : 'Supporting and participate in the rehabilitation of the wounded soldiers',
        'our5' : 'Taking part in the reconstruction of housing destroyed by war',
        'support1' : 'We work from the first days of Russo- Ukrainian war* until complete VICTORY',
        'support2' : 'One-time donation for purchase and logistics',
        'support3' : 'Monthly subscription for the specified amount',
        'support4' : 'If you have any proposals or you want to cooperate',
        'donate' : 'DONATE',
        'sponsor' : 'SPONSOR',
        'email' : 'Enter your e-mail or phone number',
        'phone' : 'Your offer',
        'submit' : 'Send'
    },
    'ukr' : {
        'help' : 'Допомогаємо тим, хто цього потребує',
        'city' : 'Київ • Бородянка • Мощун • Буча ',
        'citydn' : '• Донецька область •',
        'wewill' : 'ЖИТИМЕМО',
        'orga' : 'Неприбуткова організація, створена для допомоги військовим та нужденним',
        'wowe' : 'Що робимо?',
        'wowe1' : 'Під час війни все більше людей залишаються неспроможними прогодувати себе та свою сім’ю — годуємо ситно та смачно' ,
        'wowe2' : 'Безліч людей втратило домівки і потребують одягу щоб зігрітись — передаємо тепло із рук в руки',
        'wowe3' : 'Військовим також потрібні амуніція, ліки та теплий одяг  — допомогаємо боронити наш спокій у комфорті',
        'wowe4' : 'Співпрацюємо з волонтерами різних областей по всій Україні — ми там, де найбільше потрібні',
        'wowe5' : 'Все це потребує немало коштів на закупівлю та реалізацію — ваша допомога має значення!',
        'wowe6' : 'Як робимо?',
        'ourr' : 'Наші плани',
        'our1' : 'Забезпечувати харчуванням та одягом усіх нужденних',
        'our2' : 'Закуповувати транспорт та амуніцію для військових',
        'our3' : 'Відправляти гуманітарну допомогу в зону бойових дій',
        'our4' : 'Підтримувати та приймати участь у реабілітації поранених',
        'our5' : 'Приймати участь у відбудові житла, зруйнованого орками',

    }
}

$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')])
        })
    })
})


$('#copy').click(function() {
	    var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($('#text').text()).select();
	    document.execCommand("copy");
	    $temp.remove();
	});
