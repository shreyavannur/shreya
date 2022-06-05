import React from 'react'
import Shreyaa from './Shreyaa'
import Shreyab from './Shreyab'
import Shreyac from './Shreyac'
import Shreyad from './Shreyad'

import styledComponents from 'styled-components'

function Home() {
  return (
      <HiIamContainer>


    <Shreyaa
    title="module X"
    description="test"
    backgroundImg="model-x.jpg"
    />
    <Shreyab
    title="module Y"
    description="test"
    backgroundImg="model-y.jpg"
    />
    <Shreyac
    title="module z"
    description="test"
    backgroundImg="model-3.jpg"
    />
    <Shreyad
    title="module B"
    description="test"
    backgroundImg="model-s.jpg"
    />
    

      </HiIamContainer>
  )
}

export default Home
const HiIamContainer=styledComponents.div``