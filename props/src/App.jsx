import Cards from "./components/cards.jsx";
import Student from "./Student.jsx";
function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4  rounded-cl">Tailwind Test</h1>
      <Student name="bob" age={30} isStudent={true} />
      <Student name="Patrick" age={21} isStudent={false} />
      <Student />
      <Cards name="bob" age={30} />
      <Cards name="patrick" age={21} />
      <Cards />
    </>
  );
}

export default App;
