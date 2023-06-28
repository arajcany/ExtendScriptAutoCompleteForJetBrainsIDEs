/*
 * A document.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
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
     * Is the file a stationery file?
     * @type {boolean}
     * @readonly
     */
    stationery: undefined,


    /**
     * The file associated with the document.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * The active layer.
     * @type {Layer}
     */
    activeLayer: Layer,


    /**
     * The document's current view.
     * @type {View}
     * @readonly
     */
    activeView: View,


    /**
     * The bounds of the illustration excluding stroke width.
     * @type {Rect}
     * @readonly
     */
    geometricBounds: Rect,


    /**
     * The visible bounds of the illustration including stroke width.
     * @type {Rect}
     * @readonly
     */
    visibleBounds: Rect,


    /**
     * 
     * @type {Point}
     */
    rulerOrigin: Point,


    /**
     * 
     * @type {RulerUnits}
     * @readonly
     */
    rulerUnits: RulerUnits,


    /**
     * 
     * @type {Point}
     */
    pageOrigin: Point,


    /**
     * 
     * @type {Rect}
     */
    cropBox: Rect,


    /**
     * 
     * @type {CropOptions}
     */
    cropStyle: CropOptions,


    /**
     * 
     * @type {number}
     * @readonly
     */
    width: undefined,


    /**
     * 
     * @type {number}
     * @readonly
     */
    height: undefined,


    /**
     * 
     * @type {boolean}
     * @readonly
     */
    showPlacedImages: undefined,


    /**
     * 
     * @type {number}
     * @readonly
     */
    outputResolution: undefined,


    /**
     * 
     * @type {boolean}
     * @readonly
     */
    printTiles: undefined,


    /**
     * The selection within the document.
     * @type {any}
     */
    selection: undefined,


    /**
     * 
     * @type {boolean}
     * @readonly
     */
    splitLongPaths: undefined,


    /**
     * 
     * @type {boolean}
     * @readonly
     */
    tileFullPages: undefined,


    /**
     * 
     * @type {boolean}
     * @readonly
     */
    useDefaultScreen: undefined,


    /**
     * The color space used for the document.
     * @type {DocumentColorSpace}
     * @readonly
     */
    documentColorSpace: DocumentColorSpace,


    /**
     * The document's name.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * Path specification for the document.
     * @type {File}
     * @readonly
     */
    path: File,


    /**
     * Is the document saved on cloud.
     * @type {boolean}
     * @readonly
     */
    isCloudDocument: undefined,


    /**
     * Path specification for the cloud document.
     * @type {string}
     * @readonly
     */
    cloudPath: undefined,


    /**
     * Has the document been saved?
     * @type {boolean}
     */
    saved: undefined,


    /**
     * Should a new path be filled?
     * @type {boolean}
     */
    defaultFilled: undefined,


    /**
     * Default fill color.
     * @type {Color}
     */
    defaultFillColor: Color,


    /**
     * Will art beneath a filled object be overprinted by default?
     * @type {boolean}
     */
    defaultFillOverprint: undefined,


    /**
     * Should a new path be stroked?
     * @type {boolean}
     */
    defaultStroked: undefined,


    /**
     * Default stroke color.
     * @type {Color}
     */
    defaultStrokeColor: Color,


    /**
     * Will art beneath a stroked object be overprinted by default?
     * @type {boolean}
     */
    defaultStrokeOverprint: undefined,


    /**
     * Default width of stroke.
     * @type {number}
     */
    defaultStrokeWidth: undefined,


    /**
     * Default dash lengths (set to {} for a solid line)
     * @type {number}
     */
    defaultStrokeDashes: undefined,


    /**
     * The default distance into the dash pattern at which the pattern should be started.
     * @type {number}
     */
    defaultStrokeDashOffset: undefined,


    /**
     * Default type of line capping.
     * @type {StrokeCap}
     */
    defaultStrokeCap: StrokeCap,


    /**
     * Default type of joints.
     * @type {StrokeJoin}
     */
    defaultStrokeJoin: StrokeJoin,


    /**
     * Specifies whether a join is mitered (pointed) or beveled (squared-off) by default.
     * @type {number}
     */
    defaultStrokeMiterLimit: undefined,


    /**
     * The active data set.
     * @type {DataSet}
     */
    activeDataSet: DataSet,


    /**
     * The locked variables.
     * @type {boolean}
     */
    variablesLocked: undefined,


    /**
     * The XMP packet string associated with the document.
     * @type {string}
     */
    XMPString: undefined,


    /**
     * The document raster effects settings.
     * @type {RasterEffectOptions}
     */
    rasterEffectSettings: RasterEffectOptions,


    /**
     * The name of the color profile of the document.
     * @type {string}
     * @readonly
     */
    colorProfileName: undefined,


    /**
     * The scale factor of the document.
     * @type {number}
     * @readonly
     */
    scaleFactor: undefined,


    /**
     * All assets in the document.
     * @type {Assets}
     * @readonly
     */
    assets: Assets,


    /**
     * All artboards in the document.
     * @type {Artboards}
     * @readonly
     */
    artboards: Artboards,


    /**
     * The compound path artwork in this collection.
     * @type {CompoundPathItems}
     * @readonly
     */
    compoundPathItems: CompoundPathItems,


    /**
     * The layers in this document.
     * @type {Layers}
     * @readonly
     */
    layers: Layers,


    /**
     * All the artwork in this document.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,


    /**
     * The path artwork in this document.
     * @type {PathItems}
     * @readonly
     */
    pathItems: PathItems,


    /**
     * The tags in this document.
     * @type {Tags}
     * @readonly
     */
    tags: Tags,


    /**
     * The views in this document.
     * @type {Views}
     * @readonly
     */
    views: Views,


    /**
     * The raster art items in this document.
     * @type {RasterItems}
     * @readonly
     */
    rasterItems: RasterItems,


    /**
     * The placed art items in this document.
     * @type {PlacedItems}
     * @readonly
     */
    placedItems: PlacedItems,


    /**
     * The embedded art items in this layer.
     * @type {EmbeddedItems}
     * @readonly
     */
    embeddedItems: EmbeddedItems,


    /**
     * The mesh art items in this document.
     * @type {MeshItems}
     * @readonly
     */
    meshItems: MeshItems,


    /**
     * The plugin art items in this document.
     * @type {PluginItems}
     * @readonly
     */
    pluginItems: PluginItems,


    /**
     * The graph art items in this document.
     * @type {GraphItems}
     * @readonly
     */
    graphItems: GraphItems,


    /**
     * The non-native art items in this document.
     * @type {NonNativeItems}
     * @readonly
     */
    nonNativeItems: NonNativeItems,


    /**
     * The group items in this document.
     * @type {GroupItems}
     * @readonly
     */
    groupItems: GroupItems,


    /**
     * The text frame items in this document.
     * @type {TextFrameItems}
     * @readonly
     */
    textFrames: TextFrameItems,


    /**
     * The story items in this document.
     * @type {Stories}
     * @readonly
     */
    stories: Stories,


    /**
     * The list of character styles in this document.
     * @type {CharacterStyles}
     * @readonly
     */
    characterStyles: CharacterStyles,


    /**
     * The list of paragraph styles in this document.
     * @type {ParagraphStyles}
     * @readonly
     */
    paragraphStyles: ParagraphStyles,


    /**
     * The Kinsoku set.
     * @type {string}
     * @readonly
     */
    kinsokuSet: undefined,


    /**
     * The Mojikumi set.
     * @type {string}
     * @readonly
     */
    mojikumiSet: undefined,


    /**
     * The swatches in this document.
     * @type {Swatches}
     * @readonly
     */
    swatches: Swatches,


    /**
     * The Swatch Groups in this document.
     * @type {SwatchGroups}
     * @readonly
     */
    swatchGroups: SwatchGroups,


    /**
     * The gradients available in this document.
     * @type {Gradients}
     * @readonly
     */
    gradients: Gradients,


    /**
     * The patterns available in this document.
     * @type {Patterns}
     * @readonly
     */
    patterns: Patterns,


    /**
     * The custom spot colors available in this document.
     * @type {Spots}
     * @readonly
     */
    spots: Spots,


    /**
     * The symbols defined in this document.
     * @type {Symbols}
     * @readonly
     */
    symbols: Symbols,


    /**
     * The symbol items in this document.
     * @type {SymbolItems}
     * @readonly
     */
    symbolItems: SymbolItems,


    /**
     * The brushes defined in this document.
     * @type {Brushes}
     * @readonly
     */
    brushes: Brushes,


    /**
     * The graphic styles defined in this document.
     * @type {ArtStyles}
     * @readonly
     */
    graphicStyles: ArtStyles,


    /**
     * The variables defined in this document.
     * @type {Variables}
     * @readonly
     */
    variables: Variables,


    /**
     * The list of inks in this document.
     * @type {Ink}
     * @readonly
     */
    inkList: Ink,


    /**
     * The data sets defined in this document.
     * @type {DataSets}
     * @readonly
     */
    dataSets: DataSets,


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
     * Close the specified document(s)
     *
     * @param {SaveOptions} [saving] Specifies whether changes should be saved before closing.
     * @return undefined
     */
    close: function (saving) {
        
    },


    /**
     * Process a gesture based on input points.
     *
     * @param {string} [gesturePointsFile] File Path containing points constituting the gesture.
     * @return undefined
     */
    processGesture: function (gesturePointsFile) {
        
    },


    /**
     * Save the document.
     *
     * @return undefined
     */
    save: function () {
        
    },


    /**
     * Save the document with specific save options.
     *
     * @param {File} [saveIn] The file to save the document in.
     * @param {any} [options] Options for the file type specified.
     * @return undefined
     */
    saveAs: function (saveIn, options) {
        
    },


    /**
     * Save the document to cloud at the specified path.
     *
     * @param {string} [cloudPath] Path of the document to be saved on cloud.
     * @return undefined
     */
    saveToCloud: function (cloudPath) {
        
    },


    /**
     * Print the document.
     *
     * @param {PrintOptions} [options] Print options.
     * @return undefined
     */
    print: function (options) {
        
    },


    /**
     * Export the specified document/asset(s)/artboard(s)
     *
     * @param {File} [exportFolder] The folder where the exported documents/assets/artboards are saved.
     * @param {ExportForScreensType} [exportFormat] The file type in which the document is exported.
     * @param {any} [options] Options for the file type specified.
     * @param {ExportForScreensItemToExport} [itemToExport] What to export.
     * @param {string} [fileNamePrefix] String prepended to each file name.
     * @return undefined
     */
    exportForScreens: function (exportFolder, exportFormat, options, itemToExport, fileNamePrefix) {
        
    },


    /**
     * Export the specified document(s)
     *
     * @param {File} [exportFile] The file to export the document to.
     * @param {ExportType} [exportFormat] The file type to export the document as.
     * @param {any} [options] Options for the file type specified.
     * @return undefined
     */
    exportFile: function (exportFile, exportFormat, options) {
        
    },


    /**
     * Convert the document to Large Canvas Document.
     *
     * @return undefined
     */
    convertToLargeCanvas: function () {
        
    },


    /**
     * Export the selection as PNG file.
     *
     * @param {File} [exportFile] The file to export the selection to.
     * @param {any} [options] Options for the PNG24 export.
     * @return undefined
     */
    exportSelectionAsPNG: function (exportFile, options) {
        
    },


    /**
     * Export the selection as Ai file.
     *
     * @param {File} [exportFile] The file to export the selection to.
     * @return undefined
     */
    exportSelectionAsAi: function (exportFile) {
        
    },


    /**
     * Write the document to a file as a library of specified type.
     *
     * @param {File} [file] The file to write the library in.
     * @param {LibraryType} [libraryType] Type of library to write as.
     * @return undefined
     */
    writeAsLibrary: function (file, libraryType) {
        
    },


    /**
     * Import the file into current Ai document.
     *
     * @param {File} [importFile] The file to import in the current document.
     * @param {boolean} [isLinked] Is AssetLiveLinked.
     * @param {string} [libraryName] For Internal Use.
     * @param {string} [itemName] For Internal Use.
     * @param {string} [elementRef] For Internal Use.
     * @param {number} [modifiedTime] For Internal Use.
     * @param {number} [creationTime] For Internal Use.
     * @param {string} [adobeStockId] For Internal Use.
     * @param {string} [adobeStockLicense] For Internal Use.
     * @param {boolean} [shouldLoadToPlaceGun] Whether or not to load the imported file to placegun.
     * @return undefined
     */
    importFile: function (importFile, isLinked, libraryName, itemName, elementRef, modifiedTime, creationTime, adobeStockId, adobeStockLicense, shouldLoadToPlaceGun) {
        
    },


    /**
     * Activate the first window associated with the document.
     *
     * @return undefined
     */
    activate: function () {
        
    },


    /**
     * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.
     *
     * @param {File} [fileSpec] File spec to import from.
     * @return undefined
     */
    importVariables: function (fileSpec) {
        
    },


    /**
     * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.
     *
     * @param {File} [file] File spec to export to.
     * @return undefined
     */
    exportVariables: function (file) {
        
    },


    /**
     * Load the character styles from the Illustrator file.
     *
     * @param {File} [fileSpec] File spec to import from.
     * @return undefined
     */
    importCharacterStyles: function (fileSpec) {
        
    },


    /**
     * Load the paragraph styles from the Illustrator file.
     *
     * @param {File} [fileSpec] File spec to import from.
     * @return undefined
     */
    importParagraphStyles: function (fileSpec) {
        
    },


    /**
     * Apply the named print preset from the file to the current print setting.
     *
     * @param {string} [printPreset] The name of a print preset to import.
     * @param {File} [fileSpec] File to import from.
     * @return undefined
     */
    importPrintPreset: function (printPreset, fileSpec) {
        
    },


    /**
     * Export the current print setting to the preset file.
     *
     * @param {File} [file] File to export to.
     * @return undefined
     */
    exportPrintPreset: function (file) {
        
    },


    /**
     * Load all PDF presets from a file.
     *
     * @param {File} [fileSpec] File to import from.
     * @param {boolean} [replacingPreset] Should existing editable presets be replaced? (default: false)
     * @return undefined
     */
    importPDFPreset: function (fileSpec, replacingPreset) {
        
    },


    /**
     * Save all PDF presets to a file.
     *
     * @param {File} [file] File to export to.
     * @return undefined
     */
    exportPDFPreset: function (file) {
        
    },


    /**
     * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.
     *
     * @param {File} [fileSpec] File to import from.
     * @param {string} [perspectivePreset] Name of perspective grid preset. (default: )
     * @return undefined
     */
    importPerspectiveGridPreset: function (fileSpec, perspectivePreset) {
        
    },


    /**
     * Saves all perspective grid presets to a file.
     *
     * @param {File} [file] File to export to.
     * @return undefined
     */
    exportPerspectiveGridPreset: function (file) {
        
    },


    /**
     * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.
     *
     * @param {File} [imageFile] The file to which the captured image should be written.
     * @param {Rect} [clipBounds] The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.
     * @param {ImageCaptureOptions} [options] Describes the image capture options.
     * @return undefined
     */
    imageCapture: function (imageFile, clipBounds, options) {
        
    },


    /**
     * Capture the current document window to the target TIFF image file.
     *
     * @param {File} [imageFile] The TIFF file to which the captured image should be written.
     * @param {Point} [windowSize] The size to make the window before capture.
     * @return undefined
     */
    windowCapture: function (imageFile, windowSize) {
        
    },


    /**
     * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.
     *
     * @param {any} [sourceArt] The page item(s) to be rasterized.
     * @param {Rect} [clipBounds] The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.
     * @param {RasterizeOptions} [options] Describes the rasterization options.
     * @return PageItem
     */
    rasterize: function (sourceArt, clipBounds, options) {
        
    },


    /**
     * Rearrange Artboards in the document.
     *
     * @param {DocumentArtboardLayout} [artboardLayout] Layout of artboards for rearrangement. (default: DocumentArtboardLayout.GridByRow)
     * @param {Int32} [artboardRowsOrCols] Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts. (default: 1)
     * @param {number} [artboardSpacing] Spacing between artboards. (default: 20.0)
     * @param {boolean} [artboardMoveArtwork] Whether to move artwork with artboards. (default: true)
     * @return boolean
     */
    rearrangeArtboards: function (artboardLayout, artboardRowsOrCols, artboardSpacing, artboardMoveArtwork) {
        
    },


    /**
     * Select art objects in active artboard.
     *
     * @return boolean
     */
    selectObjectsOnActiveArtboard: function () {
        
    },


    /**
     * Change the artboard to selected art bounds.
     *
     * @param {Int32} [index] The index of the artboard to update.
     * @return boolean
     */
    fitArtboardToSelectedArt: function (index) {
        
    },


    /**
     * Converts the coordinate system of a single point from one coordinate system to another.
     *
     * @param {Point} [coordinate] The Coordinate to convert.
     * @param {CoordinateSystem} [source] The source coordinate system.
     * @param {CoordinateSystem} [destination] The destination coordinate system.
     * @return Point
     */
    convertCoordinate: function (coordinate, source, destination) {
        
    },


    /**
     * Selects a predefined preset to define grid for the current document.
     *
     * @param {string} [perspectivePreset] Name of perspective grid preset.
     * @return boolean
     */
    selectPerspectivePreset: function (perspectivePreset) {
        
    },


    /**
     * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.
     *
     * @return boolean
     */
    showPerspectiveGrid: function () {
        
    },


    /**
     * Hides the current active perspective grid for the document, if there is visible perspective grid.
     *
     * @return boolean
     */
    hidePerspectiveGrid: function () {
        
    },


    /**
     * Gets the active plane of the active perspective grid of the document.
     *
     * @return PerspectiveGridPlaneType
     */
    getPerspectiveActivePlane: function () {
        
    },


    /**
     * Sets the active perspective plane for the active grid of the document.
     *
     * @param {PerspectiveGridPlaneType} [perspectiveGridPlane] Type of perspective grid plane.
     * @return boolean
     */
    setPerspectiveActivePlane: function (perspectiveGridPlane) {
        
    },


    /**
     * Retrieves the pageitem using Uuid.
     *
     * @param {string} [uuid] Uuid of pageitem.
     * @return PageItem
     */
    getPageItemFromUuid: function (uuid) {
        
    },


};

