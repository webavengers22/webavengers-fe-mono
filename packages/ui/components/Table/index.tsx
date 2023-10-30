import RCTable, { TableProps as RCTableProps } from 'rc-table';
import { DefaultRecordType } from 'rc-table/lib/interface';

import { Empty } from '../Empty';
import TableBody from './components/TableBody';
import TableBodyCell from './components/TableBodyCell';
import TableBodyRow from './components/TableBodyRow';
import TableContainer from './components/TableContainer';
import TableHeader from './components/TableHeader';
import TableHeaderCell from './components/TableHeaderCell';
import { theme } from './theme';

export interface TableProps<RecordType = unknown>
  extends Pick<RCTableProps<RecordType>, 'tableLayout' | 'columns' | 'data' | 'rowKey'> {}

export function Table<RecordType extends DefaultRecordType>({
  tableLayout,
  columns,
  data,
  rowKey = 'key',
}: TableProps<RecordType>) {
  return (
    <div css={[theme.tableWrapper.base]}>
      <RCTable
        prefixCls="es-table"
        tableLayout={tableLayout}
        columns={columns}
        data={data}
        components={{
          table: TableContainer,
          header: {
            wrapper: TableHeader,
            cell: TableHeaderCell,
          },
          body: {
            wrapper: TableBody,
            row: TableBodyRow,
            cell: TableBodyCell,
          },
        }}
        emptyText={() => <Empty />}
        rowKey={rowKey}
      />
    </div>
  );
}
