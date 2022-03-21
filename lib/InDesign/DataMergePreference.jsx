/*
 * Data merge preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var DataMergePreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the DataMergePreference (a DataMerge).
     * @type {DataMerge}
     * @readonly
     */
    parent: DataMerge,


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
     * The records to merge.
     * @type {RecordSelection}
     */
    recordSelection: RecordSelection,


    /**
     * The offset value of the left margin in the target document.
     * @type {Measurement Unit (Number or String)=any}
     */
    leftMargin: undefined,


    /**
     * The offset value of the top margin in the target document.
     * @type {Measurement Unit (Number or String)=any}
     */
    topMargin: undefined,


    /**
     * The offset value of the right margin in the target document.
     * @type {Measurement Unit (Number or String)=any}
     */
    rightMargin: undefined,


    /**
     * The offset value of the bottom margin in the target document.
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomMargin: undefined,


    /**
     * The order in which to arrange multiple records on the page in the target document.
     * @type {ArrangeBy}
     */
    arrangeBy: ArrangeBy,


    /**
     * The amount of space between rows of records in the target document.
     * @type {Measurement Unit (Number or String)=any}
     */
    rowSpacing: undefined,


    /**
     * The amount of space between columns of records in the target document.
     * @type {Measurement Unit (Number or String)=any}
     */
    columnSpacing: undefined,


    /**
     * The number of the record to merge. Note: Valid only when record selection is one record.
     * @type {number}
     */
    recordNumber: undefined,


    /**
     * The range of records to merge. Note: Valid only when record selection is range.
     * @type {string}
     */
    recordRange: undefined,


    /**
     * The number of records to place on each page in the document.
     * @type {RecordsPerPage}
     */
    recordsPerPage: RecordsPerPage,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * If true, lists missing images in the specified output file.
     *
     * @param {File} [outputMissingImagesReportFile] The path to the output file.
     * @return boolean
     */
    alertMissingImages: function (outputMissingImagesReportFile) {
        
    },


    /**
     * Generates a string which, if executed, will return the DataMergePreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DataMergePreference
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

