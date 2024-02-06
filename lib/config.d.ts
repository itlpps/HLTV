/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node/http" />
/// <reference types="got-cjs/dist/source/core/timed-out" />
import { Agent as HttpsAgent } from 'https';
import { Agent as HttpAgent } from 'http';
export interface HLTVConfig {
    loadPage: (url: string) => Promise<string>;
    httpAgent: HttpsAgent | HttpAgent;
}
export declare const defaultLoadPage: (httpAgent: HttpsAgent | HttpAgent | undefined) => (url: string) => Promise<any>;
export declare const defaultConfig: HLTVConfig;
