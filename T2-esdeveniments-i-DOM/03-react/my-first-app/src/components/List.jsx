import { useState } from "react";

/**
 *
 * @param {{data:string []}} props
 * @returns
 */
function List({ data }) {
const[index,setIndex]=useState(1);
  const handleClick = (i) => {
  setIndex(i)
  };
  return (
    <>
      <ul className="list-group">
        {data.map((el, i) => (
          <li
            onClick={() => handleClick(i)}
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
