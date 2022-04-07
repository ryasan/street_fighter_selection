import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

import {GH_LOGO} from './images'
import {GITHUB_REPO_URL} from './constants'
import {Logo} from './components/common'
import Dpad from './components/Dpad'
import Fighters from './components/Fighters'
import StreetFighter from './StreetFighter'
import WorldMap from './components/WorldMap'

const AppContainer = styled.div`
  background: black;
  height: 100%;
  display: grid;
  grid-template-areas:
    'app-bar app-bar'
    'world-map world-map'
    'dpad fighters'
    '. .';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
`

const LogoAnchor = styled.a`
	position: absolute;
	right: 5%;
	top: 5%;
`

const sf = new StreetFighter()

export default function App(props) {
  const [selectedFighter, setSelectedFighter] = useState('')
  const ref = useRef(null)

  const selectFighter = (keyCode) => setSelectedFighter(sf.selectFighter(keyCode))
  const handleKeyPress = (e) => selectFighter(e.keyCode)
  const handleDpadPress = (e) => selectFighter(e.target.value)

  useEffect(() => {
    setSelectedFighter('Ryu')
  }, [])

  return (
    <AppContainer ref={ref} onKeyDown={handleKeyPress} tabIndex="0">
      <WorldMap selectedFighter={selectedFighter} />
      <Dpad handleDpadPress={handleDpadPress} />
      <Fighters
        fighterNames={sf.fighterNames}
        handleKeyPress={handleKeyPress}
        active={selectedFighter}
      />
      <LogoAnchor href={GITHUB_REPO_URL}>
        <Logo src={GH_LOGO} />
      </LogoAnchor>
    </AppContainer>
  )
}
