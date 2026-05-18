// Option #1: Easy but not very elegant
document.querySelector('#js-todo-create').addEventListener('click', function () {
    var textInput = document.querySelector('#js-todo-create-text'),
        textInputValue = textInput.value;

    if (textInputValue !== '') {
        var todoEntry = document.createElement('li'),
            linkDone = document.createElement('a'),
            linkRemove = document.createElement('a');

        textInput.value = '';

        linkDone.classList.add('js-todo-entry-done');
        linkDone.href = 'javascript:void(0);';
        linkDone.title = 'Mark this entry as done';
        linkDone.textContent = '[ Done ]';
        linkDone.addEventListener('click', function (element) {
            element.target.parentElement.style.textDecoration = 'line-through';
        });

        linkRemove.classList.add('js-todo-entry-remove');
        linkRemove.href = 'javascript:void(0);';
        linkRemove.title = 'Remove this entry';
        linkRemove.textContent = '[ Remove ]';
        linkRemove.addEventListener('click', function (element) {
            element.target.parentElement.remove();
        });

        todoEntry.textContent = textInputValue + ' ';
        todoEntry.appendChild(linkDone);
        todoEntry.appendChild(linkRemove);

        document.querySelector('#js-todo-entries').appendChild(todoEntry);
    }
});
// Option #1: END

// Option #2: More complex but more elegant
// document.querySelector('#js-todo-create').addEventListener('click', function () {
//     var textInput = document.querySelector('#js-todo-create-text'),
//         textInputValue = textInput.value;

//     if (textInputValue !== '') {
//         textInput.value = '';

//         var todoEntry = `
//             <li>
//                 <span>${textInputValue}</span>
//                 <a class="js-todo-entry-done" href="javascript:void(0);" title="Mark this entry as done">[ Done ]</a>
//                 <a class="js-todo-entry-remove" href="javascript:void(0);" title="Remove this entry">[ Remove ]</a>
//             </li>
//         `;

//         document.querySelector('#js-todo-entries').insertAdjacentHTML('afterbegin', todoEntry);
//     }
// });

// document.querySelector('#js-todo-entries').addEventListener('click', function (element) {
//     var todoEntry = element.target;

//     if (todoEntry.closest('.js-todo-entry-done')) { todoEntry.parentElement.style.textDecoration = 'line-through'; }
//     if (todoEntry.closest('.js-todo-entry-remove')) { todoEntry.parentElement.remove(); }
// });
// Option #2: END