import {getCounter} from "./getCounter";

describe('getCounter', () => {
    test('work with empty state', () => {
        expect(getCounter({})).toBe(0);
    });

    test('work with filled state', () => {
        expect(getCounter({
            counter: {
                value: 100
            }
        })).toBe(100);
    });
})
