/*
 * Options which may be supplied when opening a AutoCAD file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var OpenOptionsAutoCAD = {


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
     * How to scale the AutoCAD drawing on import (default: Fit Artboard)
     * @type {AutoCADGlobalScaleOption}
     */
    globalScaleOption: AutoCADGlobalScaleOption,


    /**
     * Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0)
     * @type {number}
     */
    globalScalePercent: undefined,


    /**
     * Ratio by which to scale while mapping the units (default: 1.0)
     * @type {number}
     */
    unitScaleRatio: undefined,


    /**
     * Units to which to map (default: Millimeters)
     * @type {AutoCADUnit}
     */
    unit: AutoCADUnit,


    /**
     * Name of layout in the AutoCAD drawing to import.
     * @type {string}
     */
    selectedLayoutName: undefined,


    /**
     * To center the created artwork on the artboard (default: true)
     * @type {boolean}
     */
    centerArtwork: undefined,


    /**
     * To merge the layers of the artwork (default: false)
     * @type {boolean}
     */
    mergeLayers: undefined,


    /**
     * To scale lineweights by the same amount as rest of the drawing (default: false)
     * @type {boolean}
     */
    scaleLineweights: undefined,




};

