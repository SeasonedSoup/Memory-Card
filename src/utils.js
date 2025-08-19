export const shuffleArr = (arr) => {
    let newArr = [...arr]
    let curIndex = newArr.length

    while (curIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * curIndex);
        curIndex--;

        [newArr[curIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[curIndex]]
    }

    return newArr;
}