"use strict";
exports.__esModule = true;
var data_controller_1 = require("./data-controller");
var data_model_1 = require("./data-model");
var data_view_1 = require("./data-view");
// a local data view that the hypothetical external controller updates
var DATA_MODEL = new data_model_1.DataModel();
// Add some visuals that use the dataview...pass model into view
var PIE_GRAPH_VIEW = new data_view_1.PieGraphView(DATA_MODEL);
var BAR_GRAPH_VIEW = new data_view_1.BarGraphView(DATA_MODEL);
var TABLE_VIEW = new data_view_1.TableView(DATA_MODEL);
// A hpyothetical data controller running in a different process
var DATA_CONTROLLER = new data_controller_1.DataController(); // <<== Singleton!! 
// external data conroller updates data
DATA_CONTROLLER.notify([1, 2, 3]);
// client now removes local BAR-graph
BAR_GRAPH_VIEW["delete"]();
// The hypothetical external data controller updates the data again
DATA_CONTROLLER.notify([4, 5, 6]);
