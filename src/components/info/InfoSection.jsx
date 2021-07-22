import React from 'react'
import { Button } from '../Button'
import { ColumnLeft, ColumnRight, Container, Section } from './InfoElement'
import { InfoData, InfoDataTwo } from '../../data/InfoData'

const InfoSection = ({ }) => {



    return (
        <>

            <Section>

                {InfoData.map((item, index) => (<Container key={index}>

                    <ColumnLeft>
                        <h1>{item.heading}</h1>
                        <p>{item.paragraphOne} </p>
                        <p>{item.paragraphTwo} </p>
                        <Button to='/homes' primary={true}>
                            {item.buttonLabel}
                        </Button>
                    </ColumnLeft>
                    <ColumnRight reverse={item.reverse}>
                        <img src={item.image} alt="" />
                    </ColumnRight>
                </Container>))}

                <hr />
                {InfoDataTwo.map((item, index) => (<Container key={index}>
                    <ColumnRight reverse={item.reverse} >

                        <img src={item.image} alt="" />
                    </ColumnRight>
                    <ColumnLeft >
                        <h1>{item.heading}</h1>
                        <p>{item.paragraphOne} </p>
                        <p>{item.paragraphTwo} </p>
                        <Button to='/homes' primary={true}>
                            {item.buttonLabel}
                        </Button>
                    </ColumnLeft>

                </Container>))}

            </Section>

        </>
    )
}

export default InfoSection
