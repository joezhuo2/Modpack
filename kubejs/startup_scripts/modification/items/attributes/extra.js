const UUID = Java.loadClass('java.util.UUID')

const itemsToChange = [
  { id: 'minecraft:leather_helmet', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.03, op: 'multiply_base'}]},
  { id: 'minecraft:leather_chestplate',attributes: [{id: 'minecraft:generic.movement_speed', val: 0.03, op: 'multiply_base'}]},
  { id: 'minecraft:leather_leggings', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.03, op: 'multiply_base'}]},
  { id: 'minecraft:leather_boots', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.03, op: 'multiply_base'}]},

  { id: 'create_sa:copper_helmet', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.02, op: 'multiply_base'}]},
  { id: 'create_sa:copper_chestplate', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.02, op: 'multiply_base'}]},
  { id: 'create_sa:copper_leggings', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.02, op: 'multiply_base'}]},
  { id: 'create_sa:copper_boots', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.02, op: 'multiply_base'}]},
  
  { id: 'ceramics:clay_helmet', attributes: [{id: 'minecraft:generic.movement_speed', val: -0.03, op: 'multiply_base'}]},
  { id: 'ceramics:clay_chestplate', attributes: [{id: 'minecraft:generic.movement_speed', val: -0.03, op: 'multiply_base'}]},
  { id: 'ceramics:clay_leggings', attributes: [{id: 'minecraft:generic.movement_speed', val: -0.03, op: 'multiply_base'}]},
  { id: 'ceramics:clay_boots', attributes: [{id: 'minecraft:generic.movement_speed', val: -0.03, op: 'multiply_base'}]},
  
]

const desc = 'Attribute Bonus'

ItemEvents.modification(event => {
  itemsToChange.forEach(itemObj => {
    event.modify(itemObj.id, item => {
      itemObj.attributes.forEach(attr => {
        let uuid = UUID.randomUUID()
        
        item.addAttribute(
            attr.id,
            uuid,
            desc,
            attr.val,
            attr.op
        )
      })
    })
  })
})
