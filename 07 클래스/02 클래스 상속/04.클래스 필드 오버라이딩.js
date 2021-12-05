class Animal {
    name = 'animal'
  
    constructor() {
      alert(this.name); // (*)
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
  }
  
  new Animal(); // animal
  new Rabbit(); // animal

class Animal {
    showName() {  // this.name = 'animal' 대신 메서드 사용
      alert('animal');
    }
  
    constructor() {
      this.showName(); // alert(this.name); 대신 메서드 호출
    }
  }
  
  class Rabbit extends Animal {
    showName() {
      alert('rabbit');
    }
  }
  
  new Animal(); // animal
  new Rabbit(); // rabbit

//  아무것도 상속받지 않는 베이스 클래스는 생성자 실행 이전에 초기화됨
// 부모 클래스가 있는 경우엔 super() 실행 직후에 초기화됨