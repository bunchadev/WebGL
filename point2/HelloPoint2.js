var VSHADER_SOURCE = 
'attribute vec4 a_Position;\n' +
'attribute float a_Size;\n' +
'void main() {\n' +
'gl_Position = a_Position;\n' +
'gl_PointSize = a_Size;\n' +
'}\n'

var FSHADER_SOURCE = 
'void main() {\n' +
'gl_FragColor = vec4(0.5,0.0,0.0,1.0);\n' +
'}\n';

function main(){
    var canvas = document.getElementById("webgl")
    var gl = getWebGLContext(canvas)
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
      }
      if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to intialize shaders.');
        return;
      }
      var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
      var a_Size = gl.getAttribLocation(gl.program, 'a_Size');
      if (a_Position < 0 || a_Size < 0) {
        console.log('Failed to get the storage location of a_Position');
        return;
      }
      gl.vertexAttrib4f(a_Position, -0.5, 0.5, 0,1.0);
      gl.vertexAttrib1f(a_Size, 50);
      gl.clearColor(0.0,0.0,0.0,1.0);
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.drawArrays(gl.POINTS,0,1)
}