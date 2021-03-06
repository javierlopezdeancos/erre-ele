export interface IErreEle<S> {
    getParamFromURL: (pn: string) => string | null;
    getPathnameFromURL: () => string | null;
    go: (p: string, t?: string, s?: S) => void;
    subscribeOnPopState: (onPopState?: (e: PopStateEvent) => void) => void;
    unSubscribeOnPopState: () => void;
    setParam: (key: string, value: string) => void;
    getParam: (key: string) => void;
}
export declare class ErreEle<S> implements IErreEle<S> {
    private onPopState?;
    private _pathname;
    private _origin;
    private _params;
    constructor(onPopState?: ((e: PopStateEvent) => void) | undefined);
    subscribeOnPopState(onPopState?: (e: PopStateEvent) => void): void;
    unSubscribeOnPopState(): void;
    go(p: string, t?: string, s?: {}): void;
    get pathname(): string;
    set pathname(p: string);
    get params(): Map<string, string>;
    set params(prms: Map<string, string>);
    setParam(key: string, value: string): void;
    getParam(key: string): void;
    get origin(): string;
    set origin(o: string);
    getParamFromURL(pn: string): string | null;
    setParamsFromURL(): void;
    getPathnameFromURL(): string;
    setOnPopState(onPopState?: (evt: PopStateEvent) => void): void;
}
declare const _default: ErreEle<unknown>;
export default _default;
