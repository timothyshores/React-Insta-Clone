import React from 'react';
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: 50vw;
    margin: 0 auto;
`;

export const LeftColumn = styled.div`
    display: flex;
    align-items: center;
    width:30vw;
`;

export const VerticalDivider = styled.span`
    margin: 0 10px;
    font-size: 1.5rem;
`;

export const InstagramLogoText = styled.img`
    height: 30px;
    margin: 7.5px 0 0;
`;

export const MiddleColumn = styled.div`
    height: 30px;
    width:30vw;
    align-items: flex-end;
`;

export const SearchBarInput = styled.input`
    width: 150px;
    margin-top: 12.5px;
`;

export const RightColumn = styled.div`
    display: flex;
    width:30vw;
    align-items: center;
    justify-content: flex-end;
`;

export const DiscoverIcon = styled.img`
    height: 25px;
`;

export const HeartIcon = styled.p`
    font-size: 2rem;
    margin: 0 5px;
    font-weight: 100;
    color: grey;
`;

export const ProfileIcon = styled.img`
    height: 35px;
`;