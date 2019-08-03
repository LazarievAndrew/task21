// Генерируем вложеный лист
// написать функцию generateList(array)

// принимает массив из чисел и массивов чисел, например:

// [1,2, [1.1,1.2,1.3] ,3]
// Нужно сгенерировать список из элементов, 
// а если в массиве встречается массив то делать вложенный список.

function generateList (arr, parentNode){    // Чтобы сделать через рекурсию, добавил еще один аргумент

    var ul = document.createElement('ul'),
        fragment = document.createDocumentFragment();
    
    arr.forEach(function(element){

        var li = document.createElement('li');

        fragment.appendChild(li);

        Array.isArray(element) ? generateList (element, li) : li.innerText = element;

        ul.appendChild(fragment);

    });
    
    parentNode.insertBefore(ul,parentNode.children[0]);
};

var main = document.getElementById('main');

generateList ([4,5,6,3], main);
generateList ([4,5, [1.1,1.2,1.3], 6, [1.1,1.2,1.3]], main);
generateList ([1,2, [1.1,1.2,1.3], 3], main);