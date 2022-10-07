import { DataController } from './data-controller'
import { DataModel } from './data-model'
import { BarGraphView, PieGraphView, TableView  } from './data-view'

// a local data view that the hypothetical external controller updates
const DATA_MODEL = new DataModel()

// Add some visuals that use the dataview...pass model into view

const PIE_GRAPH_VIEW = new PieGraphView(DATA_MODEL)
const BAR_GRAPH_VIEW = new BarGraphView(DATA_MODEL)
const TABLE_VIEW = new TableView(DATA_MODEL)

// A hpyothetical data controller running in a different process
const DATA_CONTROLLER = new DataController() // <<== Singleton!! 

// external data conroller updates data
DATA_CONTROLLER.notify([1,2,3])

// client now removes local BAR-graph
BAR_GRAPH_VIEW.delete()

// The hypothetical external data controller updates the data again
DATA_CONTROLLER.notify([4,5,6])