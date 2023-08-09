import { Header } from "./components/Header";
import { InfoBlock } from "./components/InfoBlock";
import { ListBlock } from "./components/ListBlock";

const App = () => {

  return (
    <>
      <Header />
      <div className="main">
        <ListBlock />
        <InfoBlock />
      </div>
    </>
  )
}

export default App;