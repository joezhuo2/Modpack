ServerEvents.recipes(event => {
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
    // cleaned hide
    cut(
        event,
        { item: 'untamedwilds:hide_gray' },
        'forge:tools/shovels',
        [
            { item: 'untamedwilds:hide_golden' }
        ]
    )
    // washed hide
    transform(
        event, 
        'minecraft:water', 
        'untamedwilds:hide_beige', 1, 
        ['untamedwilds:hide_golden', 'bone_meal'], 
        'fluid'
    )
    // prepared hide
    event.shapeless(Item.of('untamedwilds:hide_white', 1),
        [
            'untamedwilds:hide_beige',
            'kubejs:salt',
            'sugar'
        ]
    )
    // dried hide
    dryingRack(
        event,
        { item: 'untamedwilds:hide_white' },
        { item: 'untamedwilds:hide_tan' },
        6000
    )
    // raw leather
    itemBurn(
        event,
        { item: 'untamedwilds:hide_tan' },
        {
            type: "drop_item",
            item: "untamedwilds:hide_orange",
            count: 1
        }
    )
    // rabbit hide
    cut(
        event,
        { item: 'rabbit_hide' },
        'forge:tools/knives',
        [
            { item: 'untamedwilds:hide_gray' , chance: 0.6}, 
            { item: 'untamedwilds:hide_gray' , chance: 0.15}
        ]
    )
    // monster hide
    cut(
        event,
        { item: 'born_in_chaos_v1:monster_skin' },
        'forge:tools/knives',
        [
            { item: 'forbidden_arcanus:rotten_leather'}, 
            { item: 'untamedwilds:hide_gray' , chance: 0.35}
        ]
    )
    // rotten leather
    cut(
        event,
        { item: 'forbidden_arcanus:rotten_leather' },
        'forge:tools/knives',
        [
            { item: 'untamedwilds:hide_gray'}, 
            { item: 'untamedwilds:hide_gray' , chance: 0.25}
        ]
    )
    // hogskin
    cut(
        event,
        { item: 'irons_spellbooks:hogskin' },
        'forge:tools/knives',
        [
            { item: 'untamedwilds:hide_gray' , count: 3}, 
            { item: 'untamedwilds:hide_gray' , chance: 0.9},
            { item: 'untamedwilds:hide_gray' , chance: 0.6}
        ]
    )
})