/*
 * A listbox.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var ListBox = {


    /**
     * Dispatched before a ListBox is placed. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_PLACE: beforePlace,


    /**
     * Dispatched after a ListBox is placed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_PLACE: afterPlace,


    /**
     * Anchored object settings.
     * @type {AnchoredObjectSetting}
     * @readonly
     */
    anchoredObjectSettings: AnchoredObjectSetting,


    /**
     * The text wrap preference properties that define the default formatting for wrapping text around objects.
     * @type {TextWrapPreference}
     * @readonly
     */
    textWrapPreferences: TextWrapPreference,


    /**
     * The XML element associated with the ListBox.
     * @type {XMLItem}
     * @readonly
     */
    associatedXMLElement: XMLItem,


    /**
     * Transparency settings.
     * @type {TransparencySetting}
     * @readonly
     */
    transparencySettings: TransparencySetting,


    /**
     * Transparency settings for the stroke.
     * @type {StrokeTransparencySetting}
     * @readonly
     */
    strokeTransparencySettings: StrokeTransparencySetting,


    /**
     * Transparency settings for the fill applied to the ListBox.
     * @type {FillTransparencySetting}
     * @readonly
     */
    fillTransparencySettings: FillTransparencySetting,


    /**
     * Transparency settings for the content of the ListBox.
     * @type {ContentTransparencySetting}
     * @readonly
     */
    contentTransparencySettings: ContentTransparencySetting,


    /**
     * Linked Page Item options
     * @type {LinkedPageItemOption}
     * @readonly
     */
    linkedPageItemOptions: LinkedPageItemOption,


    /**
     * If true, the object originated on a master spread and was overridden. If false, the object either originated on a master spread and was not overridden, or the object did not originate on a master page.
     * @type {boolean}
     * @readonly
     */
    overridden: undefined,


    /**
     * An object that originated on a master page and has been overridden. Can return: PageItem, Guide, Graphic, Movie or Sound.
     * @type {varies=any}
     * @readonly
     */
    overriddenMasterPageItem: undefined,


    /**
     * Lists all page items contained by the ListBox.
     * @type {PageItem}
     * @readonly
     */
    allPageItems: PageItem,


    /**
     * Lists all graphics contained by the ListBox.
     * @type {Graphic}
     * @readonly
     */
    allGraphics: Graphic,


    /**
     * The page on which this page item appears.
     * @type {Page}
     * @readonly
     */
    parentPage: Page,


    /**
     * The page item animation settings.
     * @type {AnimationSetting}
     * @readonly
     */
    animationSettings: AnimationSetting,


    /**
     * The object timing settings.
     * @type {TimingSetting}
     * @readonly
     */
    timingSettings: TimingSetting,


    /**
     * The list of all articles this page item is part of
     * @type {Article}
     * @readonly
     */
    allArticles: Article,


    /**
     * The unique ID of the ListBox.
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
     * The parent of the ListBox (a Snippet, PlaceGun, Character, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval or Group).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the ListBox within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * A collection of SVG files.
     * @type {SVGs}
     * @readonly
     */
    svgs: SVGs,


    /**
     * A collection of submit form behavior objects.
     * @type {SubmitFormBehaviors}
     * @readonly
     */
    submitFormBehaviors: SubmitFormBehaviors,


    /**
     * A collection of behavior objects.
     * @type {Behaviors}
     * @readonly
     */
    behaviors: Behaviors,


    /**
     * A collection of clear form behavior objects.
     * @type {ClearFormBehaviors}
     * @readonly
     */
    clearFormBehaviors: ClearFormBehaviors,


    /**
     * A collection of print form behavior objects.
     * @type {PrintFormBehaviors}
     * @readonly
     */
    printFormBehaviors: PrintFormBehaviors,


    /**
     * A collection of view zoom behavior objects.
     * @type {ViewZoomBehaviors}
     * @readonly
     */
    viewZoomBehaviors: ViewZoomBehaviors,


    /**
     * A collection of sound behavior objects.
     * @type {SoundBehaviors}
     * @readonly
     */
    soundBehaviors: SoundBehaviors,


    /**
     * A collection of show/hide fields behavior objects.
     * @type {ShowHideFieldsBehaviors}
     * @readonly
     */
    showHideFieldsBehaviors: ShowHideFieldsBehaviors,


    /**
     * A collection of movie behavior objects.
     * @type {MovieBehaviors}
     * @readonly
     */
    movieBehaviors: MovieBehaviors,


    /**
     * A collection of goto anchor behavior objects.
     * @type {GotoAnchorBehaviors}
     * @readonly
     */
    gotoAnchorBehaviors: GotoAnchorBehaviors,


    /**
     * A collection of goto first page behavior objects.
     * @type {GotoFirstPageBehaviors}
     * @readonly
     */
    gotoFirstPageBehaviors: GotoFirstPageBehaviors,


    /**
     * A collection of goto last page behavior objects.
     * @type {GotoLastPageBehaviors}
     * @readonly
     */
    gotoLastPageBehaviors: GotoLastPageBehaviors,


    /**
     * A collection of goto next page behavior objects.
     * @type {GotoNextPageBehaviors}
     * @readonly
     */
    gotoNextPageBehaviors: GotoNextPageBehaviors,


    /**
     * A collection of goto previous page behavior objects.
     * @type {GotoPreviousPageBehaviors}
     * @readonly
     */
    gotoPreviousPageBehaviors: GotoPreviousPageBehaviors,


    /**
     * A collection of goto next view behavior objects.
     * @type {GotoNextViewBehaviors}
     * @readonly
     */
    gotoNextViewBehaviors: GotoNextViewBehaviors,


    /**
     * A collection of goto previous view behavior objects.
     * @type {GotoPreviousViewBehaviors}
     * @readonly
     */
    gotoPreviousViewBehaviors: GotoPreviousViewBehaviors,


    /**
     * A collection of goto URL behavior objects.
     * @type {GotoURLBehaviors}
     * @readonly
     */
    gotoURLBehaviors: GotoURLBehaviors,


    /**
     * A collection of open file behavior objects.
     * @type {OpenFileBehaviors}
     * @readonly
     */
    openFileBehaviors: OpenFileBehaviors,


    /**
     * The font style for the form field in the exported PDF.
     * @type {string}
     */
    fontStyle: undefined,


    /**
     * The font family for the form field in the exported PDF.
     * @type {string}
     */
    appliedFont: undefined,


    /**
     * If true, the form field is read only in the exported PDF.
     * @type {boolean}
     */
    readOnly: undefined,


    /**
     * If true, the form field is required in the exported PDF.
     * @type {boolean}
     */
    required: undefined,


    /**
     * If true, the form field/push button is printable in the exported PDF.
     * @type {boolean}
     */
    printableInPdf: undefined,


    /**
     * If true, the form field/push button is hidden until triggered in the exported PDF.
     * @type {boolean}
     */
    hiddenUntilTriggered: undefined,


    /**
     * The font size for the form field in the exported PDF.
     * @type {number}
     */
    fontSize: undefined,


    /**
     * If true, the choices would be sorted in the exported PDF.
     * @type {boolean}
     */
    sortChoices: undefined,


    /**
     * The list of choices for combo and list boxes in the exported PDF.
     * @type {string}
     */
    choiceList: undefined,


    /**
     * If true, the form field has right to left text enabled in the exported PDF.
     * @type {boolean}
     */
    rightToLeftField: undefined,


    /**
     * If true, the list box can have multiple items selected simultaneously in the exported PDF.
     * @type {boolean}
     */
    multipleSelection: undefined,


    /**
     * The index of the active state in the object's states collection.
     * @type {number}
     */
    activeStateIndex: undefined,


    /**
     * The name of the ListBox.
     * @type {string}
     */
    name: undefined,


    /**
     * The description of the ListBox.
     * @type {string}
     */
    description: undefined,


    /**
     * If true, the master page item can be overridden.
     * @type {boolean}
     */
    allowOverrides: undefined,


    /**
     * The left margin, width, and right margin constraints this item is subject to when using the object-based layout rule.
     * @type {DimensionsConstraints}
     */
    horizontalLayoutConstraints: DimensionsConstraints,


    /**
     * The top margin, height, and bottom margin constraints this item is subject to when using the object-based layout rule.
     * @type {DimensionsConstraints}
     */
    verticalLayoutConstraints: DimensionsConstraints,


    /**
     * The bounds of the ListBox excluding the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
     * @type {Measurement Unit (Number or String)=any}
     */
    geometricBounds: undefined,


    /**
     * The bounds of the ListBox including the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
     * @type {Measurement Unit (Number or String)=any}
     */
    visibleBounds: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the ListBox. . Can also accept: String.
     * @type {Swatch}
     */
    fillColor: Swatch,


    /**
     * The percent of tint to use in the ListBox's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    fillTint: undefined,


    /**
     * If true, the ListBox's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
     * @type {boolean}
     */
    overprintFill: undefined,


    /**
     * The weight (in points) to apply to the ListBox's stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    strokeWeight: undefined,


    /**
     * The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join.
     * @type {number}
     */
    miterLimit: 4,


    /**
     * The end shape of an open path.
     * @type {EndCap}
     */
    endCap: EndCap,


    /**
     * The corner join applied to the ListBox.
     * @type {EndJoin}
     */
    endJoin: EndJoin,


    /**
     * The name of the stroke style to apply. Can also accept: String.
     * @type {StrokeStyle}
     */
    strokeType: StrokeStyle,


    /**
     * The corner adjustment applied to the ListBox.
     * @type {StrokeCornerAdjustment}
     */
    strokeCornerAdjustment: StrokeCornerAdjustment,


    /**
     * The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3].
     * @type {Measurement Unit (Number or String)=any}
     */
    strokeDashAndGap: undefined,


    /**
     * The arrowhead applied to the start of the path.
     * @type {ArrowHead}
     */
    leftLineEnd: ArrowHead,


    /**
     * The arrowhead applied to the end of the path.
     * @type {ArrowHead}
     */
    rightLineEnd: ArrowHead,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the ListBox. Can also accept: String.
     * @type {Swatch}
     */
    strokeColor: Swatch,


    /**
     * The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    strokeTint: undefined,


    /**
     * The starting point (in page coordinates) of a gradient applied to the fill of the ListBox, in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    gradientFillStart: undefined,


    /**
     * The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the ListBox.
     * @type {Measurement Unit (Number or String)=any}
     */
    gradientFillLength: undefined,


    /**
     * The angle of a linear gradient applied to the fill of the ListBox. (Range: -180 to 180)
     * @type {number}
     */
    gradientFillAngle: undefined,


    /**
     * The starting point (in page coordinates) of a gradient applied to the stroke of the ListBox, in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    gradientStrokeStart: undefined,


    /**
     * The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the ListBox.
     * @type {Measurement Unit (Number or String)=any}
     */
    gradientStrokeLength: undefined,


    /**
     * The angle of a linear gradient applied to the stroke of the ListBox. (Range: -180 to 180)
     * @type {number}
     */
    gradientStrokeAngle: undefined,


    /**
     * If true, the ListBox's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
     * @type {boolean}
     */
    overprintStroke: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type.
     * @type {Swatch}
     */
    gapColor: Swatch,


    /**
     * The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    gapTint: undefined,


    /**
     * If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors.
     * @type {boolean}
     */
    overprintGap: undefined,


    /**
     * The stroke alignment applied to the ListBox.
     * @type {StrokeAlignment}
     */
    strokeAlignment: StrokeAlignment,


    /**
     * If true, the ListBox does not print.
     * @type {boolean}
     */
    nonprinting: undefined,


    /**
     * The layer that the ListBox is on.
     * @type {Layer}
     */
    itemLayer: Layer,


    /**
     * If true, the ListBox is locked.
     * @type {boolean}
     */
    locked: undefined,


    /**
     * Display performance options for the ListBox.
     * @type {DisplaySettingOptions}
     */
    localDisplaySetting: DisplaySettingOptions,


    /**
     * The rotatation angle of the ListBox. (Range: -360 to 360)
     * @type {number}
     */
    rotationAngle: undefined,


    /**
     * The skewing angle applied to the ListBox. (Range: -360 to 360)
     * @type {number}
     */
    shearAngle: undefined,


    /**
     * The horizontal scaling applied to the ListBox.
     * @type {number}
     */
    horizontalScale: undefined,


    /**
     * The vertical scaling applied to the ListBox.
     * @type {number}
     */
    verticalScale: undefined,


    /**
     * The rotation angle of the ListBox relative to its containing object. (Range: -360 to 360)
     * @type {number}
     */
    absoluteRotationAngle: undefined,


    /**
     * The skewing angle of the ListBox relative to its containing object. (Range: -360 to 360)
     * @type {number}
     */
    absoluteShearAngle: undefined,


    /**
     * The horizontal scale of the ListBox relative to its containing object.
     * @type {number}
     */
    absoluteHorizontalScale: undefined,


    /**
     * The vertical scale of the ListBox relative to its containing object.
     * @type {number}
     */
    absoluteVerticalScale: undefined,


    /**
     * The object style applied to the ListBox.
     * @type {ObjectStyle}
     */
    appliedObjectStyle: ObjectStyle,


    /**
     * The direction in which to flip the printed image.
     * @type {Flip}
     */
    flip: Flip,


    /**
     * Indicates whether the ListBox has been flipped independently of its parent object and, if yes, the direction in which the ListBox was flipped.
     * @type {Flip}
     */
    absoluteFlip: Flip,


    /**
     * If true, the ListBox is visible.
     * @type {boolean}
     */
    visible: undefined,


    /**
     * The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
     * @type {CornerOptions}
     */
    topLeftCornerOption: CornerOptions,


    /**
     * The shape to apply to the top right corner of rectangular shapes
     * @type {CornerOptions}
     */
    topRightCornerOption: CornerOptions,


    /**
     * The shape to apply to the bottom left corner of rectangular shapes.
     * @type {CornerOptions}
     */
    bottomLeftCornerOption: CornerOptions,


    /**
     * The shape to apply to the bottom right corner of rectangular shapes.
     * @type {CornerOptions}
     */
    bottomRightCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    topLeftCornerRadius: undefined,


    /**
     * The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    topRightCornerRadius: undefined,


    /**
     * The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomLeftCornerRadius: undefined,


    /**
     * The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomRightCornerRadius: undefined,


    /**
     * The arrowhead alignment applied to the ListBox.
     * @type {ArrowHeadAlignmentEnum}
     */
    arrowHeadAlignment: ArrowHeadAlignmentEnum,


    /**
     * The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000)
     * @type {number}
     */
    leftArrowHeadScale: undefined,


    /**
     * The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000)
     * @type {number}
     */
    rightArrowHeadScale: undefined,


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
     * Brings the ListBox to the front of its layer or in front of a particular item.
     *
     * @param {PageItem} [reference] The reference object to bring the object in front of (must have same parent) (Optional)
     * @return undefined
     */
    bringToFront: function (reference) {
        
    },


    /**
     * Sends the ListBox to the back of its layer or behind a particular item (must have same parent).
     *
     * @param {PageItem} [reference] The reference object to send the object behind (Optional)
     * @return undefined
     */
    sendToBack: function (reference) {
        
    },


    /**
     * Brings the ListBox forward one level in its layer.
     *
     * @return undefined
     */
    bringForward: function () {
        
    },


    /**
     * Sends the ListBox back one level in its layer.
     *
     * @return undefined
     */
    sendBackward: function () {
        
    },


    /**
     * Converts the ListBox to a different shape.
     *
     * @param {ConvertShapeOptions} [given] The ListBox's new shape.
     * @param {number} [numberOfSides] The number of sides for the resulting polygon. (Range: 3 to 100) (Optional)
     * @param {number} [insetPercentage] The star inset percentage for the resulting polygon. (Range: 0.0 to 100.0)  (Optional)
     * @param {Measurement Unit (Number or String)=any} [cornerRadius] The corner radius of the resulting rectangle. (Optional)
     * @return undefined
     */
    convertShape: function (given, numberOfSides, insetPercentage, cornerRadius) {
        
    },


    /**
     * Converts the button object to the page item currently in the active state. Page items from other states will be lost.
     *
     * @return undefined
     */
    convertToObject: function () {
        
    },


    /**
     * Stores the object in the specified library.
     *
     * @param {Library} [using] The library in which to store the object.
     * @param {Object} [withProperties] Initial values for properties of the new ListBox (Optional)
     * @return Asset
     */
    store: function (using, withProperties) {
        
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
     * Places XML content into the specified object. Note: Replaces any existing content.
     *
     * @param {XMLElement} [using] The XML element whose content you want to place.
     * @return undefined
     */
    placeXML: function (using) {
        
    },


    /**
     * Tag the object or the parent story using default tags defined in XML preference.
     *
     * @return undefined
     */
    autoTag: function () {
        
    },


    /**
     * Associates the page item with the specified XML element while preserving existing content.
     *
     * @param {XMLElement} [using] The XML element.
     * @return undefined
     */
    markup: function (using) {
        
    },


    /**
     * Finds objects that match the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return PageItem
     */
    findObject: function (reverseOrder) {
        
    },


    /**
     * Finds objects that match the find what value and replace the objects with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return PageItem
     */
    changeObject: function (reverseOrder) {
        
    },


    /**
     * Overrides a master page item and places the item on the document page as a new object.
     *
     * @param {Page} [destinationPage] The document page that contains the master page item to override.
     * @return varies=any
     */
    override: function (destinationPage) {
        
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
     * Deletes the ListBox.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Applies the specified fit option to content in a frame.
     *
     * @param {FitOptions} [given] The fit option to use.
     * @return undefined
     */
    fit: function (given) {
        
    },


    /**
     * Flips the ListBox.
     *
     * @param {Flip} [given] The axis around which to flip the ListBox.
     * @param {varies=any} [around] The point around which to flip the ListBox. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional)
     * @return undefined
     */
    flipItem: function (given, around) {
        
    },


    /**
     * Duplicates the ListBox at the specified location or offset.
     *
     * @param {varies=any} [to] The location of the new ListBox, specified in coordinates in the format [x, y]. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional)
     * @param {Measurement Unit (Number or String)=any} [by] Amount by which to offset the new ListBox from the original ListBox's position. (Optional)
     * @return PageItem
     */
    duplicate: function (to, by) {
        
    },


    /**
     * Moves the ListBox to a new location. Note: Either the 'to' or 'by' parameter is required; if both parameters are defined, only the to value is used.
     *
     * @param {varies=any} [to] The new location of the ListBox,in the format (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. (Optional)
     * @param {Measurement Unit (Number or String)=any} [by] The amount (in measurement units) to move the ListBox relative to its current position, in the format (x, y). (Optional)
     * @return undefined
     */
    move: function (to, by) {
        
    },


    /**
     * Applies the specified object style.
     *
     * @param {ObjectStyle} [using] The object style to apply.
     * @param {boolean} [clearingOverrides] If true, clears the ListBox's existing attributes before applying the style. (Optional) (default: true)
     * @param {boolean} [clearingOverridesThroughRootObjectStyle] If true, clears attributes and formatting applied to the ListBox that are not defined in the object style. (Optional) (default: false)
     * @return undefined
     */
    applyObjectStyle: function (using, clearingOverrides, clearingOverridesThroughRootObjectStyle) {
        
    },


    /**
     * Clear overrides for object style
     *
     * @return undefined
     */
    clearObjectStyleOverrides: function () {
        
    },


    /**
     * Clears transformations from the ListBox. Transformations include rotation, scaling, flipping, fitting, and shearing.
     *
     * @return undefined
     */
    clearTransformations: function () {
        
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
     * Apply an item's scaling to its content if possible.
     *
     * @param {number} [to] The scale factors to be left on the item.  The default is {1.0, 1.0}. (Optional)
     * @return undefined
     */
    redefineScaling: function (to) {
        
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
     * Move the bounding box of the page item
     *
     * @param {varies=any} [inXYZ] The bounding box to resize. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator.
     * @param {varies=any} [opposingCorners] Opposing corners of new bounding box in the given coordinate space
     * @return undefined
     */
    reframe: function (inXYZ, opposingCorners) {
        
    },


    /**
     * Transforms the ListBox using the last transformation performed on any object. Transformations include moving, rotating, shearing, scaling, and flipping.
     *
     * @return string
     */
    transformAgain: function () {
        
    },


    /**
     * Transforms the ListBox using the last sequence of transform operations performed on any single object or performed at the same time on any group of objects. Transformations include moving, rotating, shearing, scaling, and flipping.
     *
     * @return string
     */
    transformSequenceAgain: function () {
        
    },


    /**
     * Transforms the ListBox using the last transformation performed on any ListBox. Transformations include moving, rotating, shearing, scaling, and flipping.
     *
     * @return string
     */
    transformAgainIndividually: function () {
        
    },


    /**
     * Transforms the ListBox using the last sequence of transformations performed on any single object or performed at the same time on any group of objects. Transformations include moving, rotating, shearing, scaling, and flipping.
     *
     * @return string
     */
    transformSequenceAgainIndividually: function () {
        
    },


    /**
     * Create Plain Text QR Code on the page item
     *
     * @param {string} [plainText] QR code Plain Text  (Optional)
     * @param {varies=any} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional)
     * @param {string} [withProperties] Initial values for properties of the new ListBox. Above parameters can also be passed as properties (Optional)
     * @return undefined
     */
    createPlainTextQRCode: function (plainText, qrCodeSwatch, withProperties) {
        
    },


    /**
     * Create Hyperlink QR Code on the page item or document
     *
     * @param {string} [urlLink] QR code Hyperlink URL  (Optional)
     * @param {varies=any} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional)
     * @param {string} [withProperties] Initial values for properties of the new ListBox. Above parameters can also be passed as properties (Optional)
     * @return undefined
     */
    createHyperlinkQRCode: function (urlLink, qrCodeSwatch, withProperties) {
        
    },


    /**
     * Create Text Msg QR Code on the page item or document
     *
     * @param {string} [cellNumber] QR code Text Phone Number (Optional)
     * @param {string} [textMessage] QR code Text Message (Optional)
     * @param {varies=any} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional)
     * @param {string} [withProperties] Initial values for properties of the new ListBox. Above parameters can also be passed as properties (Optional)
     * @return undefined
     */
    createTextMsgQRCode: function (cellNumber, textMessage, qrCodeSwatch, withProperties) {
        
    },


    /**
     * Create Email QR Code on the page item or document
     *
     * @param {string} [emailAddress] QR code Email Address (Optional)
     * @param {string} [subject] QR code Email Subject (Optional)
     * @param {string} [body] QR code Email Body Message (Optional)
     * @param {varies=any} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional)
     * @param {string} [withProperties] Initial values for properties of the new ListBox. Above parameters can also be passed as properties (Optional)
     * @return undefined
     */
    createEmailQRCode: function (emailAddress, subject, body, qrCodeSwatch, withProperties) {
        
    },


    /**
     * Create Business Card QR Code on the page item or load on document's placegun
     *
     * @param {string} [firstName] QR code Business Card First Name (Optional)
     * @param {string} [lastName] QR code Business Card Last Name (Optional)
     * @param {string} [jobTitle] QR code Business Card Title (Optional)
     * @param {string} [cellPhone] QR code Business Card Cell Phone Number (Optional)
     * @param {string} [phone] QR code Business Card Phone Number (Optional)
     * @param {string} [email] QR code Business Card Email Address (Optional)
     * @param {string} [organisation] QR code Business Card Organisation (Optional)
     * @param {string} [streetAddress] QR code Business Card Street Address (Optional)
     * @param {string} [city] QR code Business Card City (Optional)
     * @param {string} [adrState] QR code Business Card State (Optional)
     * @param {string} [country] QR code Business Card Country (Optional)
     * @param {string} [postalCode] QR code Business Card Postal Code (Optional)
     * @param {string} [website] QR code Business Card URL (Optional)
     * @param {varies=any} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional)
     * @param {string} [withProperties] Initial values for properties of the new ListBox. Above parameters can also be passed as properties (Optional)
     * @return undefined
     */
    createVCardQRCode: function (firstName, lastName, jobTitle, cellPhone, phone, email, organisation, streetAddress, city, adrState, country, postalCode, website, qrCodeSwatch, withProperties) {
        
    },


    /**
     * Exports the object(s) to a file.
     *
     * @param {varies=any} [format] The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
     * @param {File} [to] The path to the export file.
     * @param {boolean} [showingOptions] If true, displays the export options dialog. (Optional) (default: false)
     * @param {PDFExportPreset} [using] The export style. (Optional)
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    exportFile: function (format, to, showingOptions, using, versionComments, forceSave) {
        
    },


    /**
     * asynchronously exports the object(s) to a file.
     *
     * @param {varies=any} [format] The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
     * @param {File} [to] The path to the export file.
     * @param {boolean} [showingOptions] If true, displays the export options dialog. (Optional) (default: false)
     * @param {PDFExportPreset} [using] The export style. (Optional)
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return BackgroundTask
     */
    asynchronousExportFile: function (format, to, showingOptions, using, versionComments, forceSave) {
        
    },


    /**
     * Duplicate an object and place it into the target page item.
     *
     * @param {PageItem} [pageItems] One or more page items to place or load
     * @param {boolean} [linkPageItems] Whether to link pageItems in content placer (if true it will override link stories value) (Optional) (default: false)
     * @param {boolean} [linkStories] Whether to link stories in content placer (only applicable for single story, pageItem links will also be created in case of more than one item) (Optional) (default: false)
     * @param {boolean} [mapStyles] Whether to map styles in content placer (Optional) (default: false)
     * @param {boolean} [showingOptions] Whether to display the link options dialog (Optional) (default: false)
     * @return varies=any
     */
    contentPlace: function (pageItems, linkPageItems, linkStories, mapStyles, showingOptions) {
        
    },


    /**
     * Selects the object.
     *
     * @param {SelectionOptions} [existingSelection] The selection status of the ListBox in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
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
     * Generates a string which, if executed, will return the ListBox.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ListBox
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

