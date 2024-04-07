import { CGFobject } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParalellogram } from "./MyParalellogram.js";
import { MyTriangle } from "./MyTriangle.js";


export class MyTangram extends CGFobject {
    constructor(scene) {
      super(scene);
      this.initBuffers();

      this.diamond = new MyDiamond(this.scene);
      this.triangle = new MyTriangle(this.scene);
      this.paralellogram = new MyParalellogram(this.scene);




    }




  // Called once per frame (60 times per second)

  display() {
    

    const translationMatrix =
    [
     1,0,0,0,
     0,1,0,0,
     0,0,1,0,
     0,0,0,1

    ];
    //const s=1.5;

    // const scaleMatrix =
    // [
    //   1,0,0,0,
    //   0,1,0,0,
    //   0,0,1,0,
    //   0,0,0,1,
    // ];

    
    this.scene.pushMatrix();
   // this.scene.multMatrix(scaleMatrix);
   this.scene.multMatrix(translationMatrix);
    //this.scene.rotate(0, 0, 0, 1);
    this.scene.setDiffuse(0,1,0,0);
    this.diamond.display();
    //super.display();
    this.scene.popMatrix();


    // this.scene.pushMatrix();
    // this.scene.scale(1.5,1.5,1);
    // this.scene.translate(1,1,0);
    // this.scene.rotate(Math.PI,0, 0, 1);
    // this.scene.setDiffuse(0,1,0,0);
    // this.triangle.display();
    // //super.display();
    // this.scene.popMatrix();
    

  

    
  }
}





