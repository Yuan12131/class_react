/**
 * 
 * 아래 세 개의 함수는 문자열 리턴
 * 변수와 결과물로서는 다른 점이 없지만, 함수를 사용하면
 * 매개변수가 적절하게 작성되어있지 않은 한
 * 세 개의 함수리턴을 수정할 방법은 없음
 * 
 * 이러한 함수를 '순수함수'라고 함
 * 불변(변하지 않는, immutable)한 값을 리턴하는 함수
 * 
 */

let zeroMemoryLoader = "포켓몬";
zeroMemoryLoader = "피카츄";

/**
 * 위의 변수 zeroMemoryLoader는 불변이 아님 (module)
 * 즉, 변수의 값을 변경할 수 있음. 
 * 변수 선언 중에도 '상수'라고 부르는 위의 zeroMemoryLoader도 작성법을 어기지 않는다면 언제든지 변할 수 있다는 뜻
 */

function firstLoader(){
  return "파이리";
}

function secondLoader(){
  return "리자드";
}

function threeLoader(){
  return "리자몽";
}

function evolutionContainer(){
  const first = firstLoader();
  const second = secondLoader();
  const third = threeLoader();
  return `${first} -> ${second} -> ${third}`;
}

const finalEvolutution = evolutionContainer();
console.log(finalEvolutution);

/**
 * 해당 예제는 순수함수 세 개를 조합하는 간단한 예제이지만,
 * 이것이 HTML, CSS, Javascript를 loading(적재)하는 방식과 동일
 * 따라서 webpack과 같은 번들러가 적절하게 동작하기 위해서는 위와같은
 * '절차'를 따라야 함
 */