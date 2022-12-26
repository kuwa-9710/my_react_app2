import { useState, memo } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("Appレンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickReset = () => {
    setNum(0);
  };

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      {/* Propsとして関数を設定 */}
      <Child1 onClick={onClickReset} />
      <Child4 />
    </>
  );
});
