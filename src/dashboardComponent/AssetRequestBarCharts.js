import React from 'react';
import {useQuery } from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CardHeader from '@material-ui/core/CardHeader';
import { format, subDays} from 'date-fns';

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);
const today = format(lastDay, 'yyyy-MM-dd');
const lastMonth= format(aMonthAgo, 'yyyy-MM-dd');




const getIntroOfPage = (payload) => {
  if (payload[0].payload.AssetSubdivisionID__AssetID__LocationID__LocationName === 'null') {
    return " ";
  }
  if (payload[0].payload.AssetSubdivisionID__AssetID__LocationID__LocationName) {
    return payload[0].payload.AssetSubdivisionID__AssetID__LocationID__LocationName;
  }
};






const DepartmentBarCharts = () => {
 
  
  const { data, total, loading, error } = useQuery({
      type: 'getList',
      resource: 'PMWorks/AssWRRep',
      payload: {
          pagination: { page: 1 , perPage: 10 },
          sort: { field: 'WorkRequestType__count', order: 'DESC' },
          filter: {WODateOfRegistration__fi: today, WODateOfRegistration__st: lastMonth},
      }
  },);
  if (loading) { return <p>Loading</p>; }
  if (error) { return <p>ERROR</p>; }
  if (!data) { return <p>No data yet</p>; }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{backgroundColor: 'white' ,BorderColor : 'black', borderStyle: 'solid' , lineHeight: '1', bottom: 0 ,top: 0}}>
          <p className="label" style={{ direction: "rtl" , lineHeight: '1.5' }}><b>کد : {`${label}`}<br/>نام : {`${payload[0].payload.AssetSubdivisionID__AssetName}`} <br/>خانواده تجهیز : {`${payload[0].payload.AssetSubdivisionID__AssetClassNameChain}`}</b> <br/>مکان : {getIntroOfPage(payload)} <br/> تعداد درخواست اضطراری: {`${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };
  

return (<div style={{direction: "ltr" , float: "right"}}>
<CardHeader title={'تعداد درخواست کار های تجهیزات در 30 روز گذشته'} style={{float: "right"}} />
<ResponsiveContainer width={600} height={350} minWidth={400} minHeight={350} 
style={{ float: "right"}}>
       <BarChart
         width={500}
         height={300}
         barCategoryGap={5}
         data={data}
         style={{ float: "right"}}
         margin={{
           top: 20,
           right: 30,
           left: 20,
           bottom: 10,
         }}
       >
         <CartesianGrid strokeDasharray="3 3" overflow= 'hidden'/>
         <XAxis dataKey="AssetSubdivisionID__AssetCode" style={{fontSize: '0.7em', }} interval={0} type={'category'} reversed= 'true'/>
         <YAxis style={{direction: "ltr"}} orientation='right' />
         <Tooltip content={<CustomTooltip />} />
         <Legend />
         <Bar dataKey="WorkRequestType__count" name=' تعداد درخواست های اضطراری' barSize={30} fill="#ff5050" />
       </BarChart>
     </ResponsiveContainer>
     
</div>);
}; 


export default DepartmentBarCharts;