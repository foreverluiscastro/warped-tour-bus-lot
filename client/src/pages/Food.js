import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallButton, Input, Label } from '../styles';
import { Link } from 'react-router-dom';

function Food() {
    const [searchFood, setSearchFood] = useState("");

    return (
        <>
        <SmallButton as={Link} to="/">Back</SmallButton>
        <Wrapper>
            <h1>Finding good food is essential.</h1>
            <Divider/>
            <p>With respect to your tastebuds and dietary requirments.</p>
            {/*
            The goal is to use the search query
            to find results in their area. we set
            a default area and later implement an
            advanced search feature to help people
            with dietary restrictions. 
             */}
            <WrapperChild>
                <Label htmlFor="searchFood">Find Food</Label>
                <Input
                type="text"
                id="searchFood"
                value={searchFood}
                onChange={(e) => setSearchFood(e.target.value)}
                placeholder="What are you feeling?"
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

export default Food;