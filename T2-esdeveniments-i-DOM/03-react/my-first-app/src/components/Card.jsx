import CardBody from "./CardBody";

function Card(props) {
    const {body}=props;
  return (
    <div
      className="card"
      style={{
        width: "300px",
      }}
    >
      <div className="card-body">
        {body}
      </div>
    </div>
  );
}
export default Card;
