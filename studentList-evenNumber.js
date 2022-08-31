const members = [];

const studentList = ["강","김","류","마","박","박","송","양","원","유","이","이","이","정","정","정","지","한","황","김","김","전","정","이","최"
];

function Kdt(id, name){
  if(typeof (id) === 'number'
      && typeof (name) === 'string'){
        this.id = id;
        this.name = name;
      }
}

for(let i = 0; i<studentList.length; i++){
  // if((i+1)%2 === 0){
    members.push(new Kdt(i+1, studentList[i]))
  // }
}

console.table(members)



// 가장 많은 성씨
// 각 성씨의 개수를 세야함
// 어떻게?
// 배열에서 동일한 것이 가장 많은 것을 찾기
// 모든 성씨를 다 바꿔야 할까?