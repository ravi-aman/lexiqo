'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import PieChartCard from 'components/admin/default/PieChartCard';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import QueryForm from 'components/QueryFrom';

const Dashboard = () => {
  return (
    <div>

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Total Earnings'}
          subtitle={'₹28,500'}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={'Pending Withdrawals'}
          subtitle={'₹5,200'}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={'Active Cases'}
          subtitle={'12'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'New Queries Available'}
          subtitle={'8'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Bidding Success Rate'}
          subtitle={'74%'}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={'Pending Bids'}
          subtitle={'5'}
        />
      </div>
      <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Query Submission</h1>
      <QueryForm />
    </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* <PieChartCard />
        <WeeklyRevenue /> */}
      </div>


      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable tableData={tableDataComplex} />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
