// 변수 globalCountNumbe는 전역변수이면서
// 서비스 전체에 공유되기 때문에 민감한 정보를 다루는 측면과
// 메모리 누수 (memory leak)가 발생할 수 있는 측면 (대규모로 만들어지기 때문에)
// 가장 중요한 '어디서든, 의도치 않은 곳에서 변경될 수 있는' 문제가 크기 때문에
// 현재 훈련생분들의 수준에서는 전역변수를 무분별하게 사용하면 문제가 될 수 있음
// 눈에 보이지 않는 상태값을 어거지로 꺼낸 예제이므로 안티패턴
let globalCountNumber = 0;

// 아래는 클로저 패턴을 사용하여 전역변수를 사용하지 않고도
// 전역변수를 다루는 코드
function createCounter() {
  let localCountNumber = 0; // 클로저 내부에 있는 지역 변수

  // 리턴이 함수이기 때문에 createCounter()를 호출하면
  // increase() 함수를 리턴하고,
  // 결과적으로 지역변수 localCountNumber는 값이 남아 증가
  return function increase() {
    localCountNumber++;
    console.log(`지역변수 값 : ${localCountNumber}`);

    // 아래의 조건식은 10으로 나누어 떨어질 때, 즉 나머지가 0일 때로
    // 10의 배수를 위해 설정한 조건식
    if(localCountNumber % 10 === 0) {
      globalCountNumber++;
      console.log(`전역 변수 값 : ${globalCountNumber}`);
    }
  };
}

const counter = createCounter();

// 일반 호출 하기
for (let i = 0; i < 50; i++){
  counter()
  // 호출할 때마다 localCountNumber 증가
  // 덩달아 globalCountNumber도 증가
}

console.log(globalCountNumber)