/**
 *
 * @param {{data:string []}} props
 * @returns
 */
function List({ data }) {
  let index = 2;
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <>
      <ul className="list-group">
        {data.map((el, i) => (
          <li
            onClick={() => handleClick(el)}
            key={el}
            className={`list-group-item ${index == i ? 'active':''}`}
          >
            {" "}
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
