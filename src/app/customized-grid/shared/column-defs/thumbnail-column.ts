import { ImageComponent } from '../../cell-controls/image/image.component';

export const thumbnailColumn = {
  headerName: '',
  field: 'thumbnail',
  sortable: false,
  filter: true,
  suppressSizeToFit: true,
  width: 150,
  cellRendererFramework: ImageComponent,
};
