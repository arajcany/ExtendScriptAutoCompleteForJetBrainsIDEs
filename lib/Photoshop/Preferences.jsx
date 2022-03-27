/*
 * Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Preferences = {


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
     * The color picker to use.
     * @type {ColorPicker}
     */
    colorPicker: ColorPicker,


    /**
     * The method to use to assign color values to any new pixels created when an image is resampled or resized.
     * @type {ResampleMethod}
     */
    interpolation: ResampleMethod,


    /**
     * If true, retains Adobe Photoshop contents on the clipboard after you exit the application.
     * @type {boolean}
     */
    exportClipboard: undefined,


    /**
     * If true, pop-up definitions are displayed on mouseover.
     * @type {boolean}
     */
    showToolTips: undefined,


    /**
     * If true, automatically resizes the window when zooming in or out using keyboard shortcuts.
     * @type {boolean}
     */
    keyboardZoomResizesWindows: undefined,


    /**
     * If true, automatically updates open documents.
     * @type {boolean}
     */
    autoUpdateOpenDocuments: undefined,


    /**
     * If true, Asian text options are displayed in the Paragraph palette.
     * @type {boolean}
     */
    showAsianTextOptions: undefined,


    /**
     * If true, alerts the user when a process finishes.
     * @type {boolean}
     */
    beepWhenDone: undefined,


    /**
     * If true, dynamic color sliders appear in the Color palette.
     * @type {boolean}
     */
    dynamicColorSliders: undefined,


    /**
     * If true, makes new palette locations the default location.
     * @type {boolean}
     */
    savePaletteLocations: undefined,


    /**
     * If true, Asian font names are listed in English.
     * @type {boolean}
     */
    showEnglishFontNames: undefined,


    /**
     * If true, enables cycling through a set of hidden tools.
     * @type {boolean}
     */
    useShiftKeyForToolSwitch: undefined,


    /**
     * Size of the small font used in panels and dialogs.
     * @type {FontSize}
     */
    textFontSize: FontSize,


    /**
     * The number of history states to preserve. Range: 1 to 100.
     * @type {int}
     */
    numberOfHistoryStates: int,


    /**
     * If true, automatically makes the first snapshot when a new document is created.
     * @type {boolean}
     */
    createFirstSnapshot: undefined,


    /**
     * If true, allows non-linear history.
     * @type {boolean}
     */
    nonLinearHistory: undefined,


    /**
     * If true, curly quote marks are used.
     * @type {boolean}
     */
    smartQuotes: undefined,


    /**
     * The behavior mode to use when saving files.
     * @type {SaveBehavior}
     */
    imagePreviews: SaveBehavior,


    /**
     * If true, shows the image preview as a thumbnail.
     * @type {boolean}
     */
    iconPreview: undefined,


    /**
     * If true, shows the image preview as a full size image.
     * @type {boolean}
     */
    fullSizePreview: undefined,


    /**
     * If true, creates a thumbnail when saving the image in Mac OS.
     * @type {boolean}
     */
    macOSThumbnail: undefined,


    /**
     * If true, creates a thumbnail when saving the image in Windows. (Requires hardware support.)
     * @type {boolean}
     */
    windowsThumbnail: undefined,


    /**
     * Save files with extensions on Windows.
     * @type {SaveBehavior}
     */
    appendExtension: SaveBehavior,


    /**
     * If true, the file extension is lowercase.
     * @type {boolean}
     */
    useLowerCaseExtension: undefined,


    /**
     * If true, asks the user to verify layer preservation options when saving a file in TIFF format.
     * @type {boolean}
     */
    askBeforeSavingLayeredTIFF: undefined,


    /**
     * The behavior to use to check whether to maximize compatibility when opening Adobe Photoshop (PSD) files.
     * @type {QueryStateType}
     */
    maximizeCompatibility: QueryStateType,


    /**
     * The number of items in the recent file list. Range: 0 to 30.
     * @type {int}
     */
    recentFileListLength: int,


    /**
     * If true, displays component channels in the Channels palette in color.
     * @type {boolean}
     */
    colorChannelsInColor: undefined,


    /**
     * If true, uses diffusion dither.
     * @type {boolean}
     */
    useDiffusionDither: undefined,


    /**
     * If true, halves the resolution or (doubles the size of pixels) to make previews display more quickly.
     * @type {boolean}
     */
    pixelDoubling: undefined,


    /**
     * The type of pointer to use.
     * @type {PaintingCursors}
     */
    paintingCursors: PaintingCursors,


    /**
     * The type of pointer to use.
     * @type {OtherPaintingCursors}
     */
    otherCursors: OtherPaintingCursors,


    /**
     * The size of grid squares.
     * @type {GridSize}
     */
    gridSize: GridSize,


    /**
     * If true, enables Adobe Photoshop to send transparency information to your computer’s video board. (Requires hardware support.)
     * @type {boolean}
     */
    useVideoAlpha: undefined,


    /**
     * The opacity (as a percentage) of the warning color for out-of-gamut colors. Range: 0 to 100.
     * @type {number}
     */
    gamutWarningOpacity: undefined,


    /**
     * The unit that the scripting system uses when receiving and returning values.
     * @type {Units}
     */
    rulerUnits: Units,


    /**
     * The unit type-size that the numeric inputs are assumed to represent.
     * @type {TypeUnits}
     */
    typeUnits: TypeUnits,


    /**
     * The width of columns (in points)
     * @type {number}
     */
    columnWidth: undefined,


    /**
     * The gutter of columns (in points)
     * @type {number}
     */
    columnGutter: undefined,


    /**
     * The point/pica size.
     * @type {PointType}
     */
    pointSize: PointType,


    /**
     * The formatting style for non-printing guide lines.
     * @type {GuideLineStyle}
     */
    guideStyle: GuideLineStyle,


    /**
     * The formatting style for non-printing grid lines.
     * @type {GridLineStyle}
     */
    gridStyle: GridLineStyle,


    /**
     * The value by which to subdivide the grid.
     * @type {int}
     */
    gridSubDivisions: int,


    /**
     * If true, displays slice numbers in the document window when using the Slice tool.
     * @type {boolean}
     */
    showSliceNumber: undefined,


    /**
     * If true, uses an additional folder for compatible plug-ins stored with a different application.
     * @type {boolean}
     */
    useAdditionalPluginFolder: undefined,


    /**
     * The path to the additional plug-in folder. Valid only when 'use additional plugin folder' = true.
     * @type {File}
     */
    additionalPluginFolder: File,


    /**
     * The number of images to hold in the cache. Range: 1 to 8.
     * @type {int}
     */
    imageCacheLevels: int,


    /**
     * If true, shows the current image cache used to create the histogram.
     * @type {boolean}
     */
    imageCacheForHistograms: undefined,


    /**
     * Maximum percentage of available RAM used by Photoshop.
     * @type {int}
     */
    maxRAMuse: int,


    /**
     * Turn on and off the history logging.
     * @type {boolean}
     */
    useHistoryLog: undefined,


    /**
     * Options for saving the history items.
     * @type {SaveLogItemsType}
     */
    saveLogItems: SaveLogItemsType,


    /**
     * Options for edit log items.
     * @type {EditLogItemsType}
     */
    editLogItems: EditLogItemsType,


    /**
     * File to save the history log.
     * @type {File}
     */
    saveLogItemsFile: File,


    /**
     * Show font previews in the type tool font menus.
     * @type {FontPreviewType}
     */
    fontPreviewSize: FontPreviewType,




};

