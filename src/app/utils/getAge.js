function getAge(date) {
    const number = Math.floor(
        (new Date() - new Date(date).getTime()) / 3.15576e10
    );
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) {
        return `${number} лет`;
    }
    if (lastOne === 1) return `${number} год`;
    if ([2, 3, 4].indexOf(lastOne) >= 0) return `${number} года`;
    return `${number} лет`;
}
export default getAge;
