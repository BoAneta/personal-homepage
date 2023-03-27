import { Content, LinksName, Paragraph, Tile, Title, Links, ProjectSection } from "./styled";

export const Repos = ({ repositories }) => (
    <ProjectSection>
        {repositories.map(({ id, name, description, homepage, html_url }) => (
            <Tile key={id}>
                <Content>
                    <Title>{name}</Title>
                    <Paragraph>{description}</Paragraph>
                    <LinksName>Demo: <Links href={homepage}>{homepage}</Links></LinksName>
                    <LinksName>Repo: <Links href={html_url}>{html_url}</Links></LinksName>
                </Content>
            </Tile>
        ))}
    </ProjectSection>
);