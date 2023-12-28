import { useState } from "react";

function ReactTenDashOne() {
  const stateWork = [];
  stateWork.length = 10;
  stateWork.fill(false);
  console.log(stateWork); // false로 10개의 원소가 채워진 배열 stateWork
  const [packs, setPacks] = useState(stateWork); // 각 팩의 열림 상태를 관리

  const togglePack = (index) => {
    // togglePack 함수는 매개변수 1개, 인덱스(index)를 받는다.
    const newPacks = [...packs]; // packs를 복사한다.
    // 여기서 packs는 stateWork 배열을 복사한 것
    console.log(newPacks);
    if (newPacks[index]) {
      // index번째 원소가 true이면
      newPacks[index] = false; // false로 바꾼다.
    } else {
      newPacks[index] = true; // false가 아니면 true로 바꾼다.
    }
    setPacks(newPacks); // setPacks는 useState() 메서드의 1번째이다.
    // 구조분해할당으로 '할당' 받았으며 1번째(두번째)는 React에 의해 이미 만들어진 함수(메서드)이다.
  };

  const addPack = () => {
    setPacks([...packs, false]); // packs 배열에 false를 추가한다.
    // 즉 배열길이가 늘어남에 따라, packs 배열의 원소가 늘어난다.
  };
  return (
    <div>
      <button onClick={addPack}>Open!</button>
      <div>
        {packs.map((isOpen, index) => (
          <div
            key={index}
            style={{
              cursor: "pointer",
              backgroundColor: isOpen ? "salmon" : "white",
            }}
            onClick={() => togglePack(index)}
          >
            Pack {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactTenDashOne;
