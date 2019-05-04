<!-- Handlebars is a superset of the Mustache template engine. A template engine helps you separate your HTML from dynamic content created by languages such as JavaScript. -->

<!DOCTYPE html>
<html>
<head>
  <title>Hello Handlebars</title>

  <!-- You can download Handlebars at http:// handlebarsjs.com/ and save it as handlebars-v4.0.2.js on your site. Then make it available by adding the following line. -->
  <script src="handlebars-v4.0.2.js"></script>

  <!-- NodeJS is needed to precompile your templates so that your pages load faster. Install it by going to NodeJS.org and then type the following in your terminal to install Handlebars CLI : npm install -g handlebars-->

  <!--
  <script id="result-template" type="text/x-handlebars-template">

  </script> -->

</head>

<body>
<!-- The information will be placed in this div -->
  <div id="derekData"></div>

  <script type="text/javascript">

  // Structure how I want the data to dynamically be
  // placed by defining the keys in between {{}}
  var myInfo = "<p>My name is {{name}} and I live at {{street}} in {{city}}, {{state}}</p>";

  // Generate a JS function that will create the output
  var template = Handlebars.compile(myInfo);

  // template receives the key / value pairs and puts
  // them in place
  var data = template({name: "Derek", street: "123 Main St", city: "Pittsburgh", state: "PA"});

  // Update the div with the completed output
  document.getElementById('derekData').innerHTML += data;
  </script>

</body>
</html>