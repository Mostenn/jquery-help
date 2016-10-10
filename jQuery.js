$('div') // выберет все элементы div.

$('div , a') // выберет все эллементы div и a

$('#el') // выберет элемент с id #el

$('.elements') // выберет все элементы с классом elements

$('li:odd') // выберет нечетные элементы li

$('li:even') // выберет четные элементы li

$('#el a') // выберет все элементы a, находящиеся внутри #el

$("div", $(".parent")) и $(".parent div") // выберет все элементы внутри элементов с классом parent (в этом случае второй вариант предпочтительнее). 

$('#nav').on("click", function () {
            $(this).css('color','red);
        });
// изменит цвет элемента с id nav, при клике
  
$('button').on("click", {user:"Test"} ,function (e) {
            $(this).css('color','red');
            console.log(e.data.user)
        });
// изменит цвет элемента с id nav, при клике, 
// и при этом событии (е) вызовет console.log(e.data.user), 
// user мы объявили в самой функции
  
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
  