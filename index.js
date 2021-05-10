export default (time, fmt) => {
  if (time.constructor !== Date) {
    time = new Date(time);
  }

  const rule = {
    "M+": time.getMonth() + 1,
    "d+": time.getDate(),
    "h+": time.getHours(),
    "m+": time.getMinutes(),
    "s+": time.getSeconds(),
    "q+": Math.floor((time.getMonth() + 3) / 3),
    S: time.getMilliseconds()
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  for (let k in rule) {
    const v = rule[k];

    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? v : `00${v}`.substr(`${v}`.length));
    }
  }

  return fmt;
};
