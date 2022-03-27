/*
 * Specifies how to combine the shapes if the destination image already has a selection.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var ShapeOperation = {


    /**
     * Adds the shapes.
     * @type {int}
     * @readonly
     */
    SHAPEADD: 1,


    /**
     * Replaces the shape in the destination image with the loaded selection.
     * @type {int}
     * @readonly
     */
    SHAPEXOR: 2,


    /**
     * The resulting shape is the area of intersection between the two shapes.
     * @type {int}
     * @readonly
     */
    SHAPEINTERSECT: 3,


    /**
     * Subtracts the loaded shape from the selection is the destination image.
     * @type {int}
     * @readonly
     */
    SHAPESUBTRACT: 4,




};

