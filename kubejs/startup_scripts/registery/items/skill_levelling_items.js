const skills = [
    'mining',
    'gathering',
    'attack',
    'defense',
    'building',
    'farming',
    'agility',
    'magic'
]

StartupEvents.registry('item', event => {
    skills.forEach(skill => {
        event.create(`${skill}_level_orb`)
        .displayName(`${skill.charAt(0).toUpperCase() + skill.slice(1)} Level Orb`)
        .maxStackSize(16)
        .tooltip(`Increases ${skill} skill level on use.`)
    })
})