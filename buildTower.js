const buildTower = (num) => {
    let buildArr = []
    for (i = 0; i < num; i++){
        let buildLine = []
        for (j = 0; j < num*2-1; j++){
            if((j + 1) === num || (j + 1) <= num + i && (j + 1) >= num  - i){
                buildLine.push('*')
            } else {
                buildLine.push(' ')
            }
        }
        let buildString = buildLine.join('')
        buildArr.push(buildString)
    }
    return buildArr
}

console.log(buildTower(7))