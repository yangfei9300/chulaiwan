export function datePipe(timestamp, format = 'yyyy-MM-dd hh:mm:ss') {
    if (!timestamp) {
        return '';
    }
    let date = new Date(timestamp);
    let o = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1, // 月份 "d+": value.getDate(), // 日
        'd+': date.getDate(),
        'h+': date.getHours(), // 小时 "m+": value.getMinutes(), // 分 "s+": value.getSeconds(), // 秒
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    };
    if (/(y+)/.test(format)) {
        // eslint-disable-next-line no-param-reassign
        format = format.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            // eslint-disable-next-line no-param-reassign
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length)
            );
        }
    }
    return format;
}
