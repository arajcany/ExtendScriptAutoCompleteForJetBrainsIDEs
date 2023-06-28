/*
 * A custom color.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var Spot = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * The custom color's name.
     * @type {string}
     */
    name: undefined,


    /**
     * 
     * @type {Color}
     */
    color: Color,


    /**
     * Type of the custom color.
     * @type {ColorModel}
     */
    colorType: ColorModel,


    /**
     * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot.
     * @type {SpotColorKind}
     * @readonly
     */
    spotKind: SpotColorKind,



    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Gets the internal color of a spot.
     *
     * @return number
     */
    getInternalColor: function () {
        
    },


};

