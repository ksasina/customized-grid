export interface ISearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: IItem[];
}

export interface IItem {
  kind: string;
  etag: string;
  id: IId;
  snippet: ISnippet;
}

export interface IId {
  kind: string;
  videoId: string;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface IThumbnails {
  default: IDefault;
  medium: IDefault;
  high: IDefault;
}

export interface IDefault {
  url: string;
  width: number;
  height: number;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export class IViewItem {
  public title: string;
  public publishedAt: string;
  public description: string;
  public thumbnail: string;
  public videoId: string;
}




// export interface ViewTitle {
//   name: string;
//   videoId: string;
// }

// export interface IParams {
//   api: GridApi;
//   columnApi: ColumnApi;
//   context: any;
//   [key: string]: any;
// }
