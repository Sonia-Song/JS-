const vFilters={
  dateFilter:function (time) {
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    return y+'-'+m+'-'+'d'
  }
};
export default vFilters
