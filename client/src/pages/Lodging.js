import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Label, SmallButton } from '../styles';
import { Link } from 'react-router-dom';

function Lodging() {
    const [searchLodging, setSearchLodging] = useState("");

    return (
        <>
        <SmallButton as={Link} to="/">Back</SmallButton>
        <Wrapper>
            <h1>Find a place to recharge.</h1>
            <Divider/>
            <p>Nothing beats a nice warm bath and soft bed to sleep in.</p>
            {/* 
            The goal is to be able to look up a specific
            type of lodging and uses resources to find
            the best results. Emphasis on being able to use
            search feature to be able to find homeless shelters
            in the area for nomadic peoples.
            */}
            <WrapperChild>
                <Label htmlFor="searchLodging">Search Lodging</Label>
                <Input
                type="text"
                id="searchLodging"
                value={searchLodging}
                onChange={(e) => setSearchLodging(e.target.value)}
                placeholder="Where do you want to stay? (Hotel, Airbnb, Hostel, Campground etc.)"
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

export default Lodging;