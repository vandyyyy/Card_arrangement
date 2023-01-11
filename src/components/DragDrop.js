import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
  {
    id: 1,
    url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fpages%2FVedio-%2F671154962944988&psig=AOvVaw001dFsX4mh-Noni7sMVVNU&ust=1673510621714000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDunoOHv_wCFQAAAAAdAAAAABAE",
  },
  {
    id: 2,
    url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fpages%2FVedio-%2F671154962944988&psig=AOvVaw001dFsX4mh-Noni7sMVVNU&ust=1673510621714000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDunoOHv_wCFQAAAAAdAAAAABAE",
  },
  {
    id: 3,
    url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fpages%2FVedio-%2F671154962944988&psig=AOvVaw001dFsX4mh-Noni7sMVVNU&ust=1673510621714000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDunoOHv_wCFQAAAAAdAAAAABAE",
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;
