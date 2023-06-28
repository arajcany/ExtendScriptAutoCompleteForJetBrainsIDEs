/*
 * A layer.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
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
     * Is the layer visible?
     * @type {boolean}
     */
    visible: undefined,


    /**
     * Is the layer editable?
     * @type {boolean}
     */
    locked: undefined,


    /**
     * Is the layer printable?
     * @type {boolean}
     */
    printable: undefined,


    /**
     * Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer.
     * @type {boolean}
     */
    hasSelectedArtwork: undefined,


    /**
     * Is the layer rendered in preview mode?
     * @type {boolean}
     */
    preview: undefined,


    /**
     * Is rendered as dimmed in this layer?
     * @type {boolean}
     */
    dimPlacedImages: undefined,


    /**
     * Color used when outlining artwork in this layer.
     * @type {RGBColor}
     */
    color: RGBColor,


    /**
     * The layer's name.
     * @type {string}
     */
    name: undefined,


    /**
     * The layer's opacity (between 0.0 and 100.0)
     * @type {number}
     */
    opacity: undefined,


    /**
     * The drawing order of the layer.
     * @type {Int32}
     * @readonly
     */
    zOrderPosition: Int32,


    /**
     * The absolute drawing order of the layer.
     * @type {Int32}
     * @readonly
     */
    absoluteZOrderPosition: Int32,


    /**
     * Is the layer sliced (default: false)
     * @type {boolean}
     */
    sliced: undefined,


    /**
     * The mode used when compositing an object.
     * @type {BlendModes}
     */
    blendingMode: BlendModes,


    /**
     * Is the artwork isolated.
     * @type {boolean}
     */
    isIsolated: undefined,


    /**
     * Is the artwork used to create a knockout.
     * @type {KnockoutState}
     */
    artworkKnockout: KnockoutState,


    /**
     * The compound path artwork in this layer.
     * @type {CompoundPathItems}
     * @readonly
     */
    compoundPathItems: CompoundPathItems,


    /**
     * All the artwork in this layer.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,


    /**
     * The path artwork in this layer.
     * @type {PathItems}
     * @readonly
     */
    pathItems: PathItems,


    /**
     * The raster art items in this layer.
     * @type {RasterItems}
     * @readonly
     */
    rasterItems: RasterItems,


    /**
     * The placed art items in this layer.
     * @type {PlacedItems}
     * @readonly
     */
    placedItems: PlacedItems,


    /**
     * The mesh art items in this layer.
     * @type {MeshItems}
     * @readonly
     */
    meshItems: MeshItems,


    /**
     * The plugin art items in this layer.
     * @type {PluginItems}
     * @readonly
     */
    pluginItems: PluginItems,


    /**
     * The graph art items in this layer.
     * @type {GraphItems}
     * @readonly
     */
    graphItems: GraphItems,


    /**
     * The non-native art items in this layer.
     * @type {NonNativeItems}
     * @readonly
     */
    nonNativeItems: NonNativeItems,


    /**
     * The group items in this layer.
     * @type {GroupItems}
     * @readonly
     */
    groupItems: GroupItems,


    /**
     * The text frame items in this layer.
     * @type {TextFrameItems}
     * @readonly
     */
    textFrames: TextFrameItems,


    /**
     * Nested layers.
     * @type {Layers}
     * @readonly
     */
    layers: Layers,


    /**
     * The symbol items in this layer.
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
     * The symmetry repeat items in this layer.
     * @type {SymmetryRepeatItems}
     * @readonly
     */
    symmetryRepeatItems: SymmetryRepeatItems,


    /**
     * The radial repeat items in this layer.
     * @type {RadialRepeatItems}
     * @readonly
     */
    radialRepeatItems: RadialRepeatItems,


    /**
     * The grid repeat items in this layer.
     * @type {GridRepeatItems}
     * @readonly
     */
    gridRepeatItems: GridRepeatItems,



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
     * Arranges the layer relative to other layers.
     *
     * @param {ZOrderMethod} [zOrderCmd] How to arrange the layer.
     * @return undefined
     */
    zOrder: function (zOrderCmd) {
        
    },


};

