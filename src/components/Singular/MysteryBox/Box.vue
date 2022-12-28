<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { onMounted, onUnmounted, ref } from 'vue';
import { useBaseStore } from '@/stores/index';

const baseStore = useBaseStore();

// THREE JS ESSENTIALS
let scene: any = null;
let renderer: any = null;
let camera: any = null;
let boxModel: any = null;

// LOADERS
let loader: any = null;
let dracoLoader: any = null;

// ANIMATION
let mixer: any = null;
let clock: any = null;
let delta: number = 0;
let clipsBase: any[] = [];
let actionsBase: any[] = [];

// CAMERA SETTINGS
let fov = ref<number>(35);
let aspect = ref<number>(2);
let near = ref<number>(0.1);
let far = ref<number>(600);

// DOM
let canvas = ref<HTMLCanvasElement | null>(null);
let sceneContainer = ref<HTMLElement | null>(null);

// PREVIOUS WINDOW WIDTH FOR RESIZE
let prevWidth: number = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INIT 3D MODEL AND ANIMATION
const initAnimation = (): void => {
    if (canvas.value !== null || sceneContainer.value === null) return;
    
    // SCENE
    scene = new THREE.Scene();


    // CAMERA SETUP
    fov.value = 35;
    aspect.value = window.innerWidth / window.innerHeight;
    near.value = 1;
    far.value = 600;
    camera = new THREE.PerspectiveCamera(fov.value, aspect.value, near.value, far.value);

    camera.position.set(5, 0, 16);
    camera.lookAt(scene.position);


    // RENDERER SETUP
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 1.2, window.innerHeight * 1.2);
    // renderer.outputEncoding = THREE.sRGBEncoding;
    sceneContainer.value.appendChild(renderer.domElement);

    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.25;
    // renderer.toneMappingExposure = 2.3;

    // renderer.shadowMap.enabled = true;


    // LIGHTNING SETUP
    const ambient = new THREE.AmbientLight(0xEEEEEE);
    scene.add(ambient);

    const spotLight = new THREE.SpotLight(0xE17ECF, 4.5);
    spotLight.position.set(-18, 12, 35);

    if (window.outerWidth < 850) {
        spotLight.position.set(-18, 7, 35);
    }
    scene.add(spotLight);

    const light = new THREE.HemisphereLight( 0xCCCCCC, 0xE17ECF, 3 );
    scene.add( light );

    const pointLight = new THREE.PointLight( 0xE17ECF, 10, 200 );
    pointLight.position.set( 10, 10, 10 );
    scene.add( pointLight );

    // const directionalLight = new THREE.DirectionalLight(0x111111, 1)
    // directionalLight.position.set(15, 1, 35);
    // scene.add(directionalLight);

    // const spotLight2 = new THREE.SpotLight(0xE17ECF, 5.5);
    // spotLight2.position.set(28, 12, 5);
    // scene.add(spotLight2);

    // const spotLight3 = new THREE.SpotLight(0xCCCCCC, 5.5);
    // spotLight3.position.set(40, 17, -35);
    // scene.add(spotLight3);

    // LOAD SETUP
    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('jst/libs/draco/gltf');


    loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load('/box.glb', (gltf: any) => {
        boxModel = gltf.scene;
        scene.add(boxModel);

        modelScailing();
        boxModel.position.set(0, -3, 0)

        clipsBase = gltf.animations;
        
        mixer = new THREE.AnimationMixer(boxModel);
        clipsBase.forEach(clip => {
            const action = mixer.clipAction(clip);
            action.play();
        });

        // renderer.render( scene, camera );
        animate();
    });


    // ANIMATION
    clock = new THREE.Clock();
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ANIMATE 3D MODEL
const animate = (): void => {
    if (!clock || !renderer) return;
    delta = clock.getDelta();
    
    if (mixer) {
        mixer.update(delta);
    }

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SCALE 3D MODEL
const modelScailing = (): void => {
    if (!boxModel) return;
    boxModel.scale.set(.3, .3, .3);

    if (window.outerWidth < 1300 && window.outerHeight > 900 && window.outerWidth > 1000) {
        boxModel.scale.set(.22, .22, .22);
    }

    if (window.outerWidth < 1100) {
        boxModel.scale.set(.26, .26, .26);
    }

    if (window.outerWidth > 2100) {
        boxModel.scale.set(.28, .28, .28);
    }

    if (window.outerWidth < 850) {
        boxModel.scale.set(.21, .21, .21);
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RESIZE 3D MODEL
const onWindowResize = (eventType: 'resize' | 'orientationchange'): void => {
    if (!camera || eventType === 'resize' && Math.abs(window.outerWidth - prevWidth) < 50) return;

    let timeoutTime = 0;
    if (eventType === 'orientationchange') {
        timeoutTime = 150;
    }
    setTimeout(() => {
        modelScailing();

        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth * 1.2, window.innerHeight * 1.2);

        prevWidth = window.outerWidth;
    }, timeoutTime);
};

onMounted(() => {
    // DOM
    canvas.value = document.querySelector('.model-scene canvas');

    // INIT 3D MODEL AND ANIMATION
    initAnimation();

    prevWidth = window.outerWidth;

    // RESIZE
    window.addEventListener('resize', () => onWindowResize('resize'));
    window.addEventListener('orientationchange', () => onWindowResize('orientationchange'));
});

// CLEAN THREE JS DATA
onUnmounted(() => {
    sceneContainer.value = null;

    scene = null;
    renderer = null;
    camera = null;
    boxModel = null;

    mixer = null;
    clock = null;

    window.removeEventListener('resize', () => onWindowResize('resize'));
    window.removeEventListener('orientationchange', () => onWindowResize('orientationchange'));
});
</script>

<template>
    <div ref="sceneContainer" class="model-scene"></div>
</template>

<style lang="scss" scoped>
.model-scene {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    z-index: 1000;
    transition: all .3s !important;
    top: 10%;
    left: -4%;

    @media only screen and (max-width: 1300px) and (min-height: 900px) and (min-width: 900px),
    only screen and (max-width: 1100px) {
        left: 2%;
    }

    @media only screen and (max-width: 1000px) {
        left: 10%;
    }

    canvas {
        // transform: translateY(50%);
    }
}
</style>