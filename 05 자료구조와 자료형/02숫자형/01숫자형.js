// 일반적인 숫자는 2의53제곱이상이거나 -2의53제곱이하 일 수 없다.
// 숫자를 입력할 떄 편하게 하는 방법 0말고 e를 붙여서 표현 
// let billion = 10000000 => let billion = 1e9
// 16진수: 0x, 2진수: 0b, 8진수: 0o
// 숫자형에서 정수형으로 바꾸는 것 Number.toString(base)
// base= 16:16진수, base=2: 비트연산 디버깅, base=36: 0..9,A..Zcc
// Math.floor(내림) Math.ceil(올림) Math.round(반올림) Math.trunc(소수부를 무시)
// let sum = 0.1 + 0.2;
// sum.toFixed(2) 소수점 두자리까지 어림수 만듦

// isNaN(value) - 인수를 숫자로 변환한 다음 NaN인지 테스트
// why NaN은 자기 자신을 포함하여 그 어떤 값과도 같지 않다는 점에서 독특함
// alert(NaN === NaN) //false
// isFinite(vallue) 인수를 숫자로 변환하고 변환한 숫자가 NaN/Infinity인지아닌지 학인

// alert(+"100px"); //NaN
// parseInt, parseFloat는 불가능할 때까지 문자열에서 숫자를 읽음
// alert(parseInt('100px')) //100
// alert( parseFㅣoat('12.5em')) //12.5
// Math.random() 0과 1사이의 난수를 반환
// Math.max(a,b,c) 인수 중  최대/최솟값 반환
