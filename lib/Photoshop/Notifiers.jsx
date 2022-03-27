/*
 * A collection of notifier objects in the document.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Notifiers = {


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
     * Number of elements in the collection.
     * @type {int}
     * @readonly
     */
    length: int,



    /**
     * Creates a notifier.
     *
     * @param {string} [event] The class id of the event, four characters or a unique string.
     * @param {File} [eventFile] The script file to execute when the event occurs.
     * @param {string} [eventClass] The class of the object the event is applied to, four characters or a unique string. When an event applies to multiple types of objects, you use the event class parameter to distinguish which object this Notifier applies to. For example, the Make event (“Mk“) applies to documents (“Dcmn”), channels (“Chnl”) and other objects.
     * @return Notifier
     */
    add: function (event, eventFile, eventClass) {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Get the first element in the collection with the provided name.
     *
     * @param {string} [name]
     * @return Notifier
     */
    getByName: function (name) {
        
    },


    /**
     * Get an element in the collection with the provided index.
     *
     * @param {uint} [index]
     * @return Notifier
     */
    []: function (index) {
        
    },


};

