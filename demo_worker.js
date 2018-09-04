self.onmessage = function (msg) {
    var min = msg.data[0];
    var sec = msg.data[1];
    var c_sec;
    var c_min;
    setInterval(function(){
      if(sec == 0){
        if(min>0)
        {
          min--;
          sec=60;
        }
      }
      if(sec>0)
      { sec--;  }
      c_min = (min > 9 ? min : "0" + min);
      c_sec = (sec > 9 ? sec : "0" + sec);
      self.postMessage([c_min, c_sec]);
    }, 1000);
}