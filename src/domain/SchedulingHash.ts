export default class SchedulingHash {
    value: string;

    constructor(formatedDate: string, hours: string) {
       this.value = `${formatedDate}T${hours}` 
    }
}