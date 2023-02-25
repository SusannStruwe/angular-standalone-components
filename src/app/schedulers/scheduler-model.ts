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
    STARTED = 'started',
    MAINTAIN = 'maintain',
    PAUSED = 'paused',
    PLANNED = 'planned',
    DISRUPTED = 'disrupted',
    FINISHED = 'finished'
}

export enum TimeSpan {
    MONTH = 'month',
    DAY = 'day',
    WEEK = 'week'
}
