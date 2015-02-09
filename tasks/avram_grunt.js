/*
 * avram-grunt
 * 
 *
 * Copyright (c) 2015 Adam Gavish
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('avram_grunt', 'Avram Grunt plugin', function () {

        var ass = function () {/*             
                ..ooo*   **ooooo . oo*  *ooo..
             .  oo*             *o.oo*            *o.
            . o"                    o                   "o
             o                      o                     *o
           .o                       o                        'o
           o                        o                          o.
          o                          o                          o
         o                          \o/                         o
         o                         --0--                         o
         o.                         /o\                         .o
          o                          o                           o
          oo                         o                          oo
          oo.                       oo                        oo
            ooo.                  .oo.                     ooo
             o   oo,,        ,,oO- Oo,       ,,,,,,..oo o
             o.                    oo                    .o
              o                    oo                    o
             *o                    oo                    o
               o                    o                    o
              o                     o                   o
               o                    o                  o
               o                    o                 o
               o                    o                 o
                o                    o                 o
                o                    o                 o*/};

    console.log(ass.toString().match(/\/\*([\s\S]*)\*\//m)[1]);
  });

};
