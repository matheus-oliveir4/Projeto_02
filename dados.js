const inputSection = document.getElementById('section');
    const currentRegion = {{ Js :: from($region) }};

    const regionsList = [{
            id: 1,
            name: 'LE'
        },
        {
            id: 2,
            name: 'TE'
        },
        {
            id: 3,
            name: 'CE'
        },
    ]

    const regions = regionsList.filter(region => region.id != currentRegion);

    const regionName = regionsList.find(region => region.id == currentRegion).name;

    inputSection.innerHTML = `
        <option value="${currentRegion}">${regionName}</option>
        ${regions.map(region => `<option value="${region.id}">${region.name}</option>`)}
    `;

    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    const uidField = document.querySelector('#uid');


    [closeModalButton, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });

    window.onload = () => {
        uidField.disabled = true;
    }



    document.querySelector('#progression').onchange = (e) => {
        if (e.target.value == 'New') {
            uidField.disabled = true;
        } else {
            uidField.disabled = false;
        }
    }