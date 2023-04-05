import styled from "styled-components";
import { Header } from "../Skills/styled";

export const Section = styled.section`
    margin-bottom: 120px;

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        margin-bottom: 48px;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 48px;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 13px;
    justify-items: center;

`;

export const GitIcon = styled.img`
    max-width: 40px;
    color: ${({ theme }) => theme.color.primary};
`;

export const Title = styled(Header)`
    border: none;
    padding: 0;
`;

export const SubTitle = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: 20px;
    margin: 0 0 24px;
`;