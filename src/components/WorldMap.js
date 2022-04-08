import React from 'react'
import styled from 'styled-components'

import {Cell, Grid} from './common'
import {slideIn} from './../utils/slideInAnimation'
import {World} from './../images'
import {USA, USSR, China, Japan, Brazil, Thailand, India, Spain} from '../images'

const MAP_ROWS = 8
const MAP_COLUMNS = 12

const countries = [
  {
    name: 'USSR',
    flag: USSR,
    fighter: 'Zangief',
    coordinates: [0, 7],
  },
  {
    name: 'USA',
    flag: USA,
    fighter: 'Ken',
    coordinates: [1, 2],
  },
  {
    name: 'SPAIN',
    flag: Spain,
    fighter: 'Vega',
    coordinates: [1, 4],
  },
  {
    name: 'JAPAN',
    flag: Japan,
    fighter: 'Ryu',
    coordinates: [1, 9],
  },
  {
    name: 'USA',
    flag: USA,
    fighter: 'Guile',
    coordinates: [2, 1],
  },
  {
    name: 'USA',
    flag: USA,
    fighter: 'Balrog',
    coordinates: [2, 2],
  },
  {
    name: 'CHINA',
    flag: China,
    fighter: 'Chun Li',
    coordinates: [2, 8],
  },
  {
    name: 'JAPAN',
    flag: Japan,
    fighter: 'E.Honda',
    coordinates: [2, 9],
  },
  {
    name: 'INDIA',
    flag: India,
    fighter: 'Dhalsim',
    coordinates: [3, 7],
  },
  {
    name: 'THAILAND',
    flag: Thailand,
    fighter: 'M.Bison',
    coordinates: [4, 8],
  },
  {
    name: 'THAILAND',
    flag: Thailand,
    fighter: 'Sagat',
    coordinates: [4, 9],
  },
  {
    name: 'BRAZIL',
    flag: Brazil,
    fighter: 'Blanka',
    coordinates: [5, 3],
  },
]

const MapGrid = styled(Grid)`
  animation: ${slideIn('top')} 1s forwards;
  background-size: contain;
  background: url(${World}) center center no-repeat;
  grid-area: world-map;
  grid-template-columns: repeat(${MAP_COLUMNS}, 1fr);
  grid-template-rows: repeat(${MAP_ROWS}, 1fr);
  height: 400px;
  position: relative;
  top: -100vh;
  width: 1000px;
`

const CellWrapper = styled.div`
  color: ${({active, theme}) => (active ? theme.color.secondary : 'white')};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bolder;
  padding: 0 10px;
  text-align: center;
`

const Flag = styled(Cell)`
  background-size: cover;
  background: url(${({countryBg}) => countryBg}) no-repeat center center;
  border: none;
  box-shadow: ${({active, theme}) => active ? `inset 0px 0px 0px 2px ${theme.color.secondary};` : 'none'};
  flex: 1;
`

const Text = styled.div`
  font-size: 10px;
`

function MapCell({country, selectedFighter}) {
  return (
    <CellWrapper>
      {country && (
        <>
          <Flag countryBg={country.flag} active={country.fighter === selectedFighter} />{' '}
          <Text>{country.name}</Text>
        </>
      )}
    </CellWrapper>
  )
}

export default function WorldMap({selectedFighter}) {
  return (
    <MapGrid>
      {Array.from({length: MAP_ROWS}, (_, i) =>
        Array.from({length: MAP_COLUMNS}, (_, ii) => (
          <MapCell
            key={ii}
            country={countries.find((c) => c.coordinates[0] === i && c.coordinates[1] === ii)}
            selectedFighter={selectedFighter}
          />
        )),
      )}
    </MapGrid>
  )
}
