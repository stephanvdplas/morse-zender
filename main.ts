radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 5) {
        game_started = 1
    }
})
input.onButtonPressed(Button.A, function () {
    if (game_started == 0) {
        radio.sendNumber(5)
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    } else {
        speler = game.createSprite(0, 2)
    }
})
let speler: game.LedSprite = null
let game_started = 0
game_started = 0
basic.forever(function () {
	
})
