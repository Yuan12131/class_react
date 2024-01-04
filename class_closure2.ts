/**
 * closure 패턴을 원활하게 사용하기 위해
 * typescript의 강력한 기능인 인터페이스 기능을 통해 
 * 주요구성과 사용방법 정의
 */

interface Counter {
  increment(): void;
  decrement(): void;
  getCount(): number;
}

/**
 * 타입 설정에 따라 다르지만, 일반적인 형태
 * 함수 counter()는 위 인터페이스를 따른다고 명시
 * 제작자는 Counter 인터페이스가 무엇인지 몰라도
 * 작성하면서 에러를 통해 인터페이스를 따르지 않았다는 것을 알 수 있음
 */
function counter() : Counter {
  let count : number = 0; // private 변수, 외부에서 접근 불가능
  // 함수형 프로그래밍에서는 외부에서 접근 불가능한 변수를 클로저라고 함
  // 보안 측면에서 count 변수는 제작자만 접근 가능
  return {
    increment() : void {
      count++;
    },
    decrement() : void {
      count--;
    },
    getCount() : number {
      return count;
    },
  };
}

/**
 * counter() 함수의 반환값은 
 * Counter 인터페이스를 따르는 객체
 * getCount() 함수는 객체지향의 캡슐화 개념을 따름
 * Class 문법의 static 키워드와 유사
 */

const closureCounter = counter();
// 함수를 호출했을 뿐인데 아래의 getCount()는 숫자를 리턴
// 전역변수를 사용하지 않고도 함수를 호출했을 때의 상태를 기억
// 전역변수는 그 자체로 메모리 누수 (memoiry leak)의 원인이 됨
// 함수를 호출했을 때의 상태를 기억하는 것은 함수형 프로그래밍의 핵심
console.log(closureCounter.getCount());
closureCounter.increment();
closureCounter.increment();
closureCounter.increment();
console.log(closureCounter.getCount());
closureCounter.decrement();
closureCounter.decrement();
console.log(closureCounter.getCount());