import {Time} from './Time';
import {Lecture} from './Lecture';

export class LectureTime {
    startTime: Time;
    endTime: Time;
    lectures: Lecture[] = [];
}
