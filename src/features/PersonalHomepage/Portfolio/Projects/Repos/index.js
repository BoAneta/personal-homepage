import { LinksName, Description, Tile, Header, Links, Wrapper, LinksWrapper } from "./styled";

export const Repos = ({ repositories }) => (
  <Wrapper>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <Tile key={id}>
        <Header>{name.replaceAll("-", " ")}</Header>
        <Description>{description}</Description>
        <LinksWrapper>
          <LinksName>Demo:</LinksName> 
          <Links href={homepage} target="_blank" rel="noreferrer">Open demo in new page</Links>
        </LinksWrapper>
        <LinksWrapper>
          <LinksName>Code:</LinksName>
          <Links href={html_url} target="_blank" rel="noreferrer">Open repository in new page</Links>
        </LinksWrapper>
      </Tile>
    ))}
  </Wrapper>
);