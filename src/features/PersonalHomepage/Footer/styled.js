import styled from "styled-components";
import { Content } from "../Header/styled";
import { Title } from "../Portfolio/styled";


export const Container = styled.div`
    max-width: 670px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 24px;
    margin-left: 62px;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        margin: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0;
    }
`;

export const Mail = styled.a`
    text-decoration: none;
`;

export const Contact = styled(Title)`
    transition: 1s;

    &:hover {
        color: ${({ theme }) => theme.color.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 20px;
    }
`;

export const FooterContent = styled(Content)`
    color: ${({ theme }) => theme.color.textPrimary};
`;

export const Icons = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 110px;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        margin-bottom: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 30px;
    }
`;

export const SocialLink = styled.a`
    svg path {
            transition: 0.3s;
            fill: ${({ theme }) => theme.color.socialIcons.color};
    }
    
      &:hover {
        svg path {
            fill: ${({ theme }) => theme.color.socialIcons.hover};
        }    
    }
`;