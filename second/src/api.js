import data from './data';

function timeout(duration = 200) { 
  return new Promise(function(resolve, reject) { 
    setTimeout(resolve, duration); 
  });
}

export default {
  fetch(query = {}) {
    return timeout().then(() => {
      const newData = data.slice().filter(item => {
        let flag = ['no', 'goodsName', 'shopName'].every(key => {
          return query[key] === '' || ~item[key].indexOf(query[key]);
        }) && (
          query.beginDate == null || query.endDate == null || (
            new Date(query.beginDate) <= new Date(item.endDate) && new Date(query.endDate)
            >=new Date(item.endDate)
          )
        )
        return flag;
      });
      return newData;
    });
  }
}
