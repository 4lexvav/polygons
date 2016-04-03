function intersect(fig1, fig2) {
  var self = this;
  var intersections = [];

  // this.fig1 = fig1;
  // this.fig2 = fig2;

  this.findK = function(line) {
    return (line[1].y - line[0].y) / (line[1].x - line[0].x);
  }

  this.findB = function(line, k) {
    return line[0].y - k * line[0].x;
  }

  this.lineIntersect = function (line1, line2) {
    var k1 = self.findK(line1);
    var b1 = self.findB(line1, k1);

    var k2 = self.findK(line2);
    var b2 = self.findB(line2, k2);

    var x1 = k1 * line1[0].x + b1;
    var x2 = k2 * line2[0].x + b2;

    var x = (b1 - (b2)) / (k1 * line1[0].x - (k2 * line2[0].x));
    var y = k1 * x + b1;
    
    return {x: x, y: y};
  }

  this.checkLineIntersection = function (line1, line2) {

  }

  fig1.forEach(function(dot1, dot1Index) {
    var nextDot = (dot1Index + 1) % fig1.length;
    var line1 = [fig1[dot1Index], fig1[nextDot]];
    /*var prev = false;
    var cur = true;*/
    fig2.forEach(function(dot2, dot2Index) {
      var nextDot = (dot2Index + 1) % fig2.length;
      var line2 = [fig1[dot2Index], fig1[nextDot]];
      /*if (dot1.x <= dot2.x && dot1.y <= dot2.y) {
        cur = true;
      } else {
        cur = false;
      }
      if (prev && cur) {
        intersections.push(1);
      }
      prev = cur;*/
      lineIntersection = self.lineIntersect(line1, line2);
      if (lineIntersection) {
        intersections.push(lineIntersection);
      }
    });
  });

  var div = document.createElement('div');
  div.innerHTML = intersections.toString() + '. Length: ' + intersections.length;
  document.body.appendChild(div);

  // Замените код функции на полноценную реализацию

  return [
    [
      { x: 60,  y: 240 },
      { x: 90,  y: 240 },
      { x: 120, y: 180 },
      { x: 90,  y: 90  },
      { x: 60,  y: 150 },
    ],
    [
      { x: 270, y: 240 },
      { x: 300, y: 240 },
      { x: 300, y: 150 },
      { x: 270, y: 90  },
      { x: 240, y: 180 },
    ],
    [
      { x: 150, y: 180 },
      { x: 180, y: 240 },
      { x: 210, y: 180 },
      { x: 210, y: 90  },
      { x: 180, y: 60  },
      { x: 150, y: 90  }
    ]
  ];
}