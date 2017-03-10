
var barctx = document.getElementById("bar");
var piectx = document.getElementById("pie");

var barChart = new Chart(barctx, {
    type: 'bar',
    data: {
        labels: ["03-04","03-05", "03-06", "03-07", "03-08", "03-09", "03-10"],
        datasets: [{
            label: '# of Votes',
            data: [d1, 1900, 300, 500, 200, 300],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var pieChart = new Chart(piectx, {
    type: 'pie',
    data: {
       labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
         datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    },

});
