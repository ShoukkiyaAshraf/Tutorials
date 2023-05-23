import { Point } from "./main";

export class PointC{
    /*
    private _x: number;
    private _y: number;

    constructor(_x?: number, _y?:number){
        this._x = _x !== undefined ? _x : 0;
        this._y = _y !== undefined ? _y : 0;
    }  
    can be replaced b_y the below code
    */

    constructor(private _x?: number, private _y?: number){

    }

    draw ()  {
        console.log('Value of x = '+ this._x + '\nvalue of y = '+ this._y);
    }

    getDistance (another: Point)  {
        //...
    }

    get_x(){
        return this._x;
    }

    set_x(value: number){
        if(value < 0 )
            throw new Error("value cannot be less than 0..");
        this._x = value;
    }

    // another wa_y : 

    get x(){
        return this._x;
    }

    set x(value_x){
        if(value_x !== undefined &&  value_x < 0 )
            throw new Error("value cannot be less than 0..");
        this._x = value_x;
    }


}