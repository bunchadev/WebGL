var VSHADER_SOURCE = 
'attribute vec4 a_Position;\n' +
'void main() {\n' +
'gl_Position = a_Position;\n' +
'gl_PointSize = 10.0;\n' +
'}\n'

const FSHADER_SOURCE = 
'void main() {\n' +
'gl_FragColor = vec4(0.5,0.0,0.0,1.0);\n' +
'}\n';

const main = () => {
    const canvas = document.getElementById("webgl")
    const gl = getWebGLContext(canvas)
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
      }
      if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to intialize shaders.');
        return;
      }
      const n = InitVertexBuffers(gl)
      if (n<0){
        console.log("Failed to set the positions of the vertices")
        return
      }
      gl.clearColor(1.0, 1.0, 1.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.drawArrays(gl.TRIANGLES,0,n)
}
const InitVertexBuffers =(gl)=>{
   const vertices = new Float32Array([0.0,0.5,-0.5,-0.5,0.5,-0.5])
   const n = 3
   const vertexBuffer = gl.createBuffer()
   if(!vertexBuffer){
    console.log("Failed to create the buffer object");
    return -1
   }
   gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer)
   gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW)
   const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
   gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,0,0)
   gl.enableVertexAttribArray(a_Position);
   return n 
}
const InitVertexBuffers_1 =(gl)=>{
    const vertices = new Float32Array([0.0,0.5,-0.5,-0.5,0.5,-0.5])
    const n = 3
    const vertexBuffer = gl.createBuffer()
    if(!vertexBuffer){
     console.log("Failed to create the buffer object");
     return -1
    }
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW)
    const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,0,0)
    gl.enableVertexAttribArray(a_Position);
    return n 
 }