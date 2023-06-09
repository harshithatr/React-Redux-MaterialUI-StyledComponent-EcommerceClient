import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components';
import {sliderItems} from "../data.js"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: #FFDAB9;
position: relative;
overflow: hidden;
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #FFF7F7;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
margin: auto;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
height: 100%;
flex: 1;
`;
const Image = styled.img`
height: 80%;
`;
const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;
const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) =>{
if(direction==="left"){
    setSlideIndex(slideIndex >0 ? slideIndex-1: 2)
}
else{
    setSlideIndex(slideIndex<2? slideIndex +1: 0)
}
    }
  return (
    <Container>
<Arrow direction="left" onClick={()=>handleClick("left")}>
    <ArrowLeftOutlined/>
</Arrow>
<Wrapper slideIndex={slideIndex}>
    {sliderItems.map((i)=>(
<Slide bg ={i.bg} key={i.id}>
    <ImageContainer>
        <Image src={i.img} /></ImageContainer>
    <InfoContainer>
        <Title>{i.title}</Title>
        <Desc>{i.desc}</Desc>
        <Button>SHOP NOW</Button>
    </InfoContainer>
    </Slide>
    ))}
</Wrapper>
<Arrow direction="right" onClick={()=>handleClick("right")}>
    <ArrowRightOutlined/>
</Arrow>
    </Container>
  )
}

export default Slider