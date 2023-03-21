import styled from "styled-components";
import { GreyHeader } from "../../features/Header/styled";
import { ReactComponent as DarkSunIcon} from "./icons/ToggleOff-light.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ThemeButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.whitelilac};
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 60px;
    margin-bottom: -40px;

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        margin-top: 30px;
        padding: 0;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin: 0;
        padding: 0;
    }
    
`;

export const Text = styled(GreyHeader)`
    color: ${({theme}) => theme.color.slategray};

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const Icon = styled(DarkSunIcon)`
    max-width: 47px;
    max-height: 25px;
`;
