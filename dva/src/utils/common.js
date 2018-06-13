/**
 * @function 定义公共方法
 */

/**
 * @function 获取当前地理位置
 */
export function getLocation() {
  /** 
   * 谷歌服务暂时被封，用不了HTML5中的Geolocation
   */
  if (navigator.geolocation) {
    const options = {
      enableHightAcuracy: true, // 指示浏览器获取高精度的位置，默认为false
      timeout: 6000, // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
      maximunAge: 30000 // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
    };
    navigator.geolocation.getCurrentPosition(showPosition, showError, options);
    function showPosition(position) {
      console.log(position)
    }
    function showError(err){
        console.log(err)
    }
  }
  return "上海"
}

/**
 * @function 获取当前天气
 */
export function getWeather() {
  return "22-29'C"
}
