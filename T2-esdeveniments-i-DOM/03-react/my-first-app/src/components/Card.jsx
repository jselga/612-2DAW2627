import CardBody from "./CardBody";

function Card() {
  return (
    <div
      className="card"
      style={{
        width: "300px",
      }}
    >
      <div className="card-body">
        <CardBody title="Card de prova" subtitle="algo..." text="Lorem ipsum" />
      </div>
    </div>
  );
}
export default Card;
