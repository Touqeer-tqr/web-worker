# web-worker
[TQR](https://touqeer-ahmad.herokuapp.com/)

## stop watch example using webworker


Note: Chrome doesn't load web-worker from localfile

### web-worker.html
```sh
<input type="number" name="clock_hr" id="clock_hr" value="10" min="0" max="59">
<input type="number" name="clock_min" id="clock_min" value="24" min="0" max="59">
```

### To start web worker
```sh
    var w;
    if(typeof(Worker)!=="undefined"){  //check whether the user's browser supports it
      w = new Worker("./demo_worker.js");
      w.addEventListener('message', function(msg){
        $('#clock_hr').val(msg.data[0]);
        $('#clock_min').val(msg.data[1]);
      });
      w.postMessage([min, sec]);
    }else{
      alert("Sorry, your browser does not support Web Workers...");
    }
```

### To stop web worker
```sh
    w.terminate();
    w = undefined;
```

### demo_worker.js
```sh
  self.onmessage = function (msg) {
    var min = msg.data[0];
    var sec = msg.data[1];
    var c_sec;
    var c_min;
    setInterval(function(){
      if(sec == 0){
        if(min>0){
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
```

**Check files for complete example**
