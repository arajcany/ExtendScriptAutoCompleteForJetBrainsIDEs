/*
 * An independant node-handling operation with its own user interface.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var ModalOperator = {


    /**
     * When true, the user has requested that the operation be canceled.
     * @type {Boolean}
     */
    cancelRequested: Boolean,


    /**
     * The type of the current file-system conflict encountered during the operation.
     * @type {String}
     */
    conflictType: String,


    /**
     * A string describing the current file-system conflict that prevents the operation from being performed.
     * @type {String}
     */
    conflictMessage: String,


    /**
     * A description of the operation, suitable for display.
     * @type {String}
     */
    description: String,


    /**
     * When operationStatus is inError, the problematic thumbnail.
     * @type {Thumbnail}
     */
    errorTarget: Thumbnail,


    /**
     * When sources has a value, an array of the same length containing the new name strings to be assigned to the source Thumbnail objects after they are transfered to the target.
     * @type {Array}
     */
    newNames: Array,


    /**
     * The status of the operation with respect to the immediate action.
     * @type {String}
     */
    operationStatus: String,


    /**
     * How much of the operation has currently been completed, in the range [0..100].
     * @type {Number}
     */
    percentageComplete: Number,


    /**
     * The current overall status of the operation with respect to Adobe Bridge.
     * @type {String}
     */
    processingStatus: String,


    /**
     * A description of the current state of the operation, suitable for display.
     * @type {String}
     */
    progressMessage: String,


    /**
     * How to apply the conflict-resolution method, applyForOneConflictOnly or applyToAllConflicts
     * @type {String}
     */
    resolvePolicy: String,


    /**
     * How to resolve file-system conflicts.
     * @type {String}
     */
    resolveMethod: String,


    /**
     * An optional result for an operation, such as the path that results from a createNewContainer() operation.
     * @type {Object}
     */
    result: Object,


    /**
     * A set of Thumbnail objects that the operation acts upon.
     * @type {Array}
     */
    sources: Array,


    /**
     * A target Thumbnail object for the operation.
     * @type {Thumbnail}
     */
    target: Thumbnail,


    /**
     * A number of milliseconds to wait before aborting the operation.
     * @type {Number}
     */
    timeout: Number,


    /**
     * Implement a method that returns the percentage of the operation that has currently been completed, for use in displaying the Progress dialog.
     * @type {Function}
     */
    getPercentageComplete: Function,


    /**
     * Implement a method that returns the current overall status of the operation with respect to Adobe Bridge.
     * @type {Function}
     */
    getProcessingStatus: Function,


    /**
     * Implement a method that returns a message suitable for display in the Progress dialog.
     * @type {Function}
     */
    getProgressMessage: Function,


    /**
     * Implement a method that returns the current number of bytes that have been transferred to the target in the course of this operation.
     * @type {Function}
     */
    getTotalBytesTransferred: Function,


    /**
     * Implement a method that returns a description of a file-system conflict that prevents the operation from being performed on the current thumbnail.
     * @type {Function}
     */
    getConflictInfo: Function,


    /**
     * Implement a method that returns the total number of source nodes to be operated on.
     * @type {Function}
     */
    getTotalNodeCount: Function,


    /**
     * Implement a method that returns the number of source nodes that have been processed so far.
     * @type {Function}
     */
    getProcessedNodeCount: Function,


    /**
     * Implement a method that returns the subclass type of this operator.
     * @type {Function}
     */
    getType: Function,


    /**
     * Implement a method that initiates the operation.
     * @type {Function}
     */
    start: Function,


    /**
     * Implement a method that terminates the operation.
     * @type {Function}
     */
    stop: Function,


    /**
     * Implement a method that restarts the operation after it has been stopped by user interaction.
     * @type {Function}
     */
    resume: Function,


    /**
     * Implement a method that resolves a file-system conflict, as identified by the conflictType and conflictMessage values.
     * @type {Function}
     */
    resolveConflict: Function,




};

