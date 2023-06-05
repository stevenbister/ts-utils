type ObjWithWildcards<T> = T & { [key: string]: unknown };
type Identifier = string;

/**
 * Get the difference between two arrays
 *
 * @param array1 Array of values or objects
 * @param array2 Array of values or objects to compare against array1
 * @param identifier Optional identifier to use when comparing arrays of objects
 * @returns Array of values or objects that are unique to array1
 *
 * @example
 *  getDifferenceBetweenArrays(array1, array2);
 *  getDifferenceBetweenArrays(array1, array2, 'id');
 *  getDifferenceBetweenArrays(array1, array2, 'nested.id');
 */
export const getDifferenceBetweenArrays = (
    array1: unknown[],
    array2: unknown[],
    identifier?: Identifier
) => {
    if (identifier) {
        type ArrayOfObjects = ObjWithWildcards<{
            [identifier: Identifier]: Identifier;
        }>[];

        const arrayOfObjects1 = array1 as ArrayOfObjects;
        const arrayOfObjects2 = array2 as ArrayOfObjects;

        const propertyPathParts = identifier.split('.');
        const getValue = <T extends object>(
            target: T,
            propertyPathParts: string[]
        ): unknown =>
            propertyPathParts.reduce(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (acc, curr) => (acc ? (acc as any)[curr] : undefined),
                target
            );

        return arrayOfObjects1.filter(
            (x) =>
                !arrayOfObjects2.some(
                    (x2) =>
                        getValue(x, propertyPathParts) ===
                        getValue(x2, propertyPathParts)
                )
        );
    }

    return array1.filter((x) => !array2.includes(x));
};
