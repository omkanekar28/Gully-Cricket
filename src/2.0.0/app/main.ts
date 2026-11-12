import * as THREE from 'three';

console.log('🏏 Gully Cricket 2.0 Engine Initializing...');
console.log('Three.js version:', THREE.REVISION);

const app = document.getElementById('app');
if (app) {
  const info = document.createElement('div');
  info.style.position = 'fixed';
  info.style.top = '20px';
  info.style.left = '20px';
  info.style.color = '#f59e0b';
  info.style.fontFamily = 'monospace';
  info.style.fontSize = '18px';
  info.style.fontWeight = 'bold';
  info.style.background = 'rgba(15, 23, 42, 0.9)';
  info.style.padding = '12px 20px';
  info.style.borderRadius = '8px';
  info.style.border = '1px solid rgba(255,255,255,0.2)';
  info.innerText = `🏏 Office Gully Cricket v2.0.0 Scaffold Ready! (Three.js r${THREE.REVISION})`;
  document.body.appendChild(info);
}
