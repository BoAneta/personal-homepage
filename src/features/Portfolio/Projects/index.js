import { Content, LinksName, Paragraph, Tile, Title, Links, ProjectSection } from "./styled";

export const Projects = ({ title, projectDescription, demoLink, repoLink }) => (
    <ProjectSection>
        <Tile>
            <Content>
                <Title>{title}</Title>
                <Paragraph>{projectDescription}</Paragraph>
                <LinksName>Demo: <Links href={demoLink}>{demoLink}</Links> </LinksName>
                <LinksName>Repo: <Links href={repoLink}>{repoLink} </Links></LinksName>
            </Content>
        </Tile>
        <Tile>
            <Content>
                <Title>{title}</Title>
                <Paragraph>{projectDescription}</Paragraph>
                <LinksName>Demo: <Links href={demoLink}>{demoLink}</Links> </LinksName>
                <LinksName>Repo: <Links href={repoLink}>{repoLink} </Links></LinksName>
            </Content>
        </Tile>
        <Tile>
            <Content>
                <Title>{title}</Title>
                <Paragraph>{projectDescription}</Paragraph>
                <LinksName>Demo: <Links href={demoLink}>{demoLink}</Links> </LinksName>
                <LinksName>Repo: <Links href={repoLink}>{repoLink} </Links></LinksName>
            </Content>
        </Tile>
        <Tile>
            <Content>
                <Title>{title}</Title>
                <Paragraph>{projectDescription}</Paragraph>
                <LinksName>Demo: <Links href={demoLink}>{demoLink}</Links> </LinksName>
                <LinksName>Repo: <Links href={repoLink}>{repoLink} </Links></LinksName>
            </Content>
        </Tile>
    </ProjectSection>
);