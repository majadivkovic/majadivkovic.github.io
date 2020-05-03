


  new Chartist.Line('.hourly-traffic', {
    labels: ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]  ,
    series: [
      [5, 10, 7, 12, 17, 12, 15, 10, 15, 20, 15, 25]]
  }, {
    low: 0,
    scaleMinSpace: 5,
    showArea: true,
    fullWidth: true
  });




