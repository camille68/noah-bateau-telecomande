let p_1 = 0
basic.forever(function () {
    p_1 = pins.analogReadPin(AnalogPin.P1)
    // mal traduit
    // 
    p_1 = Math.round(Math.map(p_1, 4, 1007, -5, 5))
    basic.pause(500)
})
