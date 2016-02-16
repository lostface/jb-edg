(function() {
  'use strict';

  angular.module('task')
    .directive('ageChart', ageChart);

  function ageChart() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/age-chart/age-chart.html',
      controller: AgeChartController,
      controllerAs: '$ctrl',
      bindToController: true,
      link: link,
      scope: {
        ages: '<',
      },
      replace: true
    };
  }

  function link(scope, element, attrs, controller) {
    var
      width = 400,
      height = 360,
      color = d3.scale.category20(),
      radius = Math.min(width, height) / 2;

    var pie = d3.layout.pie()
      .padAngle(1 * Math.PI / 180);

    var svg = d3.select(element[0]).append('svg')
          .attr('width', width)
          .attr('height', height)
        .append('g')
          .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    var arc = d3.svg.arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 20);

    svg.datum(controller.ages).selectAll('path')
        .data(pie)
      .enter().append('path')
        .attr('fill', function(d, i) { return color(i); })
        .attr('d', arc);
  }

  function AgeChartController() {
  }

})();
