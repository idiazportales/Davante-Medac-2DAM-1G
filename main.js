import { sumar, restar, multiplicar, dividir } from "./operaciones.js"; 

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const res = document.getElementById('resultado');

document.getElementById('btnResultado').addEventListener('click', () => {
    console.log("Calculando...");
});