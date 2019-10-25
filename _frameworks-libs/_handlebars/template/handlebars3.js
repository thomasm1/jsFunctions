<!DOCTYPE html>
<html>
<head>
  <title>Hello Handlebars</title>
  <script src="handlebars-v4.0.2.js"></script>
</head>
<body>

<div id="contentDiv"></div>

<script id="the-template" type="text/x-handlebars-template">

{{!-- 7. Block helper that receives the name value for the radio buttons --}}
{{#makeRadio "size"}}
  Small
  Medium
  Large
{{/makeRadio}}

{{!-- 8. You can place an {{else}} tag in your block helpers to create alternative template functions. Here well check for equality of 2 passed values --}}
{{#areEqual 1 1}}
  Numbers are equal
{{else}}
  Numbers are not equal
{{/areEqual}}<br />

{{!-- 9. Handlebars has a built in if conditional that we can use to display different results --}}
{{#if "isActive"}}
  <img src="ntt-logo.png" alt="Active">
{{else}}
  <img src="ntt-logo-horz.png" alt="Inactive">
{{/if}}

</script>

<script type="text/javascript">

// Assign the template name
var templateInfo = document.getElementById("the-template").innerHTML;

  // Compile the template
  var template = Handlebars.compile(templateInfo);

  // 7b. Create the helper that generates radio buttons
  Handlebars.registerHelper("makeRadio", function(name, options){

      // Save the string that the function returns
      var radioList = options.fn();

      // Split the results at the \n
      radioList = radioList.trim().split("\n");

      var output = "";

      // Cycle through the results and place them in radio elements
      for(var val in radioList){
        var item = radioList[val].trim();
        output += '<input type="radio" name="' + name + '" value="' + item + '">' + item + '<br />';
      }
      return output;
  });

  // 8b. 2 values are passed and depending on equality we will
  // execute fn() or inverse()
  Handlebars.registerHelper("areEqual", function(num1, num2, options){
    if(num1 === num2){
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  // 9b. In a similar way we can display different results
  // based on a value passed into our function
  Handlebars.registerHelper("if", function(data, options){
    if(data === "isActive"){
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  // If there is nothing to pass keep this blank
  var templateData = template({});

  document.getElementById('contentDiv').innerHTML += templateData;

</script>


</body>
</html>