var UUID = Java.loadClass('java.util.UUID')

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
  
  { id: 'minecraft:chainmail_helmet', attributes: [{id: 'minecraft:generic.movement_speed', val: -0.04, op: 'multiply_base'}]},
  { id: 'minecraft:chainmail_chestplate', attributes: [{id: 'minecraft:generic.movement_speed', val: -0.04, op: 'multiply_base'}]},
  { id: 'minecraft:chainmail_leggings', attributes: [{id: 'minecraft:generic.movement_speed', val: -0.04, op: 'multiply_base'}]},
  { id: 'minecraft:chainmail_boots', attributes: [{id: 'minecraft:generic.movement_speed', val: -0.04, op: 'multiply_base'}]},

  { id: 'iceandfire:sheep_helmet', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.02, op: 'multiply_base'}]},
  { id: 'iceandfire:sheep_chestplate', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.02, op: 'multiply_base'}]},
  { id: 'iceandfire:sheep_leggings', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.02, op: 'multiply_base'}]},
  { id: 'iceandfire:sheep_boots', attributes: [{id: 'minecraft:generic.movement_speed', val: 0.02, op: 'multiply_base'}]},  
  { id: 'iceandfire:sheep_helmet', attributes: [{id: 'attributeslib:arrow_velocity', val: 0.03, op: 'addition'}]},
  { id: 'iceandfire:sheep_chestplate', attributes: [{id: 'attributeslib:arrow_velocity', val: 0.03, op: 'addition'}]},
  { id: 'iceandfire:sheep_leggings', attributes: [{id: 'attributeslib:arrow_velocity', val: 0.03, op: 'addition'}]},
  { id: 'iceandfire:sheep_boots', attributes: [{id: 'attributeslib:arrow_velocity', val: 0.03, op: 'addition'}]},
  
  { id: 'immersiveengineering:armor_faraday_helmet', attributes: [{id: 'attributeslib:arrow_damage', val: 0.02, op: 'addition'}]},
  { id: 'immersiveengineering:armor_faraday_chestplate', attributes: [{id: 'attributeslib:arrow_damage', val: 0.02, op: 'addition'}]},
  { id: 'immersiveengineering:armor_faraday_leggings', attributes: [{id: 'attributeslib:arrow_damage', val: 0.02, op: 'addition'}]},
  { id: 'immersiveengineering:armor_faraday_boots', attributes: [{id: 'attributeslib:arrow_damage', val: 0.02, op: 'addition'}]},
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
