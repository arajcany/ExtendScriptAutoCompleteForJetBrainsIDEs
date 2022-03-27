/*
 * The selected area of the document or layer.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Selection = {


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
     * The bounding rectangle of the entire selection.
     * @type {UnitRect}
     * @readonly
     */
    bounds: UnitRect,


    /**
     * If true, the bounding rectangle a solid rectangle.
     * @type {boolean}
     * @readonly
     */
    solid: undefined,



    /**
     * Clears the selection and does not copy it to the clipboard.
     *
     * @return undefined
     */
    clear: function () {
        
    },


    /**
     * Copies the selection to the clipboard.
     *
     * @param {boolean} [merge] If true the copy includes all visible layers. If false, copies only from the current layer.
     * @return undefined
     */
    copy: function (merge) {
        
    },


    /**
     * Cuts the current selection to the clipboard.
     *
     * @return undefined
     */
    cut: function () {
        
    },


    /**
     * Selects the selection border only (in the specified width); subsequent actions do not affect the selected area within the borders.
     *
     * @param {UnitValue} [width] The width of the border selection.
     * @return undefined
     */
    selectBorder: function (width) {
        
    },


    /**
     * Contracts the selection.
     *
     * @param {UnitValue} [by] The amount to contract the selection.
     * @return undefined
     */
    contract: function (by) {
        
    },


    /**
     * Fills the selection.
     *
     * @param {any} [fillType] The color or history state with which to fill the object.
     * @param {ColorBlendMode} [mode] The color blend mode. (default: ColorBlendMode.NORMAL)
     * @param {int} [opacity] The opacity as a percentage. Range: 1 to 100. (default: 100)
     * @param {boolean} [preserveTransparency] If true, perserves transparencies.
     * @return undefined
     */
    fill: function (fillType, mode, opacity, preserveTransparency) {
        
    },


    /**
     * Strokes the selection.
     *
     * @param {any} [strokeColor] The color to stroke the selection with.
     * @param {int} [width] The stroke width.
     * @param {StrokeLocation} [location] The stroke location. (default: StrokeLocation.CENTER)
     * @param {ColorBlendMode} [mode] The color blend mode. (default: ColorBlendMode.NORMAL)
     * @param {int} [opacity] The opacity of the stroke color as a percentage. Range: 1 to 100. (default: 100)
     * @param {boolean} [preserveTransparency] If true, preserves transparency.
     * @return undefined
     */
    stroke: function (strokeColor, width, location, mode, opacity, preserveTransparency) {
        
    },


    /**
     * Selects the entire layer.
     *
     * @return undefined
     */
    selectAll: function () {
        
    },


    /**
     * Deselects the current selection.
     *
     * @return undefined
     */
    deselect: function () {
        
    },


    /**
     * Selects the specified region.
     *
     * @param {any} [region] Array of x and y coordinates that describe the corners of the selection, in the format [[x1, y1], [x2,y2],[x3, y3], [x4,y4]]
     * @param {SelectionType} [type] The method for combining the new selection with the existing selection. (default: SelectionType.REPLACE)
     * @param {number} [feather] The feather amount. (default: 0)
     * @param {boolean} [antiAlias] If true, anti-aliasing is used. (default: true)
     * @return undefined
     */
    select: function (region, type, feather, antiAlias) {
        
    },


    /**
     * Expands the selection.
     *
     * @param {UnitValue} [by] The amount to expand the selection.
     * @return undefined
     */
    expand: function (by) {
        
    },


    /**
     * Feathers the edges of the selection.
     *
     * @param {UnitValue} [by] The amount to feather the edge.
     * @return undefined
     */
    feather: function (by) {
        
    },


    /**
     * Grows the selection to include all adjacent pixels falling within the specified tolerance range.
     *
     * @param {int} [tolerance] The tolerance range. Range: 0 to 255.
     * @param {boolean} [antiAlias] If true, anti-aliasing is used.
     * @return undefined
     */
    grow: function (tolerance, antiAlias) {
        
    },


    /**
     * Inverts the selection.
     *
     * @return undefined
     */
    invert: function () {
        
    },


    /**
     * Grows the selection to include pixels throughout the image falling within the tolerance range.
     *
     * @param {int} [tolerance] The tolerance range. Range: 0 to 255.
     * @param {boolean} [antiAlias] If true, anti-aliasing is used.
     * @return undefined
     */
    similar: function (tolerance, antiAlias) {
        
    },


    /**
     * Cleans up stray pixels left inside or outside a color-based selection (within the radius specified in pixels).
     *
     * @param {int} [radius] The sample radius in pixels. Range: 0 to 100.
     * @return undefined
     */
    smooth: function (radius) {
        
    },


    /**
     * Saves the selection as a channel.
     *
     * @param {Channel} [into] The channel to save the selection to.
     * @param {SelectionType} [combination] How to add the selection to the existing contents of the channel. (default: SelectionType.REPLACE)
     * @return undefined
     */
    store: function (into, combination) {
        
    },


    /**
     * Loads the selection from the specified channel.
     *
     * @param {Channel} [from] The channel to load the selection from.
     * @param {SelectionType} [combination] How to combine the channel contents with the existing selection. (default: SelectionType.REPLACE)
     * @param {boolean} [inverting] If true, selects the inverse of the channel contents. (default: false)
     * @return undefined
     */
    load: function (from, combination, inverting) {
        
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
     * Moves the boundary of selection relative to its current position.
     *
     * @param {UnitValue} [deltaX] The amount to move the object horizontally.
     * @param {UnitValue} [deltaY] The amount to move the object vertically.
     * @return undefined
     */
    translateBoundary: function (deltaX, deltaY) {
        
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
     * Rotates the boundary of the selection.
     *
     * @param {number} [angle] The rotation angle (in degrees)
     * @param {AnchorPosition} [anchor] The point to rotate about. (default: AnchorPosition.MIDDLECENTER)
     * @return undefined
     */
    rotateBoundary: function (angle, anchor) {
        
    },


    /**
     * Resizes the selected area to the specified dimensions and anchor position.
     *
     * @param {number} [horizontal] The amount to scale the selection horizontally (as a percentage). (default: 100)
     * @param {number} [vertical] The amount to scale the selection vertically (as a percentage). (default: 100)
     * @param {AnchorPosition} [anchor] The point to scale around. (default: AnchorPosition.MIDDLECENTER)
     * @return undefined
     */
    resize: function (horizontal, vertical, anchor) {
        
    },


    /**
     * Scales the boundary of the selection.
     *
     * @param {number} [horizontal] The amount to scale the object horizontally (as a percentage). (default: 100)
     * @param {number} [vertical] The amount to scale the object vertically (as a percentage). (default: 100)
     * @param {AnchorPosition} [anchor] The point to scale around. (default: AnchorPosition.MIDDLECENTER)
     * @return undefined
     */
    resizeBoundary: function (horizontal, vertical, anchor) {
        
    },


    /**
     * Makes this selection item the workpath for this document.
     *
     * @param {number} [tolerance] The tolerance in pixels.
     * @return undefined
     */
    makeWorkPath: function (tolerance) {
        
    },


};

