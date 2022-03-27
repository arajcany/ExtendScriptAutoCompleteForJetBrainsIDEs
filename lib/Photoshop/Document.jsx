/*
 * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Document = {


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
     * The background layer for the document.
     * @type {ArtLayer}
     * @readonly
     */
    backgroundLayer: ArtLayer,


    /**
     * The number of bits per channel.
     * @type {BitsPerChannelType}
     */
    bitsPerChannel: BitsPerChannelType,


    /**
     * The type of color model that defines the working space of the document.
     * @type {ColorProfileType}
     */
    colorProfileType: ColorProfileType,


    /**
     * The name of the color profile. Valid only when no value is specified for color profile kind (to indicate a custom color profile).
     * @type {string}
     */
    colorProfileName: undefined,


    /**
     * The color profile.
     * @type {DocumentMode}
     * @readonly
     */
    mode: DocumentMode,


    /**
     * The color component channels for this document.
     * @type {Channel}
     * @readonly
     */
    componentChannels: Channel,


    /**
     * The current history state for this document.
     * @type {HistoryState}
     */
    activeHistoryState: HistoryState,


    /**
     * The history state to use with the history brush.
     * @type {HistoryState}
     */
    activeHistoryBrushSource: HistoryState,


    /**
     * The selected layer.
     * @type {Layer}
     */
    activeLayer: Layer,


    /**
     * The selected channels.
     * @type {Channel}
     */
    activeChannels: Channel,


    /**
     * Metadata about the document.
     * @type {DocumentInfo}
     * @readonly
     */
    info: DocumentInfo,


    /**
     * Document print settings.
     * @type {DocumentPrintSettings}
     * @readonly
     */
    printSettings: DocumentPrintSettings,


    /**
     * The full path name of the document.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * The height of the document.
     * @type {UnitValue}
     * @readonly
     */
    height: UnitValue,


    /**
     * If true, the document is a workgroup document.
     * @type {boolean}
     * @readonly
     */
    managed: undefined,


    /**
     * If true, the document been saved since the last change.
     * @type {boolean}
     * @readonly
     */
    saved: undefined,


    /**
     * The document name.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The path to the document.
     * @type {File}
     * @readonly
     */
    path: File,


    /**
     * If true, the document is in Quick Mask mode.
     * @type {boolean}
     */
    quickMaskMode: undefined,


    /**
     * The resolution of the document (in pixels per inch)
     * @type {number}
     * @readonly
     */
    resolution: undefined,


    /**
     * The selected area of the document.
     * @type {Selection}
     * @readonly
     */
    selection: Selection,


    /**
     * The width of the document.
     * @type {UnitValue}
     * @readonly
     */
    width: UnitValue,


    /**
     * A histogram showing the number of pixels at each color intensity level for the composite channel.
     * @type {int}
     * @readonly
     */
    histogram: int,


    /**
     * The (custom) pixel aspect ratio of the document. Range: 0.100 to 10.000.
     * @type {number}
     */
    pixelAspectRatio: undefined,


    /**
     * The XMP properties of the document. The Camera RAW settings are stored here.
     * @type {XMPMetadata}
     * @readonly
     */
    xmpMetadata: XMPMetadata,


    /**
     * The measurement scale of the document.
     * @type {MeasurementScale}
     * @readonly
     */
    measurementScale: MeasurementScale,


    /**
     * The unique ID of this document.
     * @type {int}
     * @readonly
     */
    id: int,


    /**
     * The layers collection in the document.
     * @type {Layers}
     * @readonly
     */
    layers: Layers,


    /**
     * The layer sets collection in the document.
     * @type {LayerSets}
     * @readonly
     */
    layerSets: LayerSets,


    /**
     * The art layers collection in the document.
     * @type {ArtLayers}
     * @readonly
     */
    artLayers: ArtLayers,


    /**
     * The channels collection in this document.
     * @type {Channels}
     * @readonly
     */
    channels: Channels,


    /**
     * The guides in this document.
     * @type {Guides}
     * @readonly
     */
    guides: Guides,


    /**
     * The history states collection in this document.
     * @type {HistoryStates}
     * @readonly
     */
    historyStates: HistoryStates,


    /**
     * The layer comps collection in this document.
     * @type {LayerComps}
     * @readonly
     */
    layerComps: LayerComps,


    /**
     * The path items collection in this document.
     * @type {PathItems}
     * @readonly
     */
    pathItems: PathItems,


    /**
     * The current count items in the document.
     * @type {CountItems}
     * @readonly
     */
    countItems: CountItems,


    /**
     * The current color samplers associated with the document.
     * @type {ColorSamplers}
     * @readonly
     */
    colorSamplers: ColorSamplers,



    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return Document
     */
    duplicate: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Closes the document.
     *
     * @param {SaveOptionsType} [saving] Specifies whether changes should be saved before closing. (default: SaveOptionsType.PROMPTTOSAVECHANGES)
     * @return undefined
     */
    close: function (saving) {
        
    },


    /**
     * Converts the document from using one color profile to using another.
     *
     * @param {string} [destinationProfile] The color profile to convert to. Either a string specifying a color profile, one of the working color spaces, or Lab color.
     * @param {Intent} [intent] The conversion intent.
     * @param {boolean} [blackPointCompensation] If true, black point compensation is used.
     * @param {boolean} [dither] If true, dither is used. (default: true)
     * @return undefined
     */
    convertProfile: function (destinationProfile, intent, blackPointCompensation, dither) {
        
    },


    /**
     * Changes the mode of the document.
     *
     * @param {ChangeMode} [destinationMode] The mode to change to.
     * @param {DocumentConversionOptions} [options] Options for changing the mode.
     * @return undefined
     */
    changeMode: function (destinationMode, options) {
        
    },


    /**
     * Crops the document.
     *
     * @param {UnitRect} [bounds] The area to crop.
     * @param {number} [angle] The angle of cropping bounds. (default: 0)
     * @param {UnitValue} [width] The width of the resulting document.
     * @param {UnitValue} [height] The height of the resulting document.
     * @return undefined
     */
    crop: function (bounds, angle, width, height) {
        
    },


    /**
     * Exports the document.
     *
     * @param {File} [exportIn] The file to export to.
     * @param {ExportType} [exportAs] The type of export. (default: ExportType.ILLUSTRATORPATHS)
     * @param {ExportOptions} [options] Options for the specified export type.
     * @return undefined
     */
    exportDocument: function (exportIn, exportAs, options) {
        
    },


    /**
     * Flips the canvas horizontally or vertically.
     *
     * @param {Direction} [direction] The direction in which to flip the canvas.
     * @return undefined
     */
    flipCanvas: function (direction) {
        
    },


    /**
     * Imports annotations into the document.
     *
     * @param {File} [file] The document to import annotations from.
     * @return undefined
     */
    importAnnotations: function (file) {
        
    },


    /**
     * Flattens all layers.
     *
     * @return undefined
     */
    flatten: function () {
        
    },


    /**
     * Flattens all visible layers in the document.
     *
     * @return undefined
     */
    mergeVisibleLayers: function () {
        
    },


    /**
     * Pastes contents of the clipboard into the document.
     *
     * @param {boolean} [intoSelection] If true, contents are pasted into the current selection. (default: false)
     * @return ArtLayer
     */
    paste: function (intoSelection) {
        
    },


    /**
     * Prints the document.
     *
     * @param {SourceSpaceType} [sourceSpace] The color space for the source. (default: SourceSpaceType.DOCUMENT)
     * @param {string} [printSpace] The color space for the printer. Can be "nothing" (meaning same as source); one of the working spaces or Lab color; or a string specifying a color space. Default: nothing.
     * @param {Intent} [intent] The color conversion intent. (default: Intent.RELATIVECOLORIMETRIC)
     * @param {boolean} [blackPointCompensation] If true, black point compensation is used. (default: true)
     * @return undefined
     */
    print: function (sourceSpace, printSpace, intent, blackPointCompensation) {
        
    },


    /**
     * Print one copy of the document.
     *
     * @return undefined
     */
    printOneCopy: function () {
        
    },


    /**
     * Expands the document to show clipped sections.
     *
     * @return undefined
     */
    revealAll: function () {
        
    },


    /**
     * Rasterizes all layers.
     *
     * @return undefined
     */
    rasterizeAllLayers: function () {
        
    },


    /**
     * Records the measurements of document.
     *
     * @param {MeasurementSource} [source] The source of the measurements to record.
     * @param {string} [dataPoints] An array of identifiers of data points to record. Any data points not appropriate for the specified source are ignored.
     * @return undefined
     */
    recordMeasurements: function (source, dataPoints) {
        
    },


    /**
     * Rotates the canvas.
     *
     * @param {number} [angle] The number of degrees to rotate. A positive angle rotates the canvas clockwise; a negative value rotates the canvas counter-clockwise.
     * @return undefined
     */
    rotateCanvas: function (angle) {
        
    },


    /**
     * Changes the size of the canvas.
     *
     * @param {UnitValue} [width] The desired width of the canvas.
     * @param {UnitValue} [height] The desired height of the canvas.
     * @param {AnchorPosition} [anchor] The anchor point to resize around. (default: AnchorPosition.MIDDLECENTER)
     * @return undefined
     */
    resizeCanvas: function (width, height, anchor) {
        
    },


    /**
     * Changes the size of the image.
     *
     * @param {UnitValue} [width] The desired width of the image.
     * @param {UnitValue} [height] The desired height of the image.
     * @param {number} [resolution] The resolution (in pixels per inch)
     * @param {ResampleMethod} [resampleMethod] The downsample method. (default: ResampleMethod.BICUBIC)
     * @param {int} [amount] Amount of noise value when using preserve details (range: 0 - 100) (default: 0)
     * @return undefined
     */
    resizeImage: function (width, height, resolution, resampleMethod, amount) {
        
    },


    /**
     * Splits the channels of the document.
     *
     * @return Document
     */
    splitChannels: function () {
        
    },


    /**
     * Saves the document.
     *
     * @return undefined
     */
    save: function () {
        
    },


    /**
     * Saves the document with the specified save options.
     *
     * @param {File} [saveIn] The file to save to, specified as a string containing the full file path or an alias. If not specified, the document is saved to its existing file.
     * @param {any} [options] Options for the specified file type.
     * @param {boolean} [asCopy] Saves the document as a copy, leaving the original open.
     * @param {MacExtensionType} [extensionType] Appends the specified extension to the file name.
     * @return undefined
     */
    saveAs: function (saveIn, options, asCopy, extensionType) {
        
    },


    /**
     * Provides a single history state for the entire script. Allows a single undo for all actions taken in the script.
     *
     * @param {string} [historyString] The string to use for the history state.
     * @param {string} [javaScriptString] A string of JavaScript code to execute during the suspension of history.
     * @return undefined
     */
    suspendHistory: function (historyString, javaScriptString) {
        
    },


    /**
     * Applies trapping to a CMYK document. Valid only when 'mode' = CMYK.
     *
     * @param {int} [width] The trap width in pixels.
     * @return undefined
     */
    trap: function (width) {
        
    },


    /**
     * Trims the transparent area around the image on the specified sides of the canvas.
     *
     * @param {TrimType} [type] The color or type of pixels to base the trim on. (default: TrimType.TOPLEFT)
     * @param {boolean} [top] If true, trims away the top of the document. (default: true)
     * @param {boolean} [left] If true, trims away the left of the document. (default: true)
     * @param {boolean} [bottom] If true, trims away the bottom of the document. (default: true)
     * @param {boolean} [right] If true, trims away the right of the document. (default: true)
     * @return undefined
     */
    trim: function (type, top, left, bottom, right) {
        
    },


    /**
     * Creates a duplicate of the document object.
     *
     * @param {string} [name] The name of the new document.
     * @param {boolean} [mergeLayersOnly] If ture, duplicates merged layers only.
     * @return Document
     */
    duplicate: function (name, mergeLayersOnly) {
        
    },


    /**
     * Counts the objects in the document.
     *
     * @param {Channel} [channel] The channel to use for counting.
     * @param {int} [threshold] Threshold to use for counting. Range: 0 to 255.
     * @return undefined
     */
    autoCount: function (channel, threshold) {
        
    },


};

