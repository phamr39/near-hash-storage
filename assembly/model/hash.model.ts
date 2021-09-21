import { base58, Context, u128, util, logging } from "near-sdk-as";
import { UserStorage } from "../storage/hash.storage";

@nearBindgen
export class Hash {
    public ownerId: String;
    public hashUpdateTimestamp: u64;
    public receiverUpdateTimestamp: u64;
    public receiver: String;
    public savedHash: String;
    constructor(hash: String, receiver: String) {
        this.ownerId = Context.sender;
        this.receiver = receiver;
        this.savedHash = hash;
    }

    updateHash(hash: String): void {
        this.hashUpdateTimestamp = Context.blockTimestamp;
        this.savedHash = hash;
    }

    updateReceiver(receiver: String): void {
        this.receiverUpdateTimestamp = Context.blockTimestamp;
        this.receiver = receiver;
    }

    getHash(): String {
        return this.savedHash;
    }

    getReceiver(): String {
        return this.receiver;
    }

    getHashUpdateTimestamp(): u64 {
        return this.hashUpdateTimestamp;
    }

    getReceiverUpdateTimestamp(): u64 {
        return this.receiverUpdateTimestamp;
    }

    save(): void {
        UserStorage.set(this);
    }
}
