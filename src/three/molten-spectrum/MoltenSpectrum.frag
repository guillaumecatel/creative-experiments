#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec3 vPosition;
uniform vec4 uResolution;
uniform float uTime;

float PI = 3.1415926535897932384626433832795028;

float ltime;

float noise(vec2 p) {
  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(ltime / 11.0))) + 0.2;
}

mat2 rotate(float angle){
  return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

float fbm(vec2 p) {
  p *= 1.1;
  float f = 0.0;
  float amp = 0.5;
  for(int i = 0; i < 3; i++) {
    mat2 modify = rotate(ltime / 50.0 * float(i * i));
    f += amp * noise(p);
    p = modify * p;
    p *= 2.0;
    amp /= 2.2;
  }
  return f;
}

float pattern(vec2 p, out vec2 q, out vec2 r) {
  q = vec2(fbm(p + vec2(1.0)), fbm(rotate(0.1 * ltime) * p + vec2(3.0)));
  r = vec2(fbm(rotate(0.2) * q + vec2(0.0)), fbm(q + vec2(0.0)));
  return fbm(p + 1.0 * r);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main () {
  vec2 p =  vUv;

  ltime = uTime;

  float ctime = uTime + fbm(p / 8.0) * 66.0;
  float ftime = fract(ctime / 6.0);
  ltime = floor(ctime / 6.0) + (1.0 - cos(ftime * PI) / 2.0);
  ltime = ltime * 12.0;

  vec2 q;
  vec2 r;
  float f = pattern(p, q, r);
  vec3 col = hsv2rgb(vec3(q.x / 3.0 + ltime / 666. + 0.4, abs(r.y) * 6.0 + 0.1, r.x + f));
  float vig = 1.0 - pow(4.0 * (p.x - 0.5)*(p.x - 0.5), 10.0);
  vig *= 1.0 - pow(4.0 * (p.y - 0.5) * (p.y - 0.5), 10.0);

  gl_FragColor = vec4(col * vig, 1.0);
}
