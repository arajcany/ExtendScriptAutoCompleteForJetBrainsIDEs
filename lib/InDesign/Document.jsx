/*
 * A document.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Document = {


    /**
     * Dispatched before a Document is printed. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_PRINT: beforePrint,


    /**
     * Dispatched after a Document is printed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_PRINT: afterPrint,


    /**
     * Dispatched after one or more links in the Document have been added, deleted, or modified. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_LINKS_CHANGED: afterLinksChanged,


    /**
     * Dispatched after a Document is created. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_NEW: afterNew,


    /**
     * Dispatched after a Document is opened. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_OPEN: afterOpen,


    /**
     * Dispatched before a Document is saved. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_SAVE: beforeSave,


    /**
     * Dispatched after a Document is saved. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SAVE: afterSave,


    /**
     * Dispatched before a Document is saved under a new name. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_SAVE_AS: beforeSaveAs,


    /**
     * Dispatched after a Document is saved under a new name. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SAVE_AS: afterSaveAs,


    /**
     * Dispatched before a copy of a Document is saved. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_SAVE_A_COPY: beforeSaveACopy,


    /**
     * Dispatched after a copy of a Document is saved. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SAVE_A_COPY: afterSaveACopy,


    /**
     * Dispatched before a Document is reverted. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_REVERT: beforeRevert,


    /**
     * Dispatched after a Document is reverted. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_REVERT: afterRevert,


    /**
     * Dispatched before a Document is closed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_CLOSE: beforeClose,


    /**
     * Dispatched before a Document is exported. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_EXPORT: beforeExport,


    /**
     * Dispatched after a Document is exported. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_EXPORT: afterExport,


    /**
     * Dispatched after a Document export is canceled or fails. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    FAILED_EXPORT: failedExport,


    /**
     * Dispatched before importing a file into a Document. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_IMPORT: beforeImport,


    /**
     * Dispatched after importing a file into a Document. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_IMPORT: afterImport,


    /**
     * Dispatched before the Document becomes inactive. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DEACTIVATE: beforeDeactivate,


    /**
     * Dispatched after the Document becomes active. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_ACTIVATE: afterActivate,


    /**
     * XML view preference settings.
     * @type {XMLViewPreference}
     * @readonly
     */
    xmlViewPreferences: XMLViewPreference,


    /**
     * Galley preference settings.
     * @type {GalleyPreference}
     * @readonly
     */
    galleyPreferences: GalleyPreference,


    /**
     * Preflight option settings.
     * @type {PreflightOption}
     * @readonly
     */
    preflightOptions: PreflightOption,


    /**
     * The active preflight process for this document.
     * @type {PreflightProcess}
     * @readonly
     */
    activeProcess: PreflightProcess,


    /**
     * Data merge properties that define data merge fields and preferences.
     * @type {DataMerge}
     * @readonly
     */
    dataMergeProperties: DataMerge,


    /**
     * The data merge option properties that define the data merge.
     * @type {DataMergeOption}
     * @readonly
     */
    dataMergeOptions: DataMergeOption,


    /**
     * Adjust layout preference settings.
     * @type {AdjustLayoutPreference}
     * @readonly
     */
    adjustLayoutPreferences: AdjustLayoutPreference,


    /**
     * EPub fixed layout export preference settings.
     * @type {EPubFixedLayoutExportPreference}
     * @readonly
     */
    epubFixedLayoutExportPreferences: EPubFixedLayoutExportPreference,


    /**
     * HTML FXL export preference settings.
     * @type {HTMLFXLExportPreference}
     * @readonly
     */
    htmlFXLExportPreferences: HTMLFXLExportPreference,


    /**
     * Publish export preference settings.
     * @type {PublishExportPreference}
     * @readonly
     */
    publishExportPreferences: PublishExportPreference,


    /**
     * EPub export preference settings.
     * @type {EPubExportPreference}
     * @readonly
     */
    epubExportPreferences: EPubExportPreference,


    /**
     * HTML export preference settings.
     * @type {HTMLExportPreference}
     * @readonly
     */
    htmlExportPreferences: HTMLExportPreference,


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
     * The XML element associated with the Document.
     * @type {XMLItem}
     * @readonly
     */
    associatedXMLElement: XMLItem,


    /**
     * The default export for web preferences.
     * @type {ExportForWebPreference}
     * @readonly
     */
    exportForWebPreferences: ExportForWebPreference,


    /**
     * The Version Cue version state of the file.
     * @type {VersionState}
     * @readonly
     */
    versionState: VersionState,


    /**
     * The Version Cue editing state of the file.
     * @type {EditingState}
     * @readonly
     */
    editingState: EditingState,


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
     * Print preference settings.
     * @type {PrintPreference}
     * @readonly
     */
    printPreferences: PrintPreference,


    /**
     * Booklet printing options.
     * @type {PrintBookletOption}
     * @readonly
     */
    printBookletOptions: PrintBookletOption,


    /**
     * Print booklet preferences.
     * @type {PrintBookletPrintPreference}
     * @readonly
     */
    printBookletPrintPreferences: PrintBookletPrintPreference,


    /**
     * Tagged PDF preferences.
     * @type {TaggedPDFPreference}
     * @readonly
     */
    taggedPDFPreferences: TaggedPDFPreference,


    /**
     * The place gun.
     * @type {PlaceGun}
     * @readonly
     */
    placeGuns: PlaceGun,


    /**
     * Metadata preference settings.
     * @type {MetadataPreference}
     * @readonly
     */
    metadataPreferences: MetadataPreference,


    /**
     * The index options properties that define how an index is formatted.
     * @type {IndexOptions}
     * @readonly
     */
    indexGenerationOptions: IndexOptions,


    /**
     * Lists all page items contained by the Document.
     * @type {PageItem}
     * @readonly
     */
    allPageItems: PageItem,


    /**
     * Lists all graphics contained by the Document.
     * @type {Graphic}
     * @readonly
     */
    allGraphics: Graphic,


    /**
     * All object styles contained by the Document.
     * @type {ObjectStyle}
     * @readonly
     */
    allObjectStyles: ObjectStyle,


    /**
     * The default page item formatting for the Document.
     * @type {PageItemDefault}
     * @readonly
     */
    pageItemDefaults: PageItemDefault,


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
     * The full path to the Document, including the name of the Document.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * If true, the Document is visible.
     * @type {boolean}
     * @readonly
     */
    visible: undefined,


    /**
     * The full path to the file.
     * @type {File}
     * @readonly
     */
    filePath: File,


    /**
     * If true, the Document has been modified since it was last saved.
     * @type {boolean}
     * @readonly
     */
    modified: undefined,


    /**
     * If true, the Document has been saved since it was created.
     * @type {boolean}
     * @readonly
     */
    saved: undefined,


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
     * If true, the Document was converted.
     * @type {boolean}
     * @readonly
     */
    converted: undefined,


    /**
     * If true, the Document was recovered.
     * @type {boolean}
     * @readonly
     */
    recovered: undefined,


    /**
     * If true, the Document is read-only.
     * @type {boolean}
     * @readonly
     */
    readOnly: undefined,


    /**
     * The unique ID of the Document.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Conditional text preferences.
     * @type {ConditionalTextPreference}
     * @readonly
     */
    conditionalTextPreferences: ConditionalTextPreference,


    /**
     * A list of valid CMYK profiles.
     * @type {string}
     * @readonly
     */
    cmykProfileList: undefined,


    /**
     * A list of valid RGB profiles.
     * @type {string}
     * @readonly
     */
    rgbProfileList: undefined,


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
     * Mojikumi user interface preference settings.
     * @type {MojikumiUiPreference}
     * @readonly
     */
    mojikumiUIPreferences: MojikumiUiPreference,


    /**
     * Chapter numbering preferences.
     * @type {ChapterNumberPreference}
     * @readonly
     */
    chapterNumberPreferences: ChapterNumberPreference,


    /**
     * The selected page item(s). Can also accept: Object or NothingEnum enumerator.
     * @type {Object}
     * @readonly
     */
    selectedPageItems: Object,


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
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Document (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the Document within its containing object.
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
     * A collection of preflight profiles.
     * @type {PreflightProfiles}
     * @readonly
     */
    preflightProfiles: PreflightProfiles,


    /**
     * A collection of data merge text placeholders.
     * @type {DataMergeTextPlaceholders}
     * @readonly
     */
    dataMergeTextPlaceholders: DataMergeTextPlaceholders,


    /**
     * A collection of data merge image placeholders.
     * @type {DataMergeImagePlaceholders}
     * @readonly
     */
    dataMergeImagePlaceholders: DataMergeImagePlaceholders,


    /**
     * A collection of data merge QR code placeholders.
     * @type {DataMergeQrcodePlaceholders}
     * @readonly
     */
    dataMergeQrcodePlaceholders: DataMergeQrcodePlaceholders,


    /**
     * A collection of XML elements.
     * @type {XMLElements}
     * @readonly
     */
    xmlElements: XMLElements,


    /**
     * A collection of XML items.
     * @type {XMLItems}
     * @readonly
     */
    xmlItems: XMLItems,


    /**
     * A collection of XML comments.
     * @type {XMLComments}
     * @readonly
     */
    xmlComments: XMLComments,


    /**
     * A collection of XML instructions.
     * @type {XMLInstructions}
     * @readonly
     */
    xmlInstructions: XMLInstructions,


    /**
     * A collection of DTDs.
     * @type {DTDs}
     * @readonly
     */
    dtds: DTDs,


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
     * A collection of xml stories.
     * @type {XmlStories}
     * @readonly
     */
    xmlStories: XmlStories,


    /**
     * A collection of stories.
     * @type {Stories}
     * @readonly
     */
    stories: Stories,


    /**
     * A collection of XML tags.
     * @type {XMLTags}
     * @readonly
     */
    xmlTags: XMLTags,


    /**
     * A collection of XML validation errors.
     * @type {ValidationErrors}
     * @readonly
     */
    validationErrors: ValidationErrors,


    /**
     * A collection of TOC styles.
     * @type {TOCStyles}
     * @readonly
     */
    tocStyles: TOCStyles,


    /**
     * A collection of hyphenation exceptions lists.
     * @type {HyphenationExceptions}
     * @readonly
     */
    hyphenationExceptions: HyphenationExceptions,


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
     * A collection of pages.
     * @type {Pages}
     * @readonly
     */
    pages: Pages,


    /**
     * A collection of spreads.
     * @type {Spreads}
     * @readonly
     */
    spreads: Spreads,


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
     * A collection of sections.
     * @type {Sections}
     * @readonly
     */
    sections: Sections,


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
     * A collection of PDF comment objects
     * @type {PDFComments}
     * @readonly
     */
    pdfComments: PDFComments,


    /**
     * A collection of master spreads.
     * @type {MasterSpreads}
     * @readonly
     */
    masterSpreads: MasterSpreads,


    /**
     * A collection of links.
     * @type {Links}
     * @readonly
     */
    links: Links,


    /**
     * A collection of languages.
     * @type {Languages}
     * @readonly
     */
    languages: Languages,


    /**
     * A collection of layers.
     * @type {Layers}
     * @readonly
     */
    layers: Layers,


    /**
     * A collection of indexes.
     * @type {Indexes}
     * @readonly
     */
    indexes: Indexes,


    /**
     * A collection of indexing sort options.
     * @type {IndexingSortOptions}
     * @readonly
     */
    indexingSortOptions: IndexingSortOptions,


    /**
     * A collection of hyperlinks.
     * @type {Hyperlinks}
     * @readonly
     */
    hyperlinks: Hyperlinks,


    /**
     * A collection of bookmarks.
     * @type {Bookmarks}
     * @readonly
     */
    bookmarks: Bookmarks,


    /**
     * A collection of hyperlink page item sources.
     * @type {HyperlinkPageItemSources}
     * @readonly
     */
    hyperlinkPageItemSources: HyperlinkPageItemSources,


    /**
     * A collection of hyperlink text sources.
     * @type {HyperlinkTextSources}
     * @readonly
     */
    hyperlinkTextSources: HyperlinkTextSources,


    /**
     * A collection of hyperlink text destinations.
     * @type {HyperlinkTextDestinations}
     * @readonly
     */
    hyperlinkTextDestinations: HyperlinkTextDestinations,


    /**
     * A collection of hyperlink page destinations.
     * @type {HyperlinkPageDestinations}
     * @readonly
     */
    hyperlinkPageDestinations: HyperlinkPageDestinations,


    /**
     * A collection of cross reference formats.
     * @type {CrossReferenceFormats}
     * @readonly
     */
    crossReferenceFormats: CrossReferenceFormats,


    /**
     * A collection of cross reference text sources.
     * @type {CrossReferenceSources}
     * @readonly
     */
    crossReferenceSources: CrossReferenceSources,


    /**
     * A collection of paragraph destinations.
     * @type {ParagraphDestinations}
     * @readonly
     */
    paragraphDestinations: ParagraphDestinations,


    /**
     * A collection of hyperlink external page destinations.
     * @type {HyperlinkExternalPageDestinations}
     * @readonly
     */
    hyperlinkExternalPageDestinations: HyperlinkExternalPageDestinations,


    /**
     * A collection of hyperlink URL destinations.
     * @type {HyperlinkURLDestinations}
     * @readonly
     */
    hyperlinkURLDestinations: HyperlinkURLDestinations,


    /**
     * A collection of guides.
     * @type {Guides}
     * @readonly
     */
    guides: Guides,


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
     * A collection of numbered lists.
     * @type {NumberingLists}
     * @readonly
     */
    numberingLists: NumberingLists,


    /**
     * A collection of assignments.
     * @type {Assignments}
     * @readonly
     */
    assignments: Assignments,


    /**
     * A collection of articles.
     * @type {Articles}
     * @readonly
     */
    articles: Articles,


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
     * The name of the Document.
     * @type {string}
     */
    name: undefined,


    /**
     * The ruler origin, specified as page coordinates in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    zeroPoint: Measurement Unit (Number or String)=any,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * The active layer. Can also accept: String.
     * @type {Layer}
     */
    activeLayer: Layer,


    /**
     * The current CMYK profile.
     * @type {string}
     */
    cmykProfile: undefined,


    /**
     * The current RGB profile.
     * @type {string}
     */
    rgbProfile: undefined,


    /**
     * The rendering intent for all vector art (areas of solid color) in native objects.
     * @type {RenderingIntent}
     */
    solidColorIntent: RenderingIntent,


    /**
     * The rendering intent for colors that result from transparency interactions on the page after blending.
     * @type {RenderingIntent}
     */
    afterBlendingIntent: RenderingIntent,


    /**
     * The rendering intent for bitmap images.
     * @type {RenderingIntent}
     */
    defaultImageIntent: RenderingIntent,


    /**
     * The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another.
     * @type {ColorSettingsPolicy}
     */
    rgbPolicy: ColorSettingsPolicy,


    /**
     * The policy for handling colors in a CMYK color model, including reading and embedding color profiles, mismatches between embedded color profiles and the working space, and moving colors from one document to another.
     * @type {ColorSettingsPolicy}
     */
    cmykPolicy: ColorSettingsPolicy,


    /**
     * If true, uses LAB alternates for spot colors when available.
     * @type {boolean}
     */
    accurateLABSpots: undefined,


    /**
     * The selected object(s). Can also accept: Object or NothingEnum enumerator.
     * @type {Object}
     */
    selection: Object,


    /**
     * The key object of the selection. Can also accept: NothingEnum enumerator.
     * @type {PageItem}
     */
    selectionKeyObject: PageItem,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Create a missing font object.
     *
     * @param {string} [fontFamily] The name of the font family
     * @param {string} [fontStyleName] The name of the font style.
     * @param {string} [postscriptName] The PostScript name of the font.
     * @return Font
     */
    createMissingFontObject: function (fontFamily, fontStyleName, postscriptName) {
        
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
     * Exports as assets required for cloud library.
     *
     * @param {string} [jsondata] JSON encoded information about the export.
     * @return boolean
     */
    exportForCloudLibrary: function (jsondata) {
        
    },


    /**
     * Selected text direction
     *
     * @return TextDirection
     */
    getSelectedTextDirection: function () {
        
    },


    /**
     * Packages the document.
     *
     * @param {File} [to] The folder, alias, or path in which to place the packaged files.
     * @param {boolean} [copyingFonts] If true, copies fonts used in the document to the package folder.
     * @param {boolean} [copyingLinkedGraphics] If true, copies linked graphics files to the package folder.
     * @param {boolean} [copyingProfiles] If true, copies color profiles to the package folder.
     * @param {boolean} [updatingGraphics] If true, updates graphics links to the package folder.
     * @param {boolean} [includingHiddenLayers] If true, copies fonts and links from hidden layers to the package.
     * @param {boolean} [ignorePreflightErrors] If true, ignores preflight errors and proceeds with the packaging. If false, cancels the packaging when errors exist.
     * @param {boolean} [creatingReport] If true, creates a package report that includes printing instructions, print settings, lists of fonts, links and required inks, and other information.
     * @param {boolean} [includeIdml] If true, generates and includes IDML in the package folder. (Optional)
     * @param {boolean} [includePdf] If true, generates and includes PDF in the package folder. (Optional)
     * @param {string} [pdfStyle] If specified and PDF is to be included, use this style for PDF export if it is valid, otherwise use the last used PDF preset. (Optional)
     * @param {boolean} [useDocumentHyphenationExceptionsOnly] If this option is selected, InDesign flags this document so that it does not reflow when someone else opens or edits it on a computer that has different hyphenation and dictionary settings. (Optional)
     * @param {string} [versionComments] The comments for the version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return boolean
     */
    packageForPrint: function (to, copyingFonts, copyingLinkedGraphics, copyingProfiles, updatingGraphics, includingHiddenLayers, ignorePreflightErrors, creatingReport, includeIdml, includePdf, pdfStyle, useDocumentHyphenationExceptionsOnly, versionComments, forceSave) {
        
    },


    /**
     * Embed this profile to the document.
     *
     * @param {varies=any} [using] The preflight profile to embed. Can accept: String or PreflightProfile.
     * @return PreflightProfile
     */
    embed: function (using) {
        
    },


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
     * This will return an array of structs containing information about the alternate layouts.
     *
     * @param {boolean} [resolveMaster] Resolves layout policy if setting is "use master" - default is true. (Optional)
     * @return varies=any
     */
    getAlternateLayoutsForFolio: function (resolveMaster) {
        
    },


    /**
     * Auto tag the document based on the style to tag mappings
     *
     * @return undefined
     */
    mapStylesToXMLTags: function () {
        
    },


    /**
     * Auto style the document based on the tag to style mappings
     *
     * @return undefined
     */
    mapXMLTagsToStyles: function () {
        
    },


    /**
     * Imports a DTD to use for validation.
     *
     * @param {File} [from] The path to the DTD file.
     * @return undefined
     */
    importDtd: function (from) {
        
    },


    /**
     * Imports the specified XML file into an InDesign document.
     *
     * @param {File} [from] The XML file.
     * @return undefined
     */
    importXML: function (from) {
        
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
     * Change comoser to optyca
     *
     * @return undefined
     */
    changeComposer: function () {
        
    },


    /**
     * Reverts to the version of the document in Version Cue.
     *
     * @param {boolean} [forceRevert] Forcibly reverts to the project version. (Optional) (default: false)
     * @return undefined
     */
    revertToProject: function (forceRevert) {
        
    },


    /**
     * Synchronizes the file with the Version Cue project.
     *
     * @param {SyncConflictResolution} [syncConflictResolution] The conflict resolution method to use during synchronization. (Optional) (default: SyncConflictResolution.SKIP_CONFLICTS)
     * @param {string} [versionComments] The comments that describe the version. (Optional)
     * @return VersionCueSyncStatus
     */
    synchronizeWithVersionCue: function (syncConflictResolution, versionComments) {
        
    },


    /**
     * Check in to Version Cue.
     *
     * @param {string} [versionComments] The comment for this version (Optional)
     * @param {boolean} [forceSave] Forcibly save a version (Optional) (default: false)
     * @return undefined
     */
    checkIn: function (versionComments, forceSave) {
        
    },


    /**
     * Creates a table of contents.
     *
     * @param {TOCStyle} [using] The TOC style to use to define the content, title, and format of the table of contents.
     * @param {boolean} [replacing] If true, replaces the existing TOC. (Optional) (default: false)
     * @param {Book} [fromBook] The book whose documents to include in the TOC. (Optional)
     * @param {Measurement Unit (Number or String)=any} [placePoint] The point at which to place the TOC story, specified as page coordinates in the format [x, y]. (Optional)
     * @param {boolean} [includeOverset] If true, includes overset text TOC entries in the TOC. (Optional) (default: false)
     * @param {Layer} [destinationLayer] The layer on which to place the TOC. (Optional)
     * @return Story
     */
    createTOC: function (using, replacing, fromBook, placePoint, includeOverset, destinationLayer) {
        
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
     * Recomposes the text in the Document.
     *
     * @return undefined
     */
    recompose: function () {
        
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
     * Deprecated: Use ContentPlacerObject load method. Original Description: Place following the behavior of the place and link story menu item. This will load the place gun.
     *
     * @param {Story} [parentStory] The story to place and link from.
     * @param {boolean} [showingOptions] Whether to display the link options dialog (Optional) (default: false)
     * @return undefined
     */
    placeAndLink: function (parentStory, showingOptions) {
        
    },


    /**
     * Prints the Document(s).
     *
     * @param {boolean} [printDialog] Whether to invoke the print dialog (Optional)
     * @param {varies=any} [using] Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. (Optional)
     * @return undefined
     */
    print: function (printDialog, using) {
        
    },


    /**
     * Print the Booklet using current document and Booklet and Print settings in the document
     *
     * @param {boolean} [printBookletDialog] Whether to invoke the print booklet dialog (Optional) (default: false)
     * @param {varies=any} [using] Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. (Optional)
     * @return undefined
     */
    printBooklet: function (printBookletDialog, using) {
        
    },


    /**
     * Import Commemnts from PDF
     *
     * @param {File} [from] The PDF File from which you want to import comments.
     * @param {Object} [withProperties] Initial values for properties of the new Document (Optional)
     * @return undefined
     */
    importPdfComments: function (from, withProperties) {
        
    },


    /**
     * place a cloud asset on the document
     *
     * @param {string} [jsondata] JSON data containing metadata about the cloud asset
     * @return undefined
     */
    placeCloudAsset: function (jsondata) {
        
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
     * Load masterpages from an InDesign file.
     *
     * @param {File} [from] The InDesign file to load the masters from.
     * @param {GlobalClashResolutionStrategyForMasterPage} [globalStrategyForMasterPage] the global clash resolution strategy for load master page (Optional) (default: GlobalClashResolutionStrategyForMasterPage.LOAD_ALL_WITH_OVERWRITE)
     * @return undefined
     */
    loadMasters: function (from, globalStrategyForMasterPage) {
        
    },


    /**
     * Creates an alternate layout for a given list of spreads.
     *
     * @param {Spread} [spreadItems] The spreads to create an alternate layout for.
     * @param {string} [name] The name of the alternate layout. Note: This is used for the named layout for the new section for the duplicated spreads.
     * @param {Measurement Unit (Number or String)=any} [width] The width of the pages created.
     * @param {Measurement Unit (Number or String)=any} [height] The height of the pages created.
     * @param {boolean} [createTextStyles] Whether to create new text styles.
     * @param {boolean} [linkTextStories] Whether to create linked text for duplicated text stories.
     * @param {LayoutRuleOptions} [layoutRule] What layout rule to set on the pages.
     * @return undefined
     */
    createAlternateLayout: function (spreadItems, name, width, height, createTextStyles, linkTextStories, layoutRule) {
        
    },


    /**
     * Deletes an alternate layout.
     *
     * @param {string} [name] The name of the alternate layout to delete.
     * @return undefined
     */
    deleteAlternateLayout: function (name) {
        
    },


    /**
     * Imports the cross reference formats from specified file.
     *
     * @param {File} [from] The file whose formats to import.
     * @return undefined
     */
    importFormats: function (from) {
        
    },


    /**
     * Updates cross references' text source content in the document.
     *
     * @return undefined
     */
    updateCrossReferences: function () {
        
    },


    /**
     * Align page items.
     *
     * @param {PageItem} [alignDistributeItems] The page items to align or distribute.
     * @param {AlignOptions} [alignOption] The type of alignment to apply.
     * @param {AlignDistributeBounds} [alignDistributeBounds] The bounds within which to align or distribute the page items. (Optional)
     * @param {PageItem} [reference] The reference or key object to align to distribute relative to. Required when 'align distribute bounds' specifies 'key object'. (Optional)
     * @return undefined
     */
    align: function (alignDistributeItems, alignOption, alignDistributeBounds, reference) {
        
    },


    /**
     * Distribute page items.
     *
     * @param {PageItem} [alignDistributeItems] The page items to align or distribute
     * @param {DistributeOptions} [distributeOption] The type of distribution to apply.
     * @param {AlignDistributeBounds} [alignDistributeBounds] The bounds within which to align or distribute the page items. (Optional)
     * @param {boolean} [useDistributeMeasurement] If true, distribute space between page items. When this property is true, the bounds setting is ignored. (Optional)
     * @param {Measurement Unit (Number or String)=any} [absoluteDistributeMeasurement] The distance to use when distributing page items. Required when 'align distribute bounds' specifies 'key object'. (Optional)
     * @param {PageItem} [reference] The reference or key object to align to distribute relative to. Required when 'align distribute bounds' specifies 'key object'. (Optional)
     * @return undefined
     */
    distribute: function (alignDistributeItems, distributeOption, alignDistributeBounds, useDistributeMeasurement, absoluteDistributeMeasurement, reference) {
        
    },


    /**
     * Removes the frame fittings options and resets it to the initial state.
     *
     * @return undefined
     */
    clearFrameFittingOptions: function () {
        
    },


    /**
     * Resets all the multi-state objects to their first state.
     *
     * @return undefined
     */
    resetAllMultiStateObjects: function () {
        
    },


    /**
     * Resets all the buttons to their Normal state.
     *
     * @return undefined
     */
    resetAllButtons: function () {
        
    },


    /**
     * Create Plain Text QR Code on the page item
     *
     * @param {string} [plainText] QR code Plain Text  (Optional)
     * @param {varies=any} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional)
     * @param {string} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional)
     * @return undefined
     */
    createPlainTextQRCode: function (plainText, qrCodeSwatch, withProperties) {
        
    },


    /**
     * Create Hyperlink QR Code on the page item or document
     *
     * @param {string} [urlLink] QR code Hyperlink URL  (Optional)
     * @param {varies=any} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional)
     * @param {string} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional)
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
     * @param {string} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional)
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
     * @param {string} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional)
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
     * @param {string} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional)
     * @return undefined
     */
    createVCardQRCode: function (firstName, lastName, jobTitle, cellPhone, phone, email, organisation, streetAddress, city, adrState, country, postalCode, website, qrCodeSwatch, withProperties) {
        
    },


    /**
     * Close the Document
     *
     * @param {SaveOptions} [saving] Whether to save changes before closing the Document (Optional) (default: SaveOptions.ASK)
     * @param {File} [savingIn] The file in which to save the Document (Optional)
     * @param {string} [versionComments] The comment for this version (Optional)
     * @param {boolean} [forceSave] Forcibly save a version (Optional) (default: false)
     * @return undefined
     */
    close: function (saving, savingIn, versionComments, forceSave) {
        
    },


    /**
     * Save the document
     *
     * @param {File} [to] Where to save the document. If the document is already saved, a copy is saved at this path, the original file is closed the new copy is opened (Optional)
     * @param {boolean} [stationery] Whether to save the file as stationery (Optional) (default: false)
     * @param {string} [versionComments] The comment for this version (Optional)
     * @param {boolean} [forceSave] Forcibly save a version (Optional) (default: false)
     * @return Document
     */
    save: function (to, stationery, versionComments, forceSave) {
        
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
     * Exports selected page items to snippet on the destination file path.
     *
     * @param {File} [to] The path to the export file.
     * @return undefined
     */
    exportPageItemsSelectionToSnippet: function (to) {
        
    },


    /**
     * Exports input page item ids to snippet on the destination file path.
     *
     * @param {File} [to] The path to the export file.
     * @param {number} [pageItemIds] The array of the page item ids.
     * @return undefined
     */
    exportPageItemsToSnippet: function (to, pageItemIds) {
        
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
     * Reverts the document to its state at the last save operation.
     *
     * @return boolean
     */
    revert: function () {
        
    },


    /**
     * Saves a copy of the document.
     *
     * @param {File} [to] The file path for the copy. Note: Leaves the original document open and does not open the copy. (Optional)
     * @param {boolean} [stationery] If true, saves the file as stationery (Mac OS) or as a template (Windows). Note: The file extension for stationery and templates is different than the extension for regular files. (Optional) (default: false)
     * @return undefined
     */
    saveACopy: function (to, stationery) {
        
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
     * @param {SelectionOptions} [existingSelection] The selection status of the Document in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (selectableItems, existingSelection) {
        
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
     * Generates a string which, if executed, will return the Document.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Document
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

