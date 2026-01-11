ServerEvents.tags('item', event => {
    stageOneItems.forEach(itemID => {
        event.add('kubejs:stage_one_items', itemID)
    })
});
