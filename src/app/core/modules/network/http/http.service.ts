import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { NetworkRequest } from '../classes/NetworkRequest';
import { IRequestOptions } from '../models/request.model';

@Injectable({
    providedIn: 'root'
})
export class HttpService extends NetworkRequest {

    private baseUrl: string = environment.baseUrl;

    constructor (
        override readonly http: HttpClient,
    ) {
        super(http);
    }

    public get <Type> (endpoint: string, options?: IRequestOptions): Observable<Type> {
        return this.GET ({ url: this.getUrl(endpoint), options: options });
    }

    public post <Type> (endpoint: string, body: Type, options?: IRequestOptions): Observable<Type> {
        return this.POST({ url: this.getUrl(endpoint), body: body, options: options });
    }

    public put <Type> (endpoint: string, body: Type, options?: IRequestOptions): Observable<Type> {
        return this.PUT({ url: this.getUrl(endpoint), body: body, options: options });
    }

    public patch <Type> (endpoint: string, body: Type, options?: IRequestOptions): Observable<Type> {
        return this.PATCH({ url: this.getUrl(endpoint), body: body, options: options });
    }

    public delete <Type> (endpoint: string, options?: IRequestOptions): Observable<Type> {
        return this.DELETE({ url: this.getUrl(endpoint), options: options });
    }

    private getUrl (endpoint: string): string {
        return `${this.baseUrl}/${endpoint}`;
    }
}
