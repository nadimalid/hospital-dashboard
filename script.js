
const navigation = document.querySelector(".sidebar");
const openNavigation = document.querySelector("#open-nav");
const closeNavigation = document.querySelector("#close-nav");

openNavigation.addEventListener("click", () => {
    navigation.style.display = "flex";
})

closeNavigation.addEventListener("click", () => {
    navigation.style.display = "none";
})

// toggle user menu on small devices

const userMenuToggle = document.querySelector("#toggle-user-menu");
const userMenu = document.querySelector("#user-menu");
let userMenuOpen = false;

userMenuToggle.addEventListener("click", () => {
    userMenuOpen = !userMenuOpen;

    if(userMenuOpen) {
        userMenu.style.display = "flex";
    } else {
        userMenu.style.display = "none";
    }
    console.log(userMenuOpen);
})



// var chart = c3.generate({
//     data: {
//         columns: [
//             ['Quality of Service', 5, 4, 6, 3, 4, 2],
//             ['Service Recommendations', 1, 3, 2, 1, 6,4]
//         ],
//         types: {
//             'Quality of Service': 'area-spline',
//             'Service Recommendations': 'area-spline'
//         },
//         colors: {
//             'Quality of Service': '#fdc97f',
//             'Service Recommendations': '#fbbb6b'
//         }
//     },
//     axis: {
//         x: {
//           show: false
//         }
//     },
//     grid: {
//         y: {
//             lines: [
//                 {value: 2},
//                 {value: 4},
//                 {value: 6},
//                 {value: 8}
//             ]
//         }
//     },
//     point: {
//         show: false
//     },
//     legend: {
//         position: 'inset',
//         inset: {
//             anchor: 'top-left',
//             x: -25,
//             y: -30,
//             step: 1
//         }
//     },
//     padding: {
//         top: 30
//     }
// });


// var chart2 = c3.generate({
//     bindto: '#chart2',
//     data: {
//       columns: [
//         ['OPD Earnings', 30, 200, 100, 400, 150, 250],
//         ['IPD Earnings', 50, 20, 10, 40, 15, 25]
//       ],
//       colors: {
//         'OPD Earnings': '#21c2d6',
//         'IPD Earnings': '#ee504d'
//       }
//     }
// });
// var chart3 = c3.generate({
//     bindto: '#chart2',
//     data: {
//       columns: [
//         ['OPD Earnings', 30, 200, 100, 400, 150, 250],
//         ['IPD Earnings', 50, 20, 10, 40, 15, 25]
//       ],
//       colors: {
//         'OPD Earnings': '#21c2d6',
//         'IPD Earnings': '#ee504d'
//       }
//     }
// });

// var chart4 = c3.generate({
//     bindto: '#chart2',
//     data: {
//       columns: [
//         ['OPD Earnings', 30, 200, 100, 400, 150, 250],
//         ['IPD Earnings', 50, 20, 10, 40, 15, 25]
//       ],
//       colors: {
//         'OPD Earnings': '#21c2d6',
//         'IPD Earnings': '#ee504d'
//       }
//     }
// });

// const serviceChart = document.getElementById('serviceChart');

const serviceChart = new Chart('serviceChart', {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
            label: 'Quality of Service',
            fill: true,
            data: [4, 3, 6, 5, 3, 4, 2],
            borderColor: '#fdc97f90',
            backgroundColor: '#fdc97f90',
            pointRadius: 0
        },
        {
            label: 'Service Recommendations',
            fill: true,
            data: [1, 2, 2, 1, 6, 2, 7],
            borderColor: '#fbbb6b90',
            backgroundColor: '#fbbb6b90',
            pointRadius: 0
        }
    ]
    },
    options: {
        responsive: true,
        tension: 0.3,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                }
            }, 
        },
        scales: {
            x: {
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawTicks: false
                } 
            }
        }
    }
});

  const earningsChart = new Chart('earningsChart', {
    type: 'line',
    data: {
      labels: [1, 5, 6, 9, 11, 12],
      datasets: [
        {
            label: 'OPD Earnings',
            fill: false,
            data: [7400, 7700, 7300, 7400, 7500, 7300],
            borderColor: '#21c2d6',
            backgroundColor: '#21c2d6',
            pointRadius: 5
        },
        {
            label: 'IPD Earnings',
            fill: false,
            data: [1500, 1600, 1300, 1200, 1600, 1300],
            borderColor: '#ee504d',
            backgroundColor: '#ee504d',
            pointRadius: 5
        }
    ]
    },
    options: {
        responsive: true,
        tension: 0.3,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                }
            }, 
        },
        scales: {
            x: {
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawTicks: false
                } 
            }
        }
    }
});