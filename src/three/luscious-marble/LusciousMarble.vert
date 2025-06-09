varying vec2 vUv;
varying vec3 vPosition;

float PI = 3.1415926535897932384626433832795028;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
