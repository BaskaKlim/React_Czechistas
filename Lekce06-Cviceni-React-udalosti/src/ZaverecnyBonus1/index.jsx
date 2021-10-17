import React from 'react'

// Zadání 1:
// Pomocí události `change` a vlastnosti `event.target.value` vypisuj do konzole,
// co postupně uživatel do inputu píše ve formátu:
// console.log('Uživatel napsal: ' + DOPLŇ_TEXT_OD_UŽIVATELE).

const handleChange = (event) => {
	switch(event.target.value) {
		case "":
			console.log("Uživatel nenapsal nic");
		  break;
		default:
			console.log("Uživatel napsal: " + event.target.value);
	  }
}
// Zadání 2:
// Pokud uživatel z textového políčka vše smaže,
// vypiš „Uživatel nenapsal nic“.

const ZaverecnyBonus1 = () => {

	return (
	<input onChange={handleChange} />)
}

export default ZaverecnyBonus1;