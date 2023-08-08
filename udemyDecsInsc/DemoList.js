import React, { useMemo } from "react";

const DemoList = (props) => {
  const sortedArray = useMemo(() => {
    return props.items.sort((a, b) => props.onOrderChange?b-a: a-b);
  },[props.items, props.onOrderChange]);
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedArray.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
