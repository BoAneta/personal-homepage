import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 62px 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        margin: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        margin: 0;
    }
`;

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.color.boxBackground};
    border: 6px solid ${({ theme }) => theme.color.tile.border};
    border-radius: 4px;
    transition: 1s;
    padding: 56px;

    &:hover {
        border: 6px solid ${({ theme }) => theme.color.tile.borderHover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        padding: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 14px;
    }
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.color.tile.header};
    font-weight: 700;
    font-size: 24px;
    margin: 0;
    text-transform: capitalize;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    }
`;

export const LinksWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
    grid-gap: 8px;
`;

export const LinksName = styled(Description)`
    margin-bottom: 8px;
    margin-top:0;
`;

export const Links = styled.a`
    font-weight: 400;
    color: ${({ theme }) => theme.color.link.text};
    text-decoration: underline ${({ theme }) => theme.color.link.underline};;
    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.link.hover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    }
`;