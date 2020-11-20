import styled, { css } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const TourCard = ({
  id,
  title,
  price,
  currency,
  rating,
  isSpecialOffer,
  alt,
  img,
}) => (
  <CardRoot>
    <Image src={img} alt={alt} />
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <Row>
        <CardRating>Rating: {rating}</CardRating>
        <CardOffer>{isSpecialOffer && <p>Special offerr!</p>}</CardOffer>
        <CardPrice>
          {currency}
          {price}
        </CardPrice>
      </Row>
    </CardBody>
  </CardRoot>
);

export const DetailsCard = ({
  id,
  title,
  price,
  currency,
  rating,
  isSpecialOffer,
  alt,
  img,
}) => (
  <DetailsCardRoot>
    <DetailsImage src={img} alt={alt} />
    <DetailsCardBody>
      <DetailsCardTitle>{title}</DetailsCardTitle>
      <Row>
        <DetailsCardRating>Rating: {rating}</DetailsCardRating>
        <DetailsCardOffer>
          {isSpecialOffer && <p>Special offerr!</p>}
        </DetailsCardOffer>
        <DetailsCardPrice>
          {currency}
          {price}
        </DetailsCardPrice>
      </Row>
    </DetailsCardBody>
  </DetailsCardRoot>
);

const Image = styled.img`
  width: 100%;
  height: 15vh;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const CardTitle = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #1a2b49;
  text-align: start;
  padding-bottom: 2rem;
  height: 90px;
`;

const CardRoot = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  font-family: GT Eesti, Arial, sans-serif;
  font-size: 1rem;
  background-color: white;
  min-height: 320px;
  margin: 1rem;
  box-shadow: 1px 0 12px rgba(0, 0, 0, 0.13);
  border: 1px solid #c6c8d0;
  min-width: 270px;
`;

const CardPrice = styled.div`
  border: 0;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #1a2b49;
  white-space: nowrap;
  font-family: inherit;
  font-style: normal;
  margin: 0;
  padding: 0;
  text-align: right;
  vertical-align: baseline;
  font-weight: bold;
`;

const CardRating = styled.div`
  font-size: 14px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const CardOffer = styled.div`
  font-size: 1rem;
  color: salmon;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  position: absolute;
  right: 0px;
  font-size: 14px;
  top: 6px;
  font-weight: 700;
`;

const basicButton = css`
  margin: 0;
  padding-left: 0;
  padding-right: 0;
`;

export const SearchField = styled.input`
  ${basicButton}
  border-color: #c6c8d0;
  color: #1a2b49;
  border: 1px solid #c6c8d0;
  padding: 0 2rem 0 0.5rem;
  transition: border 0.16s ease-out;
  vertical-align: middle;
  width: 15vw;

  will-change: border;
  border-radius: 6px;
  height: 42px;
`;

export const SearchButton = styled.button`
  ${basicButton}
  background-color: blue;
  color: blue;
  border: 2px solid #c6c8d0;
  padding: 0 2rem 0 0.5rem;
  transition: border 0.16s ease-out;
  vertical-align: middle;
  width: 42px;
  height: 42px;
  border-radius: 6px;
`;

export const TourGrid = styled.div`
  display: grid;
  grid-gap: 0.1rem;
  grid-template-columns: auto auto;
  justify-content: center;
  padding: 0.1rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-top: 1.5rem;
  /* Media Queries: Tablet Portrait */
  @media screen and (min-width: 768px) {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    grid-template-columns: auto auto;
  }
  /* Media Queries: Desktop */
  @media screen and (min-width: 1060px) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    margin: 2rem;
    align-items: center;
    padding-right: 4rem;
    padding-left: 4rem;
    max-width: 1060px;
  }
`;

const DetailsImage = styled.img`
  width: 100%;
  height: auto;
`;

const DetailsCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const DetailsCardTitle = styled.h1`
  line-height: 1.25rem;
  font-weight: 500;
  color: #1a2b49;
`;

const DetailsCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  border: 0;
  border-radius: 0.5rem;
  font-family: GT Eesti, Arial, sans-serif;
  font-size: 1rem;
  background-color: white;
  margin: 1rem;
`;

const DetailsCardPrice = styled.div`
  border: 0;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #1a2b49;
  white-space: nowrap;
  font-family: inherit;
  font-style: normal;
  margin: 0;
  padding: 0;
  text-align: right;
  vertical-align: baseline;
  font-weight: bold;
`;

const DetailsCardRating = styled.div`
  font-size: 14px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const DetailsCardOffer = styled.div`
  font-size: 1rem;
  color: salmon;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
