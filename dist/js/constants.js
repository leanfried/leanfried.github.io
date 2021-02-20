const CONFIGS = {
    "africa": {
        img2x: 50,
        img2y: 3165,
        img3x: 4000,
        img3y: 4710,
        legendFactor: 0,
        canvasW: 4800,
        canvasH: 4795
    },
    "africa-detailed": {
        img2x: 300,
        img2y: 4550,
        img3x: 5400,
        img3y: 6800,
        legendFactor: 1,
        canvasW: 6300,
        canvasH: 7000
    },
    "americas-detailed": {
        img2x: 500,
        img2y: 4600,
        img3x: 5500,
        img3y: 6400,
        legendFactor: 1,
        canvasW: 6600,
        canvasH: 6502
    },
    "americas": {
        img2x: 300,
        img2y: 4500,
        img3x: 3960,
        img3y: 6450,
        legendFactor: 1,
        canvasW: 4752,
        canvasH: 6510
    },
    "asia-detailed": {
        img2x: 200,
        img2y: 3800,
        img3x: 5700,
        img3y: 5150,
        legendFactor: 1,
        canvasW: 6930,
        canvasH: 5291
    },
    "asia": {
        img2x: 50,
        img2y: 2800,
        img3x: 1500,
        img3y: 3820,
        legendFactor: 0,
        canvasW: 5000,
        canvasH: 3975
    },
    "australia-electoral-divisions": {
        img2x: 4650,
        img2y: 100,
        img3x: 5840,
        img3y: 4700,
        legendFactor: 1,
        canvasW: 6600,
        canvasH: 4851
    },
    "australia": {
        img2x: 100,
        img2y: 4000,
        img3x: 5200,
        img3y: 5500,
        legendFactor: 1,
        canvasW: 6000,
        canvasH: 5556
    },
    "belgium": {
        img2x: 200,
        img2y: 2200,
        img3x: 3600,
        img3y: 3540,
        legendFactor: 1,
        canvasW: 4290,
        canvasH: 3605
    },
    "brazil": {
        img2x: 150,
        img2y: 2800,
        img3x: 4200,
        img3y: 4600,
        legendFactor: 1,
        canvasW: 5000,
        canvasH: 4716
    },
    "canada-census-divisions": {
        img2x: 5650,
        img2y: 100,
        img3x: 5900,
        img3y: 3475,
        legendFactor: 1,
        canvasW: 6900,
        canvasH: 3575
    },
    "canada-federal-ridings": {
        img2x: 4200,
        img2y: 100,
        img3x: 50,
        img3y: 50,
        legendFactor: 1,
        canvasW: 6600,
        canvasH: 5500
    },
    "canada": {
        img2x: 3050,
        img2y: 80,
        img3x: 25,
        img3y: 3400,
        legendFactor: 0,
        canvasW: 4115,
        canvasH: 3556
    },
    "caribbean": {
        img2x: 4750,
        img2y: 100,
        img3x: 25,
        img3y: 3540,
        legendFactor: 1,
        canvasW: 6000,
        canvasH: 3600
    },
    "china": {
        img2x: 3950,
        img2y: 2100,
        img3x: 50,
        img3y: 3400,
        legendFactor: 0,
        canvasW: 5000,
        canvasH: 3520
    },
    "detworld": {
        img2x: 60,
        img2y: 2200,
        img3x: 6500,
        img3y: 2940,
        legendFactor: 0,
        canvasW: 7192,
        canvasH: 3087
    },
    "europe-detailed": {
        img2x: 400,
        img2y: 400,
        img3x: 100,
        img3y: 7300,
        legendFactor: 1,
        canvasW: 6480,
        canvasH: 7480
    },
    "europe-nuts2": {
        img2x: 200,
        img2y: 400,
        img3x: 3600,
        img3y: 4570,
        legendFactor: 1,
        canvasW: 6000,
        canvasH: 4650
    },
    "europe-nuts3": {
        img2x: 200,
        img2y: 400,
        img3x: 3600,
        img3y: 4570,
        legendFactor: 1,
        canvasW: 6000,
        canvasH: 4650
    },
    "europe": {
        img2x: 100,
        img2y: 100,
        img3x: 25,
        img3y: 3100,
        legendFactor: 1,
        canvasW: 4592,
        canvasH: 3196
    },
    "france-departments": {
        img2x: 200,
        img2y: 150,
        img3x: 200,
        img3y: 6000,
        legendFactor: 1,
        canvasW: 6300,
        canvasH: 6220
    },
    "france": {
        img2x: 50,
        img2y: 1760,
        img3x: 2800,
        img3y: 3300,
        legendFactor: 0,
        canvasW: 4465,
        canvasH: 3450
    },
    "germany-districts": {
        img2x: 5020,
        img2y: 5100,
        img3x: 200,
        img3y: 6850,
        legendFactor: 1,
        canvasW: 6300,
        canvasH: 7000
    },
    "germany": {
        img2x: 4450,
        img2y: 3965,
        img3x: 25,
        img3y: 6300,
        legendFactor: 1,
        canvasW: 5825,
        canvasH: 6465
    },
    "greece": {
        img2x: 50,
        img2y: 2350,
        img3x: 3000,
        img3y: 3095,
        legendFactor: 0,
        canvasW: 3750,
        canvasH: 3310
    },
    "india": {
        img2x: 2720,
        img2y: 60,
        img3x: 100,
        img3y: 4500,
        legendFactor: 0,
        canvasW: 3818,
        canvasH: 4600
    },
    "italy": {
        img2x: 3700,
        img2y: 200,
        img3x: 4450,
        img3y: 6650,
        legendFactor: 1,
        canvasW: 5300,
        canvasH: 6785
    },
    "japan": {
        img2x: 150,
        img2y: 100,
        img3x: 3800,
        img3y: 4560,
        legendFactor: 1,
        canvasW: 4560,
        canvasH: 4688
    },
    "mexico": {
        img2x: 3000,
        img2y: 50,
        img3x: 100,
        img3y: 2700,
        legendFactor: 0,
        canvasW: 4340,
        canvasH: 2800
    },
    "middle-east": {
        img2x: 400,
        img2y: 2700,
        img3x: 3350,
        img3y: 4000,
        legendFactor: 0,
        canvasW: 4000,
        canvasH: 4102
    },
    "netherlands": {
        img2x: 200,
        img2y: 200,
        img3x: 3500,
        img3y: 3680,
        legendFactor: 0,
        canvasW: 4290,
        canvasH: 3809
    },
    "oceania-detailed": {
        img2x: 4800,
        img2y: 2700,
        img3x: 300,
        img3y: 3950,
        legendFactor: 1,
        canvasW: 6024,
        canvasH: 4098
    },
    "poland": {
        img2x: 200,
        img2y: 3030,
        img3x: 4360,
        img3y: 4400,
        legendFactor: 0,
        canvasW: 5268,
        canvasH: 4542
    },
    "russia": {
        img2x: 100,
        img2y: 100,
        img3x: 5800,
        img3y: 3860,
        legendFactor: 0,
        canvasW: 6576,
        canvasH: 3990
    },
    "spain": {
        img2x: 200,
        img2y: 2000,
        img3x: 1800,
        img3y: 4100,
        legendFactor: 1,
        canvasW: 6415,
        canvasH: 4215
    },
    "sweden": {
        img2x: 2700,
        img2y: 4900,
        img3x: 100,
        img3y: 6580,
        legendFactor: 0,
        canvasW: 3900,
        canvasH: 6690
    },
    "tamriel": {
        img2x: 5480,
        img2y: 2900,
        img3x: 100,
        img3y: 4300,
        legendFactor: 0,
        canvasW: 6576,
        canvasH: 4416
    },
    "turkey": {
        img2x: 100,
        img2y: 2400,
        img3x: 5800,
        img3y: 3000,
        legendFactor: 0,
        canvasW: 6576,
        canvasH: 3162
    },
    "uk-election": {
        img2x: 50,
        img2y: 3300,
        img3x: 4100,
        img3y: 4880,
        legendFactor: 0,
        canvasW: 5080,
        canvasH: 4980
    },
    "uk-historic": {
        img2x: 100,
        img2y: 100,
        img3x: 25,
        img3y: 6300,
        legendFactor: 1,
        canvasW: 4765,
        canvasH: 6400
    },
    "uk": {
        img2x: 100,
        img2y: 100,
        img3x: 25,
        img3y: 6400,
        legendFactor: 1,
        canvasW: 4765,
        canvasH: 6618
    },
    "usa-and-canada": {
        img2x: 200,
        img2y: 2700,
        img3x: 4000,
        img3y: 4400,
        legendFactor: 0,
        canvasW: 4700,
        canvasH: 4515
    },
    "usa-hex-cartogram": {
        img2x: 3100,
        img2y: 2000,
        img3x: 50,
        img3y: 3000,
        legendFactor: 0,
        canvasW: 4290,
        canvasH: 3114
    },
    "usa-congressional-districts": {
        img2x: 5750,
        img2y: 2400,
        img3x: 5000,
        img3y: 3620,
        legendFactor: 0,
        canvasW: 6840,
        canvasH: 3783
    },
    "usa-counties": {
        img2x: 5870,
        img2y: 2600,
        img3x: 4500,
        img3y: 4200,
        legendFactor: 0,
        canvasW: 6900,
        canvasH: 4275
    },
    "usa": {
        img2x: 4170,
        img2y: 1910,
        img3x: 50,
        img3y: 3660,
        legendFactor: 0,
        canvasW: 5285.5,
        canvasH: 3762
    },
    "westeros": {
        img2x: 2840,
        img2y: 1300,
        img3x: 2750,
        img3y: 7240,
        legendFactor: 0,
        canvasW: 3854,
        canvasH: 7400
    },
    "world": {
        img2x: 100,
        img2y: 1975,
        img3x: 5500,
        img3y: 3360,
        legendFactor: 0,
        canvasW: 6460,
        canvasH: 3480
    },
    "coronavirus": {
        img2x: 200,
        img2y: 2275,
        img3x: 5500,
        img3y: 3350,
        legendFactor: 0,
        canvasW: 6460,
        canvasH: 3480
    },
    "world-advanced": {
        img2x: 600,
        img2y: 2380,
        img3x: 6250,
        img3y: 4125,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 4192
    },
    "world-advanced-eck4": {
        img2x: 600,
        img2y: 2130,
        img3x: 6250,
        img3y: 3395,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 3526.25
    },
    "world-advanced-mill": {
        img2x: 600,
        img2y: 2680,
        img3x: 6250,
        img3y: 4600,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 4786.25
    },
    "world-advanced-gall": {
        img2x: 600,
        img2y: 2830,
        img3x: 6250,
        img3y: 4950,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 5101.25
    },
    "world-advanced-robin": {
        img2x: 600,
        img2y: 2080,
        img3x: 6250,
        img3y: 3400,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 3526.25
    },
    "world-advanced-vandg": {
        img2x: 600,
        img2y: 3280,
        img3x: 6250,
        img3y: 5850,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 5993.75
    },
    "world-advanced-times": {
        img2x: 600,
        img2y: 2780,
        img3x: 6250,
        img3y: 4700,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 4865
    },
    "world-advanced-merc": {
        img2x: 600,
        img2y: 3780,
        img3x: 6250,
        img3y: 6200,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 6352.5
    },
    "world-advanced-eqc": {
        img2x: 600,
        img2y: 1980,
        img3x: 6250,
        img3y: 3200,
        legendFactor: 1,
        canvasW: 7000,
        canvasH: 3386.25
    },
    "world-subdivisions": {
        img2x: 300,
        img2y: 1700,
        img3x: 6200,
        img3y: 3430,
        legendFactor: 1,
        canvasW: 7030,
        canvasH: 3542
    }
};
const LOC = (window.location.pathname.split('/'));
const PAGE = LOC[LOC.length - 1].split('.')[0];
var conf = CONFIGS[PAGE];


