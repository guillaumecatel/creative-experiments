#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec3 vPosition;
uniform vec4 uResolution;
uniform float uTime;

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 perm(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

float noise(vec3 p) {
  vec3 a = floor(p);
  vec3 d = p - a;
  d = d * d * (3.0 - 2.0 * d);

  vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
  vec4 k1 = perm(b.xyxy);
  vec4 k2 = perm(k1.xyxy + b.zzww);

  vec4 c = k2 + a.zzzz;
  vec4 k3 = perm(c);
  vec4 k4 = perm(c + 1.0);

  vec4 o1 = fract(k3 * (1.0 / 41.0));
  vec4 o2 = fract(k4 * (1.0 / 41.0));

  vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
  vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

  return o4.y * d.y + o4.x * (1.0 - d.y);
}

mat2 rotate2d(float angle) {
  return mat2(
    cos(angle),
    -sin(angle),
    sin(angle),
    cos(angle)
  );
}

float lines(vec2 uv, float offset) {
  return smoothstep(
    0.0,
    offset,
    abs(sin(uv.x * 50.0) + offset)
  );
}

void main () {
  vec3 primaryColor = vec3(0.0 , 0.0, 0.1);
  vec3 secondaryColor = vec3(1.0, 1.0, 1.0);

  float n = noise(vPosition + uTime) / .5;
  vec2 baseUv = rotate2d(n) * vPosition.xy * .2;

  float primaryPattern = lines(baseUv, .2);
  float secondaryPattern = lines(baseUv, 0.1);

  vec3 primaryBaseColor = mix(secondaryColor, primaryColor, primaryPattern);

  // Output to screen
  gl_FragColor = vec4(vec3(primaryBaseColor), 1.0);
}
