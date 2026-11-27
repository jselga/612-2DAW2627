import Card from "./components/Card";
import CardBody from "./components/CardBody";
/**
 * @param {{body:string}} props
 * @returns {JSX.Element}
 */
function App() {
  return (
    <>
      <Card>
        <CardBody title="Card #1" text="Text del card #1" />
        <CardBody title="Card #2" text="Text del card #2" />
      </Card>
    </>
  );
}
export default App;
