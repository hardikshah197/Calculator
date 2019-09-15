/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0%', '0%', '550px', '400px', 'auto', 'auto'],
                            fill: ["rgba(98,0,238,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0%', '0%', '550px', '65px', 'auto', 'auto'],
                            borderRadius: ["5px", "5px", "5px", "5px 5px"],
                            fill: ["rgba(55,0,179,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            boxShadow: ["", 0, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['0%', '36.5%', '550px', '176px', 'auto', 'auto'],
                            borderRadius: ["5px", "5px", "5px", "5px 5px"],
                            fill: ["rgba(187,134,252,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            boxShadow: ["", 0, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['0%', '90.5%', '550px', '38px', 'auto', 'auto'],
                            borderRadius: ["5px", "5px", "5px", "5px 5px"],
                            fill: ["rgba(55,0,179,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['0%', '42.5%', '550px', '1px', 'auto', 'auto'],
                            fill: ["rgba(55,0,179,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['0%', '50%', '550px', '1px', 'auto', 'auto'],
                            fill: ["rgba(55,0,179,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7',
                            type: 'rect',
                            rect: ['10.7%', '42.8%', '1px', '155px', 'auto', 'auto'],
                            fill: ["rgba(55,0,179,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8',
                            type: 'rect',
                            rect: ['36.7%', '42.8%', '1px', '155px', 'auto', 'auto'],
                            fill: ["rgba(55,0,179,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9',
                            type: 'rect',
                            rect: ['64%', '42.8%', '1px', '155px', 'auto', 'auto'],
                            fill: ["rgba(55,0,179,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['28.9%', '5.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​hackathon</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "underline", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['57.8%', '5.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​2k19</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "underline", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['0.9%', '37.5%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​problems:<span style=\"font-size: 5px;\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "700", "none", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['3.1%', '44.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​no.<span style=\"font-style: normal;\">​</span><span style=\"font-style: normal; text-decoration: underline;\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['18.9%', '45%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​name</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['44.6%', '45%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​content</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['75.3%', '45%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​description</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['0.9%', '91.5%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​for more details:<span style=\"color: rgb(254, 244, 244);\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [11, "px"], "rgba(254,252,252,1.00)", "600", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['0.9%', '95%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​contact us<span style=\"text-decoration: none;\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(254,252,252,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Rectangle11',
                            type: 'rect',
                            rect: ['87.1%', '9.5%', '55px', '17px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px 10px"],
                            fill: ["rgba(187,134,252,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['88.4%', '9.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​register</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [11, "px"], "rgba(3,1,1,1.00)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'MIET_Logo',
                            type: 'image',
                            rect: ['39.3%', '20%', '102px', '48px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"MIET%20Logo.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid26",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid31",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid30",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid10",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid24",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle11}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid20",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '65px',
                            '65px'
                        ],
                        [
                            "eid8",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid11",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid32",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid13",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle9}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text10}",
                            '88.36%',
                            '88.36%'
                        ],
                        [
                            "eid7",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid42",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid36",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid9",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid2",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text10}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid41",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid21",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid35",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid19",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid33",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid39",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid29",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid5",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid40",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid12",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid34",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle9}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid23",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text10}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid37",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid4",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text9}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid28",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid6",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid18",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid14",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid27",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid38",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${MIET_Logo}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid3",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle11}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid17",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid25",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text9}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid16",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid15",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid22",
                            "width",
                            0,
                            0,
                            "linear",
                            "${MIET_Logo}",
                            '102px',
                            '102px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("final3_edgeActions.js");
})("EDGE-173146456");
