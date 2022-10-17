import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { IRequestParams } from '../models/request.model';

export class NetworkRequest {
    http: HttpClient;
    constructor (http: HttpClient) {
        this.http = http;
    }
    protected GET<Type> (params: IRequestParams<Type>): Observable<Type> {
        return this.http.get<Type> (params.url, params.options as Type).pipe(
            this.error()
        );
    }

    protected POST<Type> (params: IRequestParams<Type>): Observable<Type> {
        return this.http.post<Type> (params.url, params.body, params.options as Type).pipe(
            this.error()
        );
    }

    protected PUT<Type> (params: IRequestParams<Type>): Observable<Type> {
        return this.http.put<Type> (params.url, params.body, params.options as Type).pipe(
            this.error()
        );
    }
    protected PATCH<Type> (params: IRequestParams<Type>): Observable<Type> {
        return this.http.patch<Type> (params.url, params.body, params.options as Type).pipe(
            this.error()
        );
    }
    protected DELETE<Type> (params: IRequestParams<Type>): Observable<Type> {
        return this.http.delete<Type> (params.url, params.options as Type).pipe(
            this.error()
        );
    }

    private readonly error = <T, R> () => (
        take <T> (1),
        catchError <T, Observable<R>> ((error: HttpErrorResponse) => {
            this.handleError(error);
            return throwError(() => error);
        })
    )

    private handleError (error: HttpErrorResponse): void {
        console.log('Error', error?.message || 'Something Bad Happened');
    }
}
