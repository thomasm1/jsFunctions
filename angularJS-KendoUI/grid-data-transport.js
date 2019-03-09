$(function() {
  $("#grid").kendoGrid({
    columns: [ { title: "First Name",
                 field: "firstName",
                 tempplate: "<div class='name'>#= firstName #</div>" },
               { title: "Last Name",
                 field: "lastName",
                 template: "<div class='name'>#= lastName #</div>" },
               { title: "Picture",
                 field: "picture",
                 template: "<img src='#= picture #' />" }, 
               { title: "Email",
                 field: "email",
                 template: "<a href='mailto:#= email #'>#=email#</a>" }
              ],
     dataSource: {
       transport: {
          read: {
              url: "data/people.json"
          }
        },
        schema: {
          data: "data",
          total: "count"
        },
        pageSize: 5
     },
     height: 400,
     scrollable: true,
     pageable: true,
     sortable: {    // or Boolean
       mode: "multiple"
     },
     groupable: true
  });
