import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { ISearchListResponse } from './ISearchListResponse.model';
import { IViewItem } from './IViewItem.model';

@Injectable({
  providedIn: 'root'
})
export class CustomizedGridService {

  constructor(private _http: HttpClient) { }

  public getData(): Observable<IViewItem[]> {
    const maxResults = '50';
    const type = 'video';
    const part = 'snippet';

    return this._http.get<ISearchListResponse>(
      `${environment.apiUrl}?key=${environment.secretKey}&maxResults=${maxResults}&type=${type}&part=${part}&q=john`).
      pipe(map((list: ISearchListResponse) => {

        const result: IViewItem[] = [];
        list.items.forEach((item) => {
          result.push({
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
            videoId: item.id.videoId
          });
        });

        return result;
      }));
  }
}
