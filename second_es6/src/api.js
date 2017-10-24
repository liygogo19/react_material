/**
 * Created by liyang on 2017/10/3.
 */
import data from './data'

function timeOut(duration = 200) {
    return new Promise(function (reslove,reject) {
        setTimeout(reslove,duration);
    })
}

function fetch(query = {}) {
    return timeOut().then(() => {
        const newData =  data.slice().filter(item => {
            let queryKeys = ['no','goodsName','shopName'];

            let flag = queryKeys.every((key)=>{
                let queryVal = query[key];
                return !queryVal || (item[key].indexOf(queryVal)!==-1);
            });

            return flag;

        });

        return newData;
    });
}

export default fetch;