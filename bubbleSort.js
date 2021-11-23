//冒泡
function bubbleSort(list){
  let flag = true;
  for(let i=1; i< list.length && flag; i++){
    flag = false;
    for(let j =list.length-1; j>=i; j--){
      let temp;
      if(list[j] > list[j+1]){
        temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
        flag = true;
      }
    }
  }
  return list;
}