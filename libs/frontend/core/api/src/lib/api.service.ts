import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly url: string;

  constructor(private readonly http: HttpClient) {
    this.url = '/api/';
  }

  public get<ResultType, QueryType>(path: string, query?: QueryType) {
    const queryParan = query as HttpParams;
    return this.http.get<ResultType>(this.url + path, { params: queryParan });
  }

  public post<ResultType, RequestType, QueryType>(path: string, body: RequestType, query?: QueryType) {
    const queryParan = query as HttpParams;
    return this.http.post<ResultType>(this.url + path, body, { params: queryParan });
  }

  public put<ResultType, RequestType, QueryType>(path: string, body: RequestType, query?: QueryType) {
    const queryParan = query as HttpParams;
    return this.http.put<ResultType>(this.url + path, body, { params: queryParan });
  }

  public patch<ResultType, RequestType, QueryType>(path: string, body: RequestType, query?: QueryType) {
    const queryParan = query as HttpParams;
    return this.http.patch<ResultType>(this.url + path, body, { params: queryParan });
  }

  public delete<ResultType>(path: string) {
    return this.http.delete<ResultType>(this.url + path);
  }
}
