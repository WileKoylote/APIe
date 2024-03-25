let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
};

timedCount();

let w;

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
};

function stopWorker() { 
  w.terminate();
  w = undefined;
};