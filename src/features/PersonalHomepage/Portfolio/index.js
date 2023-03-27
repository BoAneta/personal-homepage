import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../personalHomepageSlice";
import gitIcon from "./icons/gitIcon.png";
import { Projects } from "./Projects";
import { GitIcon, Section, SubTitle, Title, Wrapper } from "./styled";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
    <Section>
        <Wrapper>
            <GitIcon src={gitIcon} alt="" />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
        </Wrapper>
        <Projects
            status={repositoriesStatus}
            repositories={repositories}
        />
    </Section>
)};