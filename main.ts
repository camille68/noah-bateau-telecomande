let p_1 = 0
let p_2 = 0
basic.forever(function () {
    p_1 = pins.analogReadPin(AnalogPin.P1)
    // mal traduit
    // 
    p_1 = Math.round(Math.map(p_1, 4, 1007, -5, 5))
    basic.pause(200)
    p_2 = pins.analogReadPin(AnalogPin.P2)
    // mal traduit
    // 
    p_2 = Math.round(Math.map(p_1, 4, 1007, -5, 5))
    basic.pause(200)
})
