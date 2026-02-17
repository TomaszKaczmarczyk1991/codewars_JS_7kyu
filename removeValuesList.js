Array.prototype.remove_ = function(integer_list, values_list){
  let arr = [...integer_list]
  for(let i = 0; i < values_list.length; i++) {
    arr = arr.filter(x => x !== values_list[i])
  }
  return arr
}