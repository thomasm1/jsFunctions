# JAVASCRIPT SANKEY DIAGRAMS

A javascript library for drawing Sankey diagrams. 

The canonical code is at:
http://github.com/tamc/sankey

## Similar tools

This sankey diagram generator uses the Raphael library and therefore the diagrams work in older versions of Internet Explorer.

If you are happy for your diagrams to work only with the latest generation of browsers, then take a look at:
http://bost.ocks.org/mike/sankey/

## DEPENDENCIES

1. raphael.js
2. jquery.js
3. jquery-ui.js (optional)

## USAGE

For the moment, see files in the examples folder

## HACKING

The javascript is written in CoffeeScript in the src directory.

To keep the javascript in sync with the coffeescript, run:

    coffee -wo js/ -c src/sankey.coffee

## PATCHES AND BUG REPORTS

Please submit bug reports to:
http://github.com/tamc/sankey/issues

Please submit patches to:
http://github.com/tamc/sankey/pullrequests


