export const generateDateString = (dateToString?: string) => {
    if (!dateToString) {
        return '';
    }
    const split = dateToString.split('T')[0].split('-');
    return `${split[0]}년 ${split[1]}월 ${split[2]}일`;
}