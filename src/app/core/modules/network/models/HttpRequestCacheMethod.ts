import { Observable } from 'rxjs';

export type HttpRequestCacheMethod = <Type> (...args: Type[]) => Observable<Type>;
