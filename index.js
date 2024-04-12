console.log('Funguju')

// Oživ xylofon, aby kliknutí na jednotlivé kameny měnilo nadpis stránky podle písmene na kameni a ozval se příslušný tón.

// ukázka

// Vycházej z kódu v tomto repozitáři.

// Pracuj v souboru index.js.

// Soubory index.html, styly.css a složku tony si jen zběžně prohlédni.

// Pomocí querySelectorAll najdi na stránce všechny kameny a přidej jim posluchač události na kliknutí.

// V posluchači změň nadpis stránky <h1> na text stištěného kamene.

// Se stiskem přehraj i příslušný mp3 soubor ze složky tony.

// Tón přehraješ tak, že si do proměnné uložíš nové audio a poté na něm zavoláš metodu play.

// const zvuk = new Audio('tony/D.mp3')
// zvuk.play()
// Bonus

// Přidej ovládání přes klávesnici.

// Přidej posluchač události keydown na celou stránku.

// Pokud vlastnost code vzniklé události začíná na Digit, ulož si do proměnné následující číslo. Například z Digit4 si ulož 4.

// Pokud je číslo větší nebo rovno jedné a menší nebo rovno počtu kamenů, přehraj tón na příslušném kamenu. Nezapomeň, že pole se v JavaScriptu indexují od nuly, takže například pro číslo 1 přehraj tón na kameni s indexem 0.

const kameny = document.querySelectorAll('.kamen');
kameny.forEach((kamen) => {
  kamen.addEventListener('click', (e) => {
    const pismena = e.target.textContent
    document.querySelector('h1').innerHTML = `<h1>${pismena}</h1>`;
    const zvuk = new Audio(`tony/${pismena}.mp3`);
    zvuk.play();
  });
});

// NEFUNKČNÍ A NEÚPLNÝ BONUS:
// document.querySelector("body").addEventListener("keydown", (e) => {
//   const pismena = e.target.textContent
//   document.querySelector('h1').innerHTML = `<h1>${pismena}</h1>`;
//   const zvuk = new Audio(`tony/${pismena}.mp3`);
//   zvuk.play();
// });


