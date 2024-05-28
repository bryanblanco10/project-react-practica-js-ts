import { Title } from "./OpenClosedPrinciple";
import { ButtonWithLink, ButtonNormal } from "./OpenClosedPrinciple/components/TypeButton";
import { TodoList } from "./SingleResponsabilityPrinciple";

function App() {
  const onclick = (): void => {
    console.log("Bryan");
  };
  return (
    <>
      {/* <TodoList /> */}
      <Title title="Open Closed Principle">
        <ButtonWithLink
          buttonText="Tengo un link"
          href="#"
          onClick={onclick}
        />
        <ButtonNormal
          buttonText="Soy un button normal"
          onClick={onclick}
        />
      </Title>
    </>
  );
}

export default App;
