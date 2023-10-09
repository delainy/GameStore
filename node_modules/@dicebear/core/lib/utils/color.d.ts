import { Prng } from '../types';
export declare function convertColor(color: string): string;
export declare function getBackgroundColors(prng: Prng, backgroundColor: string[]): {
    primary: string;
    secondary: string;
};
