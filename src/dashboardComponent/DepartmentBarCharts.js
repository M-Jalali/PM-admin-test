import React from 'react';
import { useQuery} from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , Label} from 'recharts';
import { format, subDays, addDays } from 'date-fns';
import CardHeader from '@material-ui/core/CardHeader';

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);
const today = format(lastDay, 'yyyy-MM-dd');
const lastMonth= format(aMonthAgo, 'yyyy-MM-dd');

const DepartmentBarCharts = () => {
 
  
  const { data, total, loading, error } = useQuery({
      type: 'getList',
      resource: 'PMWorks/DepWORep',
      payload: {
          pagination: { page: 1 , perPage: 10 },
          sort: { field: 'WorkOrderTypeTotal__count', order: 'DESC' },
          filter: { WODateOfRegistration__fi: today, WODateOfRegistration__st: lastMonth },
      }
  },);
  if (loading) { return <p>Loading</p>; }
  if (error) { return <p>ERROR</p>; }
  if (!data) { return <p>No data yet</p>; }

   

return (<div style={{direction: "ltr" , float: "right"}}>
  <CardHeader title={'تعداد دستور کار های دپارتمان ها در 30 روز گذشته'} style={{float: "right"}} />
<ResponsiveContainer width={600} height={350} minWidth={400} minHeight={350} style={{ float: "right"}} >
  <BarChart
    width={500}
    height={300}
    barCategoryGap={10}
    style={{ float: "right"}}
    data={data}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 10,
    }}
    >
    
    <CartesianGrid strokeDasharray="3 3" overflow= 'hidden' />
    <XAxis dataKey="DepartmentID__DepartmentName"  reversed= 'true'/>
    <YAxis style={{direction: "ltr"}} orientation='right'/>
    <Tooltip />
    <Legend />
    <Bar dataKey="WorkOrderTypePM__count" name="PM" stackId="a" fill="#ff9900"  />
    <Bar dataKey="WorkOrderTypeWR__count" name="WR" stackId="a" fill="#3399ff" />
  </BarChart>
</ResponsiveContainer>
      </div>);
}; 


export default DepartmentBarCharts;