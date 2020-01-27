import { IItem } from './IItem.model';
import { IPageInfo } from './IPageInfo.model';

export interface ISearchListResponse {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: IPageInfo;
    items: IItem[];
}
