function changePE() {
    var PE = 0
    let input = document.getElementsByClassName("PE")[0]

    PE = parseInt(input.value)

    if (PE > 10) {
        PE = 10
    }

    console.log(PE)
    return nPE = PE
}
function changeSIM1() {
    var SIM1 = 0
    let input = document.getElementsByClassName("SIM1")[0]

    SIM1 = parseInt(input.value)

    if (SIM1 > 10) {
        SIM1 = 10
    }

    console.log(SIM1)
    return nSIM1 = SIM1
}


function changeSIM2() {
    var SIM2 = 0
    let input = document.getElementsByClassName("SIM2")[0]

    SIM2 = parseInt(input.value)

    if (SIM2 > 10) {
        SIM2 = 10
    }

    console.log(SIM2)

    return nSIM2 = SIM2
}

function changeRED() {
    var SIM2 = 0
    let input = document.getElementsByClassName("RED")[0]

    RED = parseInt(input.value)

    if (RED > 10) {
        RED = 10
    }

    console.log(RED)

    return nRED = RED
}

function changeATV() {
    var ATV = 0
    let input = document.getElementsByClassName("ATV")[0]

    ATV = parseInt(input.value)

    if (ATV > 10) {
        ATV = 10
    }

    console.log(ATV)

    return nATV = ATV
}

function media() {
    var MSR = (((nSIM1 + nSIM2) * 8) + nRED * 2) / 10

    var MP = (nPE * 3 + MSR + nATV) / 5

    let h1 = document.getElementsByClassName("media")[0]
    h1.textContent = MP

}




