//Graphs for Investment  Highlightboxes
//-------------------------------------------R&D Expedentiture Per Capita----------------------------------------------------------------------
var context = document.getElementById("myChart12").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels15 = [
    "CA",
    "NL",
    "PEI",
    "NS",
    "NB",
    "QC",
    "ON",
    "MA",
    "SK",
    "AB",
    "BC",
];

const ylabels22 = [378, 669, 224, 412, 229, 426, 387, 298, 310, 350, 335];

// setup
const data12 = {
    labels: xlabels15,
    datasets: [
        {
            label: "Total R&D Expenditure Per Capita ",
            data: ylabels22,
            borderColor: "rgb(45, 73, 36)",
            backgroundColor: [
                "#004D40",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(255,165,0)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
            ],
            borderWidth: 0,
            pointRadius: 1.0,
        },
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
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 500,
                min: 100,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 100) {
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
                        return "Province: " + " " + context[0].label;
                    },
                    label: function (context) {
                        console.log(context);
                        return (
                            "Total R&D Expenditure Per Capita: $" +
                            ylabels22[context.dataIndex]
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
const myChart12 = new Chart(
    document.getElementById("myChart12").getContext("2d"),
    config12
);

//-----------------------------------------R&D Expedentiture Funding by Sources------------------------------------------------------------------
var context = document.getElementById("myChart13").getContext("2d");
context.width = 50;
context.height = 50;

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels16 = [
    "Business Enterprise",
    "Federal Government",
    "Foreign",
    "Higher Education",
    "Private Non-Profit",
    "Provincial Government",
];

const ylabels23 = [3, 17, 0, 66, 8, 6];

// setup
const data13 = {
    labels: xlabels16,
    datasets: [
        {
            label: "Total R&D Expenditure Per Capita ",
            data: ylabels23,
            backgroundColor: [
                "rgb(255,165,0)",
                "rgb(0, 150, 255)",
                "rgb(0, 0, 0)",
                "#004D40",
                "rgb(30, 75, 117)",
                "rgb(115, 45, 77)",
            ],
        },
    ],
};

//config
const config13 = {
    type: "pie", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data13,
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        console.log(context);
                        return (
                            xlabels16[context.dataIndex] +
                            ": " +
                            ylabels23[context.dataIndex] + "%"
                        );
                    },
                },
            },
            legend: {
                display: true,
            },
        },
    },
};

//render init block
const myChart13 = new Chart(
    document.getElementById("myChart13").getContext("2d"),
    config13
);

//-------------------------------------------Higher Education R&D Expedentiture Per Capita----------------------------------------------------------------------
var context = document.getElementById("myChart14").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels18 = [
    "CA", "NL", "PEI", "NS", "NB", "QC",
    "ON", "MA", "SK", "AB", "BC",
];

const ylabels24 = [
    186, 314, 164, 228, 152, 199,
    195, 160, 162, 154, 165
];

// setup
const data14 = {
    labels: xlabels18,
    datasets: [
        {
            label: "Higher Education R&D Expenditure Per Capita ",
            data: ylabels24,
            borderColor: "rgb(45, 73, 36)",
            backgroundColor: [
                "#004D40",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(255,165,0)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
            ],
            borderWidth: 0,
            pointRadius: 1.0,
        },
    ],
};

//config
const config14 = {
    type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data14,
    options: {
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 400,
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
                        return "Province: " + " " + context[0].label;
                    },
                    label: function (context) {
                        console.log(context);
                        return (
                            "Total R&D Expenditure Per Capita: $" +
                            ylabels22[context.dataIndex]
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
const myChart14 = new Chart(
    document.getElementById("myChart14").getContext("2d"),
    config14
);

//-------------------------------------------Federal Government R&D Expedentiture Per Capita----------------------------------------------------------------------
var context = document.getElementById("myChart15").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels19 = [
    "CA", "NL", "PEI", "NS", "NB", "QC",
    "ON", "MA", "SK", "AB", "BC"
];

const ylabels25 = [
    91, 128, 12, 118, 40, 104,
    90, 67, 87, 80, 91
];

// setup
const data15 = {
    labels: xlabels19,
    datasets: [
        {
            label: "Higher Education R&D Expenditure Per Capita ",
            data: ylabels25,
            borderColor: "rgb(45, 73, 36)",
            backgroundColor: [
                "#004D40",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(255,165,0)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
                "rgb(0, 150, 255)",
            ],
            borderWidth: 0,
            pointRadius: 1.0,
        },
    ],
};

//config
const config15 = {
    type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data15,
    options: {
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 140,
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
                        return "Province: " + " " + context[0].label;
                    },
                    label: function (context) {
                        console.log(context);
                        return (
                            "Total R&D Expenditure Per Capita: $" +
                            ylabels22[context.dataIndex]
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
const myChart15 = new Chart(
    document.getElementById("myChart15").getContext("2d"),
    config15
);