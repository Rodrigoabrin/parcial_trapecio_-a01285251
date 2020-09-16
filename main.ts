input.onButtonPressed(Button.AB, function () {
    basic.showString("Base menor =")
    basic.showNumber(base_menor)
    basic.showString("Base mayor =")
    basic.showNumber(base_mayor)
    basic.showString("Altura =")
    basic.showNumber(altura)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio =")
    Bb = base_mayor + base_menor
    entre_2 = Bb / 2
    area = entre_2 * altura
    basic.showNumber(area)
})
let area = 0
let entre_2 = 0
let Bb = 0
let altura = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Rodrigo A01285251")
base_mayor = 20
base_menor = 12
altura = randint(1, 200)
basic.forever(function () {
	
})
