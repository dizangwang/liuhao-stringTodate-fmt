String.prototype.ToDate = function (fmt) {
  var o = {
      "y": "",
      "M": "",
      "d": "",
      "h": "",
      "m": "",
      "s": "",
  };
  var k = {
      "y": "setFullYear",
      "M": "setMonth",
      "d": "setDate",
      "h": "setHours",
      "m": "setMinutes",
      "s": "setSeconds",
  };
  var fmt = fmt + "";
  for (var key in o) {
      var index = fmt.indexOf(key);
      var lastIndex = fmt.lastIndexOf(key);
      o[key] = +this.substring(index, lastIndex + 1)
      if (key == "M") {
          o[key] = o[key] - 1
      }
  }
  var date = new Date();
  for (var kkk in k) {
      date[k[kkk]].call(date, o[kkk])
  }
  return date
}