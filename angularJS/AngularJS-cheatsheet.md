# Angular tips 
[AngularJS Cheat Sheets: Core Services, Directive Definition Object, and ui-router](https://egghead.io/articles/angularjs-core-services-directive-definition-object-and-ui-router-cheat-sheets)

## Best Practices
* [Best Practices for Building Angular.js Apps](https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917)
* [AngularJS Best Practices: Directory Structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)
* [Creating a useful AngularJS project structure and toolchain](http://manuel.kiessling.net/2014/06/09/creating-a-useful-angularjs-project-structure-and-toolchain/)
* [Angular App Structuring Guidelines](http://www.johnpapa.net/angular-app-structuring-guidelines/)

## Directives
* [A Practical Guide to AngularJS Directives](http://www.sitepoint.com/practical-guide-angularjs-directives/)
* [A Practical Guide to AngularJS Directives, part 2](http://www.sitepoint.com/practical-guide-angularjs-directives-part-two/)
* [Call parent's scope function  inside directive's scope example](http://plnkr.co/edit/k4scWKwtGBJw7lfKGqVJ?p=preview)
* [Transclude example](http://plnkr.co/edit/YQBPB9cvGgJiYMuIjzTw?p=preview), [Example 2](http://plnkr.co/edit/yFLe7OXj2u8epHXe6a0s?p=preview)
* [Comunication between child and parent directives through controller](http://plnkr.co/edit/NMWGE6l9p1tBZh3jCfKn?p=preview)
* [Sample note app using custom directives](http://embed.plnkr.co/QvxI4LbqfUY3C3XQjN3m/preview)
* [Practical Guide to PreLink, PostLink and Controller Methods of Angular Directives](http://www.undefinednull.com/2014/07/07/practical-guide-to-prelink-postlink-and-controller-methods-of-angular-directives/)
* [Testing directives](http://busypeoples.github.io/post/testing-angularjs-directives/)

## Directives usage
* [When should I use ng-show or ng-if](https://egghead.io/lessons/angularjs-when-should-i-use-ng-show-or-ng-if#/tab-transcript)
* [A Brief Walk-through of the ng-options in AngularJS](http://www.undefinednull.com/2014/08/11/a-brief-walk-through-of-the-ng-options-in-angularjs/)

## Config an run
* [Testing config and run blocks in AngularJS](https://medium.com/@a_eife/testing-config-and-run-blocks-in-angularjs-1809bd52977e#.lheok9knn)

## Filters
* [What is a 'Stateful' filter and why it is discouraged](http://stackoverflow.com/a/25877877/840635)
* [Filter with promise initialization (stateful filter example)](http://bahmutov.calepin.co/delayed-angularjs-filter-initialization.html):
```html
<!DOCTYPE html>
<html>
<head>
<meta name="description" content="Example of delayed filter initialization using promise in angular" />
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.js"></script>
  <meta charset="utf-8">
  <title>Delayed Filter</title>
</head>
<body ng-app="filterExample">
  <h2>Promise in Angular Filter</h2>
  <p>{{ 'a string' | aFilter }}</p>
  <p>The above filter changes after 1 second using $timeout service.</p>
  <p>Part of the blog post at <a href="http://bahmutov.calepin.co/">http://bahmutov.calepin.co/</a></p>
</body>
</html>
```
```javascript
angular.module('filterExample', [])
      .filter('aFilter', function registerAFilter($timeout) {
          var filterFn = function initialFilter(str) {
            return str + ' filtered initially';
          };

          $timeout(function () {
            filterFn = function newFilter(str) {
              return str + ' filtered with delayed!!!';
            };
          }, 1000);

          function tempFilter(str) {
            return filterFn(str);
          };
          tempFilter.$stateful = true;
          return tempFilter;
        });
```

## Angular core services, directives, etc
* [$apply, what is it and when you should use it](http://jimhoskins.com/2012/12/17/angularjs-and-apply.html)
* [Angular jqLite](https://gist.github.com/esfand/9638882)
* [Configurable module components with providers](http://stackoverflow.com/a/23600129/840635)
* [$q](http://cursoangularjs.es/doku.php?id=unidades:06_promesas:02_q)
  * [More traps, anti-patterns and tips about AngularJS promises](http://blog.ninja-squad.com/2015/06/04/angularjs-promises-2/)**[strongly recommended]**
  * [Testing promises with Jasmine](http://ng-learn.org/2014/08/Testing_Promises_with_Jasmine/)
  * [Flattening Promise Chains](http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/)

## Routing
* [Angular js routing options](http://www.slideshare.net/nirkaufman/angular-js-routing-options)
 * [Routing demo](https://github.com/nirkaufman/angularjs-routing-demo)
* [Architecture, Auth, and Routing with uiRouter](http://www.slideshare.net/christophercaplinger/architecture-auth-and-routing-with-uirouter)

## Call a REST API
* [$http vs $resource vs Restangular](http://sauceio.com/index.php/2014/07/angularjs-data-models-http-vs-resource-vs-restangular/)
* [Links (relations) to REST resources in AngularJS](http://stackoverflow.com/q/20476833/840635)
* [HATEOAS and Linking with angular-hyper-resource](https://libraries.io/bower/angular-hyper-resource)
* [Restmod](http://blog.dargiel.net/restmod-ng-resource-alternative/)
* [Build a Simple REST Application with AngularJS Pt 2 Master Detail Interface](http://onehungrymind.com/build-a-simple-rest-application-with-angularjs-pt-2-master-detail-interface/)

## Pagination
* [Paginate (almost) Anything in AngularJS](http://www.michaelbromley.co.uk/blog/108/paginate-almost-anything-in-angularjs)

## Forms
* [Learn how to use the new form features in AngularJS 1.3](http://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html)

## Libs
* [Show/hide an element based on a promise's resolved status](https://github.com/alianza-dev/az-promise-show)

## Unit test
* [JsHint config to avoid error messages while reading jasmine and karma functions](http://stackoverflow.com/a/26133415/840635)
* [Unit testing AngularJS applications](https://www.airpair.com/angularjs/posts/unit-testing-angularjs-applications)
* [Unit testing Karma + Jasmine slides](http://www.slideshare.net/cebartling/javascript-tdd-with-jasmine-and-karma)
* [Karma-browserfy example](https://github.com/nikku/karma-browserify)
* [Testing JavaScript with Jasmine, Travis, and Karma](http://www.sitepoint.com/testing-javascript-jasmine-travis-karma/)
* [Unit Testing in AngularJS: Services, Controllers & Providers](http://www.sitepoint.com/unit-testing-angularjs-services-controllers-providers/) => [Example](https://github.com/sitepoint-editors/angular-js-unit-testing-services-controllers-providers)
* [Provider test example](http://stackoverflow.com/a/31497801/840635)
* [Provider test example (2)](http://jsfiddle.net/eitanp461/qTvMz/)
* [AngularJS Testing Tips: Testing Directives](http://www.sitepoint.com/angular-testing-tips-testing-directives/)
* [Mocking Dependencies in AngularJS Tests](http://www.sitepoint.com/mocking-dependencies-angularjs-tests/)
 * [Sample Restangular mock](https://gist.github.com/anonymous/635956a3f3c39d7ba9d0#file-gistfile1-js)
* [Testing older browsers](http://www.yearofmoo.com/2013/09/advanced-testing-and-debugging-in-angularjs.html#testing-older-browsers)

## e2e test
* [Writing end-to-end tests has never been so fun](http://ramonvictor.github.io/protractor/slides/#/)
 * ["But, I want to use Protractor in a non-AngularJS app"](http://ramonvictor.github.io/protractor/slides/#/43)
* [Protractor Styleguide](https://github.com/CarmenPopoviciu/protractor-styleguide)
* [Example gulp file with protractor conf](https://gist.github.com/demisx/9512212)
* [Protractor demo](https://github.com/juliemr/protractor-demo)
* [Testing Angular Apps End-to-End with Protractor](http://product.moveline.com/testing-angular-apps-end-to-end-with-protractor.html) 
* [Testing Angular and Non Angular Sites](http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/)
 * [Creating test scripts using Protractor for non angular application](https://github.com/sakshisingla/Protractor-Non-Angular-Tests/wiki/Creating-test-scripts-using-Protractor-for-non-angular-application)
 * [Selenium tutorial: how to click a button](http://selenium-tutorial.blogspot.com.es/2012/08/webdriver-click-link-button.html)

## Debug
* [AngularJS Debug](http://www.tutorials.kode-blog.com/angularjs-debug)

## Code Documentation
* [jsDoc node module](https://www.npmjs.com/package/jsdoc), [angular-jsdoc node module](https://www.npmjs.com/package/angular-jsdoc).
* [Writing AngularJS Documentation](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation).
* [Several choices](http://allenhwkim.tumblr.com/post/92161523693/sigh-angularjs-documentation)
* [Simple and clear Angular application documentation using angular-jsdoc](http://hashbang.nl/angular/2015/02/10/simple-and-clear-angular-application-documentation-using-angular-jsdoc/)

## Building tools (Gulp, Grunt)
* [Angular and Gulp (by John Pappa)](http://www.johnpapa.net/angular-and-gulp/)
* [Minify and templateCache your Angular Templates using Gulp](https://gist.github.com/sanderhahn/8595191)
* [10 Awesome Gulp Plugins Working with AngularJS and Bower](http://geekswithblogs.net/shaunxu/archive/2015/02/17/10-awesome-gulp-plugins-working-with-angularjs-and-bower.aspx)
* Useful Gulp plugins:
 * Ensures correct order while injecting bower dependencies: [gulp-angular-filesort](https://www.npmjs.org/package/gulp-angular-filesort)
 
## Performance
* [AngularJS Performance in Large Applications](https://www.airpair.com/angularjs/posts/angularjs-performance-large-applications)
* [11 Tips to Improve AngularJS Performance](http://www.alexkras.com/11-tips-to-improve-angularjs-performance/)
* [JavaScript Memory Profiling with Chrome](https://developer.chrome.com/devtools/docs/javascript-memory-profiling)

## IDEs for Angular development
* [Install Aptana 3 on Ubuntu](http://askubuntu.com/a/554526/435297)

## Angular IDE plugins
* [AngularJS support in Atom](https://github.com/angular-ui/AngularJS-Atom)
* [Unit test plugin for Atom](http://www.flaviocorpa.com/tests-unitarios-de-javascript-en-7-min-con-atom/)
* [10 Popular AngularJS IDE Plugins/Extensions](http://angularjs4u.com/tools/10-popular-angularjs-ide-pluginsextensions/)
* [15 Useful AngularJS Tools For Developers](http://www.hongkiat.com/blog/angularjs-tools/)

## Angular themes, seeds and generators
* [Angular seed](https://github.com/angular/angular-seed)
* [Angular enterprise seed](http://robertjchristian.github.io/angular-enterprise-seed/#/)
* [Angular express seed](http://briantford.com/blog/angular-express)
* Full stack:
  * [Cleverstack](http://cleverstack.io/)
  * [jhipster](https://jhipster.github.io/):
    * Configuration with Oracle: 
      *  [Using Oracle](http://jhipster.github.io/using_oracle.html)
      *  [Configure liquibase with Oracle](http://stackoverflow.com/a/23422065/840635)
      *  [jhipster – Using Oracle Database	](https://cirovladimir.wordpress.com/2015/05/07/jhipster-using-oracle-database/)

## Sample apps
* [Heroku deployable and full toolchain with Gulp](https://github.com/dickeyxxx/angular-boilerplate)
* [AngularJS CRUD application demo](https://github.com/angular-app/angular-app)

## Guides and training courses
* [Spanish training course](http://www.desarrolloweb.com/manuales/manual-angularjs.html).


## Angular 2.0
* [How to publish a library for Angular 2 on npm](https://medium.com/@OCombe/how-to-publish-a-library-for-angular-2-on-npm-5f48cdabf435)
* [Upload Files To Node.js Using Angular 2](https://blog.nraboy.com/2016/02/upload-files-to-node-js-using-angular-2/)

## Angular Gurus
* [Michael Bromley](https://github.com/michaelbromley?tab=repositories) 

## Issues

* [Promise callback not called in Angular JS](http://stackoverflow.com/a/16323920/840635)
* Example from http://brianmcd.com/2014/03/27/a-tip-for-angular-unit-tests-with-promises.html#comment-1621301585:
```javascript
describe('how to test with promises', function () {
  var deferred, $rootScope;

  beforeEach(function () {
    inject(function ($q, _$rootScope_) {
      $rootScope = _$rootScope_;
      deferred = $q.defer();
    });
  });
  
 it('does a thing one way', function() {
     var value;
     deferred.promise.then(function(_value_) {
         value = _value_;
     });
     deferred.resolve(10);
     expect(value).not. toBe(10); // not yet 10 because $digest hasn't run
     $scope.$digest();
     expect(value).toBe(10); // 10 because $digest already ran
 });
});
```

# Angular 2
* [Angular 2 VS React](https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51)
* [Angular 2 Form Validation](https://medium.com/@daviddentoom/angular-2-form-validation-9b26f73fcb81)
* [Angular 2 First App Post-Mortem](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.1q86pu9lk)