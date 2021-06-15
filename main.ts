radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        game_started = 1
    } else if (receivedNumber >= 15) {
        unlocked = receivedNumber
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (game_started == 0) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        radio.sendNumber(12)
    } else {
        speler.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (game_started == 0) {
        radio.sendNumber(unlocked)
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    } else {
        speler.change(LedSpriteProperty.X, 1)
    }
})
let fruit: game.LedSprite = null
let speler: game.LedSprite = null
let unlocked = 0
let game_started = 0
radio.setGroup(1)
game.setScore(0)
game_started = 0
basic.forever(function () {
    if (game_started == 1) {
        game.setScore(0)
        speler = game.createSprite(2, 4)
        basic.pause(500)
        for (let index = 0; index < 10; index++) {
            fruit = game.createSprite(randint(0, 4), 0)
            for (let index = 0; index < 4; index++) {
                basic.pause(350)
                fruit.change(LedSpriteProperty.Y, 1)
            }
            if (fruit.isTouching(speler)) {
                game.addScore(1)
                radio.sendNumber(game.score())
            }
            fruit.delete()
        }
        speler.delete()
        game_started = 0
    }
})
