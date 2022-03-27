/*
 * An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Notifier = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * The event ID in four characters or a unique string that the notifier is associated with.
     * @type {string}
     * @readonly
     */
    event: undefined,


    /**
     * The path to the file to execute when the event occurs/activates the notifier.
     * @type {File}
     * @readonly
     */
    eventFile: File,


    /**
     * The class ID associated with the event for the Notifier object, four characters or a unique string.
     * @type {string}
     * @readonly
     */
    eventClass: undefined,



    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


};

