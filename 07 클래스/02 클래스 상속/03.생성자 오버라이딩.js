class Animal {
    constructor(name) {
        this.speed =0;
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name,earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength =earLength;
    }
}

let rabbit = new Rabbit("흰 토끼", 10)

//에러 원인: 상속 클래스의 생성자에선 반드시 super를 호출했는데 super을 호출하지 않아 에러가 발생
//super는 this를 사용하기 전에 호출
//why? 자바스크립트는 '상속 클래스의 생성자 함수' 이름표처럼 붙습니다
//new와 함꼐 실행되면, 빈 객체 만들어지고 this에 이객체 할당, 하지만 상속클래스에선 상속클래스의 생성ㅁ자함수는 빈 객체를 만들고 this에 이 객체에 해당하는 일
//을 부모클래스의 생성자가 처리해주길 ㅇ기대한다