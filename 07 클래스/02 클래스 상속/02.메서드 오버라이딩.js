// class Rabbit extends ANimal {
//     stop() {

//     }
// }

//Rabbit에서 stop()등의 메서들르 자체적으로 정의하면, 상속받은 메서드가 아닌 자체 메서드로 사용됌
//부모 메서드 전체를 교체하지 않고, 부모 메서드를 토대로 일부 기능만 변경 또는 확장하고 싶을 때
//객체 지향 프로그래밍에서 서브클래스 또는 자식 클래스가 자신의 슈퍼클래스 또는 부모 클래스 하나에 의해 
//이미 제공된 메소드를 특정한 형태로 구현하는 것
class Animal {
    constructor(name) 
    {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name}가 속도 ${this.speed}로 달립니다.`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name}가 멈췄습니다`)
    }
}
class Rabbit extends Animal {
    hide()
    {
        console.log(`${this.name}가 숨었습니다`)
    }
    stop() {
        super.stop();
        this.hide();
    }
}
let rabbit = new Rabbit("흰 토끼")
rabbit.run(5);
rabbit.stop();