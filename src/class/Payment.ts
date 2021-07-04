import { HasFormatter } from '../interface/HasFormatter.js'
export class Payment implements HasFormatter{
    private recipient: string;
    private details: string;
    private amount: number;

    constructor(r:string,d: string,a: number){
        this.recipient = r;
        this.details = d;
        this.amount = a;
    }
    format(){
        return '${this.recipient} is owed RS${this.amount} for ${this.details}'
    }
}
