export class SchedulerRow {
    constructor(
        public label: string,
        public description: string | null,
        public schedulerEvents: SchedulerEvent[]) {}
}

export class SchedulerEvent {
    constructor(
        public id: string,
        public label: string,
        public description: string | null,
        public startDate: Date,
        public endDate: Date,
        public classStyle: string) {}
}

export enum PlanningState {
    STATE1 = 'state-1',
    STATE2 = 'state-2',
    STATE3 = 'state-3',
    STATE4 = 'state-4',
    STATE5 = 'state-5',
    STATE6 = 'state-6',
    STATE7 = 'state-7'
    /*STARTED = 'started',
    MAINTAIN = 'maintain',
    PAUSED = 'paused',
    PLANNED = 'planned',
    DISRUPTED = 'disrupted',
    FINISHED = 'finished'*/
}

export enum TimeSpan {
    MONTH = 'month',
    DAY = 'day',
    WEEK = 'week'
}
