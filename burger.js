const knapper = document.querySelector("button"); /*tager fat i begge knapper*/
const nav = document.querySelector("nav"); /*definerer nav*/

/*knapperne lytter efter et klik*/
knapper.addEventListener("click", toggleMenu);

/*når der klikkes, igangsættes følgende funktion*/
function toggleMenu() {
  nav.classList.toggle("shown"); /*der toggles mellem shown er fra/til*/

  /*laver en konstant som lytter efter om "knapper" har shown eller ej*/
  const menuShown = nav.classList.contains("shown");

  /*hvis menu opdager at knapper har shown, skal den tilføje open, 
ellers skal den fjerne open*/
  if (menuShown) {
    knapper.classList.add("open");
  } else {
    knapper.classList.remove("open");
  }
}