const WEBSITE = window.location.hostname.replace("www", "");
var LEGEND_STATUS = "show";
const DEFAULT_COLOR = '#d1dbdd';
const WIDE_PAGES = ['world-1815', 'coronavirus', 'world-1880', 'world-1914', 'world-1938', 'world-cold-war', 'oceania-detailed', 'tamriel', 'asia-detailed', 'africa-detailed', 'americas-detailed', 'detworld', 'usa-counties', 'russia', 'world', 'europe-detailed', 'usa-congressional-districts', 'canada-census-divisions', 'france-departments'];
const IS_SAFARI = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;

const IGNORED_PATHS = ['rivers', 'timezones', 'geographic_lines', 'lakes', 'graticules', 'city_labels', 'State_borders', 'sidemap', 'sidemap2', 'fas_name', 'state_abbr', 'state_lines', 'terr_name', 'Department_Names', 'Department_Numbers', 'Prefecture_Names', 'Cities', 'split_UK_label', 'United_Kingdom_label'];

const PALETTE = [
    ["f7fcfd", "e5f5f9", "ccece6", "99d8c9", "66c2a4", "41ae76", "238b45", "006d2c", "00441b"],
    ["f7fcf0", "e0f3db", "ccebc5", "a8ddb5", "7bccc4", "4eb3d3", "2b8cbe", "0868ac", "084081"],
    ["ffffd9", "edf8b1", "c7e9b4", "7fcdbb", "41b6c4", "1d91c0", "225ea8", "253494", "081d58"],
    ["fff7fb", "ece7f2", "d0d1e6", "a6bddb", "74a9cf", "3690c0", "0570b0", "045a8d", "023858"],
    ["fff7ec", "fee8c8", "fdd49e", "fdbb84", "fc8d59", "ef6548", "d7301f", "b30000", "7f0000"],
    ["ffffcc", "ffeda0", "fed976", "feb24c", "fd8d3c", "fc4e2a", "e31a1c", "bd0026", "800026"],
    ["f7fcfd", "e0ecf4", "bfd3e6", "9ebcda", "8c96c6", "8c6bb1", "88419d", "810f7c", "4d004b"],
    ["ffffff", "f0f0f0", "d9d9d9", "bdbdbd", "969696", "737373", "525252", "252525", "000000"],
    ["8c510a", "bf812d", "dfc27d", "f6e8c3", "f5f5f5", "c7eae5", "80cdc1", "35978f", "01665e"],
    ["b2182b", "d6604d", "f4a582", "fddbc7", "f7f7f7", "d1e5f0", "92c5de", "4393c3", "2166ac"],
    ["d73027", "f46d43", "fdae61", "fee090", "ffffbf", "e0f3f8", "abd9e9", "74add1", "4575b4"],
    ["762a83", "9970ab", "c2a5cf", "e7d4e8", "f7f7f7", "d9f0d3", "a6dba0", "5aae61", "1b7837"],
    ["013f3f", "008080", "70a494", "b4c8a8", "f6edbd", "edbb8a", "de8a5a", "ca562c", "bd3200"],
    ["005251", "009392", "39b185", "9ccb86", "e9e29c", "eeb479", "e88471", "cf597e", "aa1f4b"],
    ["5f4690", "1d6996", "38a6a5", "0f8554", "73af48", "edad08", "e17c05", "cc503e", "94346e"],
    ["a6cee3", "1f78b4", "b2df8a", "33a02c", "fb9a99", "e31a1c", "fdbf6f", "ff7f00", "cab2d6"],
    ["e41a1c", "377eb8", "4daf4a", "984ea3", "ff7f00", "ffff33", "a65628", "f781bf", "999999"],
    ["8dd3c7", "ffffb3", "bebada", "fb8072", "80b1d3", "fdb462", "b3de69", "fccde5", "d9d9d9"],
    ["fbb4ae", "b3cde3", "ccebc5", "decbe4", "fed9a6", "ffffcc", "e5d8bd", "fddaec", "f2f2f2"],
    ["a03500", "d9b400", "3264c8", "72b38e", "986ba1", "b9a087", "4c91bf", "cc3333", "d1dbdd"]
];

