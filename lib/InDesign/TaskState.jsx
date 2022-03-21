/*
 * The state of a task.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TaskState = {


    /**
     * Task was queued and is waiting to be scheduled for execution
     * @type {number}
     * @readonly
     */
    QUEUED: 1699837285,


    /**
     * Task is running
     * @type {number}
     * @readonly
     */
    RUNNING: 1700033141,


    /**
     * Task is waiting
     * @type {number}
     * @readonly
     */
    WAITING: 1700225396,


    /**
     * Task was signalled to cancel but did not stop yet
     * @type {number}
     * @readonly
     */
    CANCELLING: 1700029281,


    /**
     * Task completed execution (successfully or with errors)
     * @type {number}
     * @readonly
     */
    COMPLETED: 1700029296,


    /**
     * Task was cancelled (either before it ran or during execution
     * @type {number}
     * @readonly
     */
    CANCELLED: 1700029292,




};

