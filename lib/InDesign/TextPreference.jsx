/*
 * Text preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TextPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TextPreference (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


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
     * If true, converts straight quotes to typographic quotes.
     * @type {boolean}
     */
    typographersQuotes: undefined,


    /**
     * If true, highlights hyphenation and justification rule violations in the text.
     * @type {boolean}
     */
    highlightHjViolations: undefined,


    /**
     * If true, highlights paragraphs that violate keep options.
     * @type {boolean}
     */
    highlightKeeps: undefined,


    /**
     * If true, highlights substituted glyphs.
     * @type {boolean}
     */
    highlightSubstitutedGlyphs: undefined,


    /**
     * If true, highlights custom kerned or tracked characters.
     * @type {boolean}
     */
    highlightCustomSpacing: undefined,


    /**
     * If true, highlights missing fonts.
     * @type {boolean}
     */
    highlightSubstitutedFonts: undefined,


    /**
     * If true, automatically selects the correct optical size.
     * @type {boolean}
     */
    useOpticalSize: undefined,


    /**
     * If true, applies the leading changes made to a text range to the entire paragraph. If false, applies leading changes only to the text range.
     * @type {boolean}
     */
    useParagraphLeading: undefined,


    /**
     * The size of superscript characters, specified as a percentage of the font size. (Range: 0 to 200)
     * @type {number}
     */
    superscriptSize: undefined,


    /**
     * The position of superscript characters, specified as a percentage of the regular leading. (Range: -500 to 500)
     * @type {number}
     */
    superscriptPosition: undefined,


    /**
     * The size of subscript characters, specified as a percentage of the font size. (Range: 0 to 200)
     * @type {number}
     */
    subscriptSize: undefined,


    /**
     * The position of subscript characters, specified as a percentage of the regular leading. (Range: -500 to 500)
     * @type {number}
     */
    subscriptPosition: undefined,


    /**
     * The size of text formatted as small caps, specified as a percentage of the font size. (Range: 1 to 200)
     * @type {number}
     */
    smallCap: undefined,


    /**
     * The amount that leading increases each time the user presses the option/alt-up arrow keys or decreases each time the user presses the option/alt-down arrow keys. (Range: .001 to 100)
     * @type {Measurement Unit (Number or String)=any}
     */
    leadingKeyIncrement: undefined,


    /**
     * The amount that the baseline shift increases each time the user presses the option/alt-shift-up arrow keys or decreases each time the user presses the option/alt-shift-down arrow keys. (Range: .001 to 100)
     * @type {Measurement Unit (Number or String)=any}
     */
    baselineShiftKeyIncrement: undefined,


    /**
     * The amount the kerning value per 1000 ems increases each time the user presses of the option/alt-right arrow keys or decreases each time the user presses the option/alt-left arrow keys. (Range: 1 to 100)
     * @type {number}
     */
    kerningKeyIncrement: undefined,


    /**
     * If true, shows hidden characters.
     * @type {boolean}
     */
    showInvisibles: undefined,


    /**
     * If true, justifies text around text wrap objects.
     * @type {boolean}
     */
    justifyTextWraps: undefined,


    /**
     * If true, moves wrapped text to the next available leading increment below the text wrap objects (skip by leading).
     * @type {boolean}
     */
    abutTextToTextWrap: undefined,


    /**
     * If true, text wrap does not affect text on layers above the layer that contains the text wrap object. If false, text wrap affects text on all visible layers.
     * @type {boolean}
     */
    zOrderTextWrap: undefined,


    /**
     * If true, links placed text files and spreadsheet files. If false, embeds the files.
     * @type {boolean}
     */
    linkTextFilesWhenImporting: undefined,


    /**
     * If true, uses on-screen highlighting to identify kinsoku.
     * @type {boolean}
     */
    highlightKinsoku: undefined,


    /**
     * If true, Japanese composer treats quotes as half width and rotates them in vertical.
     * @type {boolean}
     */
    quoteCharactersRotatedInVertical: undefined,


    /**
     * If this is True, and if Smart text reflow is also enabled, then this will synchronously add/delete pages after text reflowing
     * @type {boolean}
     */
    smartTextReflowSync: undefined,


    /**
     * If this bool is set to true, shaping of Indic & Latin characters will be done through Harfbuzz Shaping engine, instead of Lipika.
     * @type {boolean}
     */
    shapeIndicAndLatinWithHarbuzz: undefined,


    /**
     * If true, reverses X and Y scaling on Roman characters in vertical text.
     * @type {boolean}
     */
    useNewVerticalScaling: undefined,


    /**
     * If true, uses the glyph CID to get the mojikumi class of the character.
     * @type {boolean}
     */
    useCidMojikumi: undefined,


    /**
     * If true, highlights character and paragraph styles with colored backgrounds.
     * @type {boolean}
     */
    enableStylePreviewMode: undefined,


    /**
     * If true, enable automatic adding and deleting of pages in response to text reflow.
     * @type {boolean}
     */
    smartTextReflow: undefined,


    /**
     * Specifies where to insert new pages in response to overset text.
     * @type {AddPageOptions}
     */
    addPages: AddPageOptions,


    /**
     * Restrict the adding of pages during smart text reflow to overridden master text frames.
     * @type {boolean}
     */
    limitToMasterTextFrames: undefined,


    /**
     * Preserve left-hand and right-and pages when facing pages are enabled during smart text reflow.
     * @type {boolean}
     */
    preserveFacingPageSpreads: undefined,


    /**
     * Enable auto-deletion of pages containing empty threaded text frames.
     * @type {boolean}
     */
    deleteEmptyPages: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the TextPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TextPreference
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