const BG_PALETTE = [
    ["fffffa", "f0f0f0", "d9d9d9", "bdbdbd", "969696", "737373", "525252", "252525", "000000"],
    ["00441b", "084081", "081d58", "023858", "7f0000", "800026", "4d004b", "013f3f", "413a3a"],
    ["e0f3f8", "d1e5f0", "ffffd9", "e5f5f9", "fff7ec", "ffffcc", "e5d8bd", "fddaec", "ffffff"]
];

const BORDER_PALETTE = [
    ["f7fcfd", "e5f5f9", "ccece6", "99d8c9", "66c2a4", "41ae76", "238b45", "006d2c", "00441b"],
    ["ffffd9", "edf8b1", "c7e9b4", "7fcdbb", "41b6c4", "1d91c0", "225ea8", "253494", "081d58"],
    ["ffffcc", "ffeda0", "fed976", "feb24c", "fd8d3c", "fc4e2a", "e31a1c", "bd0026", "800026"],
    ["f7fcfd", "e0ecf4", "bfd3e6", "9ebcda", "8c96c6", "8c6bb1", "88419d", "810f7c", "4d004b"],
    ["5f4690", "1d6996", "38a6a5", "0f8554", "73af48", "edad08", "e17c05", "cc503e", "94346e"],
    ["a6cee3", "1f78b4", "b2df8a", "33a02c", "fb9a99", "e31a1c", "fdbf6f", "ff7f00", "cab2d6"],
    ["e41a1c", "377eb8", "4daf4a", "984ea3", "ff7f00", "ffff33", "a65628", "f781bf", "999999"],
    ["8dd3c7", "ffffb3", "bebada", "fb8072", "80b1d3", "fdb462", "b3de69", "fccde5", "d9d9d9"],
    ["a03500", "d9b400", "3264c8", "72b38e", "986ba1", "b9a087", "4c91bf", "cc3333", "0868ac"],
    ["ffffff", "f0f0f0", "d9d9d9", "bdbdbd", "969696", "737373", "525252", "252525", "000000"]
];

