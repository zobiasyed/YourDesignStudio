// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 100 / 200, 0.1, 500);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 300);
document.getElementById('3d-viwer').appendChild(renderer.domElement);

// Add a simple 3D object (a cube)
const geometry = new THREE.BoxGeeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Add rotation functionality
let rotateLeft = false;
let rotateRight = false;

document.getElementById('rotate-left').addEventListener('mousedown', () => rotateLeft = true);
document.getElementById('rotate-left').addEventListener('mouseup', () => rotateLeft = false);

document.getElementById('rotate-right').addEventListener('mousedown', () => rotateRight = true);
document.getElementById('rotate-right').addEventListener('mouseup', () => rotateRight = false);

function animate() {
    requestAnimationFrame(animate);
    
    if (rotateLeft) {
        cube.rotation.y -= 0.01;
    }
    
    if (rotateRight) {
        cube.rotation.y += 0.01;
    }
    
    renderer.render(scene, camera);
}

animate();