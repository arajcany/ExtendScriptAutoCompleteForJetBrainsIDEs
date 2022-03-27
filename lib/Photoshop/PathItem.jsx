/*
 * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var PathItem = {


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
     * The name of the path item.
     * @type {string}
     */
    name: undefined,


    /**
     * The sub path objects for this path item.
     * @type {SubPathItems}
     * @readonly
     */
    subPathItems: SubPathItems,


    /**
     * The type of path.
     * @type {PathKind}
     */
    kind: PathKind,



    /**
     * Adds an element.
     *
     * @return PathItem
     */
    add: function () {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return PathItem
     */
    duplicate: function (relativeObject, insertionLocation) {
        
    },


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
     * Duplicates this path item.
     *
     * @param {string} [name] The name for the new path.
     * @return PathItem
     */
    duplicate: function (name) {
        
    },


    /**
     * Makes a selection object, whose border is the path, from this path item object.
     *
     * @param {number} [feather] The feather amount in pixels. Range: 0.0 to 250.0.
     * @param {boolean} [antiAlias] If true, the selection uses anti-aliasing.
     * @param {SelectionType} [operation] The selection behavior relative to the existing selection (when a selection already exists).
     * @return undefined
     */
    makeSelection: function (feather, antiAlias, operation) {
        
    },


    /**
     * Fills the area enclosed by the path.
     *
     * @param {any} [fillColor] The color of the fill for this path.
     * @param {ColorBlendMode} [mode] The blending mode of the fill for this path.
     * @param {number} [opacity] The opacity of the fill for this path (as a percentage). Range: 0.0 to 100.0.
     * @param {boolean} [preserveTransparency] If true, transparency is preserved.
     * @param {number} [feather] The feather amount in pixels. Range: 0.0 to 250.0.
     * @param {boolean} [antiAlias] If true, uses anti-aliasing for the selection.
     * @param {boolean} [wholePath] If true, uses all subpaths when doing the fill.
     * @return undefined
     */
    fillPath: function (fillColor, mode, opacity, preserveTransparency, feather, antiAlias, wholePath) {
        
    },


    /**
     * Strokes the path.
     *
     * @param {ToolType} [tool] The tool to use when stroking the path.
     * @param {boolean} [simulatePressure] If true, simulates the pressure when using the tool.
     * @return undefined
     */
    strokePath: function (tool, simulatePressure) {
        
    },


    /**
     * Makes this path item the clipping path for this document.
     *
     * @param {number} [flatness] Flatness in device pixels; tells the PostScript printer how to approximate curves. Range: 0.2 to 100).
     * @return undefined
     */
    makeClippingPath: function (flatness) {
        
    },


    /**
     * Makes this path item the active or selected path item.
     *
     * @return undefined
     */
    select: function () {
        
    },


    /**
     * Unselects the selection, no path items are selected.
     *
     * @return undefined
     */
    deselect: function () {
        
    },


};

