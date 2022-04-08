import React, {useRef} from 'react'
import styled from 'styled-components'

import {GH_LOGO} from './images'
import {GITHUB_REPO_URL} from './constants'
import {Logo} from './components/common'
import {useData} from './hooks'
import Dpad from './components/Dpad'
import Fighters from './components/Fighters'
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

export default function App(props) {
  const {fighterGrid, selectFighter, selected} = useData()
  const handleDpadPress = (e) => selectFighter({keyCode: e.target.value})
  const ref = useRef(null)

  return (
    <AppContainer ref={ref} onKeyDown={selectFighter} tabIndex="0">
      <WorldMap selectedFighter={selected} />
      <Dpad handleDpadPress={handleDpadPress} />
      <Fighters
        fighterNames={fighterGrid}
        handleKeyPress={selectFighter}
        active={selected}
      />
      <LogoAnchor href={GITHUB_REPO_URL}>
        <Logo src={GH_LOGO} />
      </LogoAnchor>
    </AppContainer>
  )
}
