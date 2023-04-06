import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { Projects } from "./Projects";
import { StyledGithubIcon, Section, SubTitle, Header } from "./styled";
import { SubHeader } from "../SubHeader/styled";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
    <Section>
        <Header>
            <StyledGithubIcon />
            <SubHeader>Portfolio</SubHeader>
            <SubTitle>My recent projects</SubTitle>
        </Header>
        <Projects
            status={repositoriesStatus}
            repositories={repositories}
        />
    </Section>
)};