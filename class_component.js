/**
 * 
 * @param {*} elementNode 
 * @param {*} attributes 
 * @param {*} children 
 * @returns string
 * 
 * @example 
 * component(
 * 'div',
 * {style : 'color : blue;'}
 * [component('h1', {}, ['This is Page 1']
 * ])
 */

function component(elementNode, attributes, children) {
  // HTML 문자열로 조립하는 패턴 
  let elementStr = `<${elementNode}`;

  for (let key in attributes) { // 객체의 키를 배열처럼 순회
    // 매개변수 attributes는 객체여야 for in 문 사용 가능
    // 대표적으로 python에서는 해당 문법 접근이 기본 반복문
    elementStr += ` ${key}="${attributes[key]}"`;
  }

  elementStr += '>';
  // 만약 children이라는 값이 있다면 true
  // 조건식에서 '존재유무'로도 사용
  if (children) {
    children.forEach(child => {
      // children 매개변수는 배열이어야 함
      // 배열의 각 요소를 순회하는 forEach 사용
      // 절차형으로 for문도 사용 가능하지만 자바스크립트 다운방식 사용
      if (typeof child === 'string') {
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }

  elementStr += `</${elementNode}>`; // 맨 위 변수 덧붙여서 반환

  return elementStr; // 함수가 호출되는 순간 문자열 반환
}
// 문자열로 작동되는지 확인
let test = component('div', { style: 'color:blue;' }, [
  component('h1', {}, ['This is Page 1'])
]);

console.log(test);