import React from 'react'
import styledComponents from 'styled-components'


function Shreyad({backgroundImg,title,description}) {
  return (
    <Wrap bgImage={backgroundImg}>
    <TeslaTitle>
        <h1>
            {title}
        </h1>
        <p1>
            {description}
        </p1>
    </TeslaTitle>
    </Wrap>    

  )
}

export default Shreyad
const Wrap=styledComponents.div`
width:70%;
float:right;
height:50vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-item:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}
`

const TeslaTitle=styledComponents.div`
padding-top:15vh;
text-align:center;
`