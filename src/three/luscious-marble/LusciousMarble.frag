#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec3 vPosition;
uniform vec4 uResolution;
uniform float uTime;

void main () {

  vec2 uv =  vUv;

  for(float i = 1.0; i < 50.0; i++){
    uv.x += .5 / i * cos(i * 1.5 * uv.y + uTime);
    uv.y += .5 / i * cos(i * 2.5 * uv.x + uTime);
  }

  gl_FragColor = vec4(vec3(0.812, 0.243,0.271) / abs(sin(uTime - uv.y - uv.x)), 1.0);
}
