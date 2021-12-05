//정적 프로퍼티와 메서드는 상속됌

class Animal {
    static planet = "지구"

    constructor(name,speed) {
        this.speed = speed;
        this.name = name;
    }
    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name}가 속도${this.speed}로 달립니다`)
    }
    static compare(animalA, animalB)
    {
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name}기 숨었습니다`)
    }
}

let rabbits = [
    new Rabbit ("흰 토끼", 10),
    new Rabbit ("검은 토끼", 5)
]

rabbits.sort(Rabbit.compare);
rabbits[0].run()


// 1.함수 Rabbit은 프로토 타입을 통해 함수 Animal 상속받음
// 2.Rabbit.prototype은 프로토타입을 통해 Animal.prototype을 상속