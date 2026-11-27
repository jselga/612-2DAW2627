import Card from "./components/Card";
import CardBody from "./components/CardBody";
import List from "./components/List";
/**
 * @param {{body:string}} props
 * @returns {JSX.Element}
 */
function App() {
  const list = ["Chopper", "Rocket", "Cosmo"];
  return (
    <>
      <Card>
        <CardBody title="Llista Personatges" subtitle="..." text="Tria'n un" />
        <List data={list} />
       
      </Card>
    </>
  );
}
export default App;
