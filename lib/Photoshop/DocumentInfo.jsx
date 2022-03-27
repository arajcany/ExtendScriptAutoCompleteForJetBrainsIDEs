/*
 * Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var DocumentInfo = {


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
     * The document title.
     * @type {string}
     */
    title: undefined,


    /**
     * The author.
     * @type {string}
     */
    author: undefined,


    /**
     * The author's position.
     * @type {string}
     */
    authorPosition: undefined,


    /**
     * The caption.
     * @type {string}
     */
    caption: undefined,


    /**
     * The caption author.
     * @type {string}
     */
    captionWriter: undefined,


    /**
     * The job name.
     * @type {string}
     */
    jobName: undefined,


    /**
     * The copyright status.
     * @type {CopyrightedType}
     */
    copyrighted: CopyrightedType,


    /**
     * The copyright notice.
     * @type {string}
     */
    copyrightNotice: undefined,


    /**
     * The url of the copyright info.
     * @type {string}
     */
    ownerUrl: undefined,


    /**
     * A list of keywords.
     * @type {string}
     */
    keywords: undefined,


    /**
     * The document category.
     * @type {string}
     */
    category: undefined,


    /**
     * Other categories.
     * @type {string}
     */
    supplementalCategories: undefined,


    /**
     * The creation date.
     * @type {string}
     */
    creationDate: undefined,


    /**
     * The city.
     * @type {string}
     */
    city: undefined,


    /**
     * The state or province.
     * @type {string}
     */
    provinceState: undefined,


    /**
     * The country.
     * @type {string}
     */
    country: undefined,


    /**
     * The author credit.
     * @type {string}
     */
    credit: undefined,


    /**
     * The source.
     * @type {string}
     */
    source: undefined,


    /**
     * The headline.
     * @type {string}
     */
    headline: undefined,


    /**
     * Instructions for using or processing the image.
     * @type {string}
     */
    instructions: undefined,


    /**
     * The transmission reference.
     * @type {string}
     */
    transmissionReference: undefined,


    /**
     * The document urgency.
     * @type {Urgency}
     */
    urgency: Urgency,


    /**
     * For JPEG images, information stored with digital photographs including camera type, date and time of photo, and file size.
     * @type {any}
     * @readonly
     */
    exif: undefined,




};

