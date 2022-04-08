import React from 'react'
import styled from 'styled-components'

import {Cell, Grid, Img} from './common'
import {slideIn} from '../utils/slideInAnimation'
import {
	Balrog,
  Blanka,
  Ryu,
  Ehonda,
  Guile,
  Ken,
  Mbison,
  Sagat,
  Chunli,
  Dhalsim,
  Vega,
  Zangief,
} from '../images'
import Player1 from './Player1'

const portraitIds = {
  'Ryu': Ryu,
  'E.Honda': Ehonda,
  'Blanka': Blanka,
  'Guile': Guile,
  'Balrog': Balrog,
  'Vega': Vega,
  'Ken': Ken,
  'Chun Li': Chunli,
  'Zangief': Zangief,
  'Dhalsim': Dhalsim,
  'Sagat': Sagat,
  'M.Bison': Mbison,
}

const FighterGrid = styled(Grid)`
  grid-area: fighters;
  width: 720px;
  outline: none;
  display: grid;
  grid-template-columns: repeat(6, ${720 / 6}px);
  border: 2px solid ${({theme}) => theme.color.darkGray};
  right: -100vw;
  position: relative;
  animation: ${slideIn('right')} 1s forwards;
`

const FighterCell = styled(Cell)`
  border: 2px solid ${({theme}) => theme.color.darkGray};
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const FighterLabel = styled.label`
  height: 1.5em;
  color: white;
  background: ${({theme}) => theme.color.primary};
  font-size: 12px;
  margin-top: -2em;
  width: 100%;
  text-align: center;
  justify-content: center;
`

export default function Fighters(props) {
  const renderFighterCells = () => {
    const {active, fighterNames} = props

    return [].concat(...fighterNames).map((fighter, i) => {
      return (
        <FighterCell key={i} onKeyPress={props.handleKeyPress} active={active === fighter}>
          {active === fighter ? <Player1 /> : ''}

          <Img src={portraitIds[fighter]} alt={fighter} />

          {active === fighter ? <FighterLabel>{fighter}</FighterLabel> : ''}
        </FighterCell>
      )
    })
  }

  return <FighterGrid onKeyDown={props.handleKeyPress}>{renderFighterCells()}</FighterGrid>
}
