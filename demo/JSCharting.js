<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Nested Pie Chart | JSCharting</title>
    <meta http-equiv="content-type" content="text-html; charset=utf-8" />

    <script type="text/javascript" src="../jsc/jscharting.js"></script>

    <script type="text/javascript" src="../jsc/modules/types.js"></script>

    <link rel="stylesheet" type="text/css" href="css/default.css" />
    <style type="text/css"></style>
  </head>
  <body>
    <div id="chartDiv" style="max-width: 500px; height: 430px; margin: 0px auto;"></div>

    <script type="text/javascript">
      /*
A nested donut chart with labels.
Learn how to:

  - Draw a nested donut chart.
*/
      // JS
      var chart = JSC.chart('chartDiv', {
        debug: true,
        defaultSeries: { type: 'pieDonut', shape_center: '50%,50%' },
        title: {
          label: {
            text: 'Apple Revenue, by quarter',
            style_fontSize: 16,
          },
          position: 'center',
        },
        defaultPoint: {
          tooltip: '<b>%name</b><br>Revenue: <b>{%yValue:c2}B</b>',
        },
        legend: { template: '{%value:c2}B %icon %name', position: 'right' },
        series: [
          {
            name: 'Years',
            points: [
              { x: '2016', y: 218.12, legendEntry: { sortOrder: 1 } },
              { x: '2017', y: 239.18, legendEntry: { sortOrder: 3, lineAbove: true } },
              { x: '2018', y: 261.61, legendEntry: { sortOrder: 5, lineAbove: true } },
            ],
            shape: { innerSize: '0%', size: '40%' },
            defaultPoint_label: {
              text: '<b>%name</b>',
              placement: 'inside',
            },
            palette: ['#66bb6a', '#ffca28', '#ef5350'],
          },
          {
            name: 'Quarters',
            points: [
              { x: 'Q1', y: 50.56, legendEntry_sortOrder: 2, attributes_year: '2016' },
              { x: 'Q2', y: 42.36, legendEntry_sortOrder: 2, attributes_year: '2016' },
              { x: 'Q3', y: 46.85, legendEntry_sortOrder: 2, attributes_year: '2016' },
              { x: 'Q4', y: 78.35, legendEntry_sortOrder: 2, attributes_year: '2016' },
              { x: 'Q1', y: 52.9, legendEntry_sortOrder: 4, attributes_year: '2017' },
              { x: 'Q2', y: 45.41, legendEntry_sortOrder: 4, attributes_year: '2017' },
              { x: 'Q3', y: 52.58, legendEntry_sortOrder: 4, attributes_year: '2017' },
              { x: 'Q4', y: 88.29, legendEntry_sortOrder: 4, attributes_year: '2017' },
              { x: 'Q1', y: 61.14, legendEntry_sortOrder: 6, attributes_year: '2018' },
              { x: 'Q2', y: 53.26, legendEntry_sortOrder: 6, attributes_year: '2018' },
              { x: 'Q3', y: 62.9, legendEntry_sortOrder: 6, attributes_year: '2018' },
              { x: 'Q4', y: 84.31, legendEntry_sortOrder: 6, attributes_year: '2018' },
            ],
            defaultPoint_tooltip: '<b>%year %name</b><br>Revenue: <b>{%yValue:c2}B</b>',
            shape: { innerSize: '55%', size: '80%' },
            palette: JSC.colorToPalette('#66bb6a', { lightness: 0.4 }, 4, 0).concat(
              JSC.colorToPalette('#ffca28', { lightness: 0.4 }, 4, 0),
              JSC.colorToPalette('#ef5350', { lightness: 0.4 }, 4, 0)
            ),
          },
        ],
      });
    </script>
  </body>
</html>
