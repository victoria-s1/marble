$(document).ready(function() {
    $('.rus').addClass('highlight-lang');
    $('.rus').on('click', function() {
        $('html').attr('lang', 'ru');
        $('.eng').removeClass('highlight-lang');
        $('.rus').addClass('highlight-lang');
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(rus[key]);
       });
    });
 
 
    $('.eng').on('click', function() {
        $('html').attr('lang', 'en');
        $('.rus').removeClass('highlight-lang');
        $('.eng').addClass('highlight-lang');
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(eng[key]);
       });
    });
 
 
 
    var rus = {
        nature: 'НАТУРАЛЬНЫЙ МРАМОР',
        natureHome: 'природа у тебя дома',
        mainNav: 'ГЛАВНАЯ',
        mainNav1: 'О НАС',
        mainNav2: 'ПРОЕКТЫ',
        mainNav3: 'НОВОСТИ',
        mainNav4: 'ПАРТНЁРЫ',
        mainNav5: 'КОНТАКТЫ',
        search: 'ПОИСК',
        catalogCaption: 'КАТАЛОГ МРАМОРА',
        catalogList: 'Мраморные лестницы',
        catalogList1: 'Гранитная плитка',
        catalogList2: 'Подоконники из мрамора',
        catalogList3: 'Мраморная мозаика',
        catalogList4: 'Мраморные полы и стены',
        catalogList5: 'Мраморные столешницы',
        catalogList6: 'Розпись по мрамору',
        catalogList7: 'Ванны из мрамора',
        catalogList8: 'Камины из мрамора и гранита',
        catalogCaption1: 'РЕДАКТОР ИНТЕРЬЕРА',
        titlePost: 'БМБС-ОСЕНЬ-ИТАЛИЯ',
        textPost: 'Бмбс-осень-италия Осенний вернисаж от БМБС мрамор унылым не назовешь Рады представить вам новинки нашего вернисажа, они несомненно вернут Вас в лето буйствами красок и узоров и напомнят лучшее его...',
        article1: 'Вам необходимо купить мрамор? Вы хотите сделать интерьер в камне? Наша компания может Вам в етом помочь!',
        article2: 'Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне, наша компания может Вам в етом помочь. Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне. Наша компания может Вам в етом помочь. Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне. Наша компания может Вам в етом помочь.',
        article3: 'Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне, наша компания может Вам в етом помочь. Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне. Наша компания может Вам в етом помочь. Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне. Наша компания может Вам в етом помочь.Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне, наша компания может Вам в етом помочь. Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне. Наша компания может Вам в етом помочь. Вам необходимо купить мрамор, Вы хотите сделать интерьер в камне. Наша компания может Вам в етом помочь.',
        gotoCatalog: 'перейти к просмотру каталога',
        catalogStown: 'Каталог камня',
    };
    var eng = {
        nature: 'NATURE MARBLE',
        natureHome: 'nature in youre house',
        mainNav: 'MAIN',
        mainNav1: 'ABOUT',
        mainNav2: 'PROJECTS',
        mainNav3: 'NEWS',
        mainNav4: 'PARTNERS',
        mainNav5: 'CONTACTS',
        search: 'SEARCH',
        catalogCaption: 'CATALOG MARBLE',
        catalogList: 'Marable downstairs',
        catalogList1: 'Granite tiles',
        catalogList2: 'Marble window sills',
        catalogList3: 'Marble mosaic',
        catalogList4: 'Marble floors and walls',
        catalogList5: 'Marble countertops',
        catalogList6: 'Inscription on marble',
        catalogList7: 'Marble bathtubs',
        catalogList8: 'Fireplaces in marble and granite',
        catalogCaption1: 'INTERIOR EDITOR',
        titlePost: 'БМБС-AUTUMN-ITALY',
        textPost: 'BMBS-autumn-italy Autumn opening day from BMBS marble is not dull We are glad to present you the novelties of our opening day, they will undoubtedly return you to summer with riots of colors and patterns and will remind you of the best of it ...',
        article1: 'Do you need to buy marble? Do you want to make an interior in stone? Our company can help you with this!',
        article2: 'You need to buy marble, you want to make an interior in stone, our company can help you with this. You need to buy marble, you want to make an interior in stone. Our company can help you with this. You need to buy marble, you want to make an interior in stone. Our company can help you with this. You need to buy marble, you want to make an interior in stone, our company can help you with this. You need to buy marble, you want to make an interior in stone.',
        article3: 'You need to buy marble, you want to make an interior in stone, our company can help you with this. You need to buy marble, you want to make an interior in stone. Our company can help you with this. You need to buy marble, you want to make an interior in stone. Our company can help you with this. You need to buy marble, you want to make an interior in stone, our company can help you with this. You need to buy marble, you want to make an interior in stone. Our company can help you with this. You need to buy marble, you want to make an interior in stone. Our company can help you with this.',
        gotoCatalog: 'go to catalog',
        catalogStown: 'Stown catalog',
    };
 });