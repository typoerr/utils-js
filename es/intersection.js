import { has } from './has';
import { contains } from './contains';
import { idx } from './idx';
export function intersection(a, b, getKey) {
    if (getKey === undefined) {
        return a.filter(el => contains(b, el));
    }
    const bHash = idx(b, { key: getKey });
    return a.filter(el => has(bHash, getKey(el)));
}
//# sourceMappingURL=intersection.js.map