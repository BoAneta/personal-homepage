import { Content, LinksName, Paragraph, Tile, Title, Links, ProjectSection } from "./styled";

export const Projects = ({ title, projectDescription }) => (
    <ProjectSection>
        <Tile>
            <Content>
                <Title>{title}</Title>
                <Paragraph>{projectDescription}</Paragraph>
                <LinksName>Demo: <Links>https://boaneta.github.io/todos-list-react/</Links> </LinksName>
                <LinksName>Repo: <Links>https://github.com/BoAneta/todos-list-react </Links></LinksName>
            </Content>
        </Tile>
        <Tile>
            <Content>
                <Title>{title}</Title>
                <Paragraph>{projectDescription}</Paragraph>
                <LinksName>Demo: <Links>https://boaneta.github.io/todos-list-react/</Links> </LinksName>
                <LinksName>Repo: <Links>https://github.com/BoAneta/todos-list-react </Links></LinksName>
            </Content>
        </Tile>
        <Tile>
            <Content>
                <Title>{title}</Title>
                <Paragraph>{projectDescription}</Paragraph>
                <LinksName>Demo: <Links>https://boaneta.github.io/todos-list-react/</Links> </LinksName>
                <LinksName>Repo: <Links>https://github.com/BoAneta/todos-list-react </Links></LinksName>
            </Content>
        </Tile>
        <Tile>
            <Content>
                <Title>{title}</Title>
                <Paragraph>{projectDescription}</Paragraph>
                <LinksName>Demo: <Links>https://boaneta.github.io/todos-list-react/</Links> </LinksName>
                <LinksName>Repo: <Links>https://github.com/BoAneta/todos-list-react </Links></LinksName>
            </Content>
        </Tile>
    </ProjectSection>
);