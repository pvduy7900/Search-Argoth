var array = [{name:"Vinh",age:25,phone:"025340007"},{name:"Minh",age:26,phone:"0244430007"},{name:"Xen",age:24,phone:"23342554"},{name:"miNh",age:23,phone:"443332200"},{name:"nHe",age:22,phone:"23232341"},{name:"BiNh",age:6,phone:"0244430000"}]

// Cach 1 làm thủ công
// const test = (search) => array.filter((item,index)=>array[index].name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1 || array[index].age.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1 || array[index].phone.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)
// Cach 2 làm vòng lặp
const test = (search) => {
  const get_search_list = search.map((search) => array.filter((item)=> {
    for(var i in item){
        if(item[i].toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1){
          return item[i]
        }
      }
    })
  )
  const search_result = []
  for(var i = 0;i<get_search_list.length;i++){
  if(search[i].length > 0)
    search_result.push(...get_search_list[i])
  }
  console.log(get_search_list)
  const search_result_map = new Set(search_result.map(e => JSON.stringify(e)))
  const search_result_remove_dup = Array.from(search_result_map).map(e => JSON.parse(e));
  return search_result_remove_dup
}
console.log(array)
console.log('----------------------------------------------')
test(['v','v','v'])
// const search = array.filter(item=>array.indexOf('in') !== -1)
// console.log(search)