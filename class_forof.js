/**
 * 아래의 함수는 모든 매개변수를 하나하나 문자열로 만들어 지역변수에 할당하고 마지막에 이를 조합하여 변환하는 일련의 과정이 '반복적으로'작성되어 있는 안티 패턴
 * 
 * 하지만, 매개변수가 너무 많아질 때의 반복 작동 코드의 문제점을 발견하기 좋음
 * 매우 절차적이고, 융통성이 없는 코드이므로 jsx로 멋지게 추상화된 코드와 함께 비교할 것
 */

function vanilaComponent(tagName, attributes, style, events, children){
  // #1
  let attributeString = "";
  for(const [key, value] of Object.entries(attributes)) {
    attributeString += `$[key] = "${value}"`;
  }

// #2
let styleString ="";
for (const [key, value] of Object.entries(style)){
  styleString += `${key} : ${value};`
}

// #3
let eventString = "";
for (const [key, value] of Object.entries(events)){
  eventString += `${key}="${value}"`
}

// #4
let childrenString ="";
for (const child of children){
  if (typeof (child) === "string" || typeof(child) === "number"){
    childrenString += child;
  } else {
    childrenString += child.outerHTML;
  }
}

// #5
const htmlString = `
<${tagName}${attributeString} style="${styleString}"${eventString}>
${childrenString}
</${tagName}
`;

// #6
return htmlString;
}