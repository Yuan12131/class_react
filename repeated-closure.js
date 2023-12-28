const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지";

function splitString(stringParams) {
  // split의 매개변수는 띄어쓰기로 처리
  let result = stringParams.split(' ');
  return result;
}

function appendString(stringArray, callback) {
  let body = "";
  // body는 단순 지역변수이며, 콜백함수에서 '전달'받아서 사용
  // : 인자를 전달
  // 여기서 지역변수 body는 클로저가 아님
  // 호출되고나서부터는 메모리 상에서 사라짐
  // 눈에 보이지 않는 개념으로 다분히 추상적인 개념
  stringArray.forEach((element) => {
    body = body + element;
    // 위 보다는 아래가 보다 깔끔한 처리
    // body += element;
  });
  callback(body);
  };

  console.log(appendString(splitString(stringExample), (body) => {
    console.log(body);
    console.log(body.length);
  }));