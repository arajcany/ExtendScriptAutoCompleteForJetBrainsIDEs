/*
 * A custom color.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
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

