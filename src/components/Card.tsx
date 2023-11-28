import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface CardProps {
    title: string,
    image: string,
    features?: string[],
    description: string,
}

const StyledCard = styled.div`
    max-height: 336px;
    min-width: min-content;
    display: flex;
    justify-content: space-between;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    flex: 1 0 calc(33.333% - 20px);
    transition: 0.3s ease;
    
    * {
        color: #353844;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 50px;
        transform: translate(3px, -3px);
    }

    @media (max-width: 450px) {
        max-height: unset;
        height: max-content;
        min-width: 100%;
    }
`;

const StyledCardImage = styled.div`
    max-width: 183.5px;
    height: 100%;

    @media (max-width: 450px) {
        max-width: unset;
        height: unset;
        width: 100px;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
`;

const StyledCardRightContainer = styled.div`
    min-width: 220px;
    padding: 40px 30px 40px 34px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px;
    flex-grow: 1;

    @media (max-width: 450px) {
        min-width: unset;
        padding: 20px 15px;
        row-gap: 10px;
    }
`;

const StyledTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0;

    @media (max-width: 450px) {
        font-size: 22px;
        line-height: 30px;
    }
`;

const StyledFeature = styled.div`
    position: relative;
    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0;
    padding-left: 17px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #D2AD81;
    }

    @media (max-width: 450px) {
        font-size: 13px;
        line-height: 24px;
    }
`;

const StyledDescription = styled.div`
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    line-break: strict;

    @media (max-width: 450px) {
        font-size: 13px;
        line-height: 22px;
    }
`;

export default function Card(props: CardProps) {
    const { description, image, title } = props;

    return (
        <StyledCard>
            <StyledCardImage>
                <Image alt={`${title}_image`} src={require(`@/assets/${image}`)} />
            </StyledCardImage>
            <StyledCardRightContainer>
                <StyledTitle>{title}</StyledTitle>
                    {props.features && (
                        <div>
                            {props.features.map(feature => (
                                <StyledFeature key={feature}>{feature}</StyledFeature>
                            ))}
                        </div>
                    )}
                <StyledDescription dangerouslySetInnerHTML={{ __html: description }}></StyledDescription>
            </StyledCardRightContainer>
        </StyledCard>
    );
}
