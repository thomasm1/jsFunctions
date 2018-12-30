<!DOCTYPE html>
<html>
<head>
  <title>Hello Handlebars</title>
  <script src="handlebars-v4.0.2.js"></script>
</head>
<body>

<div id="contentDiv"></div>

<script id="the-template" type="text/x-handlebars-template">

{{!-- 11. Partials provide code reuse, but unlike helpers they dont compute anything, but instead work like placeholders for data. --}}
  {{> myName }}

{{!-- 12. We can call for data in the partial and define the tag to surround it --}}
<div class="post">
  {{> askQuestion tagName="h2" }}

  <h2>Suggestions</h2>

  {{!-- We can cycle through all comments passed and also define the surrounding tag --}}
  {{#each comments}}
    {{> askQuestion tagName="h3" }}
  {{/each}}
</div>

</script>

<script type="text/javascript">

// Assign the template name
var templateInfo = document.getElementById("the-template").innerHTML;

  // Compile the template
  var template = Handlebars.compile(templateInfo);

  // 11b. A partial is registered with registerPartial
  Handlebars.registerPartial('myName', '{{name}}');

  // 12. Define the partial name and then substitute the
  // passed tags and the data
  Handlebars.registerPartial('askQuestion',
    '<{{tagName}}>{{author}}</{{tagName}}>'
    + '<div class="comment">{{comment}}</div>');

  var templateData = template({
    name: "Derek",
    author: "John Smith",
    comment: "Where should we vacation?",
    comments: [{
      author: "Sue Smith",
      comment: "The beach"
    },
    {
      author: "Paul Smith",
      comment: "Disneyworld"
    }]
  });

  document.getElementById('contentDiv').innerHTML += templateData;


</script>

</body>
</html>