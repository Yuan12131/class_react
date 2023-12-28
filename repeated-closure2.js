const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지";

function createStringAppender() {
  let body = ""; // 클로저에 의해 기억될 변수
  // 리턴이 함수로 처리되어, body를 업데이트 할 수 있으며 React에서 상당히 많이 사용되는 패턴
  return function(stringArray, callback) {
    stringArray.forEach((element) => {
      body += element; // 클로저를 사용하여 body 변수 업데이트
    });
    callback(body);
  };
}

const appendString = createStringAppender();

function splitString(stringParams) {
  return stringParams.split(' ');
}

// appendString을 사용
appendString(splitString(stringExample), (body) => {
  console.log(body);
  console.log(body.length);
});