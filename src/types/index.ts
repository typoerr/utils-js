export type Func0<R> = () => R
export type Func1<T1, R> = (a1: T1) => R
export type Func2<T1, T2, R> = (a1: T1, a2: T2) => R
export type Func3<T1, T2, T3, R> = (a1: T1, a2: T2, a3: T3) => R
export type Func4<T1, T2, T3, T4, R> = (a1: T1, a2: T2, a3: T3, a4: T4, ...args: any[]) => R

export type Falsy = false | undefined | null | 0 | -0 | ''


export interface HashMap<T = any> {
  [k: string]: T
}

export interface Predicate<T> {
  (value: any | T): value is T
}

/**
 * Get Type that omit keys from T
 * K should be not keyof T but string.
 *
 * @example
 * type A = {a: string, b: number}
 * type B = {a: string, x: number} // When K is keyof T, x is invalid type.
 * type C = Omit<A, keyof B> // { b: number }
 *
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * Get Diff (T - U)
 *
 * @example
 * type A = {a: string, b: number}
 * type B = {a?: string, b: number, x: number}
 * type C = Diff<B, A> // { x: number }
 */
export type Diff<T, U> = Omit<T, keyof T & keyof U>


/**
 * Get Diff (T - U) and Partila<T>
 */
export type WeakDiff<T, U> = Diff<T, U> & {
  [K in Extract<keyof T, keyof U>]?: T[K]
}


// /**
//  * Overwrite T by U
//  *
//  * @example
//  * type A = {a: string, b: number}
//  * type B = {a?: string, b: number, x: number}
//  * type C = Overwrite<A, B> // {b: number} & B
//  *
//  */
export type Overwrite<T, U> = Diff<T, U> & U