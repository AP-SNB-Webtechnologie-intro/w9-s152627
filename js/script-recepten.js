/* 
Surf naar de "coffee API" op https://sampleapis.com/api-list/coffee
Zoek naar de correct url met endpopint waarbij je 20 resultaten van hot-coffee-recepten in een json-file te zien krijgt.
Test of je de correcte endpoint hebt in Postman. Pas nadien "fetch" je de correcte link naar de API in de code hieronder.
*/

fetch('')
    // maak van het antwoord een JSON antwoord
    .then(response => response.json())
    // lees de json uit en zet om naar HTML
    .then(json => {
        // lees het volledige antwoord uit in de console (verwijder deze regel code wanneer je klaar bent)
        console.log(json);
        // plaats een section met grid
        let html = '<div class="accordion accordion-flush" id="accordionExample">';
        // plaats van de recepten met naam, ingerdiënten, afbeelding,... in HTML
        // op regel 25 plaats je tussen de accolades de titel van het recept in
        // op regel 31 laadt je de juiste "keys" van het recept in.
        for (let i = 0; i < json.length-2; i++) {
            const recipe = json[i];
            html += `<div class="accordion-item">

            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                ${}
                </button>
              </h2>

              <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <img src="      " class="float-start" alt="        "><span class="h6 mt-2">ingrediënten</span>:            <hr><span class="h6  mt-2">bereiding</span>:         </div>
            </div>
      </div>`;
        }
        html += '</div>';
        document.getElementById("recepten").innerHTML = html;
    });