/**
 *
 * @param {{title:string, subtitle:string, text:string}} props
 * @returns {JSX.Element}
 */
function CardBody(props) {
  const { title, subtitle, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
      <p className="card-text">{text}</p>
    </>
  );
}

export default CardBody;
