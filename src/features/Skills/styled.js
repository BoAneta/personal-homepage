import styled from "styled-components";

export const Wrapper = styled.article`
    background-color: ${({ theme }) => theme.color.white};
    padding: 32px 0 16px 32px;
    margin: 63px;
`;

export const Header = styled.h2`
    font-weight: 900;
    color: ${({ theme }) => theme.color.black};
    border-bottom: 1px solid 
    ${({ theme }) => theme.color.irontransparent};
    padding-bottom: 15px;
    margin: 0;
`;

export const StyledList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    column-gap: 105px;
    padding: 0;
    line-height: 25px;
`;

export const StyledListItem = styled.li`
    color: ${({ theme }) => theme.color.slategray};
    display: flex;
    align-items: center;
    &:before {
        content: "\\25CF";
        color: ${({ theme }) => theme.color.scienceblue};
        padding-right: 16px;
    }
`;
