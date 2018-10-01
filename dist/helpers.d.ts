import { SchemaRefs } from './schemas';
export declare const props: string[];
export declare function safeParse(value: any): any;
export declare function validate<T>(schema: SchemaRefs, value: any): value is T;
