const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const $$desplegables = $$('.desplegable');
const $contador = $('#contador');
const $dias = $('#dias');
const $horas = $('#horas');
const $minutos = $('#minutos');
const $segundos = $('#segundos');

const dateEvento = "25 Feb 2025"

function countTimer (){
    const dateEvent = new Date(dateEvento)
    const currentDate = new Date()

    const totalSeconds = (dateEvent - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    $dias.innerHTML = days;
    $horas.innerHTML = hours;
    $minutos.innerHTML = minutes;
    $segundos.innerHTML = seconds;
}

setInterval(countTimer, 1000)

$$desplegables.forEach((desplegable) => {
    desplegable.querySelector('.desplegableTitle').addEventListener('click', () => {
        desplegable.querySelector('.desplegableContent').classList.toggle('active');
    })
})


