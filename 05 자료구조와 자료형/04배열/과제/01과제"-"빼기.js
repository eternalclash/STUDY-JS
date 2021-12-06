function camelize(str) {
    return str
      .split('-') 
      .map(
    
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }

  //split후 map으로 글자 정리 다시 join
  //split은 키워드 slice는 index기준
  