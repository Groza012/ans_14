import { merge } from "../src/merge";

describe("merge function", () => {
    it("should merge and sort arrays correctly", () => {
        const collection_1 = [9, 7, 5];       // descending
        const collection_2 = [1, 3, 8];       // ascending
        const collection_3 = [0, 2, 6];       // ascending

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([0,1,2,3,5,6,7,8,9]);
    });

    it("should handle empty arrays", () => {
        expect(merge([], [1,2], [3])).toEqual([1,2,3]);
        expect(merge([], [], [])).toEqual([]);
    });
});
