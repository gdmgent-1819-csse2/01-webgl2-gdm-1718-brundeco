#version 300 es

in vec4 a_VertexPosition
in vec4 a_VertexColor

out vec_4 v_color;

void main() {
    gl_Position = a_VertexPosition;
    gl_PointSize = 10.0;
    v_color = a_VertexColor;
}






