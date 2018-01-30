// checkImageSize();
window.onload = function () {
    run(1);
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("b-slider-container__item");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    // console.log(slideIndex);
}

function dropdown() {
    var dropdown = document.querySelector(".b-dropdown-menu");

    if (!dropdown.classList.contains("b-dropdown-menu_visible")) {
        dropdown.classList.add("b-dropdown-menu_visible");
    } else {
        dropdown.classList.remove("b-dropdown-menu_visible");
    }
}

function mobileMenuOpen(){
    var menu = document.getElementById("menu");
    var body = document.querySelector(".b-body");

    if(!menu.classList.contains("menu-opened")) {
        menu.classList.add("menu-opened");
        body.classList.add("no-scroll");
        console.log(body);
    } else {
        menu.classList.remove("menu-opened");
        body.classList.remove("no-scroll");
    }
}


/*~~~ Training test ~~~*/
var english_array = [
    ["Are you ___ at the moon?", "look", "looks", "looking", "looked", 3],
    ["We ___ football next Sunday.", "will play", "playing", "plays", "played", 1],
    ["I want you to ___ here with me.", "staying", "stay", "stayed", "stays", 2],
    ["Where ___ you from?", "do", "are", "is", "am", 2],
    ["Give me ___ phone.", "a", "the", "an", "-", 1],
    ["The perfect end ___ a long day.", "in", "at", "into", "for", 4]
];

var geography_array = [
  ["Где зародилась география как наука?", "Индия", "Китай", "Греция", "Германия", 3],
  ["Ближайшая к солнцу планета?", "Меркурий", "Марс", "Земля", "Планета обезьян", 1],
  ["Прибор, определяющий направление ветра?", "Компас", "Суппорт", "Крюгер", "Флюгер", 4],
  ["Течение какой реки направлено не к экватору, а от него?", "Амазонка", "Нил", "Южный буг", "Волга", 2],
  ["Длина экватора?", "40 000км", "30 000км", "50 000км", "100 000км", 1],
  ["Сколько штатов в США?", "48", "38", "52", "50", 4]
];

var literature_array = [
  ["Кто из них персонаж отрицательный?", "Фродо", "Саурон", "Леголас", "Гендальф", 2],
  ["Имя сыщика Фандорина из романов Бориса Акунина", "Адольф Бенедиктович", "Аркадий Петрович", "Эдуард Максимович", "Эраст Петрович", 4],
  ["Кто убил А.С. Пушкина?", "Дорн", "Барских", "Дантес", "Монатик", 3],
  ["Через сколько лет возвращается ОНО в романе С. Кинга?", "9", "12", "27", "32", 3],
  ["О какой эпохе идет речь в романе 'Ярмарка тщеславия?'", "Наполеоновских войн", "Палеолита", "Научных открытий", "Дворцовых переворотов", 1],
  ["Автор повести Князь Серебряный", "А.К. Толстой", "М.Ю. Лермонтов", "Л.Н. Толстой", "В.О. Пелевин", 1]
];

var main_test = [
    ["Сколько сантиметров в метре?","10","1024","100","1000",3],
    ["Перевод слова: Hello","Как дела?","Привет","Ты","Дом",2],
    ["Перевод слова: Dog","Собака","Кошка","Дерево","Сосиска",1],
    ["Сколько месяцев в году?","10","11","12","13",3],
    ["Перевод слова: Tree","Три","Собака","Дерево","Дом",3],
    ["Перевод слова: Wall","Стена","Дом","Башня","Война",1]
];

var data_array = main_test;

var plus = 0; //Количество правильных ответов
var time = 0;
var cur_answer = 0; //Индекс массива вопроса
var count_answer = data_array.length;

function sec() {
    time++;
    // document.getElementById('time').innerHTML='Затрачено времени: ' + time + ' сек';
}

function changeTest(num){
    var num = num;
    var variants = document.getElementsByClassName("b-test-themes__item");
    for(var i = 0; i < variants.length; i++) {
        if (num == i + 1) {
            variants[i].classList.add("b-test-themes__item_active");
            console.log(variants[i]);
        } else {
            variants[i].classList.remove("b-test-themes__item_active");
        }
    }

    if (num == 1) {
        data_array = geography_array;
    } else if (num == 2) {
        data_array = literature_array;
    } else if (num == 3) {
        data_array = english_array;
    } else {
        data_array = main_test;
    }
}

