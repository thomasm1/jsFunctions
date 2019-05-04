      /**
                     * d3.tip
                     * Copyright (c) 2013 Justin Palmer
                     *
                     * Tooltips for d3.js SVG visualizations
                     */
                    // eslint-disable-next-line no-extra-semi
                   
                    (function (root, factory) {
                      if (typeof define === 'function' && define.amd) {
                        // AMD. Register as an anonymous module with d3 as a dependency.
                        define([
                          'd3-collection',
                          'd3-selection'
                        ], factory)
                      } else if (typeof module === 'object' && module.exports) {
                        /* eslint-disable global-require */
                        // CommonJS
                        var d3Collection = require('d3-collection'),
                          d3Selection = require('d3-selection')
                        module.exports = factory(d3Collection, d3Selection)
                        /* eslint-enable global-require */
                      } else {
                        // Browser global.
                        var d3 = root.d3
                        // eslint-disable-next-line no-param-reassign
                        root.d3.tip = factory(d3, d3)
                      }
                    }(this, function (d3Collection, d3Selection) {
                      // Public - contructs a new tooltip
                      //
                      // Returns a tip
                      return function () {
                        var direction = d3TipDirection,
                          offset = d3TipOffset,
                          html = d3TipHTML,
                          node = initNode(),
                          svg = null,
                          point = null,
                          target = null

                        function tip(vis) {
                          svg = getSVGNode(vis)
                          if (!svg) return
                          point = svg.createSVGPoint()
                          document.body.appendChild(node)
                        }

                        // Public - show the tooltip on the screen
                        //
                        // Returns a tip
                        tip.show = function () {
                          var args = Array.prototype.slice.call(arguments)
                          if (args[args.length - 1] instanceof SVGElement) target = args.pop()

                          var content = html.apply(this, args),
                            poffset = offset.apply(this, args),
                            dir = direction.apply(this, args),
                            nodel = getNodeEl(),
                            i = directions.length,
                            coords,
                            scrollTop = document.documentElement.scrollTop ||
                            document.body.scrollTop,
                            scrollLeft = document.documentElement.scrollLeft ||
                            document.body.scrollLeft

                          nodel.html(content)
                            .style('opacity', 1).style('pointer-events', 'all')

                          while (i--) nodel.classed(directions[i], false)
                          coords = directionCallbacks.get(dir).apply(this)
                          nodel.classed(dir, true)
                            .style('top', (coords.top + poffset[0]) + scrollTop + 'px')
                            .style('left', (coords.left + poffset[1]) + scrollLeft + 'px')

                          return tip
                        }

                        // Public - hide the tooltip
                        //
                        // Returns a tip
                        tip.hide = function () {
                          var nodel = getNodeEl()
                          nodel.style('opacity', 0).style('pointer-events', 'none')
                          return tip
                        }

                        // Public: Proxy attr calls to the d3 tip container.
                        // Sets or gets attribute value.
                        //
                        // n - name of the attribute
                        // v - value of the attribute
                        //
                        // Returns tip or attribute value
                        // eslint-disable-next-line no-unused-vars
                        tip.attr = function (n, v) {
                          if (arguments.length < 2 && typeof n === 'string') {
                            return getNodeEl().attr(n)
                          }

                          var args = Array.prototype.slice.call(arguments)
                          d3Selection.selection.prototype.attr.apply(getNodeEl(), args)
                          return tip
                        }

                        // Public: Proxy style calls to the d3 tip container.
                        // Sets or gets a style value.
                        //
                        // n - name of the property
                        // v - value of the property
                        //
                        // Returns tip or style property value
                        // eslint-disable-next-line no-unused-vars
                        tip.style = function (n, v) {
                          if (arguments.length < 2 && typeof n === 'string') {
                            return getNodeEl().style(n)
                          }

                          var args = Array.prototype.slice.call(arguments)
                          d3Selection.selection.prototype.style.apply(getNodeEl(), args)
                          return tip
                        }

                        // Public: Set or get the direction of the tooltip
                        //
                        // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
                        //     sw(southwest), ne(northeast) or se(southeast)
                        //
                        // Returns tip or direction
                        tip.direction = function (v) {
                          if (!arguments.length) return direction
                          direction = v == null ? v : functor(v)

                          return tip
                        }

                        // Public: Sets or gets the offset of the tip
                        //
                        // v - Array of [x, y] offset
                        //
                        // Returns offset or
                        tip.offset = function (v) {
                          if (!arguments.length) return offset
                          offset = v == null ? v : functor(v)

                          return tip
                        }

                        // Public: sets or gets the html value of the tooltip
                        //
                        // v - String value of the tip
                        //
                        // Returns html value or tip
                        tip.html = function (v) {
                          if (!arguments.length) return html
                          html = v == null ? v : functor(v)

                          return tip
                        }

                        // Public: destroys the tooltip and removes it from the DOM
                        //
                        // Returns a tip
                        tip.destroy = function () {
                          if (node) {
                            getNodeEl().remove()
                            node = null
                          }
                          return tip
                        }

                        function d3TipDirection() {
                          return 'n'
                        }

                        function d3TipOffset() {
                          return [0, 0]
                        }

                        function d3TipHTML() {
                          return ' '
                        }

                        var directionCallbacks = d3Collection.map({
                            n: directionNorth,
                            s: directionSouth,
                            e: directionEast,
                            w: directionWest,
                            nw: directionNorthWest,
                            ne: directionNorthEast,
                            sw: directionSouthWest,
                            se: directionSouthEast
                          }),
                          directions = directionCallbacks.keys()

                        function directionNorth() {
                          var bbox = getScreenBBox()
                          return {
                            top: bbox.n.y - node.offsetHeight,
                            left: bbox.n.x - node.offsetWidth / 2
                          }
                        }

                        function directionSouth() {
                          var bbox = getScreenBBox()
                          return {
                            top: bbox.s.y,
                            left: bbox.s.x - node.offsetWidth / 2
                          }
                        }

                        function directionEast() {
                          var bbox = getScreenBBox()
                          return {
                            top: bbox.e.y - node.offsetHeight / 2,
                            left: bbox.e.x
                          }
                        }

                        function directionWest() {
                          var bbox = getScreenBBox()
                          return {
                            top: bbox.w.y - node.offsetHeight / 2,
                            left: bbox.w.x - node.offsetWidth
                          }
                        }

                        function directionNorthWest() {
                          var bbox = getScreenBBox()
                          return {
                            top: bbox.nw.y - node.offsetHeight,
                            left: bbox.nw.x - node.offsetWidth
                          }
                        }

                        function directionNorthEast() {
                          var bbox = getScreenBBox()
                          return {
                            top: bbox.ne.y - node.offsetHeight,
                            left: bbox.ne.x
                          }
                        }

                        function directionSouthWest() {
                          var bbox = getScreenBBox()
                          return {
                            top: bbox.sw.y,
                            left: bbox.sw.x - node.offsetWidth
                          }
                        }

                        function directionSouthEast() {
                          var bbox = getScreenBBox()
                          return {
                            top: bbox.se.y,
                            left: bbox.se.x
                          }
                        }

                        function initNode() {
                          var div = d3Selection.select(document.createElement('div'))
                          div
                            .style('position', 'absolute')
                            .style('top', 0)
                            .style('opacity', 0)
                            .style('pointer-events', 'none')
                            .style('box-sizing', 'border-box')

                          return div.node()
                        }

                        function getSVGNode(element) {
                          var svgNode = element.node()
                          if (!svgNode) return null
                          if (svgNode.tagName.toLowerCase() === 'svg') return svgNode
                          return svgNode.ownerSVGElement
                        }

                        function getNodeEl() {
                          if (node == null) {
                            node = initNode()
                            // re-add node to DOM
                            document.body.appendChild(node)
                          }
                          return d3Selection.select(node)
                        }

                        // Private - gets the screen coordinates of a shape
                        //
                        // Given a shape on the screen, will return an SVGPoint for the directions
                        // n(north), s(south), e(east), w(west), ne(northeast), se(southeast),
                        // nw(northwest), sw(southwest).
                        //
                        //    +-+-+
                        //    |   |
                        //    +   +
                        //    |   |
                        //    +-+-+
                        //
                        // Returns an Object {n, s, e, w, nw, sw, ne, se}
                        function getScreenBBox() {
                          var targetel = target || d3Selection.event.target

                          while (targetel.getScreenCTM == null && targetel.parentNode == null) {
                            targetel = targetel.parentNode
                          }

                          var bbox = {},
                            matrix = targetel.getScreenCTM(),
                            tbbox = targetel.getBBox(),
                            width = tbbox.width,
                            height = tbbox.height,
                            x = tbbox.x,
                            y = tbbox.y

                          point.x = x
                          point.y = y
                          bbox.nw = point.matrixTransform(matrix)
                          point.x += width
                          bbox.ne = point.matrixTransform(matrix)
                          point.y += height
                          bbox.se = point.matrixTransform(matrix)
                          point.x -= width
                          bbox.sw = point.matrixTransform(matrix)
                          point.y -= height / 2
                          bbox.w = point.matrixTransform(matrix)
                          point.x += width
                          bbox.e = point.matrixTransform(matrix)
                          point.x -= width / 2
                          point.y -= height / 2
                          bbox.n = point.matrixTransform(matrix)
                          point.y += height
                          bbox.s = point.matrixTransform(matrix)

                          return bbox
                        }

                        // Private - replace D3JS 3.X d3.functor() function
                        function functor(v) {
                          return typeof v === 'function' ? v : function () {
                            return v
                          }
                        }

                        return tip
                      }
                      // eslint-disable-next-line semi
                    }));

                    function draw(geo_data) {
                      "use strict";
                      var margin = 5,
                        width = 500 - margin,
                        height = 600 - margin;
                      d3.select(".body")
                        .attr('text-align', 'center')
                        .attr('margin', '0px');
                      d3.select("body").transition()
                        .duration(3000)
                        .delay(400)
                        .style("background-color", "steelblue");

                      /**
                       * d3.tip
                       * Copyright (c) 2013 Justin Palmer
                       *********************************************END MAP -TIP-D3   **************************
                       * Tooltips for d3.js SVG visualizations

                      */

                      var svg = d3.select(".map0")
                        .append("svg")
                        .attr("width", width + margin)
                        .attr("height", height + margin)
                        .append('g')
                        .attr('class', 'map2');

                      var projection = d3.geo.mercator()
                        .scale(100)
                        .translate([width / 2.5, height / 1.5]);

                      var path = d3.geo.path().projection(projection);
                      var map = svg.selectAll('path')
                        .data(geo_data.features)
                        .enter()
                        .append('path')
                        .attr('d', path)
                        .style('fill', 'rgb(0, 176, 236)')
                        .style('stroke', 'teal')
                        .style('stroke-width', 0.25);
                    };

                    d3.json("data/world_countries.json", draw); 



