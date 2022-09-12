'use strict';

/*** Formulaire - Partie 1 *******************************/
const inputReservationName = document.getElementById('reservation-name');
const inputNbPeople = document.getElementById('nb-people');
const btnValid = document.getElementById('btn-valid');
const dynamicForm = document.getElementById('dynamic-form');

console.log(inputReservationName, inputNbPeople, btnValid, dynamicForm);

btnValid.addEventListener('click', () => {

    const reservationName = inputReservationName.value.toUpperCase();
    const nbPeople = parseInt(inputNbPeople.value);

    // Test de garde
    if (!reservationName || isNaN(nbPeople) || nbPeople < 1) {
        return; // Fin du traitement de l'event !!!
    }

    // Vérouillage de la zone d'information
    inputReservationName.setAttribute('disabled', '');
    inputNbPeople.setAttribute('disabled', '');
    btnValid.setAttribute('disabled', '');

    /*** Formulaire - Génération de la Partie 2 *******************/
    // Générer le h2
    const titleInfoGuest = document.createElement('h2');
    titleInfoGuest.innerText = `Information des ${nbPeople} personnes`;
    dynamicForm.appendChild(titleInfoGuest);

    // Génération des elements du formulaire
    for (let i = 0; i < nbPeople; i++) {
        const titleGuest = document.createElement('h3');
        titleGuest.innerText = `Invité ${i + 1} :`;
        dynamicForm.appendChild(titleGuest)

        // - Les identifiants des elements
        const idFirstname = `firstname-${i}`;
        const idLastname = `lastname-${i}`;
        const idGender = `gender-${i}`;
        
        // - Firstname (CreateElement)
        const divFirstname = document.createElement('div');
        dynamicForm.appendChild(divFirstname);

        const labelFirstname = document.createElement('label');
        labelFirstname.innerText = 'Prénom';
        labelFirstname.setAttribute('for', idFirstname);
        divFirstname.appendChild(labelFirstname);

        const inputFirstname =document.createElement('input');
        inputFirstname.id = idFirstname; // .setAttribute('id', idFirstname)
        divFirstname.appendChild(inputFirstname);

        // - Firstname (InnerHTML - jQuery Like)
        // ⚠️ Cette méthode n'est pas recommandé! ⚠️
        /*
        dynamicForm.innerHTML += `
            <div>
                <label for="${idFirstname}">Prénom 2</label>
                <input type="text" id="${idFirstname}" />
            </div>
        `;
        */
        


        // - Lastname
        const divLastname = document.createElement('div');
        dynamicForm.appendChild(divLastname);

        const labelLastname = document.createElement('label');
        labelLastname.innerText = 'Nom';
        labelLastname.setAttribute('for',idLastname);
        divLastname.appendChild(labelLastname);

        const inputLastname = document.createElement('input')
        inputLastname.id = idLastname; 
        divLastname.appendChild(inputLastname);

        // - Genre
        const divGenre = document.createElement('div');
        dynamicForm.appendChild(divGenre);

        const labelGenre = document.createElement('label');
        labelGenre.innerText ='Genre';
        labelGenre.setAttribute('for', idGender);
        divGenre.appendChild(labelGenre);

        const selectGenre = document.createElement('select');
        selectGenre.id = idGender;

        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        const option3 = document.createElement('option');
        option1.innerText = 'Man';
        option2.innerText = 'Woman';
        option3.innerText = 'X';

        const selectoptionEmpty = document.createElement('option');
        selectoptionEmpty.setAttribute("disabled", '');
        selectoptionEmpty.setAttribute("selected", '');
        selectoptionEmpty.value = "";
        selectoptionEmpty.innerText = "Veuillez choisir un genre";

        selectGenre.appendChild(selectoptionEmpty);
        selectGenre.append(option1,option2,option3);
        divGenre.appendChild(selectGenre);
    }

    // - Creation button reset
    const btnReset = document.createElement('button');
    btnReset.innerText= 'Reset';
    dynamicForm.appendChild(btnReset);

    btnReset.addEventListener('click', () =>{
        // - Reset des valeurs
        inputReservationName.value='';
        inputNbPeople.value ='';

        // - Ré-activation des inputs et du bouton
        inputReservationName.removeAttribute('disabled');
        inputNbPeople.removeAttribute('disabled');
        btnValid.removeAttribute('disabled');

        // - Suppression des elements générés
        while(dynamicForm.firstElementChild !== null){
            dynamicForm.removeChild(dynamicForm.firstElementChild);
        }
        // Alternative : dynamicForm.innerHTML = '';
    })
});
