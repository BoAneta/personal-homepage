import gitIcon from "./icons/gitIcon.png";
import { Projects } from "./Projects";
import { GitIcon, Section, SubTitle, Title, Wrapper } from "./styled";

export const Portfolio = ({ title, subTitle }) => (
    <Section>
        <Wrapper>
            <GitIcon src={gitIcon} alt="" />
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Wrapper>
        <Projects
            title="Movie Browser" 
            projectDescription="Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."
        />
    </Section>
);