import React from 'react'

// Zadání 1:
// Dopiš komponentu `Pozdrav`, aby v tlačítku byl text
// „Pozdrav DOPLŇ_JMÉNO_VE_ČTVRTÉM_PÁDĚ“.
// Např. na tlačítku bude: Pozdrav Luďka

// Zadání 2:
// Při kliknutí na tlačítko zobraz bublinu s textem
// „Ahoj DOPLŇ_JMÉNO_V_PÁTÉM_PÁDĚ“.
// Např. po kliknutí se zobrazí alert: Ahoj Luďku


const Pozdrav = ({ jmenoVeCtvrtemPade, jmenoVPatemPade }) => {
	return <button>@TODO</button>
}

// Zadání 3:
// Do komponenty `Uloha4` přidej ještě dvě použití komponenty `Pozdrav`.
// Jednou s tvým jménem a jednou se jménem kouče.

const Uloha4 = () => {
	return <Pozdrav jmenoVeCtvrtemPade="Luďka" jmenoVPatemPade="Luďku" />
}

export default Uloha4;