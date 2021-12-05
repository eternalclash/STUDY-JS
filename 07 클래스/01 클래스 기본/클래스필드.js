class User {
    name = "John"

    sayHi() {
      console.log(`Hello, ${this.name}!`);
    }
}
new User().sayHi();

//클래스 필드: '<프로퍼티이름> =<값>'을 써주면 간단히 클래스 필드를 만들 수 있음'
//User.prototype이 아닌 개별ㄹ 객체에만 클래스 필드가 설정된다는 점