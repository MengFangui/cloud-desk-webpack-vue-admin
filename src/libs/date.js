// import moment from 'moment'
import moment from 'dayjs'
// 时间格式相关
export const DATE_FORMAT = 'YYYY-MM-DD'
export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 年月日
function format2Date (timeStamp) {
  return moment(timeStamp).format(DATE_FORMAT)
}
// 年月日时分秒
function format2Time (timeStamp) {
  return moment(timeStamp).format(TIME_FORMAT)
}

export {
  format2Date,
  format2Time
}