const LEGEND_BG_PALETTE = [
    ["bed2ff", "97dbf2", "bee8ff", "d3ffbe", "e9ffbe", "ffffbe", "ffeabe", "f5ca7a", "cdaa66"],
    ["9c9c9c", "e1e1e1", "f7fcf0", "f7fcfd", "f0f0f0", "ffeff7", "ffffe5", "ffffff", "000000"],
    ["ccbed2ff", "cc97dbf2", "ccbee8ff", "ccd3ffbe", "cce9ffbe", "ccffffbe", "ccffeabe", "ccf5ca7a", "cccdaa66"],
    ["cc9c9c9c", "cce1e1e1", "ccf7fcf0", "ccf7fcfd", "ccf0f0f0", "ccffeff7", "ccffffe5", "ccffffff", "00000000"]
];

const FONT_COLOR_PALETTE = [
    ["a6cee3", "1f78b4", "b2df8a", "33a02c", "fb9a99", "e31c2c", "fdbf6f", "ff7f00", "cab2d6"],
    ["fbb4ae", "e41a1c", "377eb8", "4daf4a", "984ea3", "ff2000", "ffff33", "a65628", "999999"],
    ["8dd3c7", "ffffb3", "bebada", "fb8072", "80b1d3", "fdb462", "b3de69", "fccde5", "ffa07a"],
    ["b15928", "6a3d9a", "ffed6f", "9e0142", "5e4fa2", "ffffbf", "1a9850", "4d4d4d", "6baed6"],
    ["71c671", "388e8e", "7d9ec0", "7171c6", "8e388e", "8e8e38", "00c957", "cc3333", "d1dbdd"],
    ["ffffff", "f0f0f0", "d9d9d9", "bdbdbd", "969696", "737373", "525252", "252525", "000000"]
];

