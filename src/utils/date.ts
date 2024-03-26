import dayjs from 'dayjs';

export function formateDate(date: string, formatType: string = 'DD/MM/YYYY') {
    return dayjs(date).format(formatType);
}
