/*
 * An import or export event.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var ImportExportEvent = {


    /**
     * Dispatched before a ImportExportEvent is exported. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_EXPORT: beforeExport,


    /**
     * Dispatched after a ImportExportEvent is exported. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_EXPORT: afterExport,


    /**
     * Dispatched before importing a file into a ImportExportEvent. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_IMPORT: beforeImport,


    /**
     * Dispatched after importing a file into a ImportExportEvent. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_IMPORT: afterImport,


    /**
     * Dispatched after a ImportExportEvent export is canceled or fails. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    FAILED_EXPORT: failedExport,


    /**
     * The full path to the ImportExportEvent, including the name of the ImportExportEvent.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * The import/export file format.
     * @type {string}
     * @readonly
     */
    format: undefined,


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
     * The unique ID of the ImportExportEvent.
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
     * The parent of the ImportExportEvent (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the ImportExportEvent within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * Controls the display of dialogs and alerts during script processing.
     * @type {UserInteractionLevels}
     */
    userInteractionLevel: UserInteractionLevels,


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
     * Generates a string which, if executed, will return the ImportExportEvent.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ImportExportEvent
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

