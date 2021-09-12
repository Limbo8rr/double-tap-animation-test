function useWeapon () {
    if (!(boolWeaponOut)) {
        AButtonLastPressedTime = game.runtime()
        boolWeaponOut = true
        mySprite2.setImage(arrayCurrentWeaponImages[1])
        timer.background(function () {
            pause(300)
            if (!(boolAttackOverride)) {
                mySprite2.setImage(arrayCurrentWeaponImages[0])
                boolWeaponOut = false
                AButtonLastPressedTime = 0
            }
        })
    } else if (game.runtime() - AButtonLastPressedTime < 200 && !(boolAttackOverride)) {
        boolAttackOverride = true
        mySprite2.setImage(arrayCurrentWeaponImages[2])
        timer.background(function () {
            pause(300)
            mySprite2.setImage(arrayCurrentWeaponImages[0])
            boolAttackOverride = false
            boolWeaponOut = false
            AButtonLastPressedTime = 0
        })
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    useWeapon()
})
let boolAttackOverride = false
let mySprite2: Sprite = null
let boolWeaponOut = false
let AButtonLastPressedTime = 0
let arrayCurrentWeaponImages: Image[] = []
let arrayWeapon1Images = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, assets.image`sword D`, assets.image`wavy slash`]
arrayCurrentWeaponImages = arrayWeapon1Images
AButtonLastPressedTime = 0
boolWeaponOut = false
scene.setBackgroundColor(13)
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
mySprite2 = sprites.create(arrayCurrentWeaponImages[0], SpriteKind.Player)
game.onUpdate(function () {
    mySprite2.x = mySprite.x
    mySprite2.top = mySprite.bottom - 5
})
