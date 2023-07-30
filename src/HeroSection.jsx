import React from 'react'
import styled from "styled-components";
import { Button } from "./styles/Button";
import HeroBg from "./assets/bg.png";


const HeroSection = () => {
    return (
        <Wrapper>
            <div className="container ">
                <section>
                    <h2>Get Start Your Favriot Shoping</h2>
                    <p>“I rationalize shopping. I buy a dress because I need change for gum.”</p>
                    <Button className="btn" >
                        Buy Now
                    </Button>
                </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

section{
    height: 70vh;
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items :left;
    justify-content:center ;
    background-image: url(${HeroBg});
    background-size: cover;
    background-repeat: no-repeat;
}
p{
    margin: 3rem 0;
}
.btn{
    width: 20rem;
    background-color: #ffb90f;
    color: #000;
    font-weight: 600;
}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default HeroSection;