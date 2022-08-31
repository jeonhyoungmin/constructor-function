// function kdt(name, glass, payment) {
//   this.id = name;
//   this.b = glass;
//   this.c = payment;
// }

// const ah = new kdt("슈크림", "김치", "소주");
// console.log(ah);
// console.log(typeof ah)

// const members = [];
// for(let i = 0; i < 5; i++){
//   members.push(new kdt(i+1, "hello", "bye"));
// }
// console.log(members)



function members(name, age, address, tel){
  if(typeof (name) === 'string'
      && typeof (age) === 'number'
      && typeof (address) === 'string'
      && typeof (tel) === 'number'){
        this.name = name;
        this.age = age;
        this.address = address;
        this.tel = tel;
      }
  }
  
  const jeon = new members("전형민", 18, "중구", 010)
  console.log(jeon)
  
  
  for(const Keys in jeon){
    console.log(`이 생성자 함수의 결과로 나타난 객체의 키 값은 ${Keys}입니다. 값은 ${jeon[Keys]}`)
  }

  const kdt = [];
  for(let i = 0; i < 5; i++){
    kdt.push(new members("전형민", 18, "중구", 010))
  }

  console.log(kdt)