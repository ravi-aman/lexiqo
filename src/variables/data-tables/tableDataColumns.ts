type RowObj = {
  name: string;
  progress: string;
  quantity: number;
  date: string;
};

const tableDataColumns: RowObj[] = [
  {
    name: 'Legal Case Manager',
    quantity: 2780,
    progress: '19.2%',
    date: '05 May 2022',
  },
  {
    name: 'Lawyer Dashboard',
    quantity: 1925,
    progress: '12.7%',
    date: '18 Jun 2022',
  },
  {
    name: 'Client Consultation',
    quantity: 1298,
    progress: '23.9%',
    date: '30 Jul 2022',
  },
  {
    name: 'Case Tracking System',
    quantity: 910,
    progress: '29.4%',
    date: '12 Aug 2022',
  },
];

export default tableDataColumns;
