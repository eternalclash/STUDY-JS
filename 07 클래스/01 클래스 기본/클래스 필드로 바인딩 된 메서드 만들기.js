class Button {
    constructor(value)
    {
        this.value= value;
    }
    click () {
        console.log(this.value)
    }
}

// let button = new Button ("hello")

// setTimeout(button.click(), 1000)
//출력값 undefined
//this의 컨텍스트를 알 수 없게 되는 문제를 "잃어버린 this(losing this)"
//setTimeout(() => button.click(), 1000) 같이 래퍼 함수를 전달하기
//생성자 안 등에서 메서드를 객체에 바인딩하기

class Click {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        console.log(this.value)
    }
}

let hash = new Click("hello");

setTimeout(hash.click, 1000);

// 클래스필드 click = () => {...}는 각 Button 객체마다 독립적인 함수를 만들고 함수의 this를 해당 객체에 바인딩
// 따라서 hash.click을 아무곳에나 사용할 수 있고 this엔 항상 의도된 값이 들어가야 한다.