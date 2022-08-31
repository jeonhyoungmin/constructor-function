const members = [];

const studentList = ["강","김","류","마","박","박","송","양","원","유","이","이","이","정","정","정","지","한","황","김","김","전","정","이","최"
];

function Kdt(id, name, age, address){
  if(typeof (id) === 'number'
      && typeof (name) === 'string'){
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
      }
}

for(let i = 0; i<studentList.length; i++){
  members.push(new Kdt(i+1, studentList[i]))
  // if(studentList[i] === "전"){
  //   members[i].address = "중구"
  //   console.log(members[i].address)
  // }
}

console.table(members)
// console.log(members)
// console.log(members[0].id)


for(let i = 0; i<studentList.length; i++){
  if(studentList[i] === "전"){
    members[i].address = "중구"
    console.log(members[i].address)
  }
}
console.log(members)