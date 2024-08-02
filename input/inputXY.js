var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'attribute float a_size;\n' +
  'void main() {\n' +
  '  gl_Position = a_Position;\n' +
  '  gl_PointSize = a_size;\n' +
  '}\n';

var FSHADER_SOURCE =
  'precision mediump float;\n' +
  'uniform vec4 u_color;\n' +
  'void main() {\n' +
  '  gl_FragColor = u_color;\n' +
  '}\n';

function main() {
  var canvas = document.getElementById('webgl');
  var gl = getWebGLContext(canvas);
  var bt = document.getElementById('button');
  initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)
  var u_color = gl.getUniformLocation(gl.program, 'u_color');
  var a_size = gl.getAttribLocation(gl.program, 'a_size');
  gl.vertexAttrib1f(a_size, 20.0);
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  bt.onclick = function (ev) {
    var x = myform.bt.value;
    var y = myform.kq.value;
    var r = myform.r.value;
    var g = myform.g.value;
    var b = myform.b.value;
    gl.vertexAttrib4f(a_Position, x, y, 0.0, 1.0);
    gl.uniform4f(u_color, r, g, b, 1.0);
    gl.clearColor(0.0, 0.8, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
  }
  gl.clearColor(0.0, 0.8, 0.8, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}




