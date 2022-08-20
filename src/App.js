import * as React from "react";
import myDataProvider from './dataProvider';
import {Admin, Resource, Layout } from 'react-admin';
import Dashboard from './Dashboard';
import { DelayList, DelayCreate, DelayEdit, DelayShow} from './delay';
//import {SparePartDimensionCreate ,SparePartDimensionShow  ,SparePartDimensionList ,SparePartDimensionEdit} from './SparePartDimension';

//import {WorkOrderList, WorkOrderEdit} from './WorkOrder';


import WorkOrderList from './WorkOrder/wol';
//import WorkOrderList from './WorkOrder/WorkOrderList';
import WorkOrderCreate from './WorkOrder/WorkOrderCreate';
import WorkOrderEdit from './WorkOrder/WorkOrderEdit';
import WorkOrderShow from './WorkOrder/WorkOrderShow';

import WorkOrderCount from "./dashboardComponent/WorkOrderCount";

import WorkRequestList from './WorkRequest/wrl';
//import WorkRequestList from './WorkRequest/WorkRequestList';
import {WorkRequestCreate} from './WorkRequest/WorkRequestCreate';
import WorkRequestEdit from './WorkRequest/WorkRequestEdit';
import WorkRequestShow from './WorkRequest/WorkRequestShow';


import AssetClassTaskList from './AssetClassTask/AssetClassTaskList';
import AssetClassTaskCreate from './AssetClassTask/AssetClassTaskCreate';
import AssetClassTaskEdit from './AssetClassTask/AssetClassTaskEdit';
import AssetClassTaskShow from './AssetClassTask/AssetClassTaskShow';
import AssetClassTaskAddCreate from './AssetClassTask/AssetClassTaskAddCreate';

import DepartmentList from './Department/DepartmentList';
import DepartmentCreate from './Department/DepartmentCreate';
import DepartmentEdit from './Department/DepartmentEdit';
import DepartmentShow from './Department/DepartmentShow';


import JobCategoryList from './JobCategory/JobCategoryList';
import JobCategoryCreate from './JobCategory/JobCategoryCreate';
import JobCategoryEdit from './JobCategory/JobCategoryEdit';
import JobCategoryShow from './JobCategory/JobCategoryShow';

import PersonnelList from './Personnel/PersonnelList';
import PersonnelCreate from './Personnel/PersonnelCreate';
import PersonnelEdit from './Personnel/PersonnelEdit';
import PersonnelShow from './Personnel/PersonnelShow';


import PersonnelJobCategoryList from './PersonnelJobCategory/PersonnelJobCategoryList';
import PersonnelJobCategoryCreate from './PersonnelJobCategory/PersonnelJobCategoryCreate';
import PersonnelJobCategoryEdit from './PersonnelJobCategory/PersonnelJobCategoryEdit';
import PersonnelJobCategoryShow from './PersonnelJobCategory/PersonnelJobCategoryShow';


import SparePartList from './SparePart/SparePartList';
import SparePartCreate from './SparePart/SparePartCreate';
import SparePartEdit from './SparePart/SparePartEdit';
import SparePartShow from './SparePart/SparePartShow';

import SparePartDimensionList from './SparePartDimension/SparePartDimensionList';
import SparePartDimensionCreate from './SparePartDimension/SparePartDimensionCreate';
import SparePartDimensionEdit from './SparePartDimension/SparePartDimensionEdit';
import SparePartDimensionShow from './SparePartDimension/SparePartDimensionShow';


import SparePartCategoryList from './SparePartCategory/SparePartCategoryList';
import SparePartCategoryCreate from './SparePartCategory/SparePartCategoryCreate';
import SparePartCategoryEdit from './SparePartCategory/SparePartCategoryEdit';
import SparePartCategoryShow from './SparePartCategory/SparePartCategoryShow';

import SupplierList from './Supplier/SupplierList';
import SupplierCreate from './Supplier/SupplierCreate';
import SupplierEdit from './Supplier/SupplierEdit';
import SupplierShow from './Supplier/SupplierShow';

import UserList from './User/UserList';
import UserCreate from './User/UserCreate';
import UserEdit from './User/UserEdit';
import UserShow from './User/UserShow';


import WODelayList from './WODelay/WODelayList';
import WODelayCreate from './WODelay/WODelayCreate';
import WODelayEdit from './WODelay/WODelayEdit';
import WODelayShow from './WODelay/WODelayShow';


import WOPersonnelList from './WOPersonnel/WOPersonnelList';
import WOPersonnelCreate from './WOPersonnel/WOPersonnelCreate';
import WOPersonnelEdit from './WOPersonnel/WOPersonnelEdit';
import WOPersonnelShow from './WOPersonnel/WOPersonnelShow';

import WOSparePartList from './WOSparePart/WOSparePartList';
import WOSparePartCreate from './WOSparePart/WOSparePartCreate';
import WOSparePartEdit from './WOSparePart/WOSparePartEdit';
import WOSparePartShow from './WOSparePart/WOSparePartShow';


import WOSupplierList from './WOSupplier/WOSupplierList';
import WOSupplierCreate from './WOSupplier/WOSupplierCreate';
import WOSupplierEdit from './WOSupplier/WOSupplierEdit';
import WOSupplierShow from './WOSupplier/WOSupplierShow';

import WOStatusCreate from './WOStatus/WOStatusCreate';

import WOTaskList from './WOTask/WOTaskList';
import WOTaskCreate from './WOTask/WOTaskCreate';
import WOTaskEdit from './WOTask/WOTaskEdit';
import WOTaskShow from './WOTask/WOTaskShow';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import SettingsInputSvideoOutlinedIcon from '@material-ui/icons/SettingsInputSvideoOutlined';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import farsiMessages from 'ra-language-farsi';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import Theme  from "./theme";
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken, jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';
import TreeMenu from '@bb-tech/ra-treemenu';
import MyLayout from './MyLayout';



let authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "http://185.231.115.209:8080/PMWorks/token/"});

const messages = {
    'fa': farsiMessages,
}
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'fa');
 

const App = () => (
    <Admin  disableTelemetry 
            theme={Theme} 
            layout={MyLayout}
            dataProvider={myDataProvider}
            authProvider={authProvider} 
            i18nProvider={i18nProvider}
            dashboard={Dashboard} 
            menu={TreeMenu}
            >
            <Resource name="modiriat" icon={AddBoxOutlinedIcon} options={{ "label": "پنل کاربری", "isMenuParent": true }} />    
            <Resource name="PMWorks/WorkRequest" icon={ArrowLeftOutlinedIcon} options={{ label: 'درخواست کار', "menuParent": "modiriat" }} list={WorkRequestList} edit={WorkRequestEdit} create={WorkRequestCreate} show={WorkRequestShow} />
            <Resource name="PMWorks/WorkOrder" icon={ArrowLeftOutlinedIcon} options={{ label: 'دستور کار', "menuParent": "modiriat" }} count= {WorkOrderCount} list={WorkOrderList} edit={WorkOrderEdit} show={WorkOrderShow} />
            <Resource name="yadak" icon={SettingsInputSvideoOutlinedIcon} options={{ "label": "قطعات یدکی", "isMenuParent": true }} />
            <Resource name="PMWorks/SparePart" icon={ArrowLeftOutlinedIcon} options={{ label: 'قطعات یدکی', "menuParent": "yadak" }} list={SparePartList} edit={SparePartEdit} create={SparePartCreate} show={SparePartShow}/>
            <Resource name="PMWorks/SparePartCategory" icon={ArrowLeftOutlinedIcon} options={{ label: 'خانواده قطعات', "menuParent": "yadak"}} list={SparePartCategoryList} edit={SparePartCategoryEdit} create={SparePartCategoryCreate} show={SparePartCategoryShow}/>
            <Resource name="PMWorks/SparePartDimension" icon={ArrowLeftOutlinedIcon} options={{ label: 'واحد اندازه‌گیری', "menuParent": "yadak"}} list={SparePartDimensionList} edit={SparePartDimensionEdit} create={SparePartDimensionCreate} show={SparePartDimensionShow}/>
            <Resource name="tamin" icon={PeopleOutlinedIcon} options={{ "label": "تامین‌کنندگان", "isMenuParent": true }} />
            <Resource name="PMWorks/Supplier" icon={ArrowLeftOutlinedIcon} options={{ label: 'تامین کنندگان', "menuParent": "tamin"}} list={SupplierList} edit={SupplierEdit} create={SupplierCreate} show={SupplierShow}/>
            <Resource name="niro" icon={PermIdentityOutlinedIcon} options={{ "label": "نیروی انسانی", "isMenuParent": true }} />
            <Resource name="PMWorks/Personnel" icon={ArrowLeftOutlinedIcon} options={{ label: 'نیروی انسانی', "menuParent": "niro"}} list={PersonnelList} edit={PersonnelEdit} create={PersonnelCreate} show={PersonnelShow}/>
            <Resource name="PMWorks/JobCategory" icon={ArrowLeftOutlinedIcon} options={{ label: 'تخصص', "menuParent": "niro"}} list={JobCategoryList} edit={JobCategoryEdit} create={JobCategoryCreate} show={JobCategoryShow}/>
            <Resource name="PMWorks/PersonnelJobCategory" icon={ArrowLeftOutlinedIcon} options={{ label: 'شغل پرسنل'}} edit={PersonnelJobCategoryEdit} create={PersonnelJobCategoryCreate} show={PersonnelJobCategoryShow}/>
            <Resource name="PMWorks/Department" icon={ArrowLeftOutlinedIcon} options={{ label: 'دپارتمان', "menuParent": "niro"}} list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate} show={DepartmentShow}/>
            <Resource name="paye" icon={SettingsOutlinedIcon} options={{ "label": "تنظیمات پایه", "isMenuParent": true }} />    
            <Resource name="PMWorks/Delay" icon={ArrowLeftOutlinedIcon} options={{ label: 'تاخیرات', "menuParent": "paye"}} list={DelayList} edit={DelayEdit} create={DelayCreate} show={DelayShow}/>
            <Resource name="PMWorks/AssetClassTask" icon={ArrowLeftOutlinedIcon} options={{ label: 'فعالیت ها'}} edit={AssetClassTaskEdit} create={AssetClassTaskCreate} show={AssetClassTaskShow}/>
            <Resource name="dast" icon={PersonAddOutlinedIcon} options={{ "label": "دسترسی", "isMenuParent": true }} />
            <Resource name="PMWorks/User" icon={ArrowLeftOutlinedIcon} options={{ label: 'کاربران', "menuParent": "dast" }} list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
            <Resource name="PMWorks/Status" />
            <Resource name="PMWorks/WOPersonnel" icon={ArrowLeftOutlinedIcon} options={{ label: 'پرسنل دستور کارها'}} edit={WOPersonnelEdit} create={WOPersonnelCreate} show={WOPersonnelShow}/>
            <Resource name="PMWorks/WODelay" icon={ArrowLeftOutlinedIcon} options={{ label: 'تاخیرات دستور کارها'}} edit={WODelayEdit} create={WODelayCreate} show={WODelayShow}/>
            <Resource name="PMWorks/WOSparePart" icon={ArrowLeftOutlinedIcon} options={{ label: 'قطعات دستور کارها'}} edit={WOSparePartEdit} create={WOSparePartCreate} show={WOSparePartShow}/>
            <Resource name="PMWorks/WOAssetSubdivision" options={{ label: 'تجهیزات دستورکار'}}/>
            <Resource name="PMWorks/WOSupplier" icon={ArrowLeftOutlinedIcon} options={{ label: 'تامین کننده دستور کارها'}} edit={WOSupplierEdit} create={WOSupplierCreate} show={WOSupplierShow}/>
            <Resource name="PMWorks/WOTask" icon={ArrowLeftOutlinedIcon} options={{ label: 'وظایف دستور کارها'}} edit={WOTaskEdit} create={WOTaskCreate} show={WOTaskShow}/>
            <Resource name="PMWorks/WOStatus" options={{ label: 'وضعیت'}} create={WOStatusCreate}/>
            <Resource name="PMWorks/WorkOrderNew" options={{ label: 'درخواست کار'}} create={WorkOrderCreate} />
    </Admin>
);
export default App;


