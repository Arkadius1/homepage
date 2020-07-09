const firstName = "Arek";
const age = "25";

const greet = (age, firstName) => {
console.log(`Siema nazywam sie ${firstName} i mam ${age} lat.`);
}
//alert(`Siema nazywam sie ${firstName} i mam ${age} lat.`);

const emptyParagraph = document.querySelector('.week-summary__description--js');
emptyParagraph.innerHTML = 'To jest dodatkowa treśc wygenerowana przez JavaScript';

greet (age, firstName)