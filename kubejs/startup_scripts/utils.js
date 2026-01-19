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
            return 'Crushed Raw ' + titleCase(metal)
        case 'dirty_dust':
            return 'Dirty ' + titleCase(metal) + ' Dust'
        case 'raw':
            return 'Raw ' + titleCase(metal)
        default:
            return titleCase(metal) + ' ' + titleCase(type)
    }
}