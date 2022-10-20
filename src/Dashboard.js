import * as React  from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title ,useGetList  } from 'react-admin';
import WorkOrderCount from "./dashboardComponent/WorkOrderCount";
import DepartmentBarCharts from "./dashboardComponent/DepartmentBarCharts";
import AssetRequestBarChart from "./dashboardComponent/AssetRequestBarCharts";
import WorkOrderSimpleList from "./dashboardComponent/OrderListSimple";
import RequsetListSimple from "./dashboardComponent/RequsetListSimple";
import ListTestDash from "./dashboardComponent/ListTestDash";


export default () => (
    <Card>
        <Title title="داشبورد نرم‌افزار نگهداری و تعمیرات آویژه" />
        <WorkOrderCount />
        <DepartmentBarCharts/>
        <AssetRequestBarChart/>
        <WorkOrderSimpleList/>
        <RequsetListSimple/>
        <ListTestDash/>
    </Card>
)
