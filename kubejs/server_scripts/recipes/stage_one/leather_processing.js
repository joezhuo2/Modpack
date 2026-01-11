ServerEvents.recipes(event => {
    // no leather cheating
    event.remove({id: 'farmersdelight:cutting/leather_from_hide'})
    // raw hide
    cut(
        event,
        { item: 'untamedwilds:hide_brown' },
        'forge:tools/knives',
        [
            { item: 'untamedwilds:hide_gray' , count: 2}, 
            { item: 'untamedwilds:hide_gray' , chance: 0.75},
            { item: 'untamedwilds:hide_gray' , chance: 0.3}
        ]
    )
    // washed hide
    event.remove({output: 'untamedwilds:hide_beige'})
    transform(
        event, 
        'minecraft:water', 
        'untamedwilds:hide_beige', 1, 
        ['untamedwilds:hide_golden', 'bone_meal'], 
        'fluid'
    )
    // prepared hide
    event.remove({output: 'untamedwilds:hide_white'})
    event.shapeless(Item.of('untamedwilds:hide_white', 1),
        [
            'untamedwilds:hide_beige',
            'kubejs:salt',
            'sugar'
        ]
    )
})