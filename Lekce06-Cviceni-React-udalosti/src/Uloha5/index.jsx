import React from 'react'

// Zadání 1:
// Dopiš komponentu `NakupniPolozka`, aby v divu byl vypsaný
// název položky a tlačítko s textem „koupit“.

// Zadání 2:
// Po kliknutí na tlačítko vypiš do konzole text
// „Uživatel chce koupit DOPLŇ_NÁZEV_POLOŽKY“.


const NakupniPolozka = ({ nazev }) => {
	return <div>@TODO</div>
}


// Zadání 3:
// Pomocí `polozky.map` vypiš všechno ovoce v poli jako nákupní položky.
// Tj. pro každé ovoce se zobrazí název a vedle tlačítko koupit,
// které po kliknutí vypíše do konzole např. "Uživatel chce koupit jablka"

const Uloha5 = () => {
	const polozky = ['hrušky', 'jablka', 'třešně', 'jahody']

	return (
		<>
			<NakupniPolozka nazev="hrušky" />
			<NakupniPolozka nazev="jablka" />
		</>
	)
}

export default Uloha5;