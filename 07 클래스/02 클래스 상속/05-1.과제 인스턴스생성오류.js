class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
     super();
      this.name = name;
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  console.log(rabbit.name);


  // 정답: 자식 클래스의 생성자에서 super()를 호출하지 않아 에러가 발생