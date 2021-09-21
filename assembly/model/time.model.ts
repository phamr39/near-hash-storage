
@nearBindgen
export class TimeLog {
    public hashUpdateTime: u64;
    public receiverUpdateTime: u64;
    constructor(hashUpdateTime: u64, receiverUpdateTime: u64) { 
        this.hashUpdateTime = hashUpdateTime;
        this.receiverUpdateTime = receiverUpdateTime;
    }
}
