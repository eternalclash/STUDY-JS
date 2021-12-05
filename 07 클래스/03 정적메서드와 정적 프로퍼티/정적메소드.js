class User {
    static staticMethod() {
        console.log(this === User);
    }
}

User.staticMethod();

//User.staticMethod()가 호출될 때 this의 값은 클래스 생성장인 User 자체가 됌
// 정적메서드는 어떤 특정한 객체가 아닌 클래스에 속한 함수를 구현하고자 할 때 주로 사용
//객체 Article 이 여러 개 있고 이들이 비교해줄 함수가 필요함

class User {
    static staticMethod() {
        console.log(this === User);
    }
}

User.staticMethod();

//정적 메서드는 어떤 특정한 객체가 아닌 클래스에 속한 함수를 구현할 때 주로 사용
class Article {
    constructor(title,date) {
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB) 
    {
        return articleA.date - articleB.date
    }
}

let articles = [
    new Article ("HTML", new Date(2021,2,1)),
    new Article ("CSS", new Date(2021,3,1)),
    new Article ("JAVASCRIPT", new Date(2021,4,1)),


]
articles.sort(Article.compare);
alert(articles[0].ttile) ;
//'위에서' 바라보면 비교를 수행
//Article.compare article 비교하는 것  인스턴스를 생각하면서 메서드를 구현하자

class Article {
    constructor(title,date) {
        this.title = title;
        this.date = date
    }
    static createTodays() {
        return new this("Today's digest", new Date())
    }
}

// Article.createTodats()는 class Article에만 해당되지 않고 전체 클래스의 메서드이다