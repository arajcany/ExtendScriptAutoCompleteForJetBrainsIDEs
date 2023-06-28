/*
 * An artwork group item.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var GroupItem = {


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
     * Are the group elements clipped to the clipping path?
     * @type {boolean}
     */
    clipped: undefined,


    /**
     * The group items in this group.
     * @type {GroupItems}
     * @readonly
     */
    groupItems: GroupItems,


    /**
     * All the artwork in this group.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,


    /**
     * The compound path artwork in this group.
     * @type {CompoundPathItems}
     * @readonly
     */
    compoundPathItems: CompoundPathItems,


    /**
     * The path artwork in this group.
     * @type {PathItems}
     * @readonly
     */
    pathItems: PathItems,


    /**
     * The raster art items in this group.
     * @type {RasterItems}
     * @readonly
     */
    rasterItems: RasterItems,


    /**
     * The placed art items in this group.
     * @type {PlacedItems}
     * @readonly
     */
    placedItems: PlacedItems,


    /**
     * The mesh art items in this group.
     * @type {MeshItems}
     * @readonly
     */
    meshItems: MeshItems,


    /**
     * The plugin art items in this group.
     * @type {PluginItems}
     * @readonly
     */
    pluginItems: PluginItems,


    /**
     * The graph art items in this group.
     * @type {GraphItems}
     * @readonly
     */
    graphItems: GraphItems,


    /**
     * The non-native art items in this group.
     * @type {NonNativeItems}
     * @readonly
     */
    nonNativeItems: NonNativeItems,


    /**
     * The text frame items in this group.
     * @type {TextFrameItems}
     * @readonly
     */
    textFrames: TextFrameItems,


    /**
     * The symbol items in this group.
     * @type {SymbolItems}
     * @readonly
     */
    symbolItems: SymbolItems,


    /**
     * The text frame items in this story.
     * @type {LegacyTextItems}
     * @readonly
     */
    legacyTextItems: LegacyTextItems,


    /**
     * The symmetry repeat items in this document.
     * @type {SymmetryRepeatItems}
     * @readonly
     */
    symmetryRepeatItems: SymmetryRepeatItems,


    /**
     * The radial repeat items in this document.
     * @type {RadialRepeatItems}
     * @readonly
     */
    radialRepeatItems: RadialRepeatItems,


    /**
     * The grid repeat items in this document.
     * @type {GridRepeatItems}
     * @readonly
     */
    gridRepeatItems: GridRepeatItems,



    /**
     * Move the object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return GroupItem
     */
    move: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return GroupItem
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


};

