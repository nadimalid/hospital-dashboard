
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

// Charts with dummy data (ChartJS)
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

const newPatientsChart = new Chart('newPatientsChart', {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15],
      datasets: [
        {
            label: 'patients',
            data: [10, 15, 17, 12, 12, 18, 13, 19, 4, 1, 8, 11, 9, 10, 15 ],
            borderColor: '#21c2d6',
            backgroundColor: '#21c2d6',
            pointRadius: 5
        }
    ]
    },
    options: {
        responsive: true,
        tension: 0.3,
        plugins: {
            title: {
                align: "start",
                display: true,
                text: 'New Patients'
            },
            legend: {
                display: false
            }, 
        },
        scales: {
            x: {
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                }
            },
            y: {
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                } 
            }
        }
    }
});

const pharmacyChart = new Chart('pharmacyChart', {
    type: 'line',
    data: {
      labels: [1, 5, 6, 9, 11, 12],
      datasets: [
        {
            label: '',
            fill: false,
            data: [0, 1, 5, 7, 4, 2, 1],
            borderColor: '#56af5b',
            backgroundColor: '#56af5b',
            pointRadius: 3
        },
        {
            label: '',
            fill: false,
            data: [3, 4, 2, 6, 2, 1, 0],
            borderColor: '#ee504d',
            backgroundColor: '#ee504d',
            pointRadius: 3
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                align: "start",
                display: true,
                text: 'New Pharmacy Orders'
            },
            legend: {
                display: false
            }, 
        },
        scales: {
            x: {
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                }
            },
            y: {
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                } 
            }
        }
    }
});

const labChart = new Chart('labChart', {
    type: 'line',
    data: {
      labels: [1, 5, 6, 9, 11, 12],
      datasets: [
        {
            label: '',
            fill: false,
            data: [1, 2, 1, 7, 4, 2],
            borderColor: '#fb8e03',
            backgroundColor: '#fb8e03',
            pointRadius: 0
        },
        {
            label: '',
            fill: false,
            data: [4, 2, 3, 1, 6, 8],
            borderColor: '#ee504d',
            backgroundColor: '#ee504d',
            pointRadius: 0
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                align: "start",
                display: true,
                text: 'Lab Tests'
            },
            legend: {
                display: false
            }, 
        },
        scales: {
            x: {
                display: false,
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
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                } 
            }
        }
    }
});

const visitorsChart = new Chart('visitorsChart', {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15],
        datasets: [
        {
            label: '',
            fill: false,
            data: [12, 8, 18, 17, 16, 13, 15, 18, 10, 10, 16, 13, 11, 9, 7],
            borderColor: '#ee504d',
            backgroundColor: '#ee504d',
            type: 'line',
            pointRadius: 3
        },
        {
            label: '',
            fill: false,
            data: [12, 10, 17, 17, 12, 13, 12, 16, 18, 10, 13, 11, 19, 15, 14],
            borderColor: '#21c2d6',
            backgroundColor: '#21c2d6',
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                align: "start",
                display: true,
                text: 'OPD/IPD Visitors'
            },
            legend: {
                display: false
            }, 
        },
        scales: {
            x: {
                display: false,
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
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                } 
            }
        }
    }
});