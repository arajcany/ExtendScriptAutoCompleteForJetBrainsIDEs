/*
 * A master spread.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var MasterSpread = {


    /**
     * The name of the MasterSpread.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * Lists all page items contained by the MasterSpread.
     * @type {PageItem}
     * @readonly
     */
    allPageItems: PageItem,


    /**
     * Lists all graphics contained by the MasterSpread.
     * @type {Graphic}
     * @readonly
     */
    allGraphics: Graphic,


    /**
     * The object timing settings.
     * @type {TimingSetting}
     * @readonly
     */
    timingSettings: TimingSetting,


    /**
     * The unique ID of the MasterSpread.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the MasterSpread (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the MasterSpread within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of pages.
     * @type {Pages}
     * @readonly
     */
    pages: Pages,


    /**
     * A collection of ellipses.
     * @type {Ovals}
     * @readonly
     */
    ovals: Ovals,


    /**
     * The spline items collection.
     * @type {SplineItems}
     * @readonly
     */
    splineItems: SplineItems,


    /**
     * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,


    /**
     * A collection of rectangles.
     * @type {Rectangles}
     * @readonly
     */
    rectangles: Rectangles,


    /**
     * A collection of graphic lines.
     * @type {GraphicLines}
     * @readonly
     */
    graphicLines: GraphicLines,


    /**
     * A collection of text frames.
     * @type {TextFrames}
     * @readonly
     */
    textFrames: TextFrames,


    /**
     * A collection of polygons.
     * @type {Polygons}
     * @readonly
     */
    polygons: Polygons,


    /**
     * A collection of endnote text frames.
     * @type {EndnoteTextFrames}
     * @readonly
     */
    endnoteTextFrames: EndnoteTextFrames,


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
     * A collection of guides.
     * @type {Guides}
     * @readonly
     */
    guides: Guides,


    /**
     * A collection of groups.
     * @type {Groups}
     * @readonly
     */
    groups: Groups,


    /**
     * EPSTexts
     * @type {EPSTexts}
     * @readonly
     */
    epstexts: EPSTexts,


    /**
     * A collection of form fields.
     * @type {FormFields}
     * @readonly
     */
    formFields: FormFields,


    /**
     * A collection of buttons.
     * @type {Buttons}
     * @readonly
     */
    buttons: Buttons,


    /**
     * A collection of multi-state objects.
     * @type {MultiStateObjects}
     * @readonly
     */
    multiStateObjects: MultiStateObjects,


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
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * The color label of the MasterSpread, specified either as  an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or PageColorOptions enumerator.
     * @type {varies=any}
     */
    pageColor: undefined,


    /**
     * The prefix of the master spread name.
     * @type {string}
     */
    namePrefix: undefined,


    /**
     * The name of the master spread.
     * @type {string}
     */
    baseName: undefined,


    /**
     * If true, displays master page items on document pages in the spread.
     * @type {boolean}
     */
    showMasterItems: undefined,


    /**
     * The master spread applied to the MasterSpread. Can also accept: NothingEnum enumerator.
     * @type {MasterSpread}
     */
    appliedMaster: MasterSpread,


    /**
     * The primary text frame through which text flows on the MasterSpread. Must be a text frame or a type on a path spline. Can also accept: NothingEnum enumerator.
     * @type {PageItem}
     */
    primaryTextFrame: PageItem,


    /**
     * The IDML component name of the MasterSpread.
     * @type {string}
     */
    idmlComponentName: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Duplicates the spread.
     *
     * @param {LocationOptions} [to] The location of the spread relative to the reference object or within the document. (Optional) (default: LocationOptions.AT_END)
     * @param {varies=any} [reference] The reference object. Note: Required only when the to parameter specifies before or after. Can accept: MasterSpread, Document or MasterSpread. (Optional)
     * @return varies=any
     */
    duplicate: function (to, reference) {
        
    },


    /**
     * Deprecated: Use contentPlace method. Original Description: Create a linked story and place it into the target.
     *
     * @param {Story} [parentStory] The story to place and link from.
     * @param {Measurement Unit (Number or String)=any} [placePoint] The point at which to place (Optional)
     * @param {Layer} [destinationLayer] The layer on which to place (Optional)
     * @param {boolean} [showingOptions] Whether to display the link options dialog (Optional) (default: false)
     * @return Story
     */
    placeAndLink: function (parentStory, placePoint, destinationLayer, showingOptions) {
        
    },


    /**
     * Places the file.
     *
     * @param {File} [fileName] The file to place
     * @param {Measurement Unit (Number or String)=any} [placePoint] The point at which to place (Optional)
     * @param {Layer} [destinationLayer] The layer on which to place (Optional)
     * @param {boolean} [showingOptions] Whether to display the import options dialog (Optional) (default: false)
     * @param {boolean} [autoflowing] Whether to autoflow placed text (Optional) (default: false)
     * @param {Object} [withProperties] Initial values for properties of the placed object(s) (Optional)
     * @return varies=any
     */
    place: function (fileName, placePoint, destinationLayer, showingOptions, autoflowing, withProperties) {
        
    },


    /**
     * Deletes the MasterSpread.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Removes the override from a previously overridden master page item.
     *
     * @return undefined
     */
    removeOverride: function () {
        
    },


    /**
     * Detaches an overridden master page item from the master page.
     *
     * @return undefined
     */
    detach: function () {
        
    },


    /**
     * Selects the object.
     *
     * @param {SelectionOptions} [existingSelection] The selection status of the MasterSpread in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
    },


    /**
     * Creates multiple guides on all pages of the spread.
     *
     * @param {number} [numberOfRows] The number of rows to create on each page. (Optional) (default: 0)
     * @param {number} [numberOfColumns] The number of columns to create on each page.  (Optional) (default: 0)
     * @param {Measurement Unit (Number or String)=any} [rowGutter] The height of the gutter between rows. (Optional) (default: 0)
     * @param {Measurement Unit (Number or String)=any} [columnGutter] The width of the gutter between columns. (Optional) (default: 0)
     * @param {varies=any} [guideColor] The color to make the guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can accept: Array of 3 Reals (0 - 255) or UIColors enumerator. (Optional)
     * @param {boolean} [fitMargins] If true, the row height and column width are calculated based on the space within the page margins. If false, row height and column width are calculated based on the full page. (Optional) (default: false)
     * @param {boolean} [removeExisting] If true, removes existing guides when creating new ones. (Optional) (default: false)
     * @param {Layer} [layer] The layer on which to create the guides. (Optional)
     * @return undefined
     */
    createGuides: function (numberOfRows, numberOfColumns, rowGutter, columnGutter, guideColor, fitMargins, removeExisting, layer) {
        
    },


    /**
     * Transform the page item.
     *
     * @param {CoordinateSpaces} [inXYZ] The coordinate space to use
     * @param {varies=any} [from] The temporary origin during the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
     * @param {varies=any} [withMatrix] Transform matrix. Can accept: Array of 6 Reals or TransformationMatrix.
     * @param {varies=any} [replacingCurrent] Transform components to consider; providing this optional parameter causes the target's existing transform components to be replaced with new values.  Without this parameter, the given matrix is concatenated onto the target's existing transform combining the effect of the two. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional)
     * @param {boolean} [consideringRulerUnits] If true then a ruler based origin is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. (Optional) (default: false)
     * @return undefined
     */
    transform: function (inXYZ, from, withMatrix, replacingCurrent, consideringRulerUnits) {
        
    },


    /**
     * Get the transformation values of the page item.
     *
     * @param {CoordinateSpaces} [inXYZ] The coordinate space to use
     * @return TransformationMatrix
     */
    transformValuesOf: function (inXYZ) {
        
    },


    /**
     * Get the coordinates of the given location in the specified coordinate system.
     *
     * @param {varies=any} [location] The location requested. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
     * @param {CoordinateSpaces} [inXYZ] The coordinate space to use.
     * @param {boolean} [consideringRulerUnits] If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. (Optional) (default: false)
     * @return varies=any
     */
    resolve: function (location, inXYZ, consideringRulerUnits) {
        
    },


    /**
     * Duplicate an object and place it into the target.
     *
     * @param {PageItem} [pageItems] One or more page items to place or load
     * @param {boolean} [linkPageItems] Whether to link pageItems in content placer (if true it will override link stories value) (Optional) (default: false)
     * @param {boolean} [linkStories] Whether to link stories in content placer (only applicable for single story, pageItem links will also be created in case of more than one item) (Optional) (default: false)
     * @param {boolean} [mapStyles] Whether to map styles in content placer (Optional) (default: false)
     * @param {Measurement Unit (Number or String)=any} [placePoint] The point at which to place (Optional)
     * @param {Layer} [destinationLayer] The layer on which to place (Optional)
     * @param {boolean} [showingOptions] Whether to display the link options dialog (Optional) (default: false)
     * @return varies=any
     */
    contentPlace: function (pageItems, linkPageItems, linkStories, mapStyles, placePoint, destinationLayer, showingOptions) {
        
    },


    /**
     * Sets the label to the value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @param {string} [value] The value.
     * @return undefined
     */
    insertLabel: function (key, value) {
        
    },


    /**
     * Gets the label value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @return string
     */
    extractLabel: function (key) {
        
    },


    /**
     * Generates a string which, if executed, will return the MasterSpread.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return MasterSpread
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

