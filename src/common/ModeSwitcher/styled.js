import styled from "styled-components";
import { GreyHeader } from "../../features/PersonalHomepage/Header/styled";
import { ReactComponent as SunIcon } from "./icons/sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ThemeButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.site.background};
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 60px;
    margin-bottom: -40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        margin-top: 30px;
        padding: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0;
        padding: 0;
    }
`;

export const Text = styled(GreyHeader)`
    color: ${({ theme }) => theme.color.site.text};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const IconWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.modeSwitcher.background};
    border: 1px solid ${({ theme }) => theme.color.modeSwitcher.border};
    width: 48px;
    height: 25px;
    border-radius: 25%/50%;
    display: flex;
    align-items: center;
    padding: 2px;
`;

export const Icon = styled(SunIcon)`
    background-color: ${({ theme }) => theme.color.modeSwitcher.icon};
    border-radius: 50%;
    padding: 2px;
    width: 20px;
    height:20px;
`;