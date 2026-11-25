import CardBody from "./CardBody";

function Card() {
  const width = {
    width: "300px",
  };
  return (
    <div className="card" style={width}>
      <div className="card-body">
        <CardBody/>
      </div>
    </div>
  );
}
export default Card;
