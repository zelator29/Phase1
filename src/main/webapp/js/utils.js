/* Utility Functions
 */

function formatDate(date) {
    return moment(date).format('dddd MMMM Do, YYYY');
};

function startsWith(source, fragment) {
    return source.lastIndexOf(fragment, 0) === 0;
}

function formatTime(time) {
    // Time comes in as HHMM in military (24 hour) time
    var indicator = 'AM';
    var hours = time.substring(0,2);
    if (hours > 12) {
        hours -= 12;
        indicator = 'PM';
    }
    else if (hours === '00') {
        hours = 12;
        indicator = 'AM';
    }
    var minutes = '00' + time.substring(2,2).substr(-2, 2);
    return hours + ':' + minutes + ' ' + indicator;
}