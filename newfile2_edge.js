/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'aguafina-script, cursive': '<script src=\"http://use.edgefonts.net/aguafina-script:n4:all.js\"></script>'        },
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
                            id: 'Text3',
                            type: 'text',
                            rect: ['12%', '8.5%', '26%', '8%', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​hackathron<span style=\"text-decoration: underline;\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(253,253,253,1.00)", "400", "underline", "italic", "break-word", ""],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['0.9%', '18%', '100.2%', '65%', 'auto', 'auto'],
                            fill: ["rgba(75,13,166,1.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['1.1%', '44.3%', '100%', '38.8%', 'auto', 'auto'],
                            fill: ["rgba(251,250,254,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle12',
                            type: 'rect',
                            rect: ['50.9%', '44.3%', '0.2%', '38.8%', 'auto', 'auto'],
                            fill: ["rgba(4,1,13,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy',
                            type: 'rect',
                            rect: ['0px', '167px', '550px', '155px', 'auto', 'auto'],
                            fill: ["rgba(251,250,254,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle11',
                            type: 'rect',
                            rect: ['25.1%', '44.3%', '0.2%', '38.8%', 'auto', 'auto'],
                            clip: 'rect(0px 1px 166px 15px)',
                            fill: ["rgba(7,3,18,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle10Copy',
                            type: 'rect',
                            rect: ['6.7%', '44.3%', '0.2%', '38.8%', 'auto', 'auto'],
                            fill: ["rgba(1,0,3,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle10',
                            type: 'rect',
                            rect: ['6.7%', '44.3%', '0.2%', '38.8%', 'auto', 'auto'],
                            fill: ["rgba(1,0,3,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'MIET_Logo',
                            type: 'image',
                            rect: ['41.6%', '21%', '16.6%', '13%', 'auto', 'auto'],
                            borderRadius: ["5px", "5px", "5px", "5px 5px"],
                            fill: ["rgba(0,0,0,0)",im+"MIET%20Logo.png",'0px','44px'],
                            boxShadow: ["", 5, 5, 3, 0, "rgba(0,0,0,1.00)"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['2%', '86.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​contact us</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [8, "px"], "rgba(6,0,0,1.00)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text12',
                            type: 'text',
                            rect: ['2%', '88%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​contact uc:</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [8, "px"], "rgba(255,252,252,1)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['33.6%', '44.8%', '8%', '3.8%', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​content</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "700", "underline", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['65.1%', '44.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​description</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['12.4%', '44.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​name</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['1.1%', '83.5%', '100%', '13%', 'auto', 'auto'],
                            fill: ["rgba(95,38,179,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['2.4%', '85.3%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​for more details<span style=\"color: rgb(255, 255, 255);\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(255,252,252,1.00)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['0.9%', '96.3%', '100.2%', '6.3%', 'auto', 'auto'],
                            fill: ["rgba(9,9,9,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0.9%', '2.5%', '100.2%', '15.5%', 'auto', 'auto'],
                            fill: ["rgba(9,9,9,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"],
                            boxShadow: ["", 4, 4, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Text15',
                            type: 'text',
                            rect: ['8.2%', '9.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​hackathron &nbsp;2k19</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(253,253,253,1)", "400", "underline", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'icon2',
                            type: 'image',
                            rect: ['2.7%', '9.3%', '4.3%', '6.8%', 'auto', 'auto'],
                            borderRadius: ["110px", "110px", "110px", "110px 110px"],
                            fill: ["rgba(0,0,0,0)",im+"icon2.png",'0px','0px']
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['2%', '39.5%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​problems:</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(10,6,6,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['2%', '44.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​no.<span style=\"text-decoration: underline;\">​</span><span style=\"text-decoration: underline; font-size: 12px;\">​</span><span style=\"text-decoration: underline; font-size: 12px; color: rgb(1, 1, 1);\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "700", "underline", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['2.6%', '89.3%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​contact us:</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Rectangle9',
                            type: 'rect',
                            rect: ['90.7%', '12%', '8.2%', '4.3%', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(75,13,166,1)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text14',
                            type: 'text',
                            rect: ['92%', '12.5%', '6.9%', '3.3%', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​register<span style=\"font-size: 10px;\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(253,253,253,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "capitalize"]
                        },
                        {
                            id: 'Rectangle14',
                            type: 'rect',
                            rect: ['0.9%', '49.8%', '100.2%', '0.3%', 'auto', 'auto'],
                            fill: ["rgba(3,0,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
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
                            "eid31",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'rgba(75,13,166,1.00)',
                            'rgba(75,13,166,1.00)'
                        ],
                        [
                            "eid232",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '18%',
                            '18%'
                        ],
                        [
                            "eid48",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid233",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid234",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid235",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid236",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid237",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid231",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0.91%',
                            '0.91%'
                        ],
                        [
                            "eid46",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '65%',
                            '65%'
                        ],
                        [
                            "eid32",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("newfile2_edgeActions.js");
})("EDGE-59578020");
