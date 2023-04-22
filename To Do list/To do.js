let textfield = document.querySelector('#text-field');
let addbutton = document.querySelector('#add-btn');
let todocontainer = document.querySelector('.todo-container');
addbutton.addEventListener('click', () => {

    if (textfield.value.trim().length == '')
        return;

    //    create div add class todo-item-----
    let todoitem = document.createElement('div');
    todoitem.classList.add('todo-item');
    todocontainer.appendChild(todoitem);


    // create p element add id =todo-text------
    let todotext = document.createElement('p');
    todotext.id = 'todo-text';
    todotext.innerText = textfield.value;
    todoitem.appendChild(todotext);

    // add double click to todotext-------------
    //     todotext.addEventListener('dblclick', () => {
    //     todotext.classList.add('line-through');
    //     editbtn.setAttribute("disabled", "disabled");
    // });




    // create button add id = edit-btn-----
    let editbtn = document.createElement('button');
    editbtn.id = 'edit-btn';

    // create img add it to edit-btn-----
    let editimg = document.createElement('img');
    editimg.src = 'edit.png';
    editbtn.appendChild(editimg);
    todoitem.appendChild(editbtn);

    // add click event to edit-btn here----
    editbtn.addEventListener('click', () => {
        textfield.value = todotext.innerText;
        let parent = editbtn.parentElement;
        parent.parentElement.removeChild(parent);
    });


    //  create button and id = delete-btn---
    let deletebtn = document.createElement('button');
    deletebtn.id = 'delete-btn';


    // create img add it to delete-btn-----
    let deleteimg = document.createElement('img');
    deleteimg.src = 'delete.png';
    deletebtn.appendChild(deleteimg);
    todoitem.appendChild(deletebtn);

    // add click event for deletebtn-------
    deletebtn.addEventListener('click', () => {
        let parent = editbtn.parentElement;
        parent.parentElement.removeChild(parent);
    })

    textfield.value = "";

})