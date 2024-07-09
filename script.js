//Line 01
let btn1Are = document.getElementById('btn1Are')
let btn1Am = document.getElementById('btn1Am')
let btn1Is = document.getElementById('btn1Is')
check1 = document.getElementById('check1')
let answer_1 = document.getElementById('answer_1')

let click = document.getElementById('click')

btn1Are.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    click.play()
    answer_1.innerHTML = 'Are'
    answer_1.style.color ='limegreen'
    check1.style.visibility = 'visible'
    btn1Are.style.backgroundColor = 'limegreen'
    btn1Are.style.color = 'white'
    btn1Are.disabled = 'true'
    btn1Am.disabled = 'true'
    btn1Is.disabled = 'true'
})

btn1Am.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_1.innerHTML = 'Am'
    answer_1.style.color ='red'
    check1.style.visibility = 'hidden'
    btn1Am.style.backgroundColor = 'red'
    btn1Am.style.color = 'yellow'
})

btn1Is.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_1.innerHTML = 'Is'
    answer_1.style.color ='red'
    check1.style.visibility = 'hidden'
    btn1Is.style.backgroundColor = 'red'
    btn1Is.style.color = 'yellow'
})

//LINE 2

let btn2Are = document.getElementById('btn2Are')
let btn2Am = document.getElementById('btn2Am')
let btn2Is = document.getElementById('btn2Is')
check2 = document.getElementById('check2')
let answer_2 = document.getElementById('answer_2')

btn2Am.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    click.play()
    answer_2.innerHTML = 'am'
    answer_2.style.color ='limegreen'
    check2.style.visibility = 'visible'
    btn2Am.style.backgroundColor = 'limegreen'
    btn2Am.style.color = 'white'
    btn2Am.disabled = 'true'
    btn2Are.disabled = 'true'
    btn2Is.disabled = 'true'
})

btn2Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_2.innerHTML = 'are'
    answer_2.style.color ='red'
    check2.style.visibility = 'hidden'
    btn2Are.style.backgroundColor = 'red'
    btn2Are.style.color = 'yellow'
})

btn2Is.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_2.innerHTML = 'is'
    answer_2.style.color ='red'
    check2.style.visibility = 'hidden'
    btn2Is.style.backgroundColor = 'red'
    btn2Is.style.color = 'yellow'
})

//Line 03
let btn3Are = document.getElementById('btn3Are')
let btn3Am = document.getElementById('btn3Am')
let btn3Is = document.getElementById('btn3Is')
check3 = document.getElementById('check3')
let answer_3 = document.getElementById('answer_3')

btn3Are.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    click.play()
    answer_3.innerHTML = "'re"
    answer_3.style.color ='limegreen'
    check3.style.visibility = 'visible'
    btn3Are.style.backgroundColor = 'limegreen'
    btn3Are.style.color = 'white'
    btn3Are.disabled = 'true'
    btn3Am.disabled = 'true'
    btn3Is.disabled = 'true'
})

btn3Am.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_3.innerHTML = "'m"
    answer_3.style.color ='red'
    check3.style.visibility = 'hidden'
    btn3Am.style.backgroundColor = 'red'
    btn3Am.style.color = 'yellow'
})

btn3Is.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_3.innerHTML = "'s"
    answer_3.style.color ='red'
    check3.style.visibility = 'hidden'
    btn3Is.style.backgroundColor = 'red'
    btn3Is.style.color = 'yellow'
})

//Line 04
let btn4Are = document.getElementById('btn4Are')
let btn4Am = document.getElementById('btn4Am')
let btn4Is = document.getElementById('btn4Is')
check3 = document.getElementById('check4')
let answer_4 = document.getElementById('answer_4')

btn4Is.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    click.play()
    answer_4.innerHTML = "Is"
    answer_4.style.color ='limegreen'
    check4.style.visibility = 'visible'
    btn4Is.style.backgroundColor = 'limegreen'
    btn4Is.style.color = 'white'
    btn4Is.disabled = 'true'
    btn4Am.disabled = 'true'
    btn4Are.disabled = 'true'
})

btn4Am.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_4.innerHTML = "Am"
    answer_4.style.color ='red'
    check4.style.visibility = 'hidden'
    btn4Am.style.backgroundColor = 'red'
    btn4Am.style.color = 'yellow'
})

btn4Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_4.innerHTML = "Are"
    answer_4.style.color ='red'
    check4.style.visibility = 'hidden'
    btn4Are.style.backgroundColor = 'red'
    btn4Are.style.color = 'yellow'
})

//Line 05
let btn5Are = document.getElementById('btn5Are')
let btn5Am = document.getElementById('btn5Am')
let btn5Is = document.getElementById('btn5Is')
check5 = document.getElementById('check5')
let answer_5 = document.getElementById('answer_5')

btn5Is.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    click.play()
    answer_5.innerHTML = "'s"
    answer_5.style.color ='limegreen'
    check5.style.visibility = 'visible'
    btn5Is.style.backgroundColor = 'limegreen'
    btn5Is.style.color = 'white'
    btn5Is.disabled = 'true'
    btn5Am.disabled = 'true'
    btn5Are.disabled = 'true'
})

btn5Am.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_5.innerHTML = "'m"
    answer_5.style.color ='red'
    check5.style.visibility = 'hidden'
    btn5Am.style.backgroundColor = 'red'
    btn5Am.style.color = 'yellow'
})

btn5Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_5.innerHTML = "'re"
    answer_5.style.color ='red'
    check5.style.visibility = 'hidden'
    btn5Are.style.backgroundColor = 'red'
    btn5Are.style.color = 'yellow'
})

//Line 06
let btn6Are = document.getElementById('btn6Are')
let btn6Am = document.getElementById('btn6Am')
let btn6Is = document.getElementById('btn6Is')
check6 = document.getElementById('check6')
let answer_6 = document.getElementById('answer_6')

btn6Are.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    click.play()
    answer_6.innerHTML = "'re"
    answer_6.style.color ='limegreen'
    check6.style.visibility = 'visible'
    btn6Are.style.backgroundColor = 'limegreen'
    btn6Are.style.color = 'white'
    btn6Are.disabled = 'true'
    btn6Am.disabled = 'true'
    btn6Is.disabled = 'true'
})

btn6Am.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_6.innerHTML = "'m"
    answer_6.style.color ='red'
    check6.style.visibility = 'hidden'
    btn6Am.style.backgroundColor = 'red'
    btn6Am.style.color = 'yellow'
})

btn6Is.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    click.play()
    answer_6.innerHTML = "'s"
    answer_6.style.color ='red'
    check6.style.visibility = 'hidden'
    btn6Is.style.backgroundColor = 'red'
    btn6Is.style.color = 'yellow'
})





