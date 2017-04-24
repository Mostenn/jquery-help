// callback-функция, которая выполнится, когда DOM будет загружен. 
$(function(){
   // DOM загружен. 
 });

// селекторы
$('div') // выберет все элементы div.

$('div , a') // выберет все эллементы div и a

$('#el') // выберет элемент с id #el

$('.elements') // выберет все элементы с классом elements

$('li:odd') // выберет нечетные элементы li

$('li:even') // выберет четные элементы li

$('#el a') // выберет все элементы a, находящиеся внутри #el

$('a:not("#el a")'); // выберет все элементы a, не находящиеся внутри #el

$("div", $(".parent")) и $(".parent div") // выберет все элементы внутри элементов с классом parent (в этом случае второй вариант предпочтительнее). 

$('#nav').on("click", function () {
            $(this).css('color','red');
        });
// изменит цвет элемента с id nav, при клике

$('#nav').on("click", function () {
            $('span', this).css('color','red');
        });
// изменит цвет span, который нвходится внутри элемента с id nav, при клике
  
$('button').on("click", {user:"Test"} ,function (e) {
            $(this).css('color','red');
            console.log(e.data.user)
        });
// изменит цвет элемента с id nav, при клике, 
// и при этом событии (е) вызовет console.log(e.data.user), 
// user мы объявили в самой функции

$('.someDiv').on("click", function (e) {
            $('#modal-div').css("background-color", $(e.target).css("background-color"));
        });
// при клике на .someDiv, будет меняться фон #modal-div, на тот что указан в .someDiv...
// $(e.target) это тот элемент с которым было соверешено событие


  $('<a/>', {
        text    :   'Ссылка на Яндекс',
        title   :   'Это Яндекс',
        href    :   'http://ya.ru',
        target  :   '_blank',
        'class' :   'red',
        css     :   {
                     fontSize       :   16,
                     textTransform  :   'uppercase',
                     fontWeight     :   700      
                    },
        click   :   function(){
            alert('Сейчас пойдем на Яндекс');
            return true;
        }                             
    }).appendTo('#parentDiv');
// внутри элемента parentDiv, создаёт ссылку на яндекс

$("#book").animate({
    opacity: 0.25,
    left: "+=50"
  }, 5000);
 // анимирует #book, меняет свойства его css с заданной скоростью

/*-------------Ajax---------------------------------------*/

<p id="content"></p>
<form id="mail_send">
    <input type="email" name="mail">
    <button type="submit">Send</button>
</form>

<script>
    $('#mail_send').submit(function () {
        var str = $(this).serialize(); // тут получаем сериализованую строку значений полей формы
        $.ajax({
            type: "POST", // метод
            url: "mail.php", // путь
            data: str, // передаём в php сериализованую строку, которую он получет виде массива $_POST
            success: function (html) { // функция в случе успеха
                $('#content').html(html); // записываем в #content, то что нам вернул файл mail.php
            }
        });
        return false; // для того что бы остановить выполнение
    });
</script>

/*--------------------Передаём данные с PHP в JS с помощью Ajax--------------------------------*/
// cars.php
<?php
$cars = ['audi','bmw','lexus'=>['rx', 'gx']];
print json_encode($cars); // ковертируем в JSON формат
?>
// js
$('#cars').click(function () {
        $.ajax({
            url: "cars.php",
            success: function (html) {
                var res = $.parseJSON(html); // конвертируем плученый JSON, в javascript-объект
                console.dir(res); // выводим в консоль
            }
        });
    });


/*--------------------Передаём данные с JS в PHP с помощью Ajax--------------------------------*/
// cars.php
<?php
print_r($_POST['cars']);
?>
   
var cars = ['toyota', 'nissan', 'honda']; // js массив

    $('#cars').click(function () {
        $.ajax({
            url: "php/hello.php",
            type: "POST",
            data: {cars: cars}, // передаём массив cars, в PHP получем его в виде $_POST['cars']
            success: function (html) {
                console.log(html); // выводим в консоль
            }
        });
    });