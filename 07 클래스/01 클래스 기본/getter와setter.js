class User {
    constructor(name) 
    {
      this.name= name
    }
    get name()
    {
        return this._name;
    }

    set name(value)
    {
        if(value.length<4)
        {
            console.log("이름이 너무 짧습니다")
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name)

user = new User("");
//setter 메소드를 통해 객체를 포함시킬 수 있고
//getter를 통해 값을 내보낼 수 있다.