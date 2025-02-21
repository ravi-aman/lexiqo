type RowObj = {
  name: [string, boolean];
  progress: string;
  quantity: number;
  date: string;
  info: boolean;
};
const tableDataCheck: RowObj[] = [
  {
    name: ['Total Earnings', true],
    quantity: 12500, // Example earnings in currency
    progress: '100%', // Fully earned
    date: 'Updated Today',
    info: false,
  },
  {
    name: ['Pending Withdrawals', true],
    quantity: 3200, // Amount awaiting transfer
    progress: 'Awaiting Transfer',
    date: 'Last Update: 2 Days Ago',
    info: true,
  },
  {
    name: ['Active Cases', true],
    quantity: 5, // Number of ongoing cases
    progress: 'In Progress',
    date: 'Updated 3 Hours Ago',
    info: true,
  },
  {
    name: ['New Queries Available', true],
    quantity: 12, // Available new queries
    progress: 'New',
    date: 'Updated 1 Hour Ago',
    info: true,
  },
  {
    name: ['Bidding Success Rate (%)', true],
    quantity: 65, // Percentage of successful bids
    progress: '65%',
    date: 'This Month',
    info: false,
  },
  {
    name: ['Pending Bids', true],
    quantity: 8, // Number of pending bids
    progress: 'Awaiting Response',
    date: 'Updated Yesterday',
    info: true,
  },
  {
    name: ['Upcoming Case Deadlines', true],
    quantity: 3, // Number of upcoming deadlines
    progress: 'Critical',
    date: 'Next Deadline: 22 Feb 2025',
    info: true,
  },
  {
    name: ['Reviews & Ratings', true],
    quantity: 4.7, // Average rating
    progress: 'Excellent',
    date: 'Latest Review: 1 Day Ago',
    info: true,
  },
];



export default tableDataCheck;
