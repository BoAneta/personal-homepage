import styled from "styled-components";
import { Content } from "../Header/styled";
import { GreyHeader } from "../ModeSwitcher/styled";
import { Title } from "../Portfolio/styled";

export const Container = styled.div`
    max-width: 670px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 24px;
    margin-left: 62px;
`;

export const Contact = styled(Title)``;

export const FooterContent = styled(Content)`
    color: ${({ theme }) => theme.color.black};
`;

export const Icons = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 110px;
`;

export const Icon = styled.img`
    max-width: 48px;
`;