/*
 * Represents the place gun.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PlaceGun = {


    /**
     * Whether the place gun is currently loaded with content for placing.
     * @type {boolean}
     * @readonly
     */
    loaded: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PlaceGun (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * A collection of IDML snippets.
     * @type {Snippets}
     * @readonly
     */
    snippets: Snippets,


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
     * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,


    /**
     * A collection of text frames.
     * @type {TextFrames}
     * @readonly
     */
    textFrames: TextFrames,


    /**
     * A collection of rectangles.
     * @type {Rectangles}
     * @readonly
     */
    rectangles: Rectangles,


    /**
     * The spline items collection.
     * @type {SplineItems}
     * @readonly
     */
    splineItems: SplineItems,


    /**
     * A collection of ellipses.
     * @type {Ovals}
     * @readonly
     */
    ovals: Ovals,


    /**
     * A collection of graphic lines.
     * @type {GraphicLines}
     * @readonly
     */
    graphicLines: GraphicLines,


    /**
     * A collection of polygons.
     * @type {Polygons}
     * @readonly
     */
    polygons: Polygons,


    /**
     * A collection of groups.
     * @type {Groups}
     * @readonly
     */
    groups: Groups,


    /**
     * A collection of buttons.
     * @type {Buttons}
     * @readonly
     */
    buttons: Buttons,


    /**
     * A collection of form fields.
     * @type {FormFields}
     * @readonly
     */
    formFields: FormFields,


    /**
     * A collection of multi-state objects.
     * @type {MultiStateObjects}
     * @readonly
     */
    multiStateObjects: MultiStateObjects,


    /**
     * EPSTexts
     * @type {EPSTexts}
     * @readonly
     */
    epstexts: EPSTexts,


    /**
     * A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).
     * @type {Images}
     * @readonly
     */
    images: Images,


    /**
     * A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).
     * @type {Graphics}
     * @readonly
     */
    graphics: Graphics,


    /**
     * A collection of EPS files.
     * @type {EPSs}
     * @readonly
     */
    epss: EPSs,


    /**
     * A collection of WMF graphics.
     * @type {WMFs}
     * @readonly
     */
    wmfs: WMFs,


    /**
     * A collection of PICT graphics.
     * @type {PICTs}
     * @readonly
     */
    picts: PICTs,


    /**
     * A collection of PDF files.
     * @type {PDFs}
     * @readonly
     */
    pdfs: PDFs,


    /**
     * Imported InDesign pages.
     * @type {ImportedPages}
     * @readonly
     */
    importedPages: ImportedPages,


    /**
     * A collection of checkboxes.
     * @type {CheckBoxes}
     * @readonly
     */
    checkBoxes: CheckBoxes,


    /**
     * A collection of comboboxes.
     * @type {ComboBoxes}
     * @readonly
     */
    comboBoxes: ComboBoxes,


    /**
     * A collection of listboxes.
     * @type {ListBoxes}
     * @readonly
     */
    listBoxes: ListBoxes,


    /**
     * A collection of radio buttons.
     * @type {RadioButtons}
     * @readonly
     */
    radioButtons: RadioButtons,


    /**
     * A collection of text boxes.
     * @type {TextBoxes}
     * @readonly
     */
    textBoxes: TextBoxes,


    /**
     * A collection of signature fields.
     * @type {SignatureFields}
     * @readonly
     */
    signatureFields: SignatureFields,


    /**
     * A collection of SVG files.
     * @type {SVGs}
     * @readonly
     */
    svgs: SVGs,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Delete the contents of the place gun.
     *
     * @return undefined
     */
    abortPlaceGun: function () {
        
    },


    /**
     * Rotate the contents of the place gun.
     *
     * @param {RotationDirection} [direction] Which direction to rotate the contents (Optional) (default: RotationDirection.FORWARD)
     * @return undefined
     */
    rotate: function (direction) {
        
    },


    /**
     * Load the place gun with one or more files.
     *
     * @param {varies=any} [fileName] One or more files to place. Can accept: File or Array of Files.
     * @param {boolean} [showingOptions] Whether to display the import options dialog (Optional) (default: false)
     * @param {Object} [withProperties] Initial values for properties of the placed object(s) (Optional)
     * @return undefined
     */
    loadPlaceGun: function (fileName, showingOptions, withProperties) {
        
    },


    /**
     * Generates a string which, if executed, will return the PlaceGun.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PlaceGun
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

