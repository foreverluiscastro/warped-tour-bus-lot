import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallButton, Label, Input } from '../styles';
import { Link } from 'react-router-dom';

function Attractions() {
    const [searchAttractions, setSearchAttractions] = useState("");

    return (
        <>
        <SmallButton as={Link} to="/">Back</SmallButton>
        <Wrapper>
            <h1>Unleash your inner explorer.</h1>
            <Divider/>
            <p>Find something to do in your area for any occasion.</p>
            {/* 
            I want to be able to use resources
            for public parks, museums, local events and
            festivals to be able to create
            a community hub in the palm of your hand
            */}
            <WrapperChild>
                <Label>Discover Attractions</Label>
                <Input
                type="text"
                id="searchAttractions"
                value={searchAttractions}
                onChange={(e) => setSearchAttractions(e.target.value)}
                placeholder="What most interests you? (Museums, Parks, Clubs, etc)"
                />
                <SmallButton>Search</SmallButton>
            </WrapperChild>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
  max-width: 1080px;
  margin: 40px auto;
  text-align: left;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0.5em 10em -0.125em rgb(10 10 10 / 25%),
    0 0 0 1px rgb(10 10 10 / 6%);
`;

const WrapperChild = styled.div`
  display: flex;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Attractions;