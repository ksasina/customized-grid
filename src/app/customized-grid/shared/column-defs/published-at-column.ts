import { DateComponent } from '../../cell-controls/date/date.component';

export const publishedAtColumn = {
  headerName: 'Published on',
  field: 'publishedAt',
  sortable: true,
  filter: true,
  suppressSizeToFit: true,
  width: 200,
  cellRendererFramework: DateComponent,
};
