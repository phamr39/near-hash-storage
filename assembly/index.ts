import * as user from "./controller/hash.controller"
import { Hash } from "./model/hash.model";
import { TimeLog } from "./model/time.model";

export function setData(data: String, receiver: String): Hash | null {
    return user.setData(data, receiver);
}

export function getData(sender: String): String | null {
    return user.getData(sender);
}

export function updateData(data: String): u64 {
    return user.updateHash(data);
}

export function updateReceiver(receiver: String): u64 {
    return user.updateReceiver(receiver);
}

export function getUpdateTimeStamp(): TimeLog | null {
    return user.getUpdateTimeStamp();
}