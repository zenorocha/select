function select(element) {
    var selectedText;

    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        element.setSelectionRange(0, element.value.length);

        selectedText = element.value;
    }
    else {
        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    element.focus();

    return selectedText;
}

module.exports = select;
