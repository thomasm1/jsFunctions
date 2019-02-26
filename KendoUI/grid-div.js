// notes: ODATA.ORG

var kendoCrudTool = kendo.data.Model.define({
  id: "id"
})

dataSource = new kendo.data.DataSource({
  transport: {
    read: {
      url: "/kendo-crud-tools.json"
    },
    create: {
      url: "/crud/kendo-crud-tools.json",
      type: "POST"
     },
     update: {
      type: "PUT"
     },
     destroy: {
      type: "DELETE"   // maybe DESTROY because jQuery uses delete already
      }
    },
    schema: {
      model: kendoCrudTool
    }
 });
 
 var kendoCrudNewTool; 
 
 $("#kendo-crud-tool").kendoGrid({
    dataSource: dataSource,
    selectable: true,
    change: function() {
       var id = this.select().data("id");
       kendoCrudNewTool = this.dataSource.get("id");
       
       this.dataSource.options.transport.destroy.url = "crud/" + id; 
       this.dataSoruce.options.transport.update.url = "crud/" + id;
       
       $("#change-name").val(kendoCrudNewTool.get("name"));
       $("#change-description").val(kendoCrudNew.get("description"));
     }
   });
