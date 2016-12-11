// User segmentation tool



/*$.get( "/process", function( data ) {
  $( ".data_output" ).html( data );
  console.log( "Load was performed." );
});*/



window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};

window.randomScalingFactor = function() {
  return (Math.random() > 0.1 ? 10 : -10) * Math.round(Math.random() * 10);
}

var color = Chart.helpers.color;
// window.Chart.defaults.global.defaultFontSize = 14;
// window.Chart.defaults.global.defaultFontColor = "FFF";
var config = {
    type: 'radar',
    data: {
        labels: ["Lowest price", "Review score", "Location", "Badges", "Group size", "Room config"],
        datasets: [{
            label: "Influence probability",
            backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
            borderColor: window.chartColors.blue,
            pointBackgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor()
            ]
        }, ],
        ticks: [{
          fontColor: "#f30",
        }]
    },
    options: {
        legend: {
            display: false,
            position: 'bottom',
            labels: {
              fontSize: 14,
              //fontColor: '#f30'
            },
            
        },
        scales: {
          ticks: {
            beginAtZero: true,
            fontSize: 16,
            stepSize: 10
          }
        },
    }
};

window.onload = function() {
    window.myRadar = new Chart(document.getElementById("canvas"), config);
};

/*document.getElementById('randomizeData').addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });

    window.myRadar.update();
});*/

/*var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset').addEventListener('click', function() {
    var colorName = colorNames[config.data.datasets.length % colorNames.length];;
    var newColor = window.chartColors[colorName];

    var newDataset = {
        label: 'Dataset ' + config.data.datasets.length,
        borderColor: newColor,
        backgroundColor: color(newColor).alpha(0.2).rgbString(),
        pointBorderColor: newColor,
        data: [],
    };

    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());
    }

    config.data.datasets.push(newDataset);
    window.myRadar.update();
});*/
//window.onload = function() {
$( document ).ready(function() {
  document.getElementById('addData').addEventListener('click', function() {
      if (config.data.datasets.length > 0) {
          config.data.labels.push('dataset #' + config.data.labels.length);

          config.data.datasets.forEach(function (dataset) {
              dataset.data.push(randomScalingFactor());
          });

          window.myRadar.update();
      }
  });
  document.getElementById('removeData').addEventListener('click', function() {
      config.data.labels.pop(); // remove the label first

      config.data.datasets.forEach(function(dataset) {
          dataset.data.pop();
      });

      window.myRadar.update();
  });
});
//};

/*document.getElementById('removeDataset').addEventListener('click', function() {
    config.data.datasets.splice(0, 1);
    window.myRadar.update();
});*/

