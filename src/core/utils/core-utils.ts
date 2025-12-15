import { Converter } from 'showdown';
import { Random } from './random'; // Updated import path

export class CoreUtils {
    static showdownConverter = new Converter({ simpleLineBreaks: true, tables: true });

    static guid = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        let id = '';
        while (id.length < 16) {
            const n = Random.randomNumber(letters.length);
            id += letters[n];
        }
        return id;
    };

    static hashCode = (str: string): number => {
        let h = 0;
        for (let i = 0; i < str.length; ++i) {
            h = (31 * h) + str.charCodeAt(i);
        }
        return h & 0xFFFFFFFF;
    };

    static copy = <T>(object: T) => {
return JSON.parse(JSON.stringify(object));
    };



    static textMatches = (sources: string[], searchTerm: string) => {
        if (!searchTerm) {
            return true;
        }

        const tokens = searchTerm
            .toLowerCase()
            .split(' ');

        return sources.some(text => tokens.every(token => text.toLowerCase().includes(token)));
    };

    static intersects = (light: { a: { x: number, y: number }, b: { x: number, y: number } }, wall: { a: { x: number, y: number }, b: { x: number, y: number } }) => {
        const det = (light.b.x - light.a.x) * (wall.b.y - wall.a.y) - (wall.b.x - wall.a.x) * (light.b.y - light.a.y);
        if (det === 0) {
            return false;
        } else {
            const lambda = ((wall.b.y - wall.a.y) * (wall.b.x - light.a.x) + (wall.a.x - wall.b.x) * (wall.b.y - light.a.y)) / det;
            const gamma = ((light.a.y - light.b.y) * (wall.b.x - light.a.x) + (light.b.x - light.a.x) * (wall.b.y - light.a.y)) / det;
            return (0 <= lambda && lambda <= 1) && (0 <= gamma && gamma <= 1);
        }
    };

    static isNullOrEmpty = (str: string | undefined) => {
        return (str === null || str === undefined || str.trim() === '');
    };

    static valueOrDefault = (value: string | number | undefined, defaultValue: string): string => {
        let result = defaultValue;

        if (value && !CoreUtils.isNullOrEmpty(value.toString())) {
            result = value.toString();
        }

        return result;
    };
}