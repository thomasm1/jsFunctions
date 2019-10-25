<!DOCTYPE html>
<html>
<head>
  <title>Hello Handlebars</title>

  <style type="text/css">
      .redText {color: red;}
      .blueText {color: blue;}
      .greenText {color: green;}
  </style>

  <!-- You can download Handlebars at http:// handlebarsjs.com/ and save it as handlebars-v4.0.2.js on your site. Then make it available by adding the following line. -->
  <script src="handlebars-v4.0.2.js"></script>

</head>
<body>

  <div id="quoteData"></div>

  <!-- It is better to separate your template from the JS and you do that by placing the template in its own tag -->
  <script id="quote-template" type="text/x-handlebars-template">

  <h3>Favorite {{name}} Quotes</h3>
    <ol>
    {{!-- 2. The each helper can insert an array of data --}}
    {{#each quotes}}
      <li>{{quote}}</li>
    {{/each}}
    </ol>

    {{!-- 3. You can use Html tags with triple-stash --}}
    {{{yogiBio}}}<br /><br />

    {{!-- 4. Call to custom Helper function, which will generate html tags without the triple-stash --}}
    {{makeLink "Yogi Berra Museum" "http://yogiberramuseum.org/"}}<br />

    {{!-- 5. Pass attributes to a Helper --}}
    {{changeColor "Make my text red" color="blue"}}<br />

    {{!-- 6. Say hello in defined language --}}
    {{sayHello}}

  </script>

  <script type="text/javascript">

  var quoteInfo = document.getElementById("quote-template").innerHTML;

  var template = Handlebars.compile(quoteInfo);

  // 4b. You can create your own helper functions
  // This returns a link when text and url are passed in
  // escapeExpression() escapes the passed string so it is
  // safe to use in content. Helpers should use this method
  // when returning content to avoid code injection
  Handlebars.registerHelper("makeLink", function(text, url){
    text = Handlebars.Utils.escapeExpression(text);
    url = Handlebars.Utils.escapeExpression(url);

    var theLink = '<a href="' + url + '">' + text + '</a>';

    // SafeString prevents the string from being escaped
    return new Handlebars.SafeString(theLink);
  });

  // 5b. Pass an attribute to a helper function
  Handlebars.registerHelper("changeColor", function(text, options){

    text = Handlebars.Utils.escapeExpression(text);

      // You can access the attributes by name
      if(options.hash.color === "red"){
        return new Handlebars.SafeString("<span class='redText'>" + text + "</span>");
      } else if(options.hash.color === "blue"){
        return new Handlebars.SafeString("<span class='blueText'>" + text + "</span>");
      } else {
          return new Handlebars.SafeString("<span class='greenText'>" + text + "</span>");
      }
  });

  // 6b. You can also pass options that can be used by all
  // helpers in the template
  Handlebars.registerHelper("sayHello", function(options){
    switch(options.data.lang){
      case "spanish":
        return "Hola";
        break;
      case "french":
        return "Bonjour";
        break;
      default:
        return "Hello";
    }
  });

  // 2b. Passing the array data
  var quoteData = template({
    name: "Yogi Berra",
    quotes: [
      {quote: "If you don't know where you are going, you might wind up someplace else."},
      {quote: "You better cut the pizza in four pieces because I'm not hungry enough to eat six."},
      {quote: "I never said most of the things I said."},
      {quote: "Nobody goes there anymore because it's too crowded."}
    ],
    // 3b. Passing tags to the triple stash
    yogiBio: '<i>Lawrence Peter "Yogi" Berra (May 12, 1925 - September 22, 2015) was an American professional baseball catcher, manager, and coach who played 19 seasons in Major League Baseball (MLB) (1946 - 63, 1965), all but the last for the New York Yankees. An 18-time All-Star and 10-time World Series champion as a player, Berra had a career batting average of .285, while compiling 358 home runs and 1,430 runs batted in.</i>'
  }
  // 6c. Say hello in passed language
  , {data: {
    lang: "spanish"
  }
  });

  document.getElementById('quoteData').innerHTML += quoteData;

  </script>

</body>
</html>