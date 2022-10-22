declare global {
    interface Window {
        GEN: string;
    }

    interface Array {
        removeBy<T extends object, K extends keyof T>(this: T[], value: T[K], key: K): T[];
    }

    declare type TFunction = (...args: any[]) => any;

    type TEmpty = undefined | null;

    declare type Numberish = number | string;

    declare type NullableNumberish = Numberish | undefined | null;

    declare type TupleUnion<U extends string, R extends any[] = []> = {
        [S in U]: Exclude<U, S> extends never ? [...R, S] : TupleUnion<Exclude<U, S>, [...R, S]>;
    }[U];

    // **************************************************************************************************** For Test

    declare type IsNotAny<T> = 0 extends 1 & T ? false : true;

    declare type IsTypeEqual<T1, T2> = IsNotAny<T1> extends false
        ? false
        : IsNotAny<T2> extends false
        ? false
        : [T1] extends [T2]
        ? [T2] extends [T1]
            ? true
            : false
        : false;

    // ****************************************************************************************************
}

export {};
