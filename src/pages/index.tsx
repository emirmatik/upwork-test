import React from 'react';
import styled from 'styled-components';

import Card from '@/components/Card';

import CardsData from '@/data/cards';

const StyledContainer = styled.div`
  max-width: 1372px;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  padding: 108px 0;
  margin: 0 auto;

  @media (max-width: 450px) {
    padding: 32px 0;
    row-gap: 60px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #1B264F;

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const StyledTitleSpan = styled.span`
  color: #506BCA;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
`;

const StyledButton = styled.button`
  display: flex;
  height: 60px;
  padding: 0px 58px;
  margin: 0 auto;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0.2em;
  text-align: center;
  background: #1B264F;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: #283875;
  }
`;

export default function Home() {
  return (
    <StyledContainer>
      <StyledTitle>
        We make  creative media 
        <br/>that <StyledTitleSpan>adds value</StyledTitleSpan>
      </StyledTitle>
      <StyledCardsContainer>
        {CardsData.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </StyledCardsContainer>
      <StyledButton>GET STARTED</StyledButton>
    </StyledContainer>
  )
}
