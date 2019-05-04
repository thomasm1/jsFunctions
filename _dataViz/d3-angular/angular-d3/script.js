// ng-app
angular.module('myApp', [])
  .directive('miniChart', function() {
    return function(scope, element, attrs) {
      var chartWidth = element.width();
      var chart = d3.select(element[0]).append('svg')
        .attr('class', 'chart')
        .attr('width', chartWidth);
      
      var drawChart = function (amounts) {
        var allAmounts = _.map(amounts, function(a) {
          return a.amount || 0;
        });
        var x = d3.scale.linear()
          .domain([0,d3.max(allAmounts)])
          .range([0,chartWidth]);
          
        chart.selectAll('rect').remove();
        chart.attr('height', 10 * allAmounts.length);
        
        chart.selectAll('rect')
          .data(allAmounts)
          .enter().append('rect')
          .attr('y', function (d, i) { return i * 10; })
          .attr('width', x)
          .attr('height', 10);
//          .each(function(d, i) { 
//            console.log('title: ' + amounts[i].label + ': ' + d);
//            $(this).tooltip({title: amounts[i].label + ': ' + d});
//          });
      };
      
      scope.$watch(attrs.miniChart, function (newVal) {
        console.log('registering change on ' + attrs.miniChart);
        drawChart(newVal);
      }, true);
    };
  });