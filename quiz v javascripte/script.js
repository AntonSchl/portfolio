let pocetSpravnychOdpovedi = 0;

let odpoved1 = prompt("Ako sa volá hlavné mesto Fínska?");
if (odpoved1.toUpperCase() === "HELSINKI") {
    pocetSpravnychOdpovedi += 1;
}
let odpoved2 = prompt("Ktorá značka áut má v znaku leva?");
if (odpoved2.toUpperCase() === "PEUGEOT") {
    pocetSpravnychOdpovedi += 1;
}
let odpoved3 = prompt("Ktorá známa americká firma vyrába smartfóny z operačným systémom iOS?");
if (odpoved3.toUpperCase() === "APPLE") {
    pocetSpravnychOdpovedi += 1;
}

let odpoved4 = prompt("Ako sa v českom jazyku povie december?");
if (odpoved4.toUpperCase() === "PROSINEC") {
    pocetSpravnychOdpovedi += 1;
}

let odpoved5 = prompt("Akú chemicku znackú má zlato?");
if (odpoved5.toUpperCase() === "AU") {
  pocetSpravnychOdpovedi += 1;
}

document.write("<p>Pocet uhadnutych otazok je: " + pocetSpravnychOdpovedi + " z 5.</p>");

if (pocetSpravnychOdpovedi === 5) {
    document.write("<p>Vyhrávaš hlavnú cenu, nový bicykel:)</p>");
}else if (pocetSpravnychOdpovedi === 4 || pocetSpravnychOdpovedi === 3) {
    document.write("<p>Vyhrávaš prostrednú cenu, kalkulačku.</p>");
}else {
    document.write("<p>Vyhrávaš cenu útechy, sáčok čipsov.</p>");
}