const PATTERNS = [
    '<pattern id="circles3" width="10" height="10" patternUnits="userSpaceOnUse">\
    <rect width="10" height="10" fill="#fff" />\
    <circle cx="4" cy="4" r="2" fill="#000"/>\
    </pattern>',
    '<pattern id="diagonal1" width="10" height="10" patternUnits="userSpaceOnUse">\
    <rect width="10" height="10" fill="#fff"/>\
    <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000" stroke-width="1"/>\
    </pattern>',
    '<pattern id="diagonal3" width="10" height="10" patternUnits="userSpaceOnUse">\
    <rect width="10" height="10" fill="#fff"/>\
    <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000" stroke-width="3"/>\
    </pattern>',
    '<pattern id="vertical1" width="10" height="10" patternUnits="userSpaceOnUse">\
    <rect width="10" height="10" fill="#fff" />\
    <rect x="3" y="0" width="1" height="10" fill="#000" />\
    </pattern>',
    '<pattern id="vertical3" width="10" height="10" patternUnits="userSpaceOnUse">\
    <rect width="10" height="10" fill="#fff" />\
    <rect x="3" y="0" width="3" height="10" fill="#000" />\
    </pattern>',
    '<pattern id="horizontal1" width="10" height="10" patternUnits="userSpaceOnUse">\
    <rect width="10" height="10" fill="#fff" />\
    <rect x="0" y="4" width="10" height="1" fill="#000" />\
    </pattern>',
    '<pattern id="horizontal3" width="10" height="10" patternUnits="userSpaceOnUse">\
    <rect width="10" height="10" fill="#fff" />\
    <rect x="0" y="4" width="10" height="3" fill="#000" />\
    </pattern>',
    '<pattern id="crosshatch" width="8" height="8" patternUnits="userSpaceOnUse">\
    <rect width="8" height="8" fill="#fff"/>\
    <path d="M0 0L8 8ZM8 0L0 8Z" stroke-width="0.5" stroke="#aaa"/>\
    </pattern>',
    '<pattern id="subtlepatch" width="5" height="5" patternUnits="userSpaceOnUse">\
    <rect width="5" height="5" fill="#fff" />\
    <rect x="2" y="2" width="1" height="1" fill="#000" />\
    </pattern>',
    '<pattern id="checkers" width="8" height="8" patternUnits="userSpaceOnUse">\
    <rect width="8" height="8" fill="#fff"/>\
    <path fill="#000" fill-rule="evenodd" d="M0 0h4v4H0V0zm4 4h4v4H4V4z"/>\
    </pattern>',
    '<pattern id="raindrops" width="10" height="10" patternUnits="userSpaceOnUse">\
    <rect width="10" height="10" fill="#fff"/>\
    <path fill="#000" d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z"/>\
    </pattern>',
    '<pattern id="texture" width="4" height="4" patternUnits="userSpaceOnUse">\
    <rect width="4" height="4" fill="#fff"/>\
    <path fill="#000" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"></path>\
    </pattern>'
];

const FONT_STYLES = {
    "Arial": "Arial, 'DejaVu Sans', 'Liberation Sans', Freesans, sans-serif",
    "Century Gothic": "'Century Gothic', futura, 'URW Gothic L', Verdana, sans-serif",
    "Consolas": "Consolas, 'Lucida Console', 'DejaVu Sans Mono', monospace",
    "Georgia": "Constantina, Georgia, 'Nimbus Roman No9 L', serif",
    "Helvetica": "Helvetica, Arial, 'DejaVu Sans', 'Liberation Sans', Freesans, sans-serif",
    "Impact": "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    "Lucida": "'Lucida Sans Unicode','Lucida Grande', 'Lucida Sans', 'DejaVu Sans Condensed', sans-serif",
};

const AMENDED_IDS = {
    "FYROM": "North_Macedonia",
    "Guadelupe__NM": "Guadalupe__NM",
    "Grand_Treverse__MI": "Grand_Traverse__MI",
    "Orandge__FL": "Orange__FL",
    "Monacco": "Monaco",
    "McKinely__NM": "McKinley__NM",
    "Shannon__SD": "Oglala_Lakota__SD",
    "Lichtenstein": "Liechtenstein",
    "Luxemburg": "Luxembourg",
    "Palestinian_Territories": "Palestinian_Territories",
    "Gasconage__MO": "Gasconade__MO",
    "Fairbanks_North_Stark__AK": "Fairbanks_North_Star__AK",
    "La_Salle__LA": "LaSalle__LA",
    "Wade_Hampton__AK": "Kusilvak__AK",
    "Albermarle__VA": "Albemarle__VA",
    "Donough__IL": "McDonough__IL",
    "Onodaga__NY": "Onondaga__NY",
    "Grand__SD": "Grant__SD",
    "MAtera": "Matera",
    "Moldavia": "Moldova",
    "Tynisia": "Tunisia",
    "Czech_Republic": "Czechia",
    "Mayote": "Mayotte",
    "Federated_States_of_Micronisia": "Federated_States_of_Micronesia",
    "Maga_Buryatdan_RU": "Magadan_RU",
    "Zinguldak_TR": "Zonguldak_TR",
    "Zinguldak": "Zonguldak",
    "San_Franciso__CA": "San_Francisco__CA",
    "Mitchcell__IA": "Mitchell__IA",
    "Kingsburg__SD": "Kingsbury__SD",
    "Swaziland": "Eswatini",
    "Lake_FL": "Lake__FL",
    "Summit_UT": "Summit__UT",
    "Lyon_NV": "Lyon__NV",
    "Chittenden_VT": "Chittenden__VT",
    "Astana_KZ": "Nursultan_KZ",
    "England_UK": "Leicestershire_UK",
    "Hasaka": "Hasaka_SY",
    "Tyva_Republic": "Tuva_Republic",
    "Northern Areas_PK": "Gilgit_Baltistan_PK",
    "F_C_T__PK": "Islamabad_Capital_Territory",
    "F_A_T_A__PK": "Khyber_Pakhtunkhwa_PK",
    "FinstrÃ¶m_FI": "Ã…land_Islands_FI",
    "Southern_Finland_FI": "Kymenlaakso_FI",
    "Eastern Finland_FI": "Northern_Savonia_FI",
    "Halton_UK": "Wirral_UK",
    "Moat_Caitlin": "Moat_Cailin",
    "Snakewoods": "Snakewood",
    "Harlaw": "Ten Towers",
    "Iron_Oaks": "Ironoaks",
    "Strong_Song": "Strongsong",
    "Matanuska-Susitna__AK": "Matanuska_Susitna__AK",
    "Yukon-Koyukuk__AK": "Yukon_Koyukuk__AK",
    "Valdez-Cordova__AK": "Copper_River__AK",
    "Valdez-Cordova__AK": "Chugach__AK",
    "Valdez_Cordova__AK": "Copper_River__AK",
    "Valdez_Cordova__AK": "Chugach__AK",
    "Miami-Dade__FL": "Miami_Dade__FL",
    "MiamiDade__FL": "Miami_Dade__FL",
    "BerwickuponTweed": "Berwick-upon-Tweed",
    "Na_hEileanan_an_Iar": "Na_h-Eileanan_an_Iar",
    "AldridgeBrownhills": "Aldridge-Brownhills",
    "Montseratt": "Montserrat",
    "USA_Massachussetts": "USA_Massachusetts",
    "Osterode_am_Harz": "GÃ¶ttingen"
};

