/*
 * A print event
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var PrintEvent = {


    /**
     * Dispatched before a PrintEvent is printed. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_PRINT: beforePrint,


    /**
     * Dispatched after a PrintEvent is printed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_PRINT: afterPrint,


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
     * The unique ID of the PrintEvent.
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
     * The parent of the PrintEvent (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the PrintEvent within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * UI options for print document
     * @type {DocumentPrintUiOptions}
     */
    documentPrintUiOption: DocumentPrintUiOptions,


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
     * Generates a string which, if executed, will return the PrintEvent.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PrintEvent
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

