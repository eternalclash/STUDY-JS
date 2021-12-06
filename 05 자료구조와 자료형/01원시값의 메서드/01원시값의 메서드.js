//원시값: string,number,bigint,boolean,symbol,null,undefined 총 7가지
//객체: 프로퍼티에 다양한 종류의 값을 저장할 수 있다. {name:"John", age: 30}대괄호
//객체는 원시값보다 "무겁고", 내부 구조를 유지하기 위해 추가 자원 사용

//ex
let str= "Hello";
console.log(str.toUpperCase()) //HELLO

//1. 문자열 str 원시값이므로 원시값의 프로퍼티에 접근하는 순간 특별한 객체 만들어짐
//2. 이 객체는 문자열의 값과 toUpperCase 유용한 메서드 가짐
//3. 특별한 객체 파괴, 원시값 str