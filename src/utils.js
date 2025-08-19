export const shuffleArr = (arr) => {
    let curIndex = arr.length

    while (curIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * curIndex);
        curIndex--;

        [arr[curIndex], arr[randomIndex]] = [arr[randomIndex], arr[curIndex]]
    }
}