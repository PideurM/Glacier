

import * as d3 from 'd3';

let data_default=FileAttachment("data/departements-version-simplifiee.geojson").json({typed : true});
let data_clear = data_default.features;
let glacier_default=FileAttachment("data/glacier.csv").csv({typed : true});
console.log(typeof glacier_default); // should print "object"
console.log(glacier_default); // should print an array of objects
let glacier_clear = glacier_default.filter( d => d.POLITICAL_UNIT === "FR" && d.LATITUDE !== null && d.LONGITUDE !== null && d.GEN_LOCATION !== null);