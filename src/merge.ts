export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    // collection_1 is descending, reverse it to ascending
    const arr1 = collection_1.slice().reverse();
    const arr2 = collection_2;
    const arr3 = collection_3;

    // merge two sorted arrays
    function mergeTwo(a: number[], b: number[]): number[] {
        const result: number[] = [];
        let i = 0, j = 0;
        while (i < a.length && j < b.length) {
            if (a[i] <= b[j]) {
                result.push(a[i]);
                i++;
            } else {
                result.push(b[j]);
                j++;
            }
        }
        while (i < a.length) result.push(a[i++]);
        while (j < b.length) result.push(b[j++]);
        return result;
    }

    const merged12 = mergeTwo(arr1, arr2);
    const mergedAll = mergeTwo(merged12, arr3);
    return mergedAll;
}
