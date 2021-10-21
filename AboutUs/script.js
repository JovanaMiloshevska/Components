var counters = document.getElementsByClassName("counter");

for (var i = 0; i < counters.length; i++) {
    handleCounter (counters[i]);
}

function handleCounter (counter) {
  var c = 0;
  var interval = setInterval(() => {
    if(c==counter.dataset.count) {
       clearInterval(interval);
    }
    counter.innerText = c;
    c++;
  }, 0.5);
}