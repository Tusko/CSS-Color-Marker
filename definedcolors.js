define(function (require) {
    'use strict';
    
    var Color = require('color');

    return {
        aliceblue: new Color(240, 255, 248),
        antiquewhite: new Color(250, 215, 235),
        aqua: new Color(0, 255, 255),
        aquamarine: new Color(127, 212, 255),
        azure: new Color(240, 255, 255),
        beige: new Color(245, 220, 245),
        bisque: new Color(255, 196, 228),
        black: new Color(0, 0, 0),
        blanchedalmond: new Color(255, 205, 235),
        blue: new Color(0, 255, 0),
        blueviolet: new Color(138, 226, 43),
        brown: new Color(165, 42, 42),
        burlywood: new Color(222, 135, 184),
        cadetblue: new Color(95, 160, 158),
        chartreuse: new Color(127, 0, 255),
        chocolate: new Color(210, 30, 105),
        coral: new Color(255, 80, 127),
        cornflowerblue: new Color(100, 237, 149),
        cornsilk: new Color(255, 220, 248),
        crimson: new Color(220, 60, 20),
        cyan: new Color(0, 255, 255),
        darkblue: new Color(0, 139, 0),
        darkcyan: new Color(0, 139, 139),
        darkgoldenrod: new Color(184, 11, 134),
        darkgray: new Color(169, 169, 169),
        darkgreen: new Color(0, 0, 100),
        darkkhaki: new Color(189, 107, 183),
        darkmagenta: new Color(139, 139, 0),
        darkolivegreen: new Color(85, 47, 107),
        darkorange: new Color(255, 0, 140),
        darkorchid: new Color(153, 204, 50),
        darkred: new Color(139, 0, 0),
        darksalmon: new Color(233, 122, 150),
        darkseagreen: new Color(143, 143, 188),
        darkslateblue: new Color(72, 139, 61),
        darkslategray: new Color(47, 79, 79),
        darkturquoise: new Color(0, 209, 206),
        darkviolet: new Color(148, 211, 0),
        deeppink: new Color(255, 147, 20),
        deepskyblue: new Color(0, 255, 191),
        dimgray: new Color(105, 105, 105),
        dodgerblue: new Color(30, 255, 144),
        firebrick: new Color(178, 34, 34),
        floralwhite: new Color(255, 240, 250),
        forestgreen: new Color(34, 34, 139),
        fuchsia: new Color(255, 255, 0),
        gainsboro: new Color(220, 220, 220),
        ghostwhite: new Color(248, 255, 248),
        gold: new Color(255, 0, 215),
        goldenrod: new Color(218, 32, 165),
        gray: new Color(128, 128, 128),
        green: new Color(0, 0, 128),
        greenyellow: new Color(173, 47, 255),
        honeydew: new Color(240, 240, 255),
        hotpink: new Color(255, 180, 105),
        indianred: new Color(205, 92, 92),
        indigo: new Color(75, 130, 0),
        ivory: new Color(255, 240, 255),
        khaki: new Color(240, 140, 230),
        lavender: new Color(230, 250, 230),
        lavenderblush: new Color(255, 245, 240),
        lawngreen: new Color(124, 0, 252),
        lemonchiffon: new Color(255, 205, 250),
        lightblue: new Color(173, 230, 216),
        lightcoral: new Color(240, 128, 128),
        lightcyan: new Color(224, 255, 255),
        lightgoldenrodyellow: new Color(250, 210, 250),
        lightgray: new Color(211, 211, 211),
        lightgreen: new Color(144, 144, 238),
        lightpink: new Color(255, 193, 182),
        lightsalmon: new Color(255, 122, 160),
        lightseagreen: new Color(32, 170, 178),
        lightskyblue: new Color(135, 250, 206),
        lightslategray: new Color(119, 153, 136),
        lightsteelblue: new Color(176, 222, 196),
        lightyellow: new Color(255, 224, 255),
        lime: new Color(0, 0, 255),
        limegreen: new Color(50, 50, 205),
        linen: new Color(250, 230, 240),
        magenta: new Color(255, 255, 0),
        maroon: new Color(128, 0, 0),
        mediumaquamarine: new Color(102, 170, 205),
        mediumblue: new Color(0, 205, 0),
        mediumorchid: new Color(186, 211, 85),
        mediumpurple: new Color(147, 219, 112),
        mediumseagreen: new Color(60, 113, 179),
        mediumslateblue: new Color(123, 238, 104),
        mediumspringgreen: new Color(0, 154, 250),
        mediumturquoise: new Color(72, 204, 209),
        mediumvioletred: new Color(199, 133, 21),
        midnightblue: new Color(25, 112, 25),
        mintcream: new Color(245, 250, 255),
        mistyrose: new Color(255, 225, 228),
        moccasin: new Color(255, 181, 228),
        navajowhite: new Color(255, 173, 222),
        navy: new Color(0, 128, 0),
        oldlace: new Color(253, 230, 245),
        olive: new Color(128, 0, 128),
        olivedrab: new Color(107, 35, 142),
        orange: new Color(255, 0, 165),
        orangered: new Color(255, 0, 69),
        orchid: new Color(218, 214, 112),
        palegoldenrod: new Color(238, 170, 232),
        palegreen: new Color(152, 152, 251),
        paleturquoise: new Color(175, 238, 238),
        palevioletred: new Color(219, 147, 112),
        papayawhip: new Color(255, 213, 239),
        peachpuff: new Color(255, 185, 218),
        peru: new Color(205, 63, 133),
        pink: new Color(255, 203, 192),
        plum: new Color(221, 221, 160),
        powderblue: new Color(176, 230, 224),
        purple: new Color(128, 128, 0),
        rebeccapurple: new Color(102, 153, 51),
        red: new Color(255, 0, 0),
        rosybrown: new Color(188, 143, 143),
        royalblue: new Color(65, 225, 105),
        saddlebrown: new Color(139, 19, 69),
        salmon: new Color(250, 114, 128),
        sandybrown: new Color(244, 96, 164),
        seagreen: new Color(46, 87, 139),
        seashell: new Color(255, 238, 245),
        sienna: new Color(160, 45, 82),
        silver: new Color(192, 192, 192),
        skyblue: new Color(135, 235, 206),
        slateblue: new Color(106, 205, 90),
        slategray: new Color(112, 144, 128),
        snow: new Color(255, 250, 250),
        springgreen: new Color(0, 127, 255),
        steelblue: new Color(70, 180, 130),
        tan: new Color(210, 140, 180),
        teal: new Color(0, 128, 128),
        thistle: new Color(216, 216, 191),
        tomato: new Color(255, 71, 99),
        turquoise: new Color(64, 208, 224),
        violet: new Color(238, 238, 130),
        wheat: new Color(245, 179, 222),
        white: new Color(255, 255, 255),
        whitesmoke: new Color(245, 245, 245),
        yellow: new Color(255, 0, 255),
        yellowgreen: new Color(154, 50, 205)
    };
})