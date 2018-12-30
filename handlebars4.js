<!DOCTYPE html>
<html>
<head>
  <title>Hello Handlebars</title>
  <script src="handlebars-v4.0.2.js"></script>
</head>
<body>

<div id="contentDiv"></div>

<script id="the-template" type="text/x-handlebars-template">

{{!-- 10. You can use with to refer to a nested parameter --}}
<div class="potter-1">
  <h3>{{title}}</h3>
  {{#with techData}}
    <div class="isbn">{{{isbn}}}</div>
    <div class="author">{{{author}}}</div>
  {{/with}}
</div><br />

{{!-- Otherwise you would use the following --}}
<div class="potter-2">
{{title}} by {{techData.author}}
</div>

</script>

<script type="text/javascript">

// Assign the template name
var templateInfo = document.getElementById("the-template").innerHTML;

  // Compile the template
  var template = Handlebars.compile(templateInfo);

  Handlebars.registerHelper('with', function(context, options) {
    // Here we are passed the context which points to the
    // techData part of our data
    return options.fn(context);
  });


  var templateData = template({
    title: "Harry Potter and the Philosopher's Stone",
  techData: {
    isbn: "0-7475-3269-9",
    author: "J. K. Rowling"
  }
  });

  document.getElementById('contentDiv').innerHTML += templateData;


</script>

</body>
</html>