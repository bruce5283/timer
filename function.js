// https://www.chartjs.org/


window.function = function (time, fweight, align, fsize, width, height) {

  // data
  time = time.value ?? "";
  
// Set the date we're counting down to
var countDownDate = new Date(time).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // If the count down is not finished, return 1, if it is finishedm return 0
  if (distance > 0) {
    return distance;
  } else{
      return distance;
      clearInterval(x);
    }
}, 1000);
</script>
  </body>
</html>`
}
