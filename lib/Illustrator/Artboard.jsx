/*
 * An artboard object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var Artboard = {


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
     * Size and position of artboard.
     * @type {Rect}
     */
    artboardRect: Rect,


    /**
     * Pixel aspect ratio, used in ruler visualization if the units are pixels.
     * @type {number}
     */
    rulerPAR: undefined,


    /**
     * Show center mark.
     * @type {boolean}
     */
    showCenter: undefined,


    /**
     * Show cross hairs.
     * @type {boolean}
     */
    showCrossHairs: undefined,


    /**
     * Show title and action safe areas (for video)
     * @type {boolean}
     */
    showSafeAreas: undefined,


    /**
     * Ruler origin of artboard.It is relative to left-bottom corner of the Artboard.
     * @type {Point}
     */
    rulerOrigin: Point,


    /**
     * The name of the artboard.
     * @type {string}
     */
    name: undefined,



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