// // // // 


                    var format = d3.format(",");

                    // Set tooltips
                    var tip = d3.tip()
                      .attr('class', 'd3-tip')
                      .offset([-10, 0])
                      .html(function (d) {
                        return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" +
                          "<strong>Population: </strong><span class='details'>" + format(d.population) + "</span>";
                      })

                    var margin = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                      },
                      width = 960 - margin.left - margin.right,
                      height = 500 - margin.top - margin.bottom;

                    var color = d3.scaleThreshold()
                      .domain([10000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000,
                        1500000000
                      ])
                      .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)",
                        "rgb(107,174,214)", "rgb(66,146,198)", "rgb(33,113,181)", "rgb(8,81,156)", "rgb(8,48,107)",
                        "rgb(3,19,43)"
                      ]);

                    var path = d3.geoPath();

                    var svg = d3.selectAll(".map0")
                      .append("svg")
                      .attr("width", width)
                      .attr("height", height)
                      .append('g')
                      .attr('class', 'map');

                    var projection = d3.geoMercator()
                      .scale(110)
                      .translate([width / 2.6, height / 1.5]);

                    var path = d3.geoPath().projection(projection);

                    svg.call(tip);

                    queue()
                      .defer(d3.json, "data/world_countries.json")
                      .defer(d3.tsv, "data/world_population.tsv")
                      .await(ready);

                    function ready(error, data, population) {
                      var populationById = {};

                      population.forEach(function (d) {
                        populationById[d.id] = +d.population;
                      });
                      data.features.forEach(function (d) {
                        d.population = populationById[d.id]
                      });

                      svg.append("g")
                        .attr("class", "countries")
                        .selectAll("path")
                        .data(data.features)
                        .enter().append("path")
                        .attr("d", path)
                        .style("fill", function (d) {
                          return color(populationById[d.id]);
                        })
                        .style('stroke', 'white')
                        .style('stroke-width', 1.2)
                        .style("opacity", 0.8)
                        // tooltips
                        .style("stroke", "white")
                        .style('stroke-width', 0.3)
                        .on('mouseover', function (d) {
                          tip.show(d);

                          d3.select(this)
                            .style("opacity", 1)
                            .style("stroke", "white")
                            .style("stroke-width", 3);
                        })
                        .on('mouseout', function (d) {
                          tip.hide(d);

                          d3.select(this)
                            .style("opacity", 0.8)
                            .style("stroke", "white")
                            .style("stroke-width", 0.3);
                        });

                      svg.append("path")
                        .datum(topojson.mesh(data.features, function (a, b) {
                          return a.id !== b.id;
                        }))
                        // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
                        .attr("class", "names")
                        .attr("d", path);
                    }