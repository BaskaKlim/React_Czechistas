import React from 'react'

// Zadání:
// Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.
// "Bublinou" se myslí alert v prohlížeči.

const Uloha1 = () => {
	const handleClick = () =>{
		alert('Ahoj');
	}
	return (
	<>
	<button onClick ={handleClick}> Ukaž bublinu</button>
	</>
	);
}

export default Uloha1;
