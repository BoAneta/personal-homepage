import { Container } from "./common/Container/styled";
import { Header } from "./features/Header";
import { Skills } from "./features/Skills";
import { skills, toLearn } from "./features/Skills/skillsList";

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
