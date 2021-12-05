class Clock {
    constructor({template}) {
        this.template= template;
    }
    render () {
        let date = new Date();  //Date type 선언
        let hours = date.getHours();  //시간만 빼오기

        if(hours<10) hours = '0' + hours;  
        //시간 11시,12시가 아닌 일의자리 시일 때는 앞에 0 붙이기

        let mins = date.getMinutes();
        if (mins < 10) mins ='0'+mins;
        //분,초도 마찬가지
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        //h=>바뀐 hours로  m,s도 마찬가지
        console.log(output)
    }
    stop() {
        clearInterval(this.timer);
      }
    
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      }
}
let clock = new Clock({template: 'h:m:s'});
clock.start();


