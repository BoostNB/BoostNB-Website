//-----------------------------------------------Average Weekly Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart15").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels19 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels27 = [
    650.12, 662.54, 679.79, 703.14, 726.92, 750.2, 780.9, 801.67, 816.85, 836.08,
    862.87, 881.84, 897.23, 921.76, 938.97, 952.94, 980.31, 1012.28, 1080.99,
    1098.97,
];
const ylabels28 = [
    548.06, 561.34, 572.91, 591.2, 610.82, 639.63, 670.02, 702.84, 719.68, 727.05,
    749.91, 777.8, 782.32, 808.3, 821.62, 843.14, 862.26, 884.42, 918.85, 942.73,
];
const ylabels29 = [
    102.06, 101.20, 106.88, 111.94, 116.10, 110.57, 110.88, 98.83, 97.17, 109.03,
    112.96, 104.04, 114.91, 113.46, 117.35, 109.80, 118.05, 127.86, 162.14, 156.24
];

// setup
const data15 = {
    labels: xlabels19,
    datasets: [
        {
            label: "Canada",
            type: 'line',
            data: ylabels27,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "New Brunswick",
            data: ylabels28,
            type: 'line',
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Difference",
            data: ylabels29,
            type: 'bar',
            borderColor: "#004D40",
            backgroundColor: "#004D40",
        }
    ],
};

//config
const config15 = {
    data: data15,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 1200,
                min: 0,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 0) {
                            return "#808080";
                        } else {
                            return "#EAEAEA";
                        }
                    },
                    borderColor: "#808080",
                },
                ticks: {
                    autoSkip: true,
                    callback: function (value, index, ticks) {
                        return "$" + " " + value;
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year:" + " " + context[0].label;
                    },
                },
            },
            legend: {
                display: true,
                onClick: (click, legendItem, legend) => {
                    const datasets = legend.legendItems.map((datasets, index) => {
                        return datasets.text;
                    });
                    const index = datasets.indexOf(legendItem.text);
                    if (legend.chart.isDatasetVisible(index) == true) {
                        legend.chart.hide(index);
                    } else {
                        legend.chart.show(index);
                    }
                },
                labels: {
                    usePointStyle: true,
                    generateLabels: (chart) => {
                        let visibility = [];
                        for (let i = 0; i < chart.data.datasets.length; i++) {
                            if (chart.isDatasetVisible(i) == true) {
                                visibility.push(false);
                            }
                            else {
                                visibility.push(true)
                            }
                        }
                        let pointStyle = [];
                        chart.data.datasets.forEach(datasets => {
                            if (datasets.type == 'line') {
                                pointStyle.push('line');
                            } else {
                                pointStyle.push('rect');
                            }
                        });

                        return chart.data.datasets.map(
                            (datasets, index) => ({
                                text: datasets.label,
                                fillStyle: datasets.backgroundColor,
                                strokeStyle: datasets.borderColor,
                                pointStyle: pointStyle[index],
                                hidden: visibility[index]
                            })
                        )
                    }
                }


            }
        },
    },
};

//render init block
const myChart15 = new Chart(
    document.getElementById("myChart15").getContext("2d"),
    config15
);

//-------------------------------------------Average Hourly Wage Graph--------------------------------------------------------------------------
var context = document.getElementById("myChart16").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels20 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels30 = [
    19.12, 19.55, 20.07, 20.65, 21.26, 22.00, 22.91, 23.63, 24.24, 24.71, 25.32, 25.94, 26.43,
    27.10, 27.71, 28.00, 28.73, 29.65, 31.14, 31.67
];
const ylabels31 = [
    16.82, 17.19, 17.62, 18.21, 18.86, 19.77, 20.42, 21.18, 21.81, 21.92, 22.80, 23.47, 23.63,
    24.28, 24.98, 25.27, 25.91, 26.67, 27.39, 28.24
];
// setup
const data16 = {
    labels: xlabels19,
    datasets: [
        {
            label: "Canada",
            type: 'line',
            data: ylabels30,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "New Brunswick",
            data: ylabels31,
            type: 'line',
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        }
    ]
};

//config
const config16 = {
    data: data16,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 40,
                min: 0,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 0) {
                            return "#808080";
                        } else {
                            return "#EAEAEA";
                        }
                    },
                    borderColor: "#808080",
                },
                ticks: {
                    autoSkip: true,
                    callback: function (value, index, ticks) {
                        return "$" + " " + value;
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year:" + " " + context[0].label;
                    },
                },
            },
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    pointStyle: "line",
                },
            },
        }
    }
};

//render init block
const myChart16 = new Chart(
    document.getElementById("myChart16").getContext("2d"),
    config16
);
//-------------------------------------------Average Hourly Wage Goods Graph---------------------------------------------------------------------
var context = document.getElementById("myChart17").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels21 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels32 = [
    18.87, 19.31, 19.73, 20.29, 21.08, 21.88, 22.83, 23.68, 24.19, 24.46, 25.3, 25.9, 26.58,
    27.17, 27.54, 27.91, 28.64, 29.8, 30.87, 31.33
];
const ylabels33 = [
    15.59, 15.81, 15.93, 16.24, 16.87, 17.98, 18.43, 19.13, 19.98, 19.67, 20.83, 22.09, 21.76,
    23.04, 22.97, 23.1, 23.96, 24.53, 25.24, 26.22
];
const ylabels34 = [
    3.28, 3.5, 3.8, 4.05, 4.21, 3.9, 4.4, 4.55, 4.21, 4.79, 4.47, 3.81, 4.82,
    4.13, 4.57, 4.81, 4.68, 5.27, 5.63, 5.11
];

