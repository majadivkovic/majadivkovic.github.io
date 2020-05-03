


  new Chartist.Line('.daily-traffic', {
    labels: ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T"],
    series: [
      [50, 100, 75, 125, 175, 125, 150, 100, 150, 200, 150, 250 ]]
  }, {
    low: 0,
    scaleMinSpace: 5,
    showArea: true,
    fullWidth: true
  });




