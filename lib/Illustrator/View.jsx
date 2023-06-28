/*
 * A view.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var View = {


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
     * The bounding rectangle of this view.
     * @type {Rect}
     * @readonly
     */
    bounds: Rect,


    /**
     * The center point of this view.
     * @type {Point}
     */
    centerPoint: Point,


    /**
     * The zoom factor of this view.
     * @type {number}
     */
    zoom: undefined,


    /**
     * The zoom factor of this view that is visible to user.
     * @type {number}
     */
    visibleZoom: undefined,


    /**
     * The rotation angle of this view.
     * @type {number}
     */
    rotate: undefined,


    /**
     * The mode of display.
     * @type {ScreenMode}
     */
    screenMode: ScreenMode,




};

