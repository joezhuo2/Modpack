// priority: 1000

function titleCase(id) {
    return id
        .replace(/_/g, ' ')
        .replace(/\b\w/g, function(char) {return char.toUpperCase()})
        .trim()
}

function displayName(type, metal) {
    switch (type) {
        case 'crushed_raw':
            return titleCase(type) + ' ' + titleCase(metal)
        case 'raw':
            return titleCase(type) + ' ' + titleCase(metal)
        default:
            return titleCase(metal) + ' ' + titleCase(type)
    }
}