class TitleManager{
  /**
   * 
   * @param {string} tagName
   * @param {object} stateDataObject
   * 
   * stateDataObject 매개변수는 값이 대입되지 않았을 떄를 대비하도록 기본값 설정
   * default parameter라고 부름
   */
  constructor(tagName, stateDataObject = {basicTitle:"기본 제목", newTitle: "새로운 제목"}){
    this._tagName = tagName; //은닉화
    this._stateData = stateDataObject;
  }

  /**
   * 
   * _tagName, 언더바가 앞에 있는 형태는 은닉화를 의미
   * 숨겨두었다는 뜻이며 일반적으로 외부에서 접근 불가
   * getter, setter를 통해서만 접근 가능
   * typescript에서는 private이라는 키워드 사용
   * java에서도 private 키워드 사용
   * 아래의 getter을 통해 일반적인 .tagName으로 접근 가능
   * 
   */

  get tagName(){
    return this._tagName;
  }

  /**
   * 아래의 setter 때문에 매개변수 tagName은 일련의 검사를 거침
   */

  set tagName(value){
    // 태그 이름 검증 로직
    // HTML은 계속 업데이트 되기 때문에 아래의 코드는 완전하게 검사하지는 못함
    // "문자열"과 "띄어쓰기"는 허용하지 않는 것은 불변하기 때문에 해당 클래스에서 1차적인 검사 진행
    // 2차적인 것은 별도의 모듈이나 문서 (HMTL5, 브라우저)에서 검사
    if(typeof value === 'string' && value.trim() !== ''){
      this._tagName = value;
    } else {
      throw new Error("유효한 태그이름이어야 합니다.")
    }
  }

  // 상태 데이터에 대한 getter 및 
  
  get stateData(){
    return this._stateDataObject;
  }

  set stateDataObject(value){
    const isValidObject = (obj) => {typeof obj === 'object' && obj !== null};

    if (isValidObject(value)){
      this._stateDataObject = value;
    } else {
      throw new Error("유효한 객체이름이어야 합니다.");
    }
  }

  // UI 업데이트 및 제목 변경 로직
  updateUI(){
    // 아래의 elements는 dom API메서드 이므로, node.js에서는 실행 불가 (구조만 확인할 것)
    const elements = document.getElementsByTagName(this._tagName);
    if(elements.length > 0) {
      elements[0].textContent = this._stateDataObject.basicTitle;
    } else {
      throw new Error("지정된 태그 이름의 요소를 찾을 수 없습니다.")
    }
  }

  updateTitle(){
    this._stateDataObject.basicTitle = this._stateDataObject.newTitle;
    this.updateUI();
  }
}

const test = new TitleManager("h1", {basicTitle:"기본 제목", newTitle: "새로운 제못"});

console.dir(test);

/**
 * 위 console.dir(test)의 결과
 * ._언더바(은닉화) 처리된 것으로 조회
 * 이것은 현재 개발자가 만든 것이기 때문에 외부에서 접근 불가하고 제작자 콘솔에서만 확인 가능
 * TitleManager{
 * _tagName : 'h1',
 * _stateData : {basicTitle:'기본 제목', newTitle:'새로운 제목'}
 * }
 */

// 은닉화 처리를 했음에도 아래의 코드는 getter를 통해 접근 가능
console.log(test.tagName); // h1