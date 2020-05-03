

  new Chartist.Line('.monthly-traffic', {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV"]  ,
    series: [
      [5000, 10000, 7500, 12500, 17500, 12500, 15000, 10000, 15000, 20000, 15000, 20000 ]]
  }, {
    low: 0,
    scaleMinSpace: 5,
    showArea: true,
    fullWidth: true
  });




