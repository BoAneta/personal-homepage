import { Wrapper, DarkIcon, ThemeButton } from "./styled";
import darkIcon from "./icons/ToggleOff-light.svg"
import { GreyHeader } from "../Header/styled";

export const ModeSwitcher = () => (
    <Wrapper>
        <GreyHeader>DARK MODE OFF</GreyHeader>
        <ThemeButton>
            <DarkIcon src={darkIcon} />
        </ThemeButton>
    </Wrapper>
);