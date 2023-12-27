import React from 'react';


function ReactComponent(props){
  /**
   * React에서 말하는 props 매개변수는 반드시 객체 타입이어야 한다는 약속이 있으므로 매개변수보다는 무엇이 들어있을지 모르는 여러개의 값의 뭉치 '객체'로 보아야 함
   */
  const Tag = props.tagName;
  /*
  ...otherProps는 tagName을 제외한 나머지 props를 담고 있으며, 얇은 복사를 통해 새로운 객체를 만들어 리턴
  구조분해할당을 통해 tagName을 제외한 나머지 props를 otherProps에 담음
  예를들면,
  const { tagName, ...otherProps } = { tagName: 'div', className: 'container', id: 'app' };
  console.log(tagName) //div
  console.log(otherProps); // { className: 'container', id : 'app' }
  리액트에서는 전개연산자와 구조분해할당을 매우 애용하므로, 익숙해지는 것이 좋음
  */
const { tagName, ...otherProps } = props;

// return은 사실상 DOM API를 사용하는 것이 아니라 리액트가 제공하는 createElement 함수를 사용
// 이것을 JSX 문법이라고 부르며, babel이 이것을 createElement 함수로 변환해줌
return <Tag {...otherProps } />;
}

export default ReactComponent;