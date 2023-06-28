/*
 * A data merge object.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var DataMerge = {


    /**
     * The data merge preference properties that define the layout and content of the target page.
     * @type {DataMergePreference}
     * @readonly
     */
    dataMergePreferences: DataMergePreference,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the DataMerge (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * A collection of data merge fields.
     * @type {DataMergeFields}
     * @readonly
     */
    dataMergeFields: DataMergeFields,


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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Specifies the file to use as the data source.
     *
     * @param {File} [dataSourceFile] The path to the data source file.
     * @return undefined
     */
    selectDataSource: function (dataSourceFile) {
        
    },


    /**
     * Updates the data source file with the most current data.
     *
     * @return undefined
     */
    updateDataSource: function () {
        
    },


    /**
     * Removes the data source.
     *
     * @return undefined
     */
    removeDataSource: function () {
        
    },


    /**
     * Merges records and produces an optional overset report.
     *
     * @param {File} [outputOversetReportFile] The path to the file in which to store the overset report. (Optional)
     * @return undefined
     */
    mergeRecords: function (outputOversetReportFile) {
        
    },


    /**
     * Merges records and exports to PDF.
     *
     * @param {File} [to] The path of exported PDF file.
     * @param {PDFExportPreset} [using] The PDF export style to use. (Optional)
     * @param {File} [outputOversetReportFile] The path to the file in which to store the overset report. (Optional)
     * @return undefined
     */
    exportFile: function (to, using, outputOversetReportFile) {
        
    },


    /**
     * Generates a string which, if executed, will return the DataMerge.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DataMerge
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

