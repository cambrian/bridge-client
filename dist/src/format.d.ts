import { SchemaRef } from './generated/schema';
export declare const props: string[];
export declare function safeParse(value: any): any;
export declare function validate<T>(schemaRef: SchemaRef, value: any): value is T;
