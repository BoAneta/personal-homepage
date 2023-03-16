import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1155px;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: right;
    margin-top: 119px;
    margin-bottom: -38px;
`;

export const Paragraph = styled.p`
    font-weight: 700;
`;

export const DarkIcon = styled.img`
    max-width: 47px;
    max-height: 25px;
`;

export const ThemeButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.mercury};
`;