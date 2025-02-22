type RowObj = {
  pageName: string;
  visitors: string | number;
  unique: string | number;
  clients: string | number;
  bounceRate: string | number;
};
const tableDataComplex: RowObj[] = [
  {
    pageName: 'Legal Marketplace',
    visitors: '5.120',
    unique: '3.820',
    clients: '482',
    bounceRate: '+3.12%'
  },
  {
    pageName: 'Lawyer Dashboard',
    visitors: '4.210',
    unique: '3.120',
    clients: '450',
    bounceRate: '-8.76%'
  },
  {
    pageName: 'Case Management System',
    visitors: '3.872',
    unique: '2.789',
    clients: '419',
    bounceRate: '+6.95%'
  },
  {
    pageName: 'Bidding Platform',
    visitors: '3.658',
    unique: '2.570',
    clients: '405',
    bounceRate: '-2.14%'
  },
  {
    pageName: 'Legal Firm Portal',
    visitors: '3.512',
    unique: '2.410',
    clients: '320',
    bounceRate: '-0.89%'
  }
];

export default tableDataComplex;
