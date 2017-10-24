/**
 * Created by liyang on 2017/10/3.
 */
export default [
    {
        no: 'T06',
        goodsName:'薯条',
        area:'中国',
        shopName:'蜜蜂便利店',
        pos:'杭州市文一西路',
        deliveryQuantity: 50,
        allocationAmount: 50,
        endDate: '2017-06-20',
        status: '已确认',
        expand:[
            {
                order:1,
                supplier:'可比克',
                offerDate:'2017.08.07',
                takenQuantity:'20',
                leftAmount: 30,
                arriveDate:'2017-06-13',
                expand_status:'完成'
            },
            {
                order:2,
                supplier:'乐事',
                offerDate:'2017.08.14',
                takenQuantity:'30',
                leftAmount: 30,
                arriveDate:null,
                expand_status:'进行中'
            }
        ]
    },
    {
        no: 'T08',
        goodsName: '可乐',
        area: '中国',
        shopName: '河马生鲜',
        pos: '上海长宁路99号',
        deliveryQuantity: 100,
        allocationAmount: 0,
        endDate: '2017-07-06',
        status: '待分配',
    },
    {
        no: 'T09',
        goodsName: '水饺',
        area: '中国',
        shopName: '物美超市',
        pos: '北京市昌平区',
        deliveryQuantity: 50,
        allocationAmount: 0,
        endDate: '2017-07-10',
        status: '待分配',
    },
    {
        no: 'T10',
        goodsName: '元宵',
        area: '中国',
        shopName: '物美超市',
        pos: '杭州市文一西路',
        deliveryQuantity: 60,
        allocationAmount: 60,
        endDate: '2017-06-20',
        status: '未确认',
    },
    {
        no: 'T11',
        goodsName: '意大利面',
        area: '罗马',
        shopName: '假日餐饮',
        pos: '罗马市政大路左侧',
        deliveryQuantity: 100,
        allocationAmount: 100,
        endDate: '2017-07-20',
        status: '已确认',
    },
    {
        no: 'T12',
        goodsName: '拉面',
        area: '东京',
        shopName: '日清拉面',
        pos: '东京市机场候机室',
        deliveryQuantity: 100,
        allocationAmount: 100,
        endDate: '2017-07-21',
        status: '已完成',
    }
];