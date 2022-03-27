/*
 * A gradient stop.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var GradientStop = {


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
     * Midpoint key value in percent.
     * @type {number}
     */
    midPoint: undefined,


    /**
     * Location of color in the blend (in percent)
     * @type {number}
     */
    rampPoint: undefined,


    /**
     * The color linked to this gradient stop.
     * @type {Color}
     */
    color: Color,


    /**
     * The opacity (between 0.0 and 100.0) value for the gradient stop.
     * @type {number}
     */
    opacity: undefined,



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


};

