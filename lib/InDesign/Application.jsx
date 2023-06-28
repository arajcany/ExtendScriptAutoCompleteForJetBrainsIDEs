/*
 * The application.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Application = {


    /**
     * Dispatched before a Document is created. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_NEW: beforeNew,


    /**
     * Dispatched before a Document is opened. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_OPEN: beforeOpen,


    /**
     * Dispatched after a Document is closed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_CLOSE: afterClose,


    /**
     * Dispatched after the active context changes. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_CONTEXT_CHANGED: afterContextChanged,


    /**
     * Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SELECTION_CHANGED: afterSelectionChanged,


    /**
     * Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SELECTION_ATTRIBUTE_CHANGED: afterSelectionAttributeChanged,


    /**
     * Dispatched before the Application becomes inactive. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DEACTIVATE: beforeDeactivate,


    /**
     * Dispatched after the Application becomes active. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_ACTIVATE: afterActivate,


    /**
     * Dispatched before the Application is quit. Allows the quit to be canceled. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_QUIT: beforeQuit,


    /**
     * Dispatched when the Application is quitting. Since the quit has been committed, it can not be canceled. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_QUIT: afterQuit,


    /**
     * XML view preference settings.
     * @type {XMLViewPreference}
     * @readonly
     */
    xmlViewPreferences: XMLViewPreference,


    /**
     * The available performance metrics.
     * @type {number}
     * @readonly
     */
    performanceMetrics: undefined,


    /**
     * The current tool box states
     * @type {ToolBox}
     * @readonly
     */
    toolBoxTools: ToolBox,


    /**
     * Display performance settings.
     * @type {DisplayPerformancePreference}
     * @readonly
     */
    displayPerformancePreferences: DisplayPerformancePreference,


    /**
     * GPU performance preferences.
     * @type {GpuPerformancePreference}
     * @readonly
     */
    gpuPerformancePreferences: GpuPerformancePreference,


    /**
     * Galley preference settings.
     * @type {GalleyPreference}
     * @readonly
     */
    galleyPreferences: GalleyPreference,


    /**
     * Get whether home screen is visible or not.
     * @type {boolean}
     * @readonly
     */
    homeScreenVisible: undefined,


    /**
     * Text editing preference settings.
     * @type {TextEditingPreference}
     * @readonly
     */
    textEditingPreferences: TextEditingPreference,


    /**
     * Preflight option settings.
     * @type {PreflightOption}
     * @readonly
     */
    preflightOptions: PreflightOption,


    /**
     * Preflight book option settings.
     * @type {PreflightBookOption}
     * @readonly
     */
    preflightBookOptions: PreflightBookOption,


    /**
     * The list of all object types (strings) a preflight rule can operate on.
     * @type {string}
     * @readonly
     */
    allPreflightObjectTypes: undefined,


    /**
     * The list of all categories that have been declared by rules.
     * @type {string}
     * @readonly
     */
    allPreflightRuleCategories: undefined,


    /**
     * The list of all known (declared) rule IDs.
     * @type {string}
     * @readonly
     */
    allPreflightRuleIDs: undefined,


    /**
     * The data merge option properties that define the data merge.
     * @type {DataMergeOption}
     * @readonly
     */
    dataMergeOptions: DataMergeOption,


    /**
     * Note preference settings.
     * @type {NotePreference}
     * @readonly
     */
    notePreferences: NotePreference,


    /**
     * JPEG export preferences.
     * @type {JPEGExportPreference}
     * @readonly
     */
    jpegExportPreferences: JPEGExportPreference,


    /**
     * Text import preferences.
     * @type {TextImportPreference}
     * @readonly
     */
    textImportPreferences: TextImportPreference,


    /**
     * Text export preferences.
     * @type {TextExportPreference}
     * @readonly
     */
    textExportPreferences: TextExportPreference,


    /**
     * Tagged text export preferences.
     * @type {TaggedTextExportPreference}
     * @readonly
     */
    taggedTextExportPreferences: TaggedTextExportPreference,


    /**
     * Tagged text import preferences.
     * @type {TaggedTextImportPreference}
     * @readonly
     */
    taggedTextImportPreferences: TaggedTextImportPreference,


    /**
     * Word and RTF import preferences.
     * @type {WordRTFImportPreference}
     * @readonly
     */
    wordRTFImportPreferences: WordRTFImportPreference,


    /**
     * Excel import preferences.
     * @type {ExcelImportPreference}
     * @readonly
     */
    excelImportPreferences: ExcelImportPreference,


    /**
     * EPub export preview app preference settings.
     * @type {EPubExportPreviewAppPreference}
     * @readonly
     */
    epubViewingAppsPreferences: EPubExportPreviewAppPreference,


    /**
     * The XML preference settings.
     * @type {XMLPreference}
     * @readonly
     */
    xmlPreferences: XMLPreference,


    /**
     * XML import preference settings.
     * @type {XMLImportPreference}
     * @readonly
     */
    xmlImportPreferences: XMLImportPreference,


    /**
     * XML export preference settings.
     * @type {XMLExportPreference}
     * @readonly
     */
    xmlExportPreferences: XMLExportPreference,


    /**
     * The default export for web preferences.
     * @type {ExportForWebPreference}
     * @readonly
     */
    exportForWebPreferences: ExportForWebPreference,


    /**
     * Transparency preference settings.
     * @type {TransparencyPreference}
     * @readonly
     */
    transparencyPreferences: TransparencyPreference,


    /**
     * Text frame preference settings.
     * @type {TextFramePreference}
     * @readonly
     */
    textFramePreferences: TextFramePreference,


    /**
     * Text preference settings.
     * @type {TextPreference}
     * @readonly
     */
    textPreferences: TextPreference,


    /**
     * Text default settings.
     * @type {TextDefault}
     * @readonly
     */
    textDefaults: TextDefault,


    /**
     * Endnote option settings.
     * @type {EndnoteOption}
     * @readonly
     */
    endnoteOptions: EndnoteOption,


    /**
     * User dictionary preference settings.
     * @type {DictionaryPreference}
     * @readonly
     */
    dictionaryPreferences: DictionaryPreference,


    /**
     * The font sync preference properties that define preferences for fonts.
     * @type {FontSyncPreference}
     * @readonly
     */
    fontSyncPreferences: FontSyncPreference,


    /**
     * Story preference settings.
     * @type {StoryPreference}
     * @readonly
     */
    storyPreferences: StoryPreference,


    /**
     * Anchored object default settings.
     * @type {AnchoredObjectDefault}
     * @readonly
     */
    anchoredObjectDefaults: AnchoredObjectDefault,


    /**
     * Anchored object settings.
     * @type {AnchoredObjectSetting}
     * @readonly
     */
    anchoredObjectSettings: AnchoredObjectSetting,


    /**
     * Baseline frame grid option settings.
     * @type {BaselineFrameGridOption}
     * @readonly
     */
    baselineFrameGridOptions: BaselineFrameGridOption,


    /**
     * Footnote option settings.
     * @type {FootnoteOption}
     * @readonly
     */
    footnoteOptions: FootnoteOption,


    /**
     * Lists all paragraph styles (regardless of their group).
     * @type {ParagraphStyle}
     * @readonly
     */
    allParagraphStyles: ParagraphStyle,


    /**
     * Lists all character styles (regardless of their group).
     * @type {CharacterStyle}
     * @readonly
     */
    allCharacterStyles: CharacterStyle,


    /**
     * The text wrap preference properties that define the default formatting for wrapping text around objects.
     * @type {TextWrapPreference}
     * @readonly
     */
    textWrapPreferences: TextWrapPreference,


    /**
     * Preferences for showing contextual ui for alternates.
     * @type {TypeContextualUiPreference}
     * @readonly
     */
    typeContextualUiPrefs: TypeContextualUiPreference,


    /**
     * All Table styles
     * @type {TableStyle}
     * @readonly
     */
    allTableStyles: TableStyle,


    /**
     * All Cell styles
     * @type {CellStyle}
     * @readonly
     */
    allCellStyles: CellStyle,


    /**
     * Document preference settings.
     * @type {DocumentPreference}
     * @readonly
     */
    documentPreferences: DocumentPreference,


    /**
     * Grid preference settings.
     * @type {GridPreference}
     * @readonly
     */
    gridPreferences: GridPreference,


    /**
     * Guide preference settings.
     * @type {GuidePreference}
     * @readonly
     */
    guidePreferences: GuidePreference,


    /**
     * Margin preference settings.
     * @type {MarginPreference}
     * @readonly
     */
    marginPreferences: MarginPreference,


    /**
     * Pasteboard preference settings.
     * @type {PasteboardPreference}
     * @readonly
     */
    pasteboardPreferences: PasteboardPreference,


    /**
     * View preference settings.
     * @type {ViewPreference}
     * @readonly
     */
    viewPreferences: ViewPreference,


    /**
     * Smart Guide preference properties.
     * @type {SmartGuidePreference}
     * @readonly
     */
    smartGuidePreferences: SmartGuidePreference,


    /**
     * Spell-check preferences.
     * @type {SpellPreference}
     * @readonly
     */
    spellPreferences: SpellPreference,


    /**
     * Auto-correct preferences.
     * @type {AutoCorrectPreference}
     * @readonly
     */
    autoCorrectPreferences: AutoCorrectPreference,


    /**
     * Linked story options
     * @type {LinkedStoryOption}
     * @readonly
     */
    linkedStoryOptions: LinkedStoryOption,


    /**
     * Linked Page Item options
     * @type {LinkedPageItemOption}
     * @readonly
     */
    linkedPageItemOptions: LinkedPageItemOption,


    /**
     * Script preferences.
     * @type {ScriptPreference}
     * @readonly
     */
    scriptPreferences: ScriptPreference,


    /**
     * Arguments to pass to a script.
     * @type {ScriptArg}
     * @readonly
     */
    scriptArgs: ScriptArg,


    /**
     * EPS export preferences.
     * @type {EPSExportPreference}
     * @readonly
     */
    epsExportPreferences: EPSExportPreference,


    /**
     * PNG export preferences.
     * @type {PNGExportPreference}
     * @readonly
     */
    pngExportPreferences: PNGExportPreference,


    /**
     * A collection of PDF export preferences.
     * @type {PDFExportPreference}
     * @readonly
     */
    pdfExportPreferences: PDFExportPreference,


    /**
     * Interactive PDF export preferences.
     * @type {InteractivePDFExportPreference}
     * @readonly
     */
    interactivePDFExportPreferences: InteractivePDFExportPreference,


    /**
     * The PDF place preference properties that define how PDF files are placed in the current document.
     * @type {PDFPlacePreference}
     * @readonly
     */
    pdfPlacePreferences: PDFPlacePreference,


    /**
     * Tagged PDF preferences.
     * @type {TaggedPDFPreference}
     * @readonly
     */
    taggedPDFPreferences: TaggedPDFPreference,


    /**
     * Lists the extensions of file types that can be placed.
     * @type {string}
     * @readonly
     */
    placeableFileExtensions: undefined,


    /**
     * Lists the types of files that can be placed.
     * @type {string}
     * @readonly
     */
    placeableFileTypes: undefined,


    /**
     * The links preference properties that define preferences for links.
     * @type {LinkingPreference}
     * @readonly
     */
    linkingPreferences: LinkingPreference,


    /**
     * Grabber preference properties that define display performance quality during scrolling.
     * @type {GrabberPreference}
     * @readonly
     */
    grabberPreferences: GrabberPreference,


    /**
     * The index options properties that define how an index is formatted.
     * @type {IndexOptions}
     * @readonly
     */
    indexGenerationOptions: IndexOptions,


    /**
     * Track changes preference settings.
     * @type {TrackChangesPreference}
     * @readonly
     */
    trackChangesPreferences: TrackChangesPreference,


    /**
     * Export options for InCopy INCX document format.
     * @type {InCopyExportOption}
     * @readonly
     */
    incopyExportOptions: InCopyExportOption,


    /**
     * IME preference settings.
     * @type {IMEPreference}
     * @readonly
     */
    imePreferences: IMEPreference,


    /**
     * The image I/O preference properties that define preferences for importing images.
     * @type {ImageIOPreference}
     * @readonly
     */
    imageIOPreferences: ImageIOPreference,


    /**
     * Image preferences.
     * @type {ImagePreference}
     * @readonly
     */
    imagePreferences: ImagePreference,


    /**
     * Stroke/fill proxy settings.
     * @type {StrokeFillProxySetting}
     * @readonly
     */
    strokeFillProxySettings: StrokeFillProxySetting,


    /**
     * Polygon preference properties to use to define default settings for creating a polygon.
     * @type {PolygonPreference}
     * @readonly
     */
    polygonPreferences: PolygonPreference,


    /**
     * All object styles contained by the Application.
     * @type {ObjectStyle}
     * @readonly
     */
    allObjectStyles: ObjectStyle,


    /**
     * The default page item formatting for the Application.
     * @type {PageItemDefault}
     * @readonly
     */
    pageItemDefaults: PageItemDefault,


    /**
     * Preferences for alignment and distribution.
     * @type {AlignDistributePreference}
     * @readonly
     */
    alignDistributePreferences: AlignDistributePreference,


    /**
     * The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application.
     * @type {FrameFittingOption}
     * @readonly
     */
    frameFittingOptions: FrameFittingOption,


    /**
     * Button preference settings.
     * @type {ButtonPreference}
     * @readonly
     */
    buttonPreferences: ButtonPreference,


    /**
     * EPS import preferences.
     * @type {EPSImportPreference}
     * @readonly
     */
    epsImportPreferences: EPSImportPreference,


    /**
     * Placed InDesign page attributes.
     * @type {ImportedPageAttribute}
     * @readonly
     */
    importedPageAttributes: ImportedPageAttribute,


    /**
     * The swatches that are not being used.
     * @type {Swatch}
     * @readonly
     */
    unusedSwatches: Swatch,


    /**
     * Watermark preferences
     * @type {WatermarkPreference}
     * @readonly
     */
    watermarkPreferences: WatermarkPreference,


    /**
     * The Content Placer. Used to get a reference to the content placer object.
     * @type {ContentPlacerObject}
     * @readonly
     */
    contentPlacer: ContentPlacerObject,


    /**
     * Conditional text preferences.
     * @type {ConditionalTextPreference}
     * @readonly
     */
    conditionalTextPreferences: ConditionalTextPreference,


    /**
     * Color setting properties that define color management defaults.
     * @type {ColorSetting}
     * @readonly
     */
    colorSettings: ColorSetting,


    /**
     * Default properties specific to layout grids.
     * @type {LayoutGridDataInformation}
     * @readonly
     */
    layoutGridData: LayoutGridDataInformation,


    /**
     * Default properties specific to frame grids.
     * @type {StoryGridDataInformation}
     * @readonly
     */
    storyGridData: StoryGridDataInformation,


    /**
     * CJK grid preference settings.
     * @type {CjkGridPreference}
     * @readonly
     */
    cjkGridPreferences: CjkGridPreference,


    /**
     * Grid printing preference and export settings.
     * @type {GridPrintingPreference}
     * @readonly
     */
    gridPrintingPreferences: GridPrintingPreference,


    /**
     * Font locking preference settings.
     * @type {FontLockingPreference}
     * @readonly
     */
    fontLockingPreferences: FontLockingPreference,


    /**
     * Mojikumi user interface preference settings.
     * @type {MojikumiUiPreference}
     * @readonly
     */
    mojikumiUIPreferences: MojikumiUiPreference,


    /**
     * The name of the Application.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The full path to the Application, including the name of the Application.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * The full path to the file.
     * @type {File}
     * @readonly
     */
    filePath: File,


    /**
     * The application version.
     * @type {string}
     * @readonly
     */
    version: undefined,


    /**
     * The locale of the application.
     * @type {Locale}
     * @readonly
     */
    locale: Locale,


    /**
     * The current script running from the Scripts panel.
     * @type {File}
     * @readonly
     */
    activeScript: File,


    /**
     * The current user's adobe id
     * @type {string}
     * @readonly
     */
    userAdobeId: undefined,


    /**
     * The current user's GUID
     * @type {string}
     * @readonly
     */
    userGuid: undefined,


    /**
     * If true, the Application is visible.
     * @type {boolean}
     * @readonly
     */
    visible: undefined,


    /**
     * General preference settings.
     * @type {GeneralPreference}
     * @readonly
     */
    generalPreferences: GeneralPreference,


    /**
     * Clipboard preference properties that define the way that the application interacts with the system clipboard.
     * @type {ClipboardPreference}
     * @readonly
     */
    clipboardPreferences: ClipboardPreference,


    /**
     * Transform preference properties that define default behaviors when transforming objects. Note: Transforming includes rotation, scaling, flipping, and shearing.
     * @type {TransformPreference}
     * @readonly
     */
    transformPreferences: TransformPreference,


    /**
     * If true, a modal dialog or alert is active.
     * @type {boolean}
     * @readonly
     */
    modalState: undefined,


    /**
     * The feature set.
     * @type {FeatureSetOptions}
     * @readonly
     */
    featureSet: FeatureSetOptions,


    /**
     * The name of the action on the top of the undo stack.
     * @type {string}
     * @readonly
     */
    undoName: undefined,


    /**
     * The name of the action on the top of the redo stack.
     * @type {string}
     * @readonly
     */
    redoName: undefined,


    /**
     * The names of the items in the undo stack.
     * @type {string}
     * @readonly
     */
    undoHistory: undefined,


    /**
     * The names of the items in the redo stack.
     * @type {string}
     * @readonly
     */
    redoHistory: undefined,


    /**
     * The undo mode for the current script execution.
     * @type {UndoModes}
     * @readonly
     */
    activeScriptUndoMode: UndoModes,


    /**
     * The user's serial number.
     * @type {string}
     * @readonly
     */
    serialNumber: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Application (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * Display setting properties.
     * @type {DisplaySettings}
     * @readonly
     */
    displaySettings: DisplaySettings,


    /**
     * A collection of preflight profiles.
     * @type {PreflightProfiles}
     * @readonly
     */
    preflightProfiles: PreflightProfiles,


    /**
     * A collection of preflight rules.
     * @type {PreflightRules}
     * @readonly
     */
    preflightRules: PreflightRules,


    /**
     * A collection of preflight processes.
     * @type {PreflightProcesses}
     * @readonly
     */
    preflightProcesses: PreflightProcesses,


    /**
     * A collection of panels.
     * @type {Panels}
     * @readonly
     */
    panels: Panels,


    /**
     * A collection of object libraries.
     * @type {Libraries}
     * @readonly
     */
    libraries: Libraries,


    /**
     * A collection of printer presets.
     * @type {PrinterPresets}
     * @readonly
     */
    printerPresets: PrinterPresets,


    /**
     * A collection of XML export maps.
     * @type {XMLExportMaps}
     * @readonly
     */
    xmlExportMaps: XMLExportMaps,


    /**
     * A collection of XML import maps.
     * @type {XMLImportMaps}
     * @readonly
     */
    xmlImportMaps: XMLImportMaps,


    /**
     * A collection of XML rule processors.
     * @type {XMLRuleProcessors}
     * @readonly
     */
    xmlRuleProcessors: XMLRuleProcessors,


    /**
     * A collection of XML tags.
     * @type {XMLTags}
     * @readonly
     */
    xmlTags: XMLTags,


    /**
     * A collection of transparency flattener presets.
     * @type {FlattenerPresets}
     * @readonly
     */
    flattenerPresets: FlattenerPresets,


    /**
     * A collection of user dictionaries.
     * @type {UserDictionaries}
     * @readonly
     */
    userDictionaries: UserDictionaries,


    /**
     * A collection of paragraph style groups.
     * @type {ParagraphStyleGroups}
     * @readonly
     */
    paragraphStyleGroups: ParagraphStyleGroups,


    /**
     * A collection of character style groups.
     * @type {CharacterStyleGroups}
     * @readonly
     */
    characterStyleGroups: CharacterStyleGroups,


    /**
     * A collection of character styles.
     * @type {CharacterStyles}
     * @readonly
     */
    characterStyles: CharacterStyles,


    /**
     * A collection of paragraph styles.
     * @type {ParagraphStyles}
     * @readonly
     */
    paragraphStyles: ParagraphStyles,


    /**
     * A collection of text variables.
     * @type {TextVariables}
     * @readonly
     */
    textVariables: TextVariables,


    /**
     * A collection of table styles.
     * @type {TableStyles}
     * @readonly
     */
    tableStyles: TableStyles,


    /**
     * A collection of table style groups.
     * @type {TableStyleGroups}
     * @readonly
     */
    tableStyleGroups: TableStyleGroups,


    /**
     * A collection of cell styles.
     * @type {CellStyles}
     * @readonly
     */
    cellStyles: CellStyles,


    /**
     * A collection of cell style groups.
     * @type {CellStyleGroups}
     * @readonly
     */
    cellStyleGroups: CellStyleGroups,


    /**
     * A collection of stroke styles.
     * @type {StrokeStyles}
     * @readonly
     */
    strokeStyles: StrokeStyles,


    /**
     * A collection of dashed stroke styles.
     * @type {DashedStrokeStyles}
     * @readonly
     */
    dashedStrokeStyles: DashedStrokeStyles,


    /**
     * A collection of dotted stroke styles.
     * @type {DottedStrokeStyles}
     * @readonly
     */
    dottedStrokeStyles: DottedStrokeStyles,


    /**
     * A collection of striped stroke styles.
     * @type {StripedStrokeStyles}
     * @readonly
     */
    stripedStrokeStyles: StripedStrokeStyles,


    /**
     * A collection of document presets.
     * @type {DocumentPresets}
     * @readonly
     */
    documentPresets: DocumentPresets,


    /**
     * A collection of auto-correct tables.
     * @type {AutoCorrectTables}
     * @readonly
     */
    autoCorrectTables: AutoCorrectTables,


    /**
     * A collection of para style mappings.
     * @type {ParaStyleMappings}
     * @readonly
     */
    paraStyleMappings: ParaStyleMappings,


    /**
     * A collection of char style mappings.
     * @type {CharStyleMappings}
     * @readonly
     */
    charStyleMappings: CharStyleMappings,


    /**
     * A collection of table style mappings.
     * @type {TableStyleMappings}
     * @readonly
     */
    tableStyleMappings: TableStyleMappings,


    /**
     * A collection of cell style mappings.
     * @type {CellStyleMappings}
     * @readonly
     */
    cellStyleMappings: CellStyleMappings,


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
     * All attachable idle tasks.
     * @type {IdleTasks}
     * @readonly
     */
    idleTasks: IdleTasks,


    /**
     * A collection of inks.
     * @type {Inks}
     * @readonly
     */
    inks: Inks,


    /**
     * A collection of trap presets.
     * @type {TrapPresets}
     * @readonly
     */
    trapPresets: TrapPresets,


    /**
     * A collection of PDF export presets.
     * @type {PDFExportPresets}
     * @readonly
     */
    pdfExportPresets: PDFExportPresets,


    /**
     * A collection of languages with vendors.
     * @type {LanguagesWithVendors}
     * @readonly
     */
    languagesWithVendors: LanguagesWithVendors,


    /**
     * A collection of indexing sort options.
     * @type {IndexingSortOptions}
     * @readonly
     */
    indexingSortOptions: IndexingSortOptions,


    /**
     * A collection of object style groups.
     * @type {ObjectStyleGroups}
     * @readonly
     */
    objectStyleGroups: ObjectStyleGroups,


    /**
     * A collection of object styles.
     * @type {ObjectStyles}
     * @readonly
     */
    objectStyles: ObjectStyles,


    /**
     * A collection of transformation matrices.
     * @type {TransformationMatrices}
     * @readonly
     */
    transformationMatrices: TransformationMatrices,


    /**
     * A collection of fonts.
     * @type {Fonts}
     * @readonly
     */
    fonts: Fonts,


    /**
     * A collection of Motion presets.
     * @type {MotionPresets}
     * @readonly
     */
    motionPresets: MotionPresets,


    /**
     * A collection of documents.
     * @type {Documents}
     * @readonly
     */
    documents: Documents,


    /**
     * A collection of swatches.
     * @type {Swatches}
     * @readonly
     */
    swatches: Swatches,


    /**
     * A collection of colors.
     * @type {Colors}
     * @readonly
     */
    colors: Colors,


    /**
     * A collection of tints.
     * @type {Tints}
     * @readonly
     */
    tints: Tints,


    /**
     * A collection of gradients.
     * @type {Gradients}
     * @readonly
     */
    gradients: Gradients,


    /**
     * A collection of mixed inks.
     * @type {MixedInks}
     * @readonly
     */
    mixedInks: MixedInks,


    /**
     * A collection of mixed ink groups.
     * @type {MixedInkGroups}
     * @readonly
     */
    mixedInkGroups: MixedInkGroups,


    /**
     * A collection of color groups.
     * @type {ColorGroups}
     * @readonly
     */
    colorGroups: ColorGroups,


    /**
     * A collection of dialogs.
     * @type {Dialogs}
     * @readonly
     */
    dialogs: Dialogs,


    /**
     * A collection of conditions for conditional text.
     * @type {Conditions}
     * @readonly
     */
    conditions: Conditions,


    /**
     * A collection of condition sets for conditional text.
     * @type {ConditionSets}
     * @readonly
     */
    conditionSets: ConditionSets,


    /**
     * A collection of composite fonts.
     * @type {CompositeFonts}
     * @readonly
     */
    compositeFonts: CompositeFonts,


    /**
     * A collection of named grids.
     * @type {NamedGrids}
     * @readonly
     */
    namedGrids: NamedGrids,


    /**
     * A collection of kinsoku tables.
     * @type {KinsokuTables}
     * @readonly
     */
    kinsokuTables: KinsokuTables,


    /**
     * A collection of mojikumi tables.
     * @type {MojikumiTables}
     * @readonly
     */
    mojikumiTables: MojikumiTables,


    /**
     * A collection of books.
     * @type {Books}
     * @readonly
     */
    books: Books,


    /**
     * A collection of numbered lists.
     * @type {NumberingLists}
     * @readonly
     */
    numberingLists: NumberingLists,


    /**
     * A collection of windows.
     * @type {Windows}
     * @readonly
     */
    windows: Windows,


    /**
     * A collection of layout windows.
     * @type {LayoutWindows}
     * @readonly
     */
    layoutWindows: LayoutWindows,


    /**
     * A collection of story windows.
     * @type {StoryWindows}
     * @readonly
     */
    storyWindows: StoryWindows,


    /**
     * A collection of background task objects.
     * @type {BackgroundTasks}
     * @readonly
     */
    backgroundTasks: BackgroundTasks,


    /**
     * A collection of menu actions.
     * @type {MenuActions}
     * @readonly
     */
    menuActions: MenuActions,


    /**
     * A collection of script menu actions.
     * @type {ScriptMenuActions}
     * @readonly
     */
    scriptMenuActions: ScriptMenuActions,


    /**
     * A collection of menus.
     * @type {Menus}
     * @readonly
     */
    menus: Menus,


    /**
     * Find/change color options. Can also accept: NothingEnum enumerator.
     * @type {FindChangeColorOption}
     */
    findChangeColorOptions: FindChangeColorOption,


    /**
     * Find color preferences. Can also accept: NothingEnum enumerator.
     * @type {FindColorPreference}
     */
    findColorPreferences: FindColorPreference,


    /**
     * Change color preferences. Can also accept: NothingEnum enumerator.
     * @type {ChangeColorPreference}
     */
    changeColorPreferences: ChangeColorPreference,


    /**
     * Find/change text options. Can also accept: NothingEnum enumerator.
     * @type {FindChangeTextOption}
     */
    findChangeTextOptions: FindChangeTextOption,


    /**
     * Find/change grep options. Can also accept: NothingEnum enumerator.
     * @type {FindChangeGrepOption}
     */
    findChangeGrepOptions: FindChangeGrepOption,


    /**
     * Find/change glyph options. Can also accept: NothingEnum enumerator.
     * @type {FindChangeGlyphOption}
     */
    findChangeGlyphOptions: FindChangeGlyphOption,


    /**
     * Find/change object options. Can also accept: NothingEnum enumerator.
     * @type {FindChangeObjectOption}
     */
    findChangeObjectOptions: FindChangeObjectOption,


    /**
     * Find text preferences. Can also accept: NothingEnum enumerator.
     * @type {FindTextPreference}
     */
    findTextPreferences: FindTextPreference,


    /**
     * Change text preferences. Can also accept: NothingEnum enumerator.
     * @type {ChangeTextPreference}
     */
    changeTextPreferences: ChangeTextPreference,


    /**
     * Find grep preferences. Can also accept: NothingEnum enumerator.
     * @type {FindGrepPreference}
     */
    findGrepPreferences: FindGrepPreference,


    /**
     * Change grep preferences. Can also accept: NothingEnum enumerator.
     * @type {ChangeGrepPreference}
     */
    changeGrepPreferences: ChangeGrepPreference,


    /**
     * Find glyph preferences. Can also accept: NothingEnum enumerator.
     * @type {FindGlyphPreference}
     */
    findGlyphPreferences: FindGlyphPreference,


    /**
     * Change glyph preferences. Can also accept: NothingEnum enumerator.
     * @type {ChangeGlyphPreference}
     */
    changeGlyphPreferences: ChangeGlyphPreference,


    /**
     * Find object preferences. Can also accept: NothingEnum enumerator.
     * @type {FindObjectPreference}
     */
    findObjectPreferences: FindObjectPreference,


    /**
     * Change object preferences. Can also accept: NothingEnum enumerator.
     * @type {ChangeObjectPreference}
     */
    changeObjectPreferences: ChangeObjectPreference,


    /**
     * Find/change transliterate options. Can also accept: NothingEnum enumerator.
     * @type {FindChangeTransliterateOption}
     */
    findChangeTransliterateOptions: FindChangeTransliterateOption,


    /**
     * Find transliterate preferences. Can also accept: NothingEnum enumerator.
     * @type {FindTransliteratePreference}
     */
    findTransliteratePreferences: FindTransliteratePreference,


    /**
     * Change transliterate preferences. Can also accept: NothingEnum enumerator.
     * @type {ChangeTransliteratePreference}
     */
    changeTransliteratePreferences: ChangeTransliteratePreference,


    /**
     * Experimental: Connection manager property
     * @type {HttpLinkConnectionManagerObject}
     */
    httpLinkConnectionManager: HttpLinkConnectionManagerObject,


    /**
     * The color assigned to the tracked changes and notes created by the user, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    userColor: undefined,


    /**
     * The user associated with the tracked changes and notes.
     * @type {string}
     */
    userName: undefined,


    /**
     * Clear overrides first before applying object style
     * @type {boolean}
     */
    clearOverridesWhenApplyingStyle: undefined,


    /**
     * The active book.
     * @type {Book}
     */
    activeBook: Book,


    /**
     * The selected object(s). Can also accept: Object or NothingEnum enumerator.
     * @type {Object}
     */
    selection: Object,


    /**
     * The front-most window. Can return: Window, LayoutWindow or StoryWindow.
     * @type {varies=any}
     */
    activeWindow: undefined,


    /**
     * Delay before mouse operations trigger live screen drawing of page items.
     * @type {LiveDrawingOptions}
     */
    liveScreenDrawing: LiveDrawingOptions,


    /**
     * The key object of the selection. Can also accept: NothingEnum enumerator.
     * @type {PageItem}
     */
    selectionKeyObject: PageItem,


    /**
     * The front-most document.
     * @type {Document}
     */
    activeDocument: Document,


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
     * Gets the current value of the specified performance metric.
     *
     * @param {varies=any} [forXYZ] The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator.
     * @return varies=any
     */
    performanceMetric: function (forXYZ) {
        
    },


    /**
     * Dumps memory allocations from the specified mark.
     *
     * @param {number} [from] The mark from which to dump memory.
     * @return undefined
     */
    dumpFromMemoryMark: function (from) {
        
    },


    /**
     * Dumps memory allocations from all marks in the specified range.
     *
     * @param {number} [from] The first mark in the range.
     * @param {number} [to] The last mark in the range.
     * @return undefined
     */
    dumpBetweenMemoryMarks: function (from, to) {
        
    },


    /**
     * Gets the memory statistics from the server.
     *
     * @return varies=any
     */
    memoryStatistics: function () {
        
    },


    /**
     * Gets the short name of the specified performance metric.
     *
     * @param {varies=any} [forXYZ] The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator.
     * @return string
     */
    performanceMetricShortName: function (forXYZ) {
        
    },


    /**
     * Gets the long name of the specified performance metric.
     *
     * @param {varies=any} [forXYZ] The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator.
     * @return string
     */
    performanceMetricLongName: function (forXYZ) {
        
    },


    /**
     * Invokes InDesign's Color Picker.
     *
     * @param {ColorSpace} [space] Color space RGB, CMYK or LAB
     * @param {number} [colorValue] Color values
     * @return string
     */
    invokeColorPicker: function (space, colorValue) {
        
    },


    /**
     * Opens the cloud library asset for editing.
     *
     * @param {string} [jsondata] JSON encoded information about the asset to be edited.
     * @return boolean
     */
    openCloudAssetForEdit: function (jsondata) {
        
    },


    /**
     * Sets the export options for generation of a cloud asset.
     *
     * @param {number} [maxwidth] The maximum width of the thumbnail generated in pixels.
     * @param {number} [maxheight] The maximum height of the thumbnail generated in pixels.
     * @return undefined
     */
    setCloudLibraryOptions: function (maxwidth, maxheight) {
        
    },


    /**
     * Exports selection as assets required for cloud library.
     *
     * @param {File} [to] The path to the export file.
     * @return boolean
     */
    exportSelectionForCloudLibrary: function (to) {
        
    },


    /**
     * Whether user has opted-in to share usage data.
     *
     * @return boolean
     */
    isUserSharingAppUsageData: function () {
        
    },


    /**
     * Set cloud libraries info.
     *
     * @param {string} [librariesCollectionInfo] JSON encoded information about cloud libraries collection
     * @return undefined
     */
    setCloudLibraryCollection: function (librariesCollectionInfo) {
        
    },


    /**
     * Creates a temporary copy of the file
     *
     * @param {File} [from] The file to be copied
     * @return string
     */
    createTemporaryCopy: function (from) {
        
    },


    /**
     * Remove the file from most recently used files
     *
     * @param {File} [to] The file to be removed
     * @return boolean
     */
    removeFileFromRecentFiles: function (to) {
        
    },


    /**
     * Whether the app is in touch mode or not.
     *
     * @return boolean
     */
    isAppInTouchMode: function () {
        
    },


    /**
     * Get a JSON string for the CCX Welcome dialog.
     *
     * @param {string} [jsondata] mode description (Optional)
     * @return string
     */
    getCCXUserJSONData: function (jsondata) {
        
    },


    /**
     * Get the resolution strategy for style conflict, false if the user cancels
     *
     * @param {StyleType} [charOrParaStyle] Style type to look at. (Optional)
     * @return varies=any
     */
    getStyleConflictResolutionStrategy: function (charOrParaStyle) {
        
    },


    /**
     * Open the panel associated with the action.
     *
     * @param {number} [id] The ID.
     * @return undefined
     */
    openPanel: function (id) {
        
    },


    /**
     * Gets the decision from the user to add the content of text frame or the complete story in case of threaded text frame.
     *
     * @return varies=any
     */
    getUserChoiceForCloudTextAddition: function () {
        
    },


    /**
     * Unpackage a UCF file into a folder structure.
     *
     * @param {File} [ucfFile] The UCF file to be unpackaged.
     * @param {File} [destinationFolder] The folder where you would like the UCF file unpackaged to. Will be created if it does not exist.
     * @return undefined
     */
    unpackageUCF: function (ucfFile, destinationFolder) {
        
    },


    /**
     * Package a folder into a UCF file.
     *
     * @param {File} [sourceFolder] The folder to be packaged into an IDML file. Does not validate structure of the folder pursuant to the IDML spec. Caller is responsible for making sure the files in the folder are correctly organized.
     * @param {File} [ucfFile] The destination UCF file. Will be overwritten if it already exists.
     * @param {string} [mimeMediaType] The MIME media type, default value identifies package as IDML. (Optional) (default: application/vnd.adobe.indesign-idml-package)
     * @return undefined
     */
    packageUCF: function (sourceFolder, ucfFile, mimeMediaType) {
        
    },


    /**
     * Load preflight profile from the specified file.
     *
     * @param {File} [from] The InDesign preflight profile file or InDesign document.
     * @return PreflightProfile
     */
    loadPreflightProfile: function (from) {
        
    },


    /**
     * Export the specified documents to an article folio.

Note: This method behaves identically to @method(exportMiniFolio), but differs in its return value. @method(exportMiniFolio) returns an array of warning strings whereas this method returns an XML structure.
     *
     * @param {File} [destination] The location to write the file.
     * @param {Document} [portraitDocument] The InDesign document for the stack's portrait orientation.
     * @param {Document} [landscapeDocument] The InDesign document for the stack's landscape orientation.
     * @param {varies=any} [folioMetadata] Optional meta data for the mini folio. Can accept: Ordered array containing key:String, value:String. (Optional)
     * @param {varies=any} [miniFolioParams] Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional)
     * @return string
     */
    exportArticleFolio: function (destination, portraitDocument, landscapeDocument, folioMetadata, miniFolioParams) {
        
    },


    /**
     * Export the specified document to a DPS article.
Note: This method behaves similarly to @method(exportMiniFolio), but differs in its parameters.
     *
     * @param {File} [destination] The location to write the file.
     * @param {Document} [document] The source InDesign document.
     * @param {varies=any} [dpsArticleParams] Options for exporting a DPS article. Can accept: Ordered array containing dataField:String, dataValue:Any Type.
     * @return string
     */
    exportDpsArticle: function (destination, document, dpsArticleParams) {
        
    },


    /**
     * Get the current digital publishing article version number for the given parameter.
     *
     * @param {DigpubArticleVersion} [digpubArticleVersion] Version string(s) to retrieve.
     * @return string
     */
    getDigpubArticleVersion: function (digpubArticleVersion) {
        
    },


    /**
     * Get the list of article viewer versions the digital publishing plugin supports.
     *
     * @return string
     */
    getSupportedArticleViewerVersions: function () {
        
    },


    /**
     * Get the current digital publishing version number for the given parameter.
     *
     * @param {DigpubVersion} [digpubVersion] Version string(s) to retrieve.
     * @return string
     */
    getDigpubVersion: function (digpubVersion) {
        
    },


    /**
     * Get the list of viewer versions the digital publishing plugin supports.
     *
     * @return string
     */
    getSupportedViewerVersions: function () {
        
    },


    /**
     * Export the specified documents to a mini-folio.
     *
     * @param {File} [destination] The location to write the file.
     * @param {Document} [portraitDocument] The InDesign document for the stack's portrait orientation.
     * @param {Document} [landscapeDocument] The InDesign document for the stack's landscape orientation.
     * @param {varies=any} [folioMetadata] Optional meta data for the mini folio. Can accept: Ordered array containing key:String, value:String. (Optional)
     * @param {varies=any} [miniFolioParams] Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional)
     * @return string
     */
    exportMiniFolio: function (destination, portraitDocument, landscapeDocument, folioMetadata, miniFolioParams) {
        
    },


    /**
     * Export the selected documents to a compressed folio file that contains compressed mini folios.
     *
     * @param {File} [destination] The location to write the package.
     * @param {varies=any} [miniFolioList] The mini folio(es) to add to the folio. Can accept: File or Array of Files.
     * @param {varies=any} [folioMetadata] Meta data for the folio. Can accept: Ordered array containing key:String, value:String.
     * @param {varies=any} [exportFolioParams] Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional)
     * @return undefined
     */
    exportFolioToPackage: function (destination, miniFolioList, folioMetadata, exportFolioParams) {
        
    },


    /**
     * Export the selected documents to a directory.
     *
     * @param {File} [destination] The directory to write the folio.
     * @param {varies=any} [miniFolioList] The mini folio(es) to add to the folio. Can accept: File or Array of Files.
     * @param {varies=any} [folioMetadata] Meta data for the folio. Can accept: Ordered array containing key:String, value:String.
     * @param {varies=any} [exportFolioParams] Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional)
     * @return undefined
     */
    exportFolioToDirectory: function (destination, miniFolioList, folioMetadata, exportFolioParams) {
        
    },


    /**
     * Export the selected documents to a compressed folio file that contains non-compressed mini folios.
     *
     * @param {File} [destination] The location to write the package.
     * @param {varies=any} [miniFolioList] The mini folio(es) to add to the folio. Can accept: File or Array of Files.
     * @param {varies=any} [folioMetadata] Meta data for the folio. Can accept: Ordered array containing key:String, value:String.
     * @param {varies=any} [exportFolioParams] Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional)
     * @return undefined
     */
    exportFolioToDirectoryPackage: function (destination, miniFolioList, folioMetadata, exportFolioParams) {
        
    },


    /**
     * Get all overlays.
     *
     * @param {Document} [portraitDocumentForCheckingOverlays] The portrait document for checking overlays.
     * @param {Document} [landscapeDocumentForCheckingOverlays] The landscape document for checking overlays.
     * @param {varies=any} [miniFolioParams] Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional)
     * @return varies=any
     */
    getAllOverlays: function (portraitDocumentForCheckingOverlays, landscapeDocumentForCheckingOverlays, miniFolioParams) {
        
    },


    /**
     * Create a mini-folio out of asset and overlay descriptions.

Schema for the mini folio description:
|| Key || Type || Required? || Description ||
| contentstackid | string | yes | The explicit ID to be used for this stack |
| tocImage | file | no | The TOC image for the mini-folio |
| narrowdimension | int | no | Targetted export size, measured along narrow dimension |
| widedimension | int | no | Targetted export size, measured along wide dimension |
| smoothscrolling | @enum(SmoothScrollingOptions) | no | The smooth scrolling behavior for this stack (default is noSmoothScroll) |
| locationforgeneratedassets | file | no | If included, this is an existing directory where the generated assets should be created. |
| overlays | array | no | see the SDK Overlay Builder APIs |
| assets | array | yes | The assets for the mini - folio, described below. |
| assetDependencies | array | no | Files that are needed by the asset, that will be included in the package but not the manifest. |
| metadata | array | no | The metadata for the mini-folio described below. |
| showprogressbar | boolean | no | Either true or false to indicate whether we should show a progress bar (default is false) |
| targetviewerversion | string | no | If provided (in the form "major.minor.revision") a folio compatible with the viewer version is produced. If omitted, the latest folio format is produced. | CS5 |

The following are fields in the array for "assets":
|| Key || Type || Required? || Description ||
| file | file | yes | The asset file |
| type | string | yes | The asset file type, either "web" for HTML or "image" for a raster |
| width | int | yes | The asset width |
| height | int | yes | The asset height |
| orientation | string | yes | The asset orientation, either "portrait" or "landscape" |
| thumbnail | file | no | A thumbnail of the asset to be used in browse mode |
| scrubber | file | no | A thumbnail of the asset to be used in scrubber mode |

The following are fields in the array for "assetDependencies":
|| Key || Type || Required? || Description ||
| file | file | no | The dependent file |
| relativePath | string | no | The relative path to the file, for use in the package |

The following are fields in the array for "metadata":
|| Key || Type || Required? || Description ||
| any string | string or boolean | no | any key/value where the key is a string, and the value is either a string or a boolean, such as those described in "export folio meta data" |
     *
     * @param {varies=any} [miniFolioDescription] A dictionary describing the custom mini folio to create. Can accept: Ordered array containing key:String, value:Boolean, Long Integer, Long Long Integer, String, File or Array of Any Types.
     * @param {File} [destination] The location to write the file.
     * @return undefined
     */
    createCustomMiniFolio: function (miniFolioDescription, destination) {
        
    },


    /**
     * Deletes unused XML markup tags.
     *
     * @return undefined
     */
    deleteUnusedTags: function () {
        
    },


    /**
     * Loads a set of XML markup tags from the specified file.
     *
     * @param {File} [from] The path to the file that contains the tags.
     * @return undefined
     */
    loadXMLTags: function (from) {
        
    },


    /**
     * Saves a set of tags to an external file.
     *
     * @param {File} [to] The full path to the file in which to save the tags.
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    saveXMLTags: function (to, versionComments, forceSave) {
        
    },


    /**
     * Mount a Version Cue project.
     *
     * @param {string} [serverURL] The URL of the Version Cue server containing the project
     * @param {string} [projectName] The name of the Version Cue project to mount
     * @return undefined
     */
    mountProject: function (serverURL, projectName) {
        
    },


    /**
     * Imports the specified styles.
     *
     * @param {ImportFormat} [format] The types of styles to import.
     * @param {File} [from] The file containing the styles you want to import.
     * @param {GlobalClashResolutionStrategy} [globalStrategy] The resolution strategy to employ for imported styles that have the same names as existing styles. (Optional) (default: GlobalClashResolutionStrategy.LOAD_ALL_WITH_OVERWRITE)
     * @return undefined
     */
    importStyles: function (format, from, globalStrategy) {
        
    },


    /**
     * Exports stroke styles or presets.
     *
     * @param {File} [to] The file to save to
     * @param {StrokeStyle} [strokeStyleList] The list of stroke styles to save
     * @param {string} [versionComments] The comment for this version (Optional)
     * @param {boolean} [forceSave] Forcibly save a version (Optional) (default: false)
     * @return undefined
     */
    exportStrokeStyles: function (to, strokeStyleList, versionComments, forceSave) {
        
    },


    /**
     * Finds color that matches the find what value.
     *
     * @return number
     */
    findColor: function () {
        
    },


    /**
     * Finds color that matches the find what value and replaces the color with the change to value.
     *
     * @return number
     */
    changeColor: function () {
        
    },


    /**
     * Finds text that matches the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findText: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value and replaces the text with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeText: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findGrep: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value and replaces the text with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeGrep: function (reverseOrder) {
        
    },


    /**
     * Finds glyphs that match the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findGlyph: function (reverseOrder) {
        
    },


    /**
     * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeGlyph: function (reverseOrder) {
        
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
     * Saves the specified find/change query.
     *
     * @param {string} [queryName] The query to save.
     * @param {SearchModes} [searchMode] The search mode.
     * @return undefined
     */
    saveFindChangeQuery: function (queryName, searchMode) {
        
    },


    /**
     * Loads the specified find/change query.
     *
     * @param {string} [queryName] The query to load.
     * @param {SearchModes} [searchMode] The search mode.
     * @return undefined
     */
    loadFindChangeQuery: function (queryName, searchMode) {
        
    },


    /**
     * Deletes the specified find/change query.
     *
     * @param {string} [queryName] The query to delete.
     * @param {SearchModes} [searchMode] The search mode.
     * @return undefined
     */
    deleteFindChangeQuery: function (queryName, searchMode) {
        
    },


    /**
     * Finds text that matches the find character type value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findTransliterate: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find character type value and replaces the text with the change character type value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeTransliterate: function (reverseOrder) {
        
    },


    /**
     * Prints the specified file(s).
     *
     * @param {varies=any} [from] One or more file paths. Can accept: File or Array of Files.
     * @param {boolean} [printDialog] Whether to invoke the print dialog (Optional)
     * @param {varies=any} [using] Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. (Optional)
     * @return undefined
     */
    print: function (from, printDialog, using) {
        
    },


    /**
     * Export the presets to a file.
     *
     * @param {ExportPresetFormat} [format] The preset format.
     * @param {File} [to] The file to export to.
     * @param {string} [versionComments] The comments for this version. (Optional)
     * @param {boolean} [forceSave] Forcibly save a version. (Optional) (default: false)
     * @return undefined
     */
    exportPresets: function (format, to, versionComments, forceSave) {
        
    },


    /**
     * Imports presets from the specified file.
     *
     * @param {ExportPresetFormat} [format] The type of preset to import.
     * @param {File} [from] The file to import presets from.
     * @return undefined
     */
    importFile: function (format, from) {
        
    },


    /**
     * Place one or more files following the behavior of the place menu item. This may load the place gun or replace the selected object, depending on current preferences.
     *
     * @param {varies=any} [fileName] One or more files to place. Can accept: File or Array of Files.
     * @param {boolean} [showingOptions] Whether to display the import options dialog (Optional) (default: false)
     * @param {Object} [withProperties] Initial values for properties of the placed object(s) (Optional)
     * @return undefined
     */
    place: function (fileName, showingOptions, withProperties) {
        
    },


    /**
     * Removes the frame fittings options and resets it to the initial state.
     *
     * @return undefined
     */
    clearFrameFittingOptions: function () {
        
    },


    /**
     * Forces a check for new fonts in the various Fonts folders.
     *
     * @return undefined
     */
    updateFonts: function () {
        
    },


    /**
     * Load motion preset from the specified file.
     *
     * @param {File} [from] The Flash motion preset file.
     * @return MotionPreset
     */
    loadMotionPreset: function (from) {
        
    },


    /**
     * Cuts the selection in the active document window and stores it in the clipboard.
     *
     * @return undefined
     */
    cut: function () {
        
    },


    /**
     * Copies the selection in the active document window to the clipboard.
     *
     * @return undefined
     */
    copy: function () {
        
    },


    /**
     * Pastes data from the clipboard into the active document window.
     *
     * @return undefined
     */
    paste: function () {
        
    },


    /**
     * Pastes data from the clipboard into the selected object in the active document window.
     *
     * @return undefined
     */
    pasteInto: function () {
        
    },


    /**
     * Pastes data from the clipboard into the active document window at the same position that the data held in its original document.
     *
     * @return undefined
     */
    pasteInPlace: function () {
        
    },


    /**
     * Gets the count which will be used in the name of the next untitled document.
     *
     * @return number
     */
    getUntitledCount: function () {
        
    },


    /**
     * Sets the count which will be used in the name of the next untitled document.
     *
     * @param {number} [untitledCount] The count to be used in the name of the next untitled document. Only positive values are expected
     * @return undefined
     */
    setUntitledCount: function (untitledCount) {
        
    },


    /**
     * Transforms color values
     *
     * @param {number} [colorValue] source color value
     * @param {ColorSpace} [sourceColorSpace] source color space
     * @param {ColorSpace} [destinationColorSpace] destination color space
     * @return number
     */
    colorTransform: function (colorValue, sourceColorSpace, destinationColorSpace) {
        
    },


    /**
     * Pastes data (minus formatting) from the clipboard into the active document window.
     *
     * @return undefined
     */
    pasteWithoutFormatting: function () {
        
    },


    /**
     * Load swatches from the specified file.
     *
     * @param {File} [from] The swatch file or InDesign document.
     * @return undefined
     */
    loadSwatches: function (from) {
        
    },


    /**
     * Saves the specified swatch(es) to a swatchbook file.
     *
     * @param {File} [to] The swatchbook file to save to.
     * @param {Swatch} [swatchList] The swatch(es) to save.
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    saveSwatches: function (to, swatchList, versionComments, forceSave) {
        
    },


    /**
     * Imports a spot color swatch from an Adobe color book.
     *
     * @param {string} [name] The spot color to load.
     * @return Color
     */
    importAdobeSwatchbookSpotColor: function (name) {
        
    },


    /**
     * Imports a process color swatch from a preloaded Adobe color book.
     *
     * @param {string} [name] The process color to load.
     * @return Color
     */
    importAdobeSwatchbookProcessColor: function (name) {
        
    },


    /**
     * Load conditions from the specified file.
     *
     * @param {File} [from] The path to the file that contains the conditions.
     * @param {boolean} [loadConditionSets] If true, load the condition sets as well. (Optional)
     * @return undefined
     */
    loadConditions: function (from, loadConditionSets) {
        
    },


    /**
     * Selects the specified object(s).
     *
     * @param {varies=any} [selectableItems] The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator.
     * @param {SelectionOptions} [existingSelection] The selection status of the Application in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (selectableItems, existingSelection) {
        
    },


    /**
     * Applies the specified shortcut set file. No string will apply the default shortcut set.
     *
     * @param {string} [name] The shortcut set. (Optional)
     * @return undefined
     */
    applyShortcutSet: function (name) {
        
    },


    /**
     * Applies the specified workspace.
     *
     * @param {string} [name] The workspace. (Optional)
     * @return undefined
     */
    applyWorkspace: function (name) {
        
    },


    /**
     * Applies the specified menu customization set. An empty string will reset all menus and colorization (Show Full Menus). No string will apply the default menu set.
     *
     * @param {string} [name] The menu customization set. (Optional)
     * @return undefined
     */
    applyMenuCustomization: function (name) {
        
    },


    /**
     * Toggles the visibility of the entire panel system.
     *
     * @return undefined
     */
    togglePanelSystemVisibility: function () {
        
    },


    /**
     * Opens the specified document, book, or library.
     *
     * @param {varies=any} [from] The file path(s) to the document, book, or library. Can accept: File or Array of Files.
     * @param {boolean} [showingWindow] If true, opens the document in a window. If false, the document is opened but is not displayed in a window. (Optional) (default: true)
     * @param {OpenOptions} [openOption] How to open the document. (Optional) (default: OpenOptions.DEFAULT_VALUE)
     * @return varies=any
     */
    open: function (from, showingWindow, openOption) {
        
    },


    /**
     * Quits the application.
     *
     * @param {SaveOptions} [saving] The option to use for saving changes to open documents before quitting. (Optional) (default: SaveOptions.ASK)
     * @return undefined
     */
    quit: function (saving) {
        
    },


    /**
     * Executes the script in the specified language as a single transaction.
     *
     * @param {varies=any} [script] The script to execute. Can accept: File, String or JavaScript Function.
     * @param {ScriptLanguage} [language] The language of the script to execute. If not specified, uses the language used to call this method. (Optional) (default: ScriptLanguage.UNKNOWN)
     * @param {any} [withArguments] An array of arguments passed to the script. (Optional)
     * @param {UndoModes} [undoMode] How to undo this script. (Optional) (default: UndoModes.SCRIPT_REQUEST)
     * @param {string} [undoName] The name of the undo step for entire script undo mode. (Optional) (default: Script)
     * @return any
     */
    doScript: function (script, language, withArguments, undoMode, undoName) {
        
    },


    /**
     * Makes the application the front-most or active window.
     *
     * @return undefined
     */
    activate: function () {
        
    },


    /**
     * Cascades all document windows.
     *
     * @return undefined
     */
    cascadeWindows: function () {
        
    },


    /**
     * Internal use only: a black box method for use by InDesign Engineering team only.
     *
     * @param {string} [internalParameter1] The first internal parameter
     * @param {string} [internalParameter2] The second internal parameter
     * @return string
     */
    internalMethod: function (internalParameter1, internalParameter2) {
        
    },


    /**
     * Delete cloud document for a given reference.
     *
     * @param {string} [assetReference] The reference to asset
     * @return boolean
     */
    deleteCloudDocument: function (assetReference) {
        
    },


    /**
     * Open cloud document for a given reference.
     *
     * @param {string} [assetReference] The reference to asset
     * @param {boolean} [showingWindow] If true, opens the document in a window. If false, the document is opened but is not displayed in a window. (Optional) (default: true)
     * @return Document
     */
    openCloudDocument: function (assetReference, showingWindow) {
        
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
     * Returns the locale-independent string(s) from the internal string localization database that correspond to the specified string (in the current locale).
     *
     * @param {string} [forXYZ] The string to search for.
     * @return string
     */
    findKeyStrings: function (forXYZ) {
        
    },


    /**
     * Translates a key string into localized form based on current application locale.
     *
     * @param {string} [forXYZ] The key string to translate
     * @return string
     */
    translateKeyString: function (forXYZ) {
        
    },


    /**
     * Undoes the last action.
     *
     * @return undefined
     */
    undo: function () {
        
    },


    /**
     * Redoes the last action.
     *
     * @return undefined
     */
    redo: function () {
        
    },


    /**
     * Tile all document windows
     *
     * @return undefined
     */
    tileWindows: function () {
        
    },


    /**
     * Generate schema for IDML.
     *
     * @param {File} [to] The folder path of the schema.
     * @param {boolean} [packageFormat] If true, generate schema for package format (multiple files). Default value is false. (Optional)
     * @return undefined
     */
    generateIDMLSchema: function (to, packageFormat) {
        
    },


    /**
     * Cancels all the background tasks.
     *
     * @return undefined
     */
    cancelAllTasks: function () {
        
    },


    /**
     * Waits for all the background tasks to finish.
     *
     * @return TaskState
     */
    waitForAllTasks: function () {
        
    },


    /**
     * Sets the application's preferences.
     *
     * @param {varies=any} [applicationPreferences] The IDML defaults file or enumeration. Can accept: File or LanguageAndRegion enumerator.
     * @return undefined
     */
    setApplicationPreferences: function (applicationPreferences) {
        
    },


    /**
     * Generates a string which, if executed, will return the Application.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Application
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


var app = Application;
