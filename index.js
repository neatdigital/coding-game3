// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/*
MODE TAILLE DE CODE
Il faut passer le plus de tests avec le code le plus court.

Objectif

In mathematics, an autobiographical number is an integer m in which each digit d at position n counts how many instances of digit n are in m.
Your task is to print the sum of all autobiographical numbers in a given list of numbers i with length n.

Example:

i = 2020, 2021
2020 is an autobiographical number, because 0 (the first index) appears 2 times (the first digit) in 2020, 1 (the second index) appears 0 times (the second digit) in 2020, 2 (the third index) appears 2 times (the third digit) in 2020 and 3 (the fourth index) appears 0 times (the fourth digit) in 2020.
2021 isn't an autobiographical number because 3 (the fourth index) should appear 1 time in 2021 but it does not.

Entrée

Line 1: An integer n for the number of integers to check (and sum)
Line 2: n integers separated by a space

Sortie

The sum of all autobiographical numbers

Contraintes

2 <= n <= 5
0 < integer values i <= 1000000000
====================
Exemple

Entrée
2
2020 2021

Sortie
2020
====================
Exemple

Entrée
3
3211000 21200 120001

Sortie
3232200

====================
Exemple

Entrée
4
521001000 42101000 823401003 21200

Sortie
563123200
====================
Exemple

Entrée
5
2021 123456 0 1010101 987654321

Sortie
0
*/

//const n = parseInt(readline());
//var inputs = '2020 2021';
//var inputs = '3211000 21200 120001';
//var inputs = '521001000 42101000 823401003 21200';
var inputs = '2021 123456 0 1010101 987654321';
let sum = 0;
for (const input of inputs.split(' ')) {
  let isAuto = true;
  input.split('').forEach((digit, index) => {
    const search = input.match(new RegExp(index, 'g'));
    isAuto *= search ? search.length == digit : digit == 0;
  });
  if (isAuto) sum += +input;
}
console.log(sum);