const STATE_ABBREVIATIONS = {
    "AB": "Alberta",
    "BC": "British Columbia",
    "MB": "Manitoba",
    "NB": "New Brunswick",
    "NL": "Newfoundland and Labrador",
    "NT": "Northwest Territories",
    "NS": "Nova Scotia",
    "NU": "Nunavut",
    "ON": "Ontario",
    "PE": "Prince Edward Island",
    "QC": "Quebec",
    "SK": "Saskatchewan",
    "YT": "Yukon Territory",
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

const COUNTRY_ABBREVIATIONS = {
    "AQ": "Antarctica",
    "AO": "Angola",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "BJ": "Benin",
    "BW": "Botswana",
    "CD": "Democratic Republic of the Congo",
    "CF": "Central African Republic",
    "CG": "Congo",
    "CI": "CÃ´te d'Ivoire",
    "CM": "Cameroon",
    "CV": "Cape Verde",
    "DJ": "Djibouti",
    "DZ": "Algeria",
    "EG": "Egypt",
    "EH": "Western Sahara",
    "ER": "Eritrea",
    "ET": "Ethiopia",
    "GA": "Gabon",
    "GH": "Ghana",
    "GM": "Gambia",
    "GN": "Guinea",
    "GQ": "Equatorial Guinea",
    "GS": "South Georgia and the South Sandwich Islands",
    "GW": "Guinea-Bissau",
    "KE": "Kenya",
    "KM": "Comoros",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LY": "Libya",
    "MA": "Morocco",
    "MG": "Madagascar",
    "ML": "Mali",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MU": "Mauritius",
    "MW": "Malawi",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NE": "Niger",
    "NG": "Nigeria",
    "RW": "Rwanda",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SH": "Saint Helena",
    "SL": "Sierra Leone",
    "SN": "Senegal",
    "SO": "Somalia",
    "SS": "South Sudan",
    "ST": "Sao Tome and Principe",
    "SZ": "Eswatini",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TZ": "United Republic of Tanzania",
    "UG": "Uganda",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AR": "Argentina",
    "AW": "Aruba",
    "BB": "Barbados",
    "BL": "Saint BarthÃ©lemy",
    "BM": "Bermuda",
    "BO": "Bolivia",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BZ": "Belize",
    "CA": "Canada",
    "CL": "Chile",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CW": "Curacao",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "FK": "Falkland Islands",
    "GD": "Grenada",
    "GF": "French Guiana",
    "GL": "Greenland",
    "GP": "Guadeloupe",
    "GT": "Guatemala",
    "GU": "Guam",
    "GY": "Guyana",
    "HN": "Honduras",
    "HT": "Haiti",
    "JM": "Jamaica",
    "KN": "St Kitts and Nevis",
    "KY": "Cayman Islands",
    "LC": "St Lucia",
    "MF": "St Martin",
    "MQ": "Martinique",
    "MX": "Mexico",
    "NI": "Nicaragua",
    "PA": "Panama",
    "PE": "Peru",
    "PM": "St Pierre and Miquelon",
    "PR": "Puerto Rico",
    "PY": "Paraguay",
    "SR": "Suriname",
    "SV": "El Salvador",
    "SX": "Sint Maarten",
    "TC": "Turks and Caicos Islands",
    "TT": "Trinidad and Tobago",
    "US": "United States",
    "UY": "Uruguay",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela",
    "VG": "British Virgin Islands",
    "VI": "U.S. Virgin Islands",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AM": "Armenia",
    "AZ": "Azerbaijan",
    "BD": "Bangladesh",
    "BH": "Bahrain",
    "BN": "Brunei Darussalam",
    "BT": "Bhutan",
    "CN": "China",
    "GE": "Georgia",
    "HK": "Hong Kong",
    "ID": "Indonesia",
    "IL": "Israel",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran",
    "JO": "Jordan",
    "JP": "Japan",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KP": "North Korea",
    "KR": "Republic of Korea",
    "KW": "Kuwait",
    "KZ": "Kazakhstan",
    "LA": "Laos",
    "LB": "Lebanon",
    "LK": "Sri Lanka",
    "MM": "Myanmar",
    "MN": "Mongolia",
    "MO": "Macao",
    "MV": "Maldives",
    "MY": "Malaysia",
    "NP": "Nepal",
    "OM": "Oman",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PS": "Palestine",
    "QA": "Qatar",
    "SA": "Saudi Arabia",
    "SG": "Singapore",
    "SY": "Syrian Arab Republic",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TL": "Timor-Leste",
    "TM": "Turkmenistan",
    "TR": "Turkey",
    "TW": "Taiwan",
    "UZ": "Uzbekistan",
    "VN": "Vietnam",
    "YE": "Yemen",
    "AD": "Andorra",
    "AL": "Albania",
    "AT": "Austria",
    "BA": "Bosnia and Herzegovina",
    "BE": "Belgium",
    "BG": "Bulgaria",
    "BY": "Belarus",
    "CH": "Switzerland",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "DE": "Germany",
    "DK": "Denmark",
    "EE": "Estonia",
    "ES": "Spain",
    "FI": "Finland",
    "FO": "Faroe Islands",
    "FR": "France",
    "GR": "Greece",
    "HR": "Croatia",
    "HU": "Hungary",
    "IE": "Ireland",
    "IS": "Iceland",
    "IT": "Italy",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "MC": "Monaco",
    "MD": "Moldova",
    "ME": "Montenegro",
    "MK": "North Macedonia",
    "MT": "Malta",
    "NL": "Netherlands",
    "NO": "Norway",
    "PL": "Poland",
    "PT": "Portugal",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russia",
    "SE": "Sweden",
    "SI": "Slovenia",
    "SM": "San Marino",
    "SK": "Slovakia",
    "UA": "Ukraine",
    "UK": "United Kingdom",
    "VA": "Vatican",
    "XK": "Kosovo",
    "AU": "Australia",
    "AS": "American Samoa",
    "CK": "Cook Islands",
    "FJ": "Fiji",
    "FM": "Micronesia, Federated States of",
    "HM": "Heard Island and McDonald Islands",
    "KI": "Kiribati",
    "MH": "Marshall Islands",
    "MP": "Northern Mariana Islands",
    "NR": "Nauru",
    "NC": "New Caledonia",
    "NF": "Norfolk Island",
    "NZ": "New Zealand",
    "NU": "Niue",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PN": "Pitcairn Islands",
    "PW": "Palau",
    "SB": "Solomon Islands",
    "TK": "Tokelau",
    "TV": "Tuvalu",
    "UM": "United States Minor Outlying Islands",
    "VU": "Vanuatu",
    "WF": "Wallis and Futuna",
    "WS": "Samoa",
    "OT": "Other, autonomous, etc."
};