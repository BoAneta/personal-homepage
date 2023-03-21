import styled from "styled-components";

export const Wrapper = styled.article`
    background-color: ${({ theme }) => theme.color.boxBackground};
    padding: 32px 0 16px 32px;
    margin: 63px;

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        margin: 30px;
        padding: 0;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin: 0;
        padding: 0;
    }
`;

export const Header = styled.h2`
    font-weight: 900;
    color: ${({ theme }) => theme.color.textPrimary};
    border-bottom: 1px solid 
    ${({ theme }) => theme.color.headerLine};
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

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledListItem = styled.li`
    color: ${({ theme }) => theme.color.site.text};
    display: flex;
    align-items: center;
    &:before {
        content: "\\25CF";
        color: ${({ theme }) => theme.color.primary};
        padding-right: 16px;
    }
`;
