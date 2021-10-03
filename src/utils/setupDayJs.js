import dayjs from 'dayjs';
import 'dayjs/locale/he'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)
dayjs.locale('he');