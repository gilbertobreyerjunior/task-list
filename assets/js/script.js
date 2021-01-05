let data = [{


id: 1,
title: "Estudar Node"



},
{

id: 2,
title: "Estudar HTML5"

},
{
id: 3,
title: "Estudar JavaScript"


},

{

id: 4,
title: "Estudar Laravel"


},

{
id: 5,
title: "Estudar Sass"

}

];


data.forEach(task => {

let li = document.createElement('li');


li.innerHTML = `<input type="checkbox" id="task-${task.id}">
                <label for="task-${task.id}">${task.title}</label>
`;


li.querySelector('input').addEventListener('change', e => {

    if (e.target.checked) {

      li.classList.add('complete');

    } else {

        li.classList.remove('complete');

    }


});


document.querySelector('.todo').append(li);

});

// console.log(data);
