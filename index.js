const yValues = ['70K',60,105,75,90,120,113,147,100,143,97,123];
const xValues = [1,2,3,4,5,6,7,8,9,10,11,12];
new Chart('yearlySalesChart', {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: 'rgba(0,0,255,1.0)',
      borderColor: 'rgba(0,0,255,0.1)',
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 1, max:12}}],
    }
  }
});

$('#yearlySalesChart').after('<p>Yearly Sales Chart</p>');
