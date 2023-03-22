import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleMode } from "./modeSlice";
import { Wrapper, Icon, ThemeButton, Text, IconWrapper } from "./styled";

export const ModeSwitcher = () => {
    const isDarkMode = useSelector(selectIsDarkMode);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <ThemeButton onClick={() => dispatch(toggleMode())}>
                <Text>dark mode {isDarkMode ? "on" : "off"}</Text>
                <IconWrapper>
                    <Icon />
                </IconWrapper>
            </ThemeButton>
        </Wrapper>
    );
};