import { IId } from './IId.model';
import { ISnippet } from './ISnippet.model';

export interface IItem {
    kind: string;
    etag: string;
    id: IId;
    snippet: ISnippet;
}
