import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1155px;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-end;
    margin-top: 110px;
    margin-bottom: -38px;

    @media (max-width: ${({theme}) => theme.breakpoint.desktopMax}px) {
        margin-top: 30px;
        padding: 0;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin: 0;
        padding: 0;
    }
`;

export const DarkIcon = styled.img`
    max-width: 47px;
    max-height: 25px;
    display: flex;   
`;

export const ThemeButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.whitelilac};
`;