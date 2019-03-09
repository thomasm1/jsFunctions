  <div id="grid">
      <table id="tools">
         <tr>
            <th data-field="name">Name</th>
            <th data-field="description">Description</th>
         </tr>
       </table>
<script>
$(function() {

  // make the splitter  - in a different .js file
  makeSplitter();
  // end make the splitter
  
  var Tools = kendo.data.Model.define({
    id: "id"
  })

  dataSource = new kendo.data.DataSource({
    transport: {
      read: {
       url: "/tools.json"
     }
    },
   schema: {
     model: Tools
    }
  });

  $("#tools").kendoGrid({
    dataSource: dataSource
  });

  $("#use-kendo-crud-tool").click(function() {
  dataSource.add({ name: $("#create-name").val(), description: $("#create-description").val()
  });
  dataSource.sync();
  
  $("#create-name").val('');
  $("#create-description").val('');
  
  dataSource.read();
  </script>
