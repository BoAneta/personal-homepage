import styled from "styled-components";

export const Wrapper = styled.article`
    max-width: 1098px;
    margin: auto;
    display: grid;
    grid-template-columns: auto 1fr; 

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        margin-left: 14px;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
        padding-left: 2px;
    }
`;

export const Image = styled.img`
    max-width: 384px;
    width: 30vw;

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        margin-top: 50px;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        min-width: 133px;
    }
`;

export const About = styled.div`
    max-width: 633px;
    text-align: left;
    margin-left: 66px;
    padding-top: 64px;

    
    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin: 0;
        padding-top: 13px;
    }
`;

export const GreyHeader = styled.p`
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
`;

export const Name = styled.h1`
    font-weight: 900;
    color: ${({ theme }) => theme.color.textPrimary};
`;

export const Content = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.color.slategrey};
    line-height: 28px;
    margin: 0;
`;

export const Mail = styled.a`
    text-decoration: none;
`;

export const HireMeIcon = styled.img`
    color: ${({ theme }) => theme.color.white};
    max-width: 19.23px;
    max-height: 17.12px;
    margin-right: 19px;
`;