// setup
const data17 = {
    labels: xlabels21,
    datasets: [
        {
            label: "Canada",
            type: 'line',
            data: ylabels32,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "New Brunswick",
            data: ylabels33,
            type: 'line',
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Difference",
            data: ylabels34,
            type: 'bar',
            borderColor: "#004D40",
            backgroundColor: "#004D40",
        }
    ],
};

//config
const config17 = {
    data: data17,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 40,
                min: 0,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 0) {
                            return "#808080";
                        } else {
                            return "#EAEAEA";
                        }
                    },
                    borderColor: "#808080",
                },
                ticks: {
                    autoSkip: true,
                    callback: function (value, index, ticks) {
                        return "$" + " " + value;
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year:" + " " + context[0].label;
                    },
                },
            },
            legend: {
                display: true,
                onClick: (click, legendItem, legend) => {
                    const datasets = legend.legendItems.map((datasets, index) => {
                        return datasets.text;
                    });
                    const index = datasets.indexOf(legendItem.text);
                    if (legend.chart.isDatasetVisible(index) == true) {
                        legend.chart.hide(index);
                    } else {
                        legend.chart.show(index);
                    }
                },
                labels: {
                    usePointStyle: true,
                    generateLabels: (chart) => {
                        let visibility = [];
                        for (let i = 0; i < chart.data.datasets.length; i++) {
                            if (chart.isDatasetVisible(i) == true) {
                                visibility.push(false);
                            }
                            else {
                                visibility.push(true)
                            }
                        }
                        let pointStyle = [];
                        chart.data.datasets.forEach(datasets => {
                            if (datasets.type == 'line') {
                                pointStyle.push('line');
                            } else {
                                pointStyle.push('rect');
                            }
                        });

                        return chart.data.datasets.map(
                            (datasets, index) => ({
                                text: datasets.label,
                                fillStyle: datasets.backgroundColor,
                                strokeStyle: datasets.borderColor,
                                pointStyle: pointStyle[index],
                                hidden: visibility[index]
                            })
                        )
                    }
                }


            }
        },
    },
};

//render init block
const myChart17 = new Chart(
    document.getElementById("myChart17").getContext("2d"),
    config17
);

//------------------------------------------Average Hourly Graph Services------------------------------------------------------------------------
var context = document.getElementById("myChart18").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels22 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels35 = [
    17.26, 17.63, 18.09, 18.7, 19.27, 19.93, 20.8, 21.51, 21.95, 22.43, 23.05, 23.56, 23.93,
    24.63, 25.2, 25.61, 26.34, 27.22, 29.16, 29.7
];
const ylabels36 = [
    14.2, 14.51, 14.96, 15.48, 16.04, 16.65, 17.55, 18.56, 18.8, 19.26, 19.68, 20.22, 20.56,
    20.94, 21.56, 22.17, 22.56, 23.22, 24.26, 25.01
];
const ylabels37 = [
    3.06, 3.12, 3.13, 3.22, 3.23, 3.28, 3.25, 2.95, 3.15, 3.17, 3.37, 3.34, 3.37,
    3.69, 3.64, 3.44, 3.78, 4, 4.9, 4.69
];


// setup
const data18 = {
    labels: xlabels22,
    datasets: [
        {
            label: "Canada",
            type: 'line',
            data: ylabels35,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "New Brunswick",
            data: ylabels36,
            type: 'line',
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Difference",
            data: ylabels37,
            type: 'bar',
            borderColor: "#004D40",
            backgroundColor: "#004D40",
        }
    ],
};

//config
const config18 = {
    data: data18,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 40,
                min: 0,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 0) {
                            return "#808080";
                        } else {
                            return "#EAEAEA";
                        }
                    },
                    borderColor: "#808080",
                },
                ticks: {
                    autoSkip: true,
                    callback: function (value, index, ticks) {
                        return "$" + " " + value;
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year:" + " " + context[0].label;
                    },
                },
            },
            legend: {
                display: true,
                onClick: (click, legendItem, legend) => {
                    const datasets = legend.legendItems.map((datasets, index) => {
                        return datasets.text;
                    });
                    const index = datasets.indexOf(legendItem.text);
                    if (legend.chart.isDatasetVisible(index) == true) {
                        legend.chart.hide(index);
                    } else {
                        legend.chart.show(index);
                    }
                },
                labels: {
                    usePointStyle: true,
                    generateLabels: (chart) => {
                        let visibility = [];
                        for (let i = 0; i < chart.data.datasets.length; i++) {
                            if (chart.isDatasetVisible(i) == true) {
                                visibility.push(false);
                            }
                            else {
                                visibility.push(true)
                            }
                        }
                        let pointStyle = [];
                        chart.data.datasets.forEach(datasets => {
                            if (datasets.type == 'line') {
                                pointStyle.push('line');
                            } else {
                                pointStyle.push('rect');
                            }
                        });

                        return chart.data.datasets.map(
                            (datasets, index) => ({
                                text: datasets.label,
                                fillStyle: datasets.backgroundColor,
                                strokeStyle: datasets.borderColor,
                                pointStyle: pointStyle[index],
                                hidden: visibility[index]
                            })
                        )
                    }
                }


            }
        },
    },
};

//render init block
const myChart18 = new Chart(
    document.getElementById("myChart18").getContext("2d"),
    config18
);