function check(num){

    if(num == 0){
        var variants = document.getElementsByClassName("b-test-themes__item");
        // variants[0].removeAttribute('onclick');
        for(var i = 0; i < variants.length; i++) {
            variants[i].removeAttribute('onclick');
        }

        document.getElementById('option1').classList.remove("b-test-block__btn_hidden");
        document.getElementById('option2').classList.remove("b-test-block__btn_hidden");
        document.getElementById('option3').classList.remove("b-test-block__btn_hidden");
        document.getElementById('option4').classList.remove("b-test-block__btn_hidden");
        document.getElementById('question').classList.remove("b-test-block__btn_hidden");
        document.getElementById('time').classList.remove("b-test-block__time_hidden");
        document.getElementById('restart').classList.add("b-test-block__restart-btn_hidden");

        document.getElementById('option1').innerHTML=data_array[cur_answer][1];
        document.getElementById('option2').innerHTML=data_array[cur_answer][2];
        document.getElementById('option3').innerHTML=data_array[cur_answer][3];
        document.getElementById('option4').innerHTML=data_array[cur_answer][4];
        document.getElementById('question').innerHTML=data_array[cur_answer][0];

        document.getElementById('start').style.display='none';

        var intervalID = setInterval(sec, 1000);

    } else {

        if( num ==  data_array[cur_answer][5]){
            plus++;
            document.getElementById('result').innerHTML='Верно!';
        }else{
            document.getElementById('result').innerHTML="Неверно! Правильный ответ: " + data_array[cur_answer][data_array[cur_answer][5]];
        }

        cur_answer++;
        if(cur_answer < count_answer){

            document.getElementById('option1').innerHTML=data_array[cur_answer][1];
            document.getElementById('option2').innerHTML=data_array[cur_answer][2];
            document.getElementById('option3').innerHTML=data_array[cur_answer][3];
            document.getElementById('option4').innerHTML=data_array[cur_answer][4];
            document.getElementById('question').innerHTML=data_array[cur_answer][0];

        }else{

            document.getElementById('time').id = 'stop';
            document.getElementById('option1').classList.add("b-test-block__btn_hidden");
            document.getElementById('option2').classList.add("b-test-block__btn_hidden");
            document.getElementById('option3').classList.add("b-test-block__btn_hidden");
            document.getElementById('option4').classList.add("b-test-block__btn_hidden");
            document.getElementById('question').classList.add("b-test-block__btn_hidden");
            document.getElementById('restart').classList.remove("b-test-block__restart-btn_hidden");

            var percent =  Math.round(plus/count_answer*100);
            var res = 'Плохо!';
            if(percent>70) res = 'Хорошо!';
            if(percent==100) res = 'Отлично!';

            document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>' + res;
        }
    }
}

function reload() {
    location.reload(true);
}


/*~~~ Map init ~~~*/

function initMap() {
    var fullScreenCenter = {lat: 37.3350669, lng: -122.1003824};
    var uluru = {lat: 37.3350669, lng: -122.0091726};
    if (window.innerWidth < 500) {
        fullScreenCenter = uluru;
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: fullScreenCenter,
        gestureHandling: 'none'
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    console.log(window.innerWidth);
}


// /*~~~ Our clients photos ~~~*/
// function imageSize(obj) {
//     var max = 230;
//     // console.log(obj.width);
//     if(obj.width > max && obj.width <= obj.height) {
//         obj.style.width = '230px';
//     } else if(obj.width > obj.height) {
//         obj.style.height = '230px';
//         obj.style.marginLeft = '-30%';
//     }
// }
//
//
// function checkImageSize() {
//     var image = document.querySelectorAll(".image-size");
//     for (var i = 0; i < image.length; i++) {
//         imageSize(image[i]);
//         console.log(image[i]);
//     }
// }



var Iterator = function(items) {
    this.index = 0;
    this.items = items;
};
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
};

function run(num) {
    // var items = ['one', 2, 3, "четыре", 5];
    var container = document.querySelector(".b-our-clients-items");
    var items = [
        {
            'src': 'img/einstein.jpg',
            'name': 'Альберт Энштейн'
        },
        {
            'src': 'img/stevejobs.jpg',
            'name': 'Стив Джобс'
        },
        {
            'src': 'img/shnurov.jpg',
            'name': 'Сергей Шнуров'
        },
        {
            'src': 'img/timati.jpg',
            'name': 'тимати'
        },
        {
            'src': 'img/vader.png',
            'name': 'vader'
        },
        {
            'src': 'img/che.jpg',
            'name': 'Че Гевара'
        },
        {
            'src': 'img/martin.jpg',
            'name': 'Джордж Мартин'
        },
        {
            'src': 'img/palaev.jpg',
            'name': 'Андрей Палаев'
        },
        {
            'src': 'img/house.jpg',
            'name': 'Доктор Хаус'
        }

    ];

    var iter = new Iterator(items);
    var paginationBtn = document.querySelectorAll(".b-pagination__item");

    if (num == 1) {
        container.innerHTML ="";
        while (iter.hasNext() && iter.index < 6) {
            var item = iter.next();
            createElement(item.src, item.name);
            // console.log(item.src);
        }
    } else if (num == 2) {
        container.innerHTML ="";
        while (iter.hasNext()) {
            var item = iter.next();

            if(iter.index > 6) {
                createElement(item.src, item.name);
            }

        }
    }
}

function createElement(src, title) {
    var container = document.querySelector(".b-our-clients-items");
    var item = document.createElement('div');
    var div = document.createElement('div');
    var img = document.createElement('img');
    var name = document.createElement('div');
    img.onload = checkImageSize;
    img.setAttribute('src', src);
    img.className = 'image-size';
    item.className = 'b-our-clients-item';
    div.className = 'b-our-clients-item__image';
    name.className = 'b-our-clients-item__name';
    name.innerHTML = title;
    div.appendChild(img);
    item.appendChild(div);
    item.appendChild(name);
    container.appendChild(item);
}

/*~~~ Our clients photos ~~~*/
function imageSize(obj) {
    var max = 230;
    console.log(obj.width);
    if(obj.width > max && obj.width <= obj.height) {
        obj.style.width = '230px';
    } else if(obj.width > obj.height) {
        obj.style.height = '230px';
        obj.style.marginLeft = '-30%';
    }
}


function checkImageSize() {
    var image = document.querySelectorAll(".image-size");
    for (var i = 0; i < image.length; i++) {
        imageSize(image[i]);
        console.log(image[i]);
    }
}
