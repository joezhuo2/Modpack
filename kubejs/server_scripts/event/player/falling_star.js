// time between spawns, in seconds
const MIN_SECONDS = 30, MAX_SECONDS = 90, MIN_TICKS = 60000

// spawn range parameters
const RANGE = 80, HEIGHT = 150 

// spawn velocity parameters
const V_MIN = 0.5, V_MAX = 1.5

// spawn time bypass
const ALWAYS_SPAWN = false

// falling star item
const ITEM_TO_DROP = 'kubejs:fallen_star' 

// particles
const FALLING_TRAIL = 'minecraft:end_rod'
const IMPACT_PARTICLE = 'minecraft:wax_off'

PlayerEvents.tick(event => {
    const player = event.player
    const level = event.level

    if (level.isClientSide()) return

    level.getEntities().forEach(entity => {
        if (entity.type === 'minecraft:item' && entity.tags.contains('falling_star')) {
            level.spawnParticles(FALLING_TRAIL, true, entity.x, entity.y + 0.2, entity.z, 0.1, 0.1, 0.1, 2, 0.01)
            level.spawnParticles(IMPACT_PARTICLE, true, entity.x, entity.y + 0.2, entity.z, 0.1, 0.1, 0.1, 1, 0.01)
        }
    })

    let timer = player.persistentData.getInt('randomDropTimer')
    
    let shouldSpawn = level.night

    if (level.time < MIN_TICKS) shouldSpawn = false

    if (!shouldSpawn && !ALWAYS_SPAWN) return

    if (timer > 0) { 
        timer--; 
    } 
    else {
        let xOffset = (level.random.nextDouble() - 0.5) * 2 * RANGE
        let zOffset = (level.random.nextDouble() - 0.5) * 2 * RANGE
        
        let dropX = player.x + xOffset
        let dropZ = player.z + zOffset
        let dropY = player.y + HEIGHT
        
        let itemEntity = level.createEntity('minecraft:item')
        itemEntity.item = Item.of(ITEM_TO_DROP)
        itemEntity.setPosition(dropX, dropY, dropZ)
        
        let vMag = level.random.nextDouble() * (V_MAX - V_MIN) + V_MIN
        let theta = level.random.nextDouble() * 2 * Math.PI 
        let vx = vMag * Math.cos(theta)
        let vy = 0.0
        let vz = vMag * Math.sin(theta)

        itemEntity.tags.add('falling_star')
        itemEntity.glowing = true
        itemEntity.setInvulnerable(true)
        
        itemEntity.spawn()
        itemEntity.setMotion(vx, vy, vz)
        
        let randomSeconds = level.random.nextDouble() * (MAX_SECONDS - MIN_SECONDS) + MIN_SECONDS
        timer = Math.floor(randomSeconds * 20)
    } 
        
    player.persistentData.putInt('randomDropTimer', timer)
})
