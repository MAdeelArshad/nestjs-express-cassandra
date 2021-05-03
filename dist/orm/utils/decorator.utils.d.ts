import 'reflect-metadata';
export declare function setEntity(target: any, entity: Function): void;
export declare function getEntity(target: any): Function;
export declare function setEntityName(target: any, modelName: string): void;
export declare function getEntityName(target: any): string;
export declare function getAttributes(target: any): any | undefined;
export declare function setAttributes(target: any, attributes: any): void;
export declare function addAttribute(
  target: any,
  name: string,
  options: any,
): void;
export declare function addAttributeOptions(
  target: any,
  propertyName: string,
  options: any,
): void;
export declare function getOptions(target: any): any | undefined;
export declare function setOptions(target: any, options: any): void;
export declare function addOptions(target: any, options: any): void;
export declare const addHookFunction: (
  target: object,
  metadataKey: string,
) => (...args: any[]) => any[];
