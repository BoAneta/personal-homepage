import styled from "styled-components";

export const Wrapper = styled.article`
    background-color: ${({ theme }) => theme.color.white};
    padding: 32px;
    margin: 63px;
`;

export const Header = styled.h2`
    font-weight: 900;
    letter-spacing: 0.05em;
    border-bottom: 1px solid 
    ${({ theme }) => theme.color.ironTransparent};
    padding-bottom: 15px;
    margin: 0;
`;

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 32px;
    padding: 0;
`;

export const StyledListItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.color.slategray};
    &:before {
        content: "\\25CF";
        color: ${({theme}) => theme.color.scienceblue};
        padding-right: 16px;
    }
`;
