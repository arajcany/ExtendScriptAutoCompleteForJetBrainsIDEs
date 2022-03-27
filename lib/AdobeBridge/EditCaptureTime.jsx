/*
 * Provides ways to edit the capture time of .jpeg and .raw files.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var EditCaptureTime = {




    /**
     * Sets the capture time of all files to a specified time.
     *
     * @param {Number} [date] Date to be set for the selected files.
     * @param {Number} [month] Month to be set for the selected files.
     * @param {Number} [year] Year to be set for the selected files.
     * @param {Number} [hour] Hour to be set for the selected files.
     * @param {Number} [minute] Minute to be set for the selected files.
     * @param {Number} [second] Second to be set for the selected files.
     * @return Boolean
     */
    setToCorrectedTime: function (date, month, year, hour, minute, second) {
        
    },


    /**
     * Shift capture time by set time.
     *
     * @param {String} [sign] Signifies whether you want to add or subtract the set time.
     * @param {Number} [Shiftedhour] Shifts the capture time of the selected files by a specified number of hours.
     * @param {Number} [ShiftedMinute] Shifts the capture time of the selected files by a specified number of minutes.
     * @param {Number} [ShiftedSecond] Shifts the capture time of the selected files by a specified number of seconds.
     * @return Boolean
     */
    shiftBySetTime: function (sign, Shiftedhour, ShiftedMinute, ShiftedSecond) {
        
    },


    /**
     * Reverts the capture time of all selected files to the original capture time.
     *
     * @return undefined
     */
    revertToOriginalTime: function () {
        
    },


};

