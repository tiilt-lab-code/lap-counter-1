radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 && radio.receivedPacket(RadioPacketProperty.SignalStrength) > db_level) {
        radio.sendValue("serial", radio.receivedPacket(RadioPacketProperty.SerialNumber))
        total += 1
        if (total % 20 == 0) {
            led.stopAnimation()
            basic.showNumber(total)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    db_level += 5
    basic.showNumber(db_level)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(total)
})
input.onButtonPressed(Button.B, function () {
    db_level += -5
    basic.showNumber(db_level)
})
let db_level = 0
let total = 0
radio.setGroup(11)
total = 0
db_level = -65
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.forever(function () {
	
})
