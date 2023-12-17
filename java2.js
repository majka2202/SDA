const getList = document.querySelector("#lista");
console.log(getList);

const getForm = document.querySelector("#submit-form");
console.log(getForm);

const getInput1 = document.querySelector("#your-name");
console.log(getInput1);

const getInput2 = document.querySelector("#your-surname");
console.log(getInput2);

const getSubmit = document.querySelector("#submit");
console.log(getSubmit);

// - Utwórz funkcję, która pobiera wartości inputów oraz tworzy nowy element <li> na bazie wartości imienia i nazwiska
const getStatusForm = () => {
    console.log(getForm.value);
}

getForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(getInput1.value);
    console.log(getInput2.value);

    // Utwórz nowy element <li> i przycisk "Usuń"
    const newListItem = document.createElement('li');
    newListItem.textContent = getInput1.value + ' ' + getInput2.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Usuń';
    removeButton.addEventListener('click', () => {
        newListItem.remove();
    });

    // Dodaj elementy do listy
    newListItem.appendChild(removeButton);
    getList.appendChild(newListItem);

    // Wyczyść wartości inputów po zatwierdzeniu formularza
    getInput1.value = '';
    getInput2.value = '';

    getStatusForm();
});