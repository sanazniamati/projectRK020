import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Circle, Rect } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const handelDragMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + "   Y:" + y);
  };

  return (
    <>
      <p></p>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text
            text={"Try to drag a shape. See how coordinates are changing."}
            x={10}
            y={10}
            fontSize={24}
            fill={"black"}
          />
          <Text text={text} x={10} y={40} fontSize={24} fill={"black"} />
          <Circle
            x={330}
            y={220}
            radius={60}
            stroke={"black"}
            fill={"yellow"}
            strokeWidth={4}
            draggable
            onDragMove={handelDragMove}
          />
          <Rect
            x={80}
            y={120}
            width={80}
            height={80}
            stroke={"black"}
            strokeWidth={4}
            fill={"red"}
            onDragMove={handelDragMove}
            draggable
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
