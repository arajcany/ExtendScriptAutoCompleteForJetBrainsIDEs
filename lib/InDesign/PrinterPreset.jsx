/*
 * A preset that contains all of the print settings.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PrinterPreset = {


    /**
     * Available printers.
     * @type {string}
     * @readonly
     */
    printerList: undefined,


    /**
     * Available PPDs.
     * @type {string}
     * @readonly
     */
    ppdList: undefined,


    /**
     * A list of the available paper sizes.
     * @type {string}
     * @readonly
     */
    paperSizeList: undefined,


    /**
     * Lists the ink screenings available in the PPD. Note: Valid only when color output is separations or in rip separations.
     * @type {string}
     * @readonly
     */
    screeningList: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PrinterPreset (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the PrinterPreset within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of events.
     * @type {Events}
     * @readonly
     */
    events: Events,


    /**
     * A collection of event listeners.
     * @type {EventListeners}
     * @readonly
     */
    eventListeners: EventListeners,


    /**
     * The name of the PrinterPreset.
     * @type {string}
     */
    name: undefined,


    /**
     * The current printer. Can return: Printer enumerator or String.
     * @type {varies=any}
     */
    printer: undefined,


    /**
     * The PPD, specified as a PPD name or an enumeration. Can return: PPDValues enumerator or String.
     * @type {varies=any}
     */
    ppd: undefined,


    /**
     * The PostScript file to print to. Note: Valid only when the current printer is defined as postscript file.
     * @type {File}
     */
    printFile: File,


    /**
     * The number of copies to print. Note: Not valid when printer is PostScript File.
     * @type {number}
     */
    copies: undefined,


    /**
     * If true, collate printed copies.
     * @type {boolean}
     */
    collating: undefined,


    /**
     * If true, prints pages in reverse order.
     * @type {boolean}
     */
    reverseOrder: undefined,


    /**
     * The sequence of pages to print.
     * @type {Sequences}
     */
    sequence: Sequences,


    /**
     * If true, prints each spread with all spread pages on a single sheet. If false, prints spread pages as separate pages.
     * @type {boolean}
     */
    printSpreads: undefined,


    /**
     * If true, prints master pages.
     * @type {boolean}
     */
    printMasterPages: undefined,


    /**
     * If true, prints non-printing objects. Note: Valid only when trapping is off.
     * @type {boolean}
     */
    printNonprinting: undefined,


    /**
     * If true, prints blank pages. Note: Valid only when trapping is off.
     * @type {boolean}
     */
    printBlankPages: undefined,


    /**
     * If true, prints visible guides and baseline grids. Note: Valid only when trapping is off.
     * @type {boolean}
     */
    printGuidesGrids: undefined,


    /**
     * The paper size, specified as either a string or an enumeration. For information on paper size names, see paper size list. Can return: PaperSizes enumerator or String.
     * @type {varies=any}
     */
    paperSize: undefined,


    /**
     * The paper height. Note: Valid only when paper size is custom or scale mode is scale width height. Can return: PaperSize enumerator or Unit.
     * @type {varies=any}
     */
    paperHeight: undefined,


    /**
     * The paper width. Note: Valid only when paper size is custom or scale mode is scale width height. Can return: PaperSize enumerator or Unit.
     * @type {varies=any}
     */
    paperWidth: undefined,


    /**
     * The amount of space to offset the page from the left edge of the imageable area.
     * @type {Measurement Unit (Number or String)=any}
     */
    paperOffset: undefined,


    /**
     * The space between document pages on the printing medium.
     * @type {Measurement Unit (Number or String)=any}
     */
    paperGap: undefined,


    /**
     * If true, uses transverse orientation.
     * @type {boolean}
     */
    paperTransverse: undefined,


    /**
     * The orientation of the printed page.
     * @type {PrintPageOrientation}
     */
    printPageOrientation: PrintPageOrientation,


    /**
     * The position of the page on the printing medium. Note: Valid only when tile is false.
     * @type {PagePositions}
     */
    pagePosition: PagePositions,


    /**
     * The policy for scaling the page. Note: Valid only when printing from Layout view.
     * @type {ScaleModes}
     */
    scaleMode: ScaleModes,


    /**
     * The amount (as a percentage)  that the page width is scaled during printing. (Range: 0 to 1000) Note: Valid only when scale mode is scale width height.
     * @type {number}
     */
    scaleWidth: undefined,


    /**
     * The amount (as a percentage) that the page height is scaled during printing. (Range: 0 to 1000) Note: Valid only when scale mode is scale width height.
     * @type {number}
     */
    scaleHeight: undefined,


    /**
     * If true, constrains the proportions of the scaling; uses the most recent value for either scale width or scale height to define both values. Note: Valid only when scale mode is scale width height.
     * @type {boolean}
     */
    scaleProportional: undefined,


    /**
     * If true, prints thumbnails. Note: Valid only when trapping is off and tile is false.
     * @type {boolean}
     */
    thumbnails: undefined,


    /**
     * The number of thumbnails per page.
     * @type {ThumbsPerPage}
     */
    thumbnailsPerPage: ThumbsPerPage,


    /**
     * If true, tiles pages.
     * @type {boolean}
     */
    tile: undefined,


    /**
     * The tiling type. Note: Valid only when tiling is true.
     * @type {TilingTypes}
     */
    tilingType: TilingTypes,


    /**
     * The amount of tiling overlap. Note: Valid only when tiling is true and tiling type is not manual.
     * @type {number}
     */
    tilingOverlap: undefined,


    /**
     * If true, prints all printer marks. If false, prints specified printer marks.
     * @type {boolean}
     */
    allPrinterMarks: undefined,


    /**
     * Prints crop marks that define where the page should be trimmed.
     * @type {boolean}
     */
    cropMarks: undefined,


    /**
     * If true, print bleed marks.
     * @type {boolean}
     */
    bleedMarks: undefined,


    /**
     * If true, prints small targets outside the page area for aligning color separations.
     * @type {boolean}
     */
    registrationMarks: undefined,


    /**
     * If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments.
     * @type {boolean}
     */
    colorBars: undefined,


    /**
     * If true, prints the filename, page number, current date and time, and color separation name.
     * @type {boolean}
     */
    pageInformationMarks: undefined,


    /**
     * The type of printer marks, either an enum value or the name of a custom marks file. Can return: MarkTypes enumerator or String.
     * @type {varies=any}
     */
    markType: undefined,


    /**
     * The stroke weight (in points) for printer marks.
     * @type {MarkLineWeight}
     */
    markLineWeight: MarkLineWeight,


    /**
     * The distance to offset the page marks from the edge of the page.
     * @type {Measurement Unit (Number or String)=any}
     */
    markOffset: undefined,


    /**
     * If true, uses the bleed area set for the document.
     * @type {boolean}
     */
    useDocumentBleedToPrint: undefined,


    /**
     * The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedTop: undefined,


    /**
     * The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedBottom: undefined,


    /**
     * The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedInside: undefined,


    /**
     * The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedOutside: undefined,


    /**
     * If true, includes the slug area in the printed document.
     * @type {boolean}
     */
    includeSlugToPrint: undefined,


    /**
     * The color output mode for composites. Note: Not valid when a device-independent PPD is specified.
     * @type {ColorOutputModes}
     */
    colorOutput: ColorOutputModes,


    /**
     * If true, prints all text as black unless text has the color None or Paper or a color value that equals white. If false, prints colored text, such as blue hyperlinks, in halftone patterns. Note: Valid only when trapping is off.
     * @type {boolean}
     */
    textAsBlack: undefined,


    /**
     * The type of trapping.
     * @type {Trapping}
     */
    trapping: Trapping,


    /**
     * The direction in which to flip the printed image.
     * @type {Flip}
     */
    flip: Flip,


    /**
     * If true, prints the document as a negative.
     * @type {boolean}
     */
    negative: undefined,


    /**
     * The ink screening settings for composite gray output in PostScript or PDF format. . Can return: Screeening enumerator or String.
     * @type {varies=any}
     */
    screening: undefined,


    /**
     * The screen angle to use when printing composites. (Range: 0 to 360) Note: Valid only for PostScript or PDF files that use custom screening.
     * @type {number}
     */
    compositeAngle: undefined,


    /**
     * The screen frequency to use when printing composites. (Range: 1 to 500) Note: Valid only for PostScript or PDF files that use custom screening.
     * @type {number}
     */
    compositeFrequency: undefined,


    /**
     * If true, simulates the effects of overprinting spot inks with different neutral density values by converting spot colors to process colors for printing. Note: Not valid when the color output mode is defined to leave color profiles unchanged.
     * @type {boolean}
     */
    simulateOverprint: undefined,


    /**
     * If true, prints the cyan ink. Note: Valid only when trapping is off.
     * @type {boolean}
     */
    printCyan: undefined,


    /**
     * The angle override for cyan ink. (Range: 0 to 360)
     * @type {number}
     */
    cyanAngle: undefined,


    /**
     * The frequency override for cyan ink. (Range: 1 to 500)
     * @type {number}
     */
    cyanFrequency: undefined,


    /**
     * If true, prints the magenta ink. Note: Valid only when trapping is off.
     * @type {boolean}
     */
    printMagenta: undefined,


    /**
     * The angle override for magenta ink. (Range: 0 to 360)
     * @type {number}
     */
    magentaAngle: undefined,


    /**
     * The frequency override for magenta ink. (Range: 1 to 500)
     * @type {number}
     */
    magentaFrequency: undefined,


    /**
     * If true, prints the yellow ink. Note: Valid only when trapping is off.
     * @type {boolean}
     */
    printYellow: undefined,


    /**
     * The angle override for yellow ink. (Range: 0 to 360)
     * @type {number}
     */
    yellowAngle: undefined,


    /**
     * The frequency override for yellow ink. (Range: 1 to 500)
     * @type {number}
     */
    yellowFrequency: undefined,


    /**
     * If true, prints the black ink. Note: Valid only when trapping is off.
     * @type {boolean}
     */
    printBlack: undefined,


    /**
     * The angle override for black ink. (Range: 0 to 360)
     * @type {number}
     */
    blackAngle: undefined,


    /**
     * The frequency override for black ink. (Range: 1 to 500)
     * @type {number}
     */
    blackFrequency: undefined,


    /**
     * The image data sent to the printer or file.
     * @type {ImageDataTypes}
     */
    sendImageData: ImageDataTypes,


    /**
     * Controls how fonts are downloaded to the printer.
     * @type {FontDownloading}
     */
    fontDownloading: FontDownloading,


    /**
     * If true, downloads all fonts listed in the selected PPD. Valid only when font downloading is complete or subset.
     * @type {boolean}
     */
    downloadPPDFonts: undefined,


    /**
     * The PostScript level of the printer.
     * @type {PostScriptLevels}
     */
    postscriptLevel: PostScriptLevels,


    /**
     * The format in which to send image data to the printer.
     * @type {DataFormat}
     */
    dataFormat: DataFormat,


    /**
     * The source of the color management system. Note: Valid only when use color management is true.
     * @type {SourceSpaces}
     */
    sourceSpace: SourceSpaces,


    /**
     * The color profile. Can return: Profile enumerator or String.
     * @type {varies=any}
     */
    profile: undefined,


    /**
     * The color-rendering dictionary (CRD), specified as a CRD name or an enumeration value. Note: Valid only when use color management is true. Can return: ColorRenderingDictionary enumerator or String.
     * @type {varies=any}
     */
    crd: undefined,


    /**
     * The rendering intent. Note: Valid only when use color management is true.
     * @type {RenderingIntent}
     */
    intent: RenderingIntent,


    /**
     * If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments. For information on linking files using OPI comments, see omit EPS, omit PDF, or omit bitmaps.
     * @type {boolean}
     */
    opiImageReplacement: undefined,


    /**
     * If true, replaces EPS images with OPI links.
     * @type {boolean}
     */
    omitEPS: undefined,


    /**
     * If true, replaces PDF images with OPI links.
     * @type {boolean}
     */
    omitPDF: undefined,


    /**
     * If true, replaces bitmap images with OPI links.
     * @type {boolean}
     */
    omitBitmaps: undefined,


    /**
     * The name of the transparency flattener preset.
     * @type {string}
     */
    flattenerPresetName: undefined,


    /**
     * If true, ignores flattener spread overrides.
     * @type {boolean}
     */
    ignoreSpreadOverrides: undefined,


    /**
     * If true, forces all bleed area settings to be the same, using the most recent bleed measurement setting. If false, allows bleed top, bleed bottom, bleed inside, and bleed outside to have different measurements.
     * @type {boolean}
     */
    bleedChain: undefined,


    /**
     * If true, uses bitmap printing.
     * @type {boolean}
     */
    bitmapPrinting: undefined,


    /**
     * The resolution for bitmap printing. (Range: 72 to 1200) Note: Valid when bitmap printing is true.
     * @type {number}
     */
    bitmapResolution: undefined,


    /**
     * The layers to print.
     * @type {PrintLayerOptions}
     */
    printLayers: PrintLayerOptions,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the PrinterPreset.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Duplicates the PrinterPreset.
     *
     * @return PrinterPreset
     */
    duplicate: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the PrinterPreset.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PrinterPreset
     */
    getElements: function () {
        
    },


    /**
     * Retrieves the object specifier.
     *
     * @return string
     */
    toSpecifier: function () {
        
    },


    /**
     * Adds an event listener.
     *
     * @param {string} [eventType] The event type.
     * @param {varies=any} [handler] The event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return EventListener
     */
    addEventListener: function (eventType, handler, captures) {
        
    },


    /**
     * Removes the event listener.
     *
     * @param {string} [eventType] The registered event type.
     * @param {varies=any} [handler] The registered event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return boolean
     */
    removeEventListener: function (eventType, handler, captures) {
        
    },


};

