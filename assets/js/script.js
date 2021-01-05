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


}

];


data.forEach(task => {

let li = document.createElement('li');


li.innerHTML = `<input type="checkbox" id="task-1">
                <label for="task-1">HTML5</label>
`;

document.querySelector('.todo').append(li);

});

// console.log(data);
