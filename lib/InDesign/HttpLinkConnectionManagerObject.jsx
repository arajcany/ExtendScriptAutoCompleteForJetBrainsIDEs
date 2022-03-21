/*
 * Experimental: An http link connection manager.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var HttpLinkConnectionManagerObject = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the HttpLinkConnectionManagerObject (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the HttpLinkConnectionManagerObject within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * Experimental: Create a url connection for the given server address
     *
     * @param {string} [serverurl] Server URL to connect
     * @param {string} [jsonData] JSON data
     * @return undefined
     */
    httpConnect: function (serverurl, jsonData) {
        
    },


    /**
     * Experimental: Checks if the given server URL is connected or not.
     *
     * @param {string} [serverurl] Server URL to check
     * @return boolean
     */
    isConnected: function (serverurl) {
        
    },


    /**
     * Experimental: Logout from the given URL
     *
     * @param {string} [serverurl] Server URL to logout from
     * @return undefined
     */
    logout: function (serverurl) {
        
    },


    /**
     * Generates a string which, if executed, will return the HttpLinkConnectionManagerObject.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return HttpLinkConnectionManagerObject
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

