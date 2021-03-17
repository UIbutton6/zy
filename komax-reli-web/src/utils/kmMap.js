const kmMap = {
  key: '3473d965312cea59dcd6f4240c68f140',
  options: { v: '1.4.15', plugin: 'AMap.MarkerClusterer',  },
  locationOptions: {
    'showButton': true,//是否显示定位按钮
    'buttonPosition': 'RB',//定位按钮的位置
    /* LT LB RT RB */
    'showMarker': true,//是否显示定位点
    'showCircle': true,//是否显示定位精度圈
    'circleOptions': {//定位精度圈的样式
      'strokeColor': '#0093FF',
      'noSelect': true,
      'strokeOpacity': 0.5,
      'strokeWeight': 1,
      'fillColor': '#02B0FF',
      'fillOpacity': 0.25
    }
  },

  appendJS(id, url, reject = function(){}) {
    let script = document.createElement('script');
    script.src = url;
    script.id = id;
    script.onerror = reject;
    script.type = 'text/javascript';
    document.head.appendChild(script);
  },

  init(options = {} ) {
    const self = this;

    return new Promise(function (resolve, reject) {
      if( typeof AMap !== 'undefined') {
        resolve(AMap);
        return ;
      }
      window.onCallback = () => resolve(AMap);
      
      const key = kmMap.key;
      const { v, plugin } = Object.assign({}, kmMap.options, options);
      const url = `https://webapi.amap.com/maps?v=${v}&key=${key}&plugin=${plugin}&callback=onCallback`;
      self.appendJS('kmMap', url, reject);
    })
  },

  destory() {
    const self = document.getElementById('kmMap')
    self.parentElement.removeChild(self);
  }
}

export default kmMap;