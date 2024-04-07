// MyTriangleSmall.js

import { CGFobject } from '../lib/CGF.js';

export class MyTriangleSmall extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        // Define vertices and indices for the shape in figure 5
        // ...

        this.vertices = [
            // Define vertices for the shape
                 0,1,0,
                -1,0,0,
                 1,0,0,


        ];

        this.indices = [
            // Define indices for the shape
                0,1,2,
            
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
