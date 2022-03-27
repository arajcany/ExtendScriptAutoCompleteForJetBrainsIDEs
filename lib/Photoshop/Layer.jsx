/*
 * A layer object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Layer = {


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
     * The name of the layer.
     * @type {string}
     */
    name: undefined,


    /**
     * If true, the layer's contents and settings are locked.
     * @type {boolean}
     */
    allLocked: undefined,


    /**
     * The mode to use when compositing an object.
     * @type {BlendMode}
     */
    blendMode: BlendMode,


    /**
     * The layers linked to this layer.
     * @type {Layer}
     * @readonly
     */
    linkedLayers: Layer,


    /**
     * The layer's master opacity (as a percentage). Range: 0.0 to 100.0.
     * @type {number}
     */
    opacity: undefined,


    /**
     * If true, the layer is visible.
     * @type {boolean}
     */
    visible: undefined,


    /**
     * The unique ID of this layer.
     * @type {int}
     * @readonly
     */
    id: int,


    /**
     * The layer index sans layer groups, how Photoshop would index them.
     * @type {int}
     * @readonly
     */
    itemIndex: int,


    /**
     * If the Layer is a layer set, this property returns a reference to the corresponding layer set object.
     * @type {UnitRect}
     * @readonly
     */
    bounds: UnitRect,


    /**
     * Bounding rectangle of the Layer not including effects.
     * @type {UnitRect}
     * @readonly
     */
    boundsNoEffects: UnitRect,


    /**
     * XMP metadata associated with the Layer.
     * @type {XMPMetadata}
     * @readonly
     */
    xmpMetadata: XMPMetadata,



    /**
     * Move the object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return Layer
     */
    move: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return Layer
     */
    duplicate: function (relativeObject, insertionLocation) {
        
    },


    /**
     * ...
     *
     * @param {LayerSet} [layerSet]
     * @return undefined
     */
    moveToEnd: function (layerSet) {
        
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
     * Unlinks the layer.
     *
     * @return undefined
     */
    unlink: function () {
        
    },


    /**
     * Links the layer with the specified layer.
     *
     * @param {Layer} [withXYZ] The layer to link to.
     * @return undefined
     */
    link: function (withXYZ) {
        
    },


    /**
     * Moves the object relative to its current position.
     *
     * @param {UnitValue} [deltaX] The amount to move the object horizontally.
     * @param {UnitValue} [deltaY] The amount to move the object vertically.
     * @return undefined
     */
    translate: function (deltaX, deltaY) {
        
    },


    /**
     * Rotates the object.
     *
     * @param {number} [angle] The number of degrees to rotate the object.
     * @param {AnchorPosition} [anchor] The point to rotate about. (default: AnchorPosition.MIDDLECENTER)
     * @return undefined
     */
    rotate: function (angle, anchor) {
        
    },


    /**
     * Scales the object.
     *
     * @param {number} [horizontal] The amount to scale the object horizontally (as a percentage). (default: 100)
     * @param {number} [vertical] The amount to scale the object vertically (as a percentage). (default: 100)
     * @param {AnchorPosition} [anchor] The point to resize about. (default: AnchorPosition.MIDDLECENTER)
     * @return undefined
     */
    resize: function (horizontal, vertical, anchor) {
        
    },


};

