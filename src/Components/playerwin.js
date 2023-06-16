const playerwin=(gameinput)=>{

    if (gameinput.btn1==="O" && gameinput.btn2==="O" && gameinput.btn3==="O") {
        return "Congratulations Player-1 Win the Game"
    }else if (gameinput.btn4==="O" && gameinput.btn5==="O" && gameinput.btn6==="O") {
        return "Congratulations Player-1 Win the Game"
    }else if (gameinput.btn7==="O" && gameinput.btn8==="O" && gameinput.btn9==="O") {
        return "Congratulations Player-1 Win the Game"
    }else if (gameinput.btn1==="O" && gameinput.btn4==="O" && gameinput.btn7==="O") {
        return "Congratulations Player-1 Win the Game"
    }else if (gameinput.btn2==="O" && gameinput.btn5==="O" && gameinput.btn8==="O") {
        return "Congratulations Player-1 Win the Game"
    }else if (gameinput.btn3==="O" && gameinput.btn6==="O" && gameinput.btn9==="O") {
        return "Congratulations Player-1 Win the Game"
    }else if (gameinput.btn1==="O" && gameinput.btn5==="O" && gameinput.btn9==="O") {
        return "Congratulations Player-1 Win the Game"
    }else if (gameinput.btn3==="O" && gameinput.btn5==="O" && gameinput.btn7==="O") {
        return "Congratulations Player-1 Win the Game"
    }

    if (gameinput.btn1==="X" && gameinput.btn2==="X" && gameinput.btn3==="X") {
        return "Congratulations Player-2 Win the Game"
    }else if (gameinput.btn4==="X" && gameinput.btn5==="X" && gameinput.btn6==="X") {
        return "Congratulations Player-2 Win the Game"
    }else if (gameinput.btn7==="X" && gameinput.btn8==="X" && gameinput.btn9==="X") {
        return "Congratulations Player-2 Win the Game"
    }else if (gameinput.btn1==="X" && gameinput.btn4==="X" && gameinput.btn7==="X") {
        return "Congratulations Player-2 Win the Game"
    }else if (gameinput.btn2==="X" && gameinput.btn5==="X" && gameinput.btn8==="X") {
        return "Congratulations Player-2 Win the Game"
    }else if (gameinput.btn3==="X" && gameinput.btn6==="X" && gameinput.btn9==="X") {
        return "Congratulations Player-2 Win the Game"
    }else if (gameinput.btn1==="X" && gameinput.btn5==="X" && gameinput.btn9==="X") {
        return "Congratulations Player-2 Win the Game"
    }else if (gameinput.btn3==="X" && gameinput.btn5==="X" && gameinput.btn7==="X") {
        return "Congratulations Player-2 Win the Game"
    }

    else 
    {if (gameinput.btn1!=="..." && gameinput.btn2!=="..." && gameinput.btn3!=="..." && gameinput.btn4!=="..." && gameinput.btn5!=="..." && gameinput.btn6!=="..." && gameinput.btn7!=="..." && gameinput.btn8!=="..." && gameinput.btn9!=="..." ) {
        return "Ohh! No One Can Win. Match Will tie."     
    }

}

    return ""
}


export default playerwin;