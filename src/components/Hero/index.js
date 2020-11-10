import React from 'react'
import NavBar from '../Navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

export default function Hero() {
    return (
        <HeroContainer>
            <NavBar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>A Melhor Pizza</HeroH1>
                    <HeroP>Pronta em  20 minutos</HeroP>
                    <HeroBtn>Faça sua encomenda</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
