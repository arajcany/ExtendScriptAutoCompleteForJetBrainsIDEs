/*
 * A page.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Page = {


    /**
     * The alternate layout section to which the page belongs.
     * @type {Section}
     * @readonly
     */
    appliedAlternateLayout: Section,


    /**
     * Margin preference settings.
     * @type {MarginPreference}
     * @readonly
     */
    marginPreferences: MarginPreference,


    /**
     * The side of the binding spine on which to place the page within the spread.
     * @type {PageSideOptions}
     * @readonly
     */
    side: PageSideOptions,


    /**
     * The name of the Page.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The section to which the page belongs.
     * @type {Section}
     * @readonly
     */
    appliedSection: Section,


    /**
     * The index of the Page within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * The sequential number of the page within the document.
     * @type {number}
     * @readonly
     */
    documentOffset: undefined,


    /**
     * The bounds of the Page, in the format [y1, x1, y2, x2].
     * @type {Measurement Unit (Number or String)=any}
     * @readonly
     */
    bounds: undefined,


    /**
     * The items on a specified document page that originated on the applied master page and have not been overridden or detached. Can return: Array of PageItems, Guides, Graphics, Movies or Sounds.
     * @type {varies=any}
     * @readonly
     */
    masterPageItems: undefined,


    /**
     * Lists all page items contained by the Page.
     * @type {PageItem}
     * @readonly
     */
    allPageItems: PageItem,


    /**
     * Lists all graphics contained by the Page.
     * @type {Graphic}
     * @readonly
     */
    allGraphics: Graphic,


    /**
     * Default grid properties. Note: Applies to named, layout, and frame (story) grids.
     * @type {GridDataInformation}
     * @readonly
     */
    gridData: GridDataInformation,


    /**
     * The unique ID of the Page.
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
     * The parent of the Page (a Spread or MasterSpread).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


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
     * layout rule
     * @type {LayoutRuleOptions}
     */
    layoutRule: LayoutRuleOptions,


    /**
     * snapshot blending mode
     * @type {SnapshotBlendingModes}
     */
    snapshotBlendingMode: SnapshotBlendingModes,


    /**
     * optional page for HTML5 pagination. Obsolete after CS6
     * @type {boolean}
     */
    optionalPage: undefined,


    /**
     * The trap preset applied to the page. Can also accept: String.
     * @type {TrapPreset}
     */
    appliedTrapPreset: TrapPreset,


    /**
     * The color label of the Page, specified either as  an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or PageColorOptions enumerator.
     * @type {varies=any}
     */
    pageColor: undefined,


    /**
     * The master spread applied to the Page. Can also accept: NothingEnum enumerator.
     * @type {MasterSpread}
     */
    appliedMaster: MasterSpread,


    /**
     * The transform applied to the master page before it is applied to Page.
     * @type {TransformationMatrix}
     */
    masterPageTransform: TransformationMatrix,


    /**
     * The order in which the focus moves to different form fields in the PDF when the tab key is pressed. Can return: Array of Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, TextBoxes or SignatureFields.
     * @type {varies=any}
     */
    tabOrder: undefined,


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
     * Adjust the existing layout according to new page size, bleed and margin values. The first parameter is a plain object with key value pairs for properties affected. Permissible keys are width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. The values can be specified as decimal numbers in units of Pt or as a string having a measurement value such as '1 in'. Not all properties need to be specified, only the values that need updation. Notice that when dealing with individual pages rather than the whole document, bleed changes has no effect. E.g. - app.activeDocument.adjustLayout({width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout({rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout({width:'400px', leftMargin: '10px'})
     *
     * @param {Object} [adoptTo] Change values - see functin definition for details
     * @param {Page} [affectedPages] The collection of Page objects to affect (optional). Has no effect if function is called from Page (Optional)
     * @return undefined
     */
    adjustLayout: function (adoptTo, affectedPages) {
        
    },


    /**
     * Places the XML element onto a page. If the place point is above an existing page item, place the XML element into the page item.
     *
     * @param {XMLElement} [using] The XML element to place.
     * @param {Measurement Unit (Number or String)=any} [placePoint] The point at which to place the object, specified in the format [x, y].
     * @param {boolean} [autoflowing] If true, autoflows placed text. (Optional) (default: false)
     * @return PageItem
     */
    placeXML: function (using, placePoint, autoflowing) {
        
    },


    /**
     * Replaces the content of XML element with content imported from a file.
     *
     * @param {string} [using] The file path to the import file.
     * @param {string} [relativeBasePath] Base path used to resolve relative paths. (Optional)
     * @return PageItem
     */
    setContent: function (using, relativeBasePath) {
        
    },


    /**
     * Create a snapshot of the layout for the current Page size and shape.
     *
     * @return undefined
     */
    snapshotCurrentLayout: function () {
        
    },


    /**
     * Delete the snapshot of the layout for the current Page size and shape.
     *
     * @return undefined
     */
    deleteLayoutSnapshot: function () {
        
    },


    /**
     * Delete all layout snapshots for this Page.
     *
     * @return undefined
     */
    deleteAllLayoutSnapshots: function () {
        
    },


    /**
     * Moves the page.
     *
     * @param {LocationOptions} [to] The new location of the page relative to the reference object or within the document or spread.  (Optional) (default: LocationOptions.AT_END)
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter value specifies before or after. Can accept: Page or Spread. (Optional)
     * @param {BindingOptions} [binding] The location of the binding spine in spreads. (Optional) (default: BindingOptions.DEFAULT_VALUE)
     * @return Page
     */
    move: function (to, reference, binding) {
        
    },


    /**
     * Deletes the Page.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Duplicates the page.
     *
     * @param {LocationOptions} [to] The location at which to place the duplicate page relative to the reference object or within the document or spread.  (Optional) (default: LocationOptions.AT_END)
     * @param {varies=any} [reference] The reference object. Note: Required when the to value specifies before or after. Can accept: Page or Spread. (Optional)
     * @return Page
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
     * @param {SelectionOptions} [existingSelection] The selection status of the Page in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
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
     * Move the bounding box of the page item
     *
     * @param {varies=any} [inXYZ] The bounding box to resize. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator.
     * @param {varies=any} [opposingCorners] Opposing corners of new bounding box in the given coordinate space
     * @return undefined
     */
    reframe: function (inXYZ, opposingCorners) {
        
    },


    /**
     * Resize the page item.
     *
     * @param {varies=any} [inXYZ] The bounding box to resize. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator.
     * @param {varies=any} [from] The transform origin. Legal specifications: relative to bounding box: anchor | {anchor | {x,y}, bounds kind [, coordinate space]}; relative to coordinate space: {x,y} | {{x,y}[, coordinate space]}; relative to layout window ruler: {{x,y}, page index | bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
     * @param {ResizeMethods} [by] How the current dimensions are affected by the given values
     * @param {varies=any} [values] The width and height values. Legal dimensions specifications: {x, y [, coordinate space]}, {x, resize constraint [, coordinate space]}, or {resize constraint, y [, coordinate space]}; where x and y are real numbers and coordinate space is used to determine _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators.
     * @param {boolean} [resizeIndividually] If false and multiple page items are targeted, the new dimensions are attained only by moving the individual items rather than resizing them. (Optional) (default: true)
     * @param {boolean} [consideringRulerUnits] If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. (Optional) (default: false)
     * @return undefined
     */
    resize: function (inXYZ, from, by, values, resizeIndividually, consideringRulerUnits) {
        
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
     * Generates a string which, if executed, will return the Page.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Page
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

