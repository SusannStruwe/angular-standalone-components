export class PlanningItem {

    constructor(
        public id: string | null,
        public machine: string,
        public orders: Order[]) {}
}

export class Order {

    constructor(
        public id: string | null,
        public machine: string,
        public startDate: Date,
        public endDate: Date,
        public state: PlanningState) {}
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
    MONTH = 'MONTH',
    DAY = 'DAY',
    WEEK = 'WEEK'
}
