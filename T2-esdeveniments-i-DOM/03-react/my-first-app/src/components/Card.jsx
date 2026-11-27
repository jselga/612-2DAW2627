import CardBody from "./CardBody";

function Card(props) {
  const {children} = props
  return (
    <div
      className="card"
      style={{
        width: "300px",
      }}
    >
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
export default Card;
