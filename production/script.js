var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [
      { 
        borderColor: 'rgb(75, 192, 192)',
        fill: false
      }
    ]
  },
  plugins: [ChartDataSource],
  options: {
      plugins: {
          datasource: {
            url: 'Chart.xlsx',
            datasetLabels: "'Partisipan'!A9",
            indexLabels: "'Partisipan'!B8:F8",
            data: "'Partisipan'!B9:F9"
          }
      }
  },
});

var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [
      { 
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
        ],
        borderWidth: 1
      }
    ]
  },
  plugins: [ChartDataSource],
  options: {
      plugins: {
          datasource: {
              url: 'Chart.xlsx',
              datasetLabels: "'Tender'!A2",
              indexLabels: "'Tender'!B1:F1",
              data: "'Tender'!B2:F2"
          }
      },
      scales: {
        yAxes: [{
            ticks: {
                min: 500,
                max: 1000
            }
        }]
    }
  }
});

// Grafik jumlah tender tiap jenus pengadaan
var ctx = document.getElementById("chart_pie");
var chart_pie = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
        'Pengadaan Barang',
        'Pekerjaan Konstruksi',
        'Jasa Konsultasi Badan Usaha',
        'Jasa Lainnya'
    ],
    datasets: [
      { 
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
        ],
        hoverOffset: 4
      }
    ]
  },
  plugins: [ChartDataSource],
  options: {
      plugins: {
          datasource: {
              url: 'Chart.xlsx',
              rowMapping: 'index',
              indexLabels: "'Jenis'!A2:A5",
              data: "'Jenis'!B2:B5"
          }
      }
  }
});

// Grafik jumlah tender selesai dan tender batal
var ctx = document.getElementById('tenderChart');

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [
      {
        backgroundColor: "lightblue"
      },
      {
        backgroundColor: "grey"
      }
    ] 
  },
  plugins: [ChartDataSource],
  options: {
      barValueSpacing: 20,
      scales: {
          yAxes: [{
              ticks: {
                  min: 0,
                  max: 1000
              }
          }]
      },
      plugins: {
        datasource: {
            url: 'Chart.xlsx',
            datasetLabels: "'Tahapan'!A2:A3",
            indexLabels: "'Tahapan'!B1:F1",
            data: "'Tahapan'!B2:F3"
        }
      }
  }
});