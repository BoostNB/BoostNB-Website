//Graphs for Natural Resources Highlightboxes
// -----------------------------------GDP Contribution by Top Three Natural Resources------------------------------------------------------
var context = document.getElementById("myChart9").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels12 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
];

const ylabels19 = [
    3.69, 3.58, 3.74, 3.18, 3.38, 3.14, 3.28, 2.59, 2.85, 2.85, 2.83, 2.66, 2.71,
    3.23, 3.36, 3.39, 3.26, 3.24, 2.83, 3.52
];

// setup
const data9 = {
    labels: xlabels12,
    datasets: [
        {
            label: "GDP Contribution",
            data: ylabels19,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
    ],
};

//config
const config9 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data9,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 4.0,
                min: 1.5,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 1.5) {
                            return "#808080";
                        } else {
                            return "#EAEAEA";
                        }
                    },
                    borderColor: "#808080",
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    callback: function (value, index, ticks) {
                        return "$" + " " + value + "B";
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
                        return "Year: " + " " + context[0].label;
                    },
                    label: function (context) {
                        return (
                            "International Exports of Top Three Natural Resources: $" +
                            ylabels19[context.dataIndex] +
                            "B"
                        );
                    },
                },
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    pointStyle: "line",
                },
            },
        },
    },
};

//render init block
const myChart9 = new Chart(
    document.getElementById("myChart9").getContext("2d"),
    config9
);
// -----------------------------------------------Top Three Natural Resources--------------------------------------------------------------------
var context = document.getElementById("myChart10").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels13 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021
];

const ylabels20 = [
    0.96, 0.96, 0.92, 0.84, 1.22, 1.17, 1.28, 0.81, 0.88, 0.86, 0.79, 0.48, 0.36,
    0.46, 0.37, 0.4, 0.37, 0.31, 0.26, 0.24
];

const ylabels21 = [
    1.47, 1.54, 1.73, 1.26, 1.14, 1.1, 1.02, 0.875, 1.02, 1.0, 0.96, 1.07, 1.14,
    1.24, 1.33, 1.27, 1.23, 1.23, 1.19, 1.25
];

const ylabels22 = [
    1.26, 1.09, 1.09, 1.08, 1.02, 0.87, 0.99, 0.91, 0.95, 0.99, 1.08, 1.12, 1.21,
    1.54, 1.66, 1.72, 1.66, 1.7, 1.38, 2.03
];

// setup
const data10 = {
    labels: xlabels13,
    datasets: [
        {
            label: "Total International Export Value by Mining",
            data: ylabels20,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Total International Export Value by Forestry",
            data: ylabels21,
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Total International Export Value by Fisheries and Agriculture",
            data: ylabels22,
            borderColor: "#004D40",
            backgroundColor: "#004D40",
            borderWidth: 3,
            pointRadius: 1.0,
        },
    ],
};

//config
const config10 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data10,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 2.2,
                min: 0.2,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 0.2) {
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
                        return "$" + " " + value + " B";
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
                        return "Year: " + " " + context[0].label;
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
        },
    },
};

//render init block
const myChart10 = new Chart(
    document.getElementById("myChart10").getContext("2d"),
    config10
);
//---------------------------------------------- All Trade, Natural Resources---------------------------------------------------------------
var context = document.getElementById("myChart11").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels14 = [
    "Crop and Animal", "Forest", "Seafood", "Mining",
];

const ylabels23 = [
    0.66, 0.91, 0.52, 0.25, 1.95
];
const ylabels24 = [
    0.13, 1.60, 1.70, 0.11
];
const ylabels25 = [
    0.70, 0.17, 0.28, 0.08
];
const ylabels27 = [
    0.31, 0.22, 0.67, 0.63
];


// setup
const data11 = {
    labels: xlabels14,
    datasets: [
        {
            label: "Provincial Exports",
            data: ylabels23,
            backgroundColor: "rgb(0, 150, 255)",
        },
        {
            label: "International Exports",
            data: ylabels24,
            backgroundColor: "rgb(255,165,0)",
        },
        {
            label: "Provincial Imports",
            data: ylabels25,
            backgroundColor: "#004D40",
        },
        {
            label: "International Imports",
            data: ylabels27,
            backgroundColor: "rgb(255,104,124)",
        },
    ],
};

//config
const config11 = {
    type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data11,
    options: {
        scales: {
            x: {
                ticks: {

                    minRotation: 0,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                autoSkip: true,
                beginAtZero: true,
                max: 2.0,
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
                    maxTicksLimit: 10,
                    callback: function (value, index, ticks) {
                        return "$" + " " + value + " B";
                    }
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
                align: "center",
                display: true,
                labels: {
                    boxWidth: 20,
                },
            },
        },
    },
};

//render init block
const myChart11 = new Chart(
    document.getElementById("myChart11").getContext("2d"),
    config11
);
// ---------------------------------------------Interprovincial Exports----------------------------------------------------------------------
var context = document.getElementById("myChart12").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels15 = [
    "Crop and Animal", "Forest", "Mining", "Fuel", "Seafood"
];

const ylabels26 = [
    84, 36, 23, 70, 26

];

// setup
const data12 = {
    labels: xlabels15,
    datasets: [
        {
            label: "Interprovincial Exports as a Perctange of Total Exports",
            data: ylabels26,
            backgroundColor: "rgb(0,150,255)",
        }
    ],
};

//config
const config12 = {
    type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data12,
    options: {
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    minRotation: 0,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
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
                    maxTicksLimit: 10,
                    stepSize: 10,
                    callback: function (value, index, ticks) {
                        return value + " %";
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
                        return "Natural Resource:" + " " + context[0].label;
                    },
                    label: function (context) {
                        return "Interprovincial Exports as a Perctange of Total Exports: " + ylabels26[context.dataIndex] + " %"
                    }
                },
            },
            legend: {
                display: true,
                labels: {
                    boxWidth: 20,
                },
            },
        },
    },
};

//render init block
const myChart12 = new Chart(
    document.getElementById("myChart12").getContext("2d"),
    config12
);