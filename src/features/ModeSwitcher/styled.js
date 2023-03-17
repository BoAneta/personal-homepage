import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1155px;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-end;
    margin-top: 119px;
    margin-bottom: -38px;
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