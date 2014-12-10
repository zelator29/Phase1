/* Utility Functions
 */

function formatDate(date) {
    return moment(date).format('dddd MMMM Do, YYYY');
};

function startsWith(source, fragment) {
    return source.lastIndexOf(fragment, 0) === 0;
}


