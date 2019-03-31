const SDK = window.requirejs('w3reality-sdk');
const THREE = window.THREE;

const __spawnPose = [4, 2, 4+0, 0, 0]; // floor 1; "official" start point ;)
// const __spawnPose = [4, 12, 4+8, 0, Math.PI]; // floor 2
// const __spawnPose = [4, 2, 4+16, 0, 0]; // floor 3
// const __spawnPose = [4, 12, 4+24, 0, Math.PI]; // floor 4

class App extends SDK.App {
    // override
    static createWorld() {
        const world = new World(8, 16, 32);
        world.setSpawnPose(__spawnPose);
        world.setChunkSize(4);
        world.name = 'minigame';

        const addPlane = (mx, my, z, mat, offx=0, offy=0) => {
            for (let x = 0; x < mx; x++) {
                for (let y = 0; y < my; y++) {
                    world.blocks[offx+x][offy+y][z] = mat;
                }
            }
        };

        addPlane(8, 16, 0, BLOCK.SAND); // floor 1 --------
        world.addBlock(2, 5, 2, BLOCK.MODEL_ANCHOR, {href: "", text: "Moves: w a s d"});
        world.addBlock(5, 7, 2, BLOCK.MODEL_ANCHOR, {href: "", text: "Angles: < ^ v >"});
        world.addBlock(5, 8, 2, BLOCK.MODEL_ANCHOR, {href: "", text: "or, Mouse Drag"});
        addPlane(2, 2, 0, BLOCK.MODEL_TEST, 4, 12); // rockets
        world.addBlock(2, 13, 2, BLOCK.MODEL_ANCHOR, {href: "", text: "💡 Click rocket to F2"});

        addPlane(8, 16, 8, BLOCK.CONCRETE); // floor 2 --------
        world.addBlock(2, 4, 10, BLOCK.MODEL_ANCHOR, {href: "", text: "💡 SPACE key to jump"});
        world.addBlock(7, 7, 10, BLOCK.MODEL_ANCHOR, {href: "/visit?v=_proto_plane", text: "Hmm, try sth else 😂"});
        addPlane(2, 2, 8, BLOCK.AIR, 4, 12); // hole
        addPlane(2, 1, 15, BLOCK.WOOD, 2, 2); // stair
        addPlane(2, 1, 14, BLOCK.WOOD, 2, 3); // stair
        addPlane(2, 1, 13, BLOCK.WOOD, 2, 4); // stair
        addPlane(4, 2, 12, BLOCK.WOOD, 2, 5); // stair
        addPlane(2, 1, 11, BLOCK.WOOD, 4, 4); // stair
        addPlane(2, 1, 10, BLOCK.WOOD, 4, 3); // stair
        addPlane(2, 1, 9, BLOCK.WOOD, 4, 2); // stair

        addPlane(8, 16, 16, BLOCK.GLASS); // floor 3 --------
        addPlane(2, 3, 16, BLOCK.AIR, 2, 2); // hole
        addPlane(8, 3, 16, BLOCK.AIR, 0, 8); // hole big
        world.addBlock(6, 7, 17, BLOCK.MODEL_ANCHOR, {href: "", text: "💡 Dash and jump!!"});
        world.addBlock(6, 5, 17, BLOCK.MODEL_ANCHOR, {href: "", text: "💡 Use SHIFT to dash"});
        world.addBlock(4, 12, 17, BLOCK.MODEL_TEST);

        addPlane(8, 16, 24, BLOCK.DIRT); // floor 4 --------
        addPlane(2, 2, 24, BLOCK.AIR, 4, 12); // hole
        addPlane(8, 1, 24+1, BLOCK.GLASS, 0, 7); // line
        addPlane(8, 1, 24+2, BLOCK.GLASS, 0, 7); // line
        world.addBlock(2, 7, 24+1, BLOCK.AIR); // line hole
        world.addBlock(2, 7, 24+2, BLOCK.AIR); // line hole
        addPlane(6, 1, 24+1, BLOCK.WOOD, 0, 3); // partition
        addPlane(6, 1, 24+2, BLOCK.WOOD, 0, 3); // partition
        addPlane(6, 1, 24+3, BLOCK.WOOD, 0, 3); // partition
        addPlane(6, 1, 24+4, BLOCK.GLASS, 0, 3); // partition
        world.addBlock(7, 2, 26, BLOCK.MODEL_ANCHOR, {href: "", text: "🎉 You Win!!  🎁 ➡️"});
        world.addBlock(1, 1, 26, BLOCK.MODEL_ANCHOR, {href: "/visit?v=_proto_geo&insitu=1&lat=36.3785&lng=-112.6527", text: "Trip to Grand Canyon"});

        return world;
    }

    // override
    constructor(data, name) {
        super(data, name);

        this.gameStats = {reached: false, startTime: null};

        const scene = new THREE.Scene();
        this.setScene(scene); // the scene set is auto cleared on free()

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true}));
        cube.position.set(5, 13, 9);
        this.cube = cube;
        scene.add(cube);

        const loader = new THREE.FontLoader();
        const fontUrl = '/media/w3reality/fonts/helvetiker_bold.typeface.json';
        this.showRecord = () => { console.log('@@ font not fetched yet...'); };
        loader.load(fontUrl, (font) => {
            this.showRecord = (str) => {
                const mesh = new THREE.Mesh(
                    new THREE.TextGeometry(str, {font: font, size: 0.5, height: 0.05}),
                    new THREE.MeshBasicMaterial({color: 0xcc00cc}));
                mesh.position.set(5.5, 4.5, 2.5+24);
                mesh.rotation.set(Math.PI/2, Math.PI, 0);
                scene.add(mesh);
            };
        });
    }

    // override
    update(t, dt) {
        super.update();

        this.cube.position.z = 9 + 6 * Math.sin(t/1000);
        this.cube.rotation.x = -Math.PI/2 * t/1000;

        const pos = this.player.pos;
        const angles = this.player.angles;

        if (pos.z < - 8) { // dropped...
            [pos.x, pos.y, pos.z, angles[0], angles[1]] = __spawnPose;
        }
        if (!this.gameStats.startTime) { // startTime ~ first update time
            this.gameStats.startTime = t;
        }
        if (!this.gameStats.reached && pos.z > 24 && pos.y < 7.5 && pos.x > 0 && pos.x < 8) {
            console.log('@@ goal!!');
            this.gameStats.reached = true;
            const sec = (t - this.gameStats.startTime)/1000;
            this.showRecord(`${sec.toFixed(2)} s !!`);
        }
    }

    // override
    free() {
        super.free();
    }
}

export default App;
