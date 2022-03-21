/*
 * An event.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Event = {


    /**
     * Dispatched before a Event is placed. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_PLACE: beforePlace,


    /**
     * Dispatched after a Event is placed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_PLACE: afterPlace,


    /**
     * Dispatched after one or more links in the Event have been added, deleted, or modified. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_LINKS_CHANGED: afterLinksChanged,


    /**
     * Dispatched after a Event is created. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_NEW: afterNew,


    /**
     * Dispatched before a Event is deleted. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DELETE: beforeDelete,


    /**
     * Dispatched after a Event is deleted. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_DELETE: afterDelete,


    /**
     * Dispatched before a Event is updated. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_UPDATE: beforeUpdate,


    /**
     * Dispatched after a Event is updated. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_UPDATE: afterUpdate,


    /**
     * Dispatched before a Event is embedded. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_EMBED: beforeEmbed,


    /**
     * Dispatched after a Event is embedded. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_EMBED: afterEmbed,


    /**
     * Dispatched before a Event is unembedded. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_UNEMBED: beforeUnembed,


    /**
     * Dispatched after a Event is unembedded. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_UNEMBED: afterUnembed,


    /**
     * Dispatched before a Event is relocated from one object to another. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_MOVE: beforeMove,


    /**
     * Dispatched after a Event is relocated from one object to another. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_MOVE: afterMove,


    /**
     * Dispatched when the Event is invoked. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    ON_INVOKE: onInvoke,


    /**
     * Dispatched before the Event is invoked. This event does not bubble. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_INVOKE: beforeInvoke,


    /**
     * Dispatched after the Event is invoked. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_INVOKE: afterInvoke,


    /**
     * Dispatched before the Event is displayed. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DISPLAY: beforeDisplay,


    /**
     * Dispatched before the Event is quit. Allows the quit to be canceled. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_QUIT: beforeQuit,


    /**
     * Dispatched when the Event is quitting. Since the quit has been committed, it can not be canceled. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_QUIT: afterQuit,


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
     * Dispatched before the Event becomes inactive. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DEACTIVATE: beforeDeactivate,


    /**
     * Dispatched after the Event becomes active. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_ACTIVATE: afterActivate,


    /**
     * Dispatched after a Event is opened. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_OPEN: afterOpen,


    /**
     * Dispatched before a Event is closed. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_CLOSE: beforeClose,


    /**
     * Dispatched when a Event is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_CLOSE: afterClose,


    /**
     * The name of the event.
     * @type {string}
     * @readonly
     */
    eventType: undefined,


    /**
     * The target of the event.
     * @type {Object}
     * @readonly
     */
    target: Object,


    /**
     * The current propagation target of the event.
     * @type {Object}
     * @readonly
     */
    currentTarget: Object,


    /**
     * The current propagation phase of the event.
     * @type {EventPhases}
     * @readonly
     */
    eventPhase: EventPhases,


    /**
     * If true, the event supports the bubbling phase of propagation.
     * @type {boolean}
     * @readonly
     */
    bubbles: undefined,


    /**
     * If true, the default behavior of the event on its target can be canceled.
     * @type {boolean}
     * @readonly
     */
    cancelable: undefined,


    /**
     * The time the event was initialized.
     * @type {Date}
     * @readonly
     */
    timeStamp: Date,


    /**
     * If true, propagation of the event beyond the current target has been stopped.
     * @type {boolean}
     * @readonly
     */
    propagationStopped: undefined,


    /**
     * If true, the default behavior of the event on its target has been canceled.
     * @type {boolean}
     * @readonly
     */
    defaultPrevented: undefined,


    /**
     * The unique ID of the Event.
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
     * The parent of the Event (a Object, UIDBasedObject, CellStyleGroup, CellStyle, TableStyleGroup, Article, ConditionSet, HiddenText, Condition, MotionPreset, AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, Snippet, Dialog, ColorGroup, Swatch, Color, Tint, Gradient, MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, GotoStateBehavior, GotoPreviousStateBehavior, GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, GotoNextViewBehavior, GotoPreviousPageBehavior, GotoNextPageBehavior, GotoLastPageBehavior, GotoFirstPageBehavior, PreflightProfileRule, PreflightRuleInstance, PreflightProfile, CrossReferenceFormat, HyperlinkURLDestination, HyperlinkExternalPageDestination, HyperlinkPageDestination, HyperlinkTextDestination, ParagraphDestination, HyperlinkTextSource, CrossReferenceSource, HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, PageReference, CrossReference, Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, NamedGrid, CompositeFontEntry, CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, Note, TableStyle, TextPath, Asset, Link, Section, MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, Language, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, EndnoteRange, Endnote, Reply, PDFComment, MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, IDBasedObject, ArticleChild, ArticleMember, DialogRow, DialogColumn, Widget, BorderPanel, MeasurementEditbox, MeasurementCombobox, RealCombobox, AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, EnablingGroup, IntegerCombobox, IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, CheckboxControl, Dropdown, StaticText, TextEditbox, ColorGroupSwatch, BackgroundTask, State, RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, XMLElement, Table, Cell, IdleTask, StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, GraphicLayer, NonIDBasedObject, TableStyleMapping, CharStyleMapping, CellStyleMapping, ParaStyleMapping, TimingTarget, TimingGroup, TimingList, OpacityGradientStop, ObjectStyleExportTagMap, DataMergeQrcodePlaceholder, DataMergeField, DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, NavigationPoint, PreflightProcess, PreflightRule, BuildingBlock, DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, Submenu, Menu, StyleExportTagMap, TextVariable, XMLRuleMatchData, ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, Change, HttpLinkConnectionManagerObject, RootObject, Document, Application, Book, Library, Preference, ContentPlacerObject, LinkedPageItemOption, LinkedStoryOption, PublishExportPreference, HTMLFXLExportPreference, EPubExportPreviewAppPreference, EPubFixedLayoutExportPreference, HTMLExportPreference, EPubExportPreference, ConditionalTextPreference, TimingSetting, AnimationSetting, TransformAttributeOption, AlignDistributePreference, TypeContextualUiPreference, GrabberPreference, ObjectStyleContentEffectsCategorySettings, ObjectStyleFillEffectsCategorySettings, ObjectStyleStrokeEffectsCategorySettings, ObjectStyleObjectEffectsCategorySettings, ChapterNumberPreference, NumberingRestartPolicy, Bullet, DataMerge, DataMergeOption, DataMergePreference, JPEGExportPreference, TrackChangesPreference, NotePreference, TransformPreference, ClipboardPreference, GeneralPreference, WatermarkPreference, ButtonPreference, PNGExportPreference, PreflightBookOption, PreflightOption, XMLViewPreference, GpuPerformancePreference, DisplayPerformancePreference, IndexOptions, LinkMetadata, MetadataPreference, ExcelImportPreference, TaggedTextImportPreference, TaggedTextExportPreference, WordRTFImportPreference, TextExportPreference, TextImportPreference, FindChangeContentTransparencySetting, FindChangeFillTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeTransparencySetting, GradientFeatherSetting, FindChangeGradientFeatherSetting, DirectionalFeatherSetting, FindChangeDirectionalFeatherSetting, ContentTransparencySetting, SatinSetting, FindChangeSatinSetting, BevelAndEmbossSetting, FindChangeBevelAndEmbossSetting, InnerGlowSetting, FindChangeInnerGlowSetting, OuterGlowSetting, FindChangeOuterGlowSetting, InnerShadowSetting, FindChangeInnerShadowSetting, FeatherSetting, FindChangeFeatherSetting, DropShadowSetting, FindChangeDropShadowSetting, BlendingSetting, FindChangeBlendingSetting, FillTransparencySetting, StrokeTransparencySetting, TransparencySetting, TransparencyPreference, FlattenerPreference, GalleyPreference, GridPrintingPreference, CjkGridPreference, StoryGridDataInformation, LayoutGridDataInformation, GridDataInformation, CaptionMetadataVariablePreference, CustomTextVariablePreference, MatchParagraphStylePreference, MatchCharacterStylePreference, FileNameVariablePreference, DateVariablePreference, ChapterNumberVariablePreference, PageNumberVariablePreference, FootnoteOption, BaselineFrameGridOption, AnchoredObjectSetting, AnchoredObjectDefault, ExportForWebPreference, XMLPreference, XMLExportPreference, XMLImportPreference, InCopyExportOption, LinkingPreference, ChangeColorPreference, FindColorPreference, FindChangeColorOption, ChangeTransliteratePreference, ChangeObjectPreference, ChangeGlyphPreference, ChangeGrepPreference, ChangeTextPreference, FindTransliteratePreference, FindObjectPreference, FindGlyphPreference, FindGrepPreference, FindTextPreference, FindChangeTransliterateOption, FindChangeObjectOption, FindChangeGlyphOption, FindChangeGrepOption, FindChangeTextOption, ColorSetting, ScriptArg, ScriptPreference, PlaceGun, AdjustLayoutPreference, StrokeFillProxySetting, ImportedPageAttribute, EPSImportPreference, SmartGuidePreference, AutoCorrectPreference, SpellPreference, PolygonPreference, DictionaryPreference, FontLockingPreference, MojikumiUiPreference, ContourOption, TextWrapPreference, TextEditingPreference, FrameFittingOption, ObjectExportOption, PageItemDefault, FontSyncPreference, EndnoteOption, TaggedPDFPreference, InteractivePDFExportPreference, PDFAttribute, PDFPlacePreference, PDFExportPreference, IMEPreference, GraphicLayerOption, ClippingPathSettings, ImageIOPreference, ImagePreference, ToolBox, EPSExportPreference, PrintBookletPrintPreference, PrintBookletOption, PrintPreference, ViewPreference, PasteboardPreference, MarginPreference, GuidePreference, GridPreference, DocumentPreference, TextDefault, TextPreference, TextFramePreference, StoryPreference, PathPoint, Path, GradientStop, AutoCorrectTable, UserDictionary, HyphenationException, Font, TransformationMatrix, PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, NestedGrepStyle or NestedLineStyle).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Event within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Stops propagation of the event beyond the current target.
     *
     * @return undefined
     */
    stopPropagation: function () {
        
    },


    /**
     * Cancels the default behavior of the event on its target.
     *
     * @return undefined
     */
    preventDefault: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Event.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Event
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


};

