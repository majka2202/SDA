console.log("dziala");
//zad1
const name='222';
let age =51;

age=52;
//hosting
var lastName='123'

//zad2
let zmienna1=25
let zmienna2=20
opOne=console.log(zmienna1%zmienna2);
onTwo=console.log(zmienna1/zmienna2);
//Warunki - zadanie3
//Utworz dwie zmienne a,b
//- Utworz warunek, gdy a > b to wyswietl w konsoli napis informujący
//- W innym wypadku zwroc alert('ups!')

let a=5;
let b=6;

if (a>b){
console.log('a jest większe od b')
}else {
console.log('ups')}
//Funkcje strzałkowe - zadanie4
//Utwórz funkcje getNumber która zwraca liczbe podana w parametrach
//funkcji, nastepnie wywolaj ja
const getNumber=(param)=> {
    return param;
}
const newNumber = getNumber(100);
//getNumber(100)
console.log(newNumber);

//obiekty-tosujemy zapis const bo jest ta sama referencja 
const book={
    title:'The last kKingdom',
    author:'Bernard Cornwell',
    genres: ['historical prose','adventure'],
    isPublic: true,
    rating:8.4,
};

//Obiekty - zadanie
//Utworz obiekt data za pomoca const
//- Zawiera informacje o wieku oraz imieniu
//- Dodaj kolejna wlasciwosc obiektu za pomoca "data.newProperty =
//…"
//- Wyswietl wiek z obiektu w konsoli

const person={
    name:"Arek",
    age: 30
};
person.surname="Bez"
console.log(person.name, person.age, person.surname);

//DOM
const header = document.querySelector('h1');
console.log(header);
header.textContent='text';

const listItems = document.querySelectorAll('li');

// DOM - Zadanie
// Pobierz dowolny element z html za pomoca querySelector i przypisz go
// do zmiennej const
// - Wyswietl element w konsoli

const span = document.querySelector('span');
console.log(span);
span.textContent="Created by Maja";

//tworzenie elementów
// Utwórz nowy element H2 w sekcji pierwszej oraz nadaj tekst dla tego
// elementu za pomoca el.textContent = 'text'
// - wypisz utworzony element w konsoli
const createtext = document.createElement('h2');
createtext.textContent='nowy element h2';
console.log(createtext);

//dodawanie elementów
// Pobierz wybrana sekcje za pomoca querySelector, a nastepnie dodaj
// utworzony element z poprzedniego zadania do tej sekcji

const addtext = document.querySelector('.idSekcja');
addtext.append(createtext);

//usuwanie elementu
const removetext = document.querySelector('.idSection2');
removetext.remove();
//zdarzenia (eventy)
// Zadanie - click
// Utworz przycisk w html oraz nadaj mu id
// - Pobierz element w JS
// - Napisz prosta funkcje strzalkowa która wypisuje tekst w konsoli
// - Dodaj funkcje na event click do pobranego przycisku
const button =document.querySelector('#button');

const writeText=() => {
    console.log('klik klik');
};
button.addEventListener('click',writeText);
// Zadanie - change
// Utworz input w HTML oraz nadaj mu ID
// - Pobierz element w JS oraz przypisz go do zmiennej
// - Napisz funkcje która pobiera wartosc elementu i wyswietla w
// konsoli
// - Dodaj event podczas zmiany wartosci do inputa wraz z funkcja
const inputCheck = document.querySelector("#idInput");
const changeFunc =(event) => {
    console.log(event.target.value);
};
inputCheck.addEventListener('change', changeFunc);
//submit

// const form = document.querySelector("#submit-form");
// const firstNameInput = document.querySelector("#first-name");

// form.addEventListener("submit", (event) => {
//   // Usuwa nam domyslnie zachowanie formularza
//   event.preventDefault();
//   console.log(firstNameInput.value);

//   Zadanie - submit
// Utworz formularz z jednym inputem oraz przyciskiem z typem submit
// - Pobierz formularz w JS
// - Utworz funkcje która pobierze oraz wyswietli dane z formularza
// - Dodaj funkcje do formularza wywolana na event submit
const getForm = document.querySelector('#submit-form');
const getName =document.querySelector('#first-name')
const funGetForm = () => {
    console.log(getForm.value);
}
getForm.addEventListener('submit', (event) =>{
event.preventDefault();
console.log(getName.value);
});