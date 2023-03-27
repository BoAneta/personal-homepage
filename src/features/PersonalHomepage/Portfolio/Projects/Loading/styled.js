import styled from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;
    font-size: 20px;
    color: ${({ theme }) => theme.color.textPrimary};
    display: grid;
    justify-items: center;
`;

export const Icon = styled(Spinner)`
    margin-top: 48px;
    max-width: 160px;
    max-height: 160px;
`;