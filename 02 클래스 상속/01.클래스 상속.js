class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}이${this.speed}로 달립니다`)
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name}이 멈췄습니다`)
    }
}

let animal = new Animal("동물")
animal.run(40)
//////  또 다른 클래스 Rabbit, 토끼는 동물이므로 Rabbit은 동물 관련 메서드가 담신 Animal 확장, 토끼도 동물이 할 수 있는 '일반적안'동작가능

class Rabbit extends ANimal {
    hide() {
        console.log(`${this.name}이/가 숨었습니다`)
    }
}
let rabbit = new Rabbit("흰 토끼");
rabbit.run(5);
rabbit.hide();
//rabbit은 Animal에 상속된 메서드도 사용할 수 있고 자신의 메서드도 사용가능함
//1.rabbit run이 있나 확인 run 없음
//2. rabbit 프로토타입인 Rabbit.prototype에 메서드가 있나 없나 확인, hide는 있는데 run은 없음
//3. extends를 통해 관계가 만들어진 Rabbit.prototype의 프로토타입, Animal.prototype에 메서드가 있나 없나 확인