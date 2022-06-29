export function factPrice(value,discount){
    value = parseFloat(value);
    discount = parseFloat(discount);
    if(discount){
        return value*discount
    }else{
        return value
    }
}//计算折扣后的价格

//设置最终显示的格式currency:￥人民币符号，decimals:小时位数
export function currency(value,currency,decimals){
    currency = currency!=null?currency:'￥';
    decimals = decimals!=null?decimals:2;
    let str = Math.abs(value).toFixed(decimals);
    let head = str.split(".")[0];
    let end =str.split(".")[1];

    // console.log(head);
    let newhead = head.replace(/\d{1,3}(?=(\d{3})+$)/g,"$&"+',');
    // console.log(newhead);
    return currency+newhead+'.'+end
}

export function formatTime(value){
    return value.toLocaleString().replace(/T/g,'').replace(/\.[\d]{3}Z/,'');
}