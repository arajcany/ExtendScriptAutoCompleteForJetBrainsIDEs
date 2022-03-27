/*
 * A Pattern color specification.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var PatternColor = {


    /**
     * The distance to translate the (unscaled) prototype before filling.
     * @type {number}
     */
    shiftDistance: 0,


    /**
     * The angle to translate the (unscaled) prototype before filling.
     * @type {number}
     */
    shiftAngle: 0,


    /**
     * The fraction to scale the prototype before filling.
     * @type {Point}
     */
    scaleFactor: Point,


    /**
     * The angle to rotate the before filling.
     * @type {number}
     */
    rotation: 0,


    /**
     * Whether or not the prototype is reflected before filling.
     * @type {boolean}
     */
    reflect: false,


    /**
     * The axis around which to reflect.
     * @type {number}
     */
    reflectAngle: 0,


    /**
     * The angle to slant the shear by.
     * @type {number}
     */
    shearAngle: 0,


    /**
     * The axis to shear with respect to.
     * @type {number}
     */
    shearAxis: 0,


    /**
     * Additional transformation arising from manipulating the path.
     * @type {Matrix}
     */
    matrix: Matrix,


    /**
     * 
     * @type {Pattern}
     */
    pattern: Pattern,




};

