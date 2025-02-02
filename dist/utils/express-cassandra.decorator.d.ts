import { ConnectionOptions, Connection } from '../orm';
export declare const InjectConnection: (
  connnection?: Connection | ConnectionOptions | string,
) => ParameterDecorator;
export declare const InjectModel: (
  entity: Function,
) => (target: Object, key: string | symbol, index?: number) => void;
export declare const InjectRepository: (
  entity: Function,
) => (target: Object, key: string | symbol, index?: number) => void;
