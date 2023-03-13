import { Container } from "./common/Container/styled";
import { Header } from "./common/Header";
import { Skills } from "./common/Skills";
import { skills, toLearn } from "./common/Skills/skillsList";

function App() {
  return (
    <Container>
      <Header />
      <Skills 
      title="My skillset includes 🛠️"
      skills={skills}
      />
      <Skills 
      title="What I want to learn next 🚀"
      skills={toLearn} />
    </Container>
  );
}

export default App;
