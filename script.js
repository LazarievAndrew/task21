// Генерируем вложеный лист
// написать функцию generateList(array)

// принимает массив из чисел и массивов чисел, например:

// [1,2, [1.1,1.2,1.3] ,3]
// Нужно сгенерировать список из элементов, 
// а если в массиве встречается массив то делать вложенный список.

function innerArr (arr){

    var fragment = document.createDocumentFragment();
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    for (var i = 0; i < arr.length; i++){
        if (!isNaN(+arr[i])){
            var cloneLi = li.cloneNode();
            cloneLi.innerText = arr[i];
            ul.appendChild(cloneLi);

        } else {

            var ol = document.createElement('ol');
            var newLi = document.createElement('li');

            for ( var j = 0; j < arr[i].length; j++){
                var cloneNewLi = newLi.cloneNode();
                cloneNewLi.innerText = arr[i][j];
                ol.appendChild(cloneNewLi);
            }

            cloneLi.appendChild(ol);
        }
    }
    
    fragment.appendChild(ul);
    var body = document.querySelector('body');
    body.appendChild(fragment);
}

innerArr ([1,2, [1.1,1.2,1.3] ,3]);

innerArr ([4,5, [1.1,1.2,1.3] ,6, [1.1,1.2,1.3]]);
