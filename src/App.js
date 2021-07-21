import React, {useState, useEffect, useRef} from 'react';
import StreetFighter from './StreetFighter';
import styled from 'styled-components';

import AppBar from './components/AppBar';
import Dpad from './components/Dpad';
import Fighters from './components/Fighters';
import WorldMap from './components/WorldMap';

const AppWrap = styled.div`
	background: black;
	height: 100%;
	display: grid;
	grid-template-areas:
		'world-map world-map'
		'dpad fighters'
		'. .';
	flex-direction: column;
	align-items: center;
	justify-content: center;
	outline: none;
`;

const sf = new StreetFighter();

export default function App(props) {
	const [selectedFighter, setSelectedFighter] = useState('');
	const ref = useRef(null);

	const selectFighter = (keyCode) => setSelectedFighter(sf.selectFighter(keyCode));
	const handleKeyPress = (e) => selectFighter(e.keyCode);
	const handleDpadPress = (e) => selectFighter(e.target.value);

	useEffect(() => {
		setSelectedFighter('Ryu');
	}, []);

	return (
		<AppWrap ref={ref} onKeyDown={handleKeyPress} tabIndex='0'>
			<AppBar />
			<WorldMap selectedFighter={selectedFighter} />
			<Dpad handleDpadPress={handleDpadPress} />
			<Fighters
				fighterNames={sf.fighterNames}
				handleKeyPress={handleKeyPress}
				active={selectedFighter}
			/>
		</AppWrap>
	);
}
