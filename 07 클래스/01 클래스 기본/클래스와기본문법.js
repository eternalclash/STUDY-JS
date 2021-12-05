class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name)
    }
}
    let user = new User("John");
    user.sayHi();
    //새로운 객체가 생성
    // 넘겨받은 인수와 함께 consturctor가 자동으로 실행된다. 이때 "John"이 this.name에 할당
    //1.클래스는 단순한 편의 문법이 아니다 => new와 함꼐 호출하지 않으면 안된다
    // 2.클래스는 열거할 수 없다, for in으로 객체 순회할 때 메서드는 순회 대상에서 제외
    // 3. 클래스는 항상 엄격 모드로 다룬다
