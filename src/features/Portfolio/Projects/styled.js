import styled from "styled-components";

export const ProjectSection = styled.div`
    margin: 0 62px 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        margin: 0;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        margin: 0;
    }
`;

export const Tile = styled.div`
    max-width: 592px;
    background-color: ${({ theme }) => theme.color.boxBackground};
    border: 6px solid ${({ theme }) => theme.color.tile.border};
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    transition: 1s;

    &:hover {
        border: 6px solid ${({ theme }) => theme.color.tile.borderHover};
    }
`;
export const Content = styled.div`
    padding: 56px;

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        padding: 24px;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        padding: 24px;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.color.primary};
    font-weight: 700;
    font-size:24px;
    margin: 0;
`;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        font-size: 14px;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    }
`;

export const LinksName = styled(Paragraph)`
    line-height: 25px;
`;

export const Links = styled.a`
    color: ${({ theme }) => theme.color.link.text};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.link.underline};
    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.link.hover};
    }
`;