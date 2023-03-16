import { Paragraph, Wrapper, DarkIcon, ThemeButton } from "./styled";
import darkIcon from "./icons/ToggleOff-light.svg"

export const ModeSwitcher = () => (
    <Wrapper>
        <Paragraph>DARK MODE OFF</Paragraph>
        <ThemeButton>
            <DarkIcon src={darkIcon} />
        </ThemeButton>
    </Wrapper>
);