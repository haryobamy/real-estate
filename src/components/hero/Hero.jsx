import React from 'react'
import { SliderData } from '../../data/SliderData';
import { HeroSection, HeroSlide, HeroWrapper, HeroSlider, HeroImage, HeroContent, Arrow, SliderButton, PrevArrow, NextArrow } from './HeroElement'
import { Button } from '../Button';

const Hero = () => {
    const [current, setCurrent] = React.useState(0);
    const length = SliderData.length
    const timeout = React.useRef(null)


    React.useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 5000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    }

    return (
        <>
            <HeroSection>
                <HeroWrapper>

                    {SliderData.map((slide, index) => {
                        return (
                            <HeroSlide key={index}>
                                {index === current && (
                                    <HeroSlider>
                                        <HeroImage src={slide.image} alt={slide.alt} />
                                        <HeroContent>
                                            <h1>{slide.title}</h1>
                                            <p>{slide.price}</p>
                                            <Button to={slide.path} primary={true} css={`max-width:160px;`} >
                                                {slide.label}
                                                <Arrow />
                                            </Button>

                                        </HeroContent>

                                    </HeroSlider>
                                )}

                            </HeroSlide>
                        )
                    })}

                    <SliderButton>
                        <PrevArrow onClick={prevSlide} />
                        <NextArrow onClick={nextSlide} />
                    </SliderButton>
                </HeroWrapper>
            </HeroSection>

        </>
    )
}

export default Hero;

