import { PersistentUnorderedMap } from "near-sdk-core";
import { Hash } from "../model/hash.model";

const hashUsers = new PersistentUnorderedMap<String, Hash>("Hash");

export class UserStorage {
    static get(user: String): Hash | null {
        if (!hashUsers.contains(user)) {
            return null;
        }
        return hashUsers.getSome(user);
    }

    static set(user: Hash): void {
        hashUsers.set(user.ownerId, user);
    }

    static contains(user: String): bool {
        return hashUsers.contains(user);
    }

    static delete(user: String): void {
        if (!hashUsers.contains(user)) {
            return;
        }
        hashUsers.delete(user);
    }
}
