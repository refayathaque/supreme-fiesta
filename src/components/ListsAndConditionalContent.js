import { useState } from "react";
import dummyData from "../dummy-data.js";

const divStyle = {
  color: "black",
  border: "1px solid fuchsia",
  margin: 10,
};

const ListsAndConditionalContent = () => {
  // example of stateful list
  const [posts, setPosts] = useState(dummyData);

  const [showList, setShowList] = useState(true);

  const addPostHandler = () => {
    const post = {
      id: Math.floor(Math.random() * 10000),
      title: String(Math.floor(Math.random() * 10000)),
    };
    setPosts((prevState) => {
      return [...prevState, post];
    });
  };

  const toggleListHandler = () => {
    setShowList(!showList);
  };

  // example of conditional rendering
  let renderList = <p>You decided to not show a list</p>; // you can assign JSX to variables

  if (showList) {
    renderList = posts.map((post) => <p key={post.id}>{post.title}</p>);
    // can also return components instead of JSX
  }

  return (
    <div style={divStyle}>
      <button onClick={toggleListHandler}>Toggle list below</button>
      {renderList}
      <button onClick={addPostHandler}>Add a random post</button>
    </div>
  );
};

export default ListsAndConditionalContent;
