import * as React from "react";
import myDataProvider from './dataProvider';
import {Admin, Resource, Layout } from 'react-admin';
import Dashboard from './Dashboard';
import { DelayList, DelayCreate, DelayEdit, DelayShow} from './delay';
import {SparePartDimensionCreate ,SparePartDimensionShow  ,SparePartDimensionList ,SparePartDimensionEdit} from './SparePartDimension';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import SettingsInputSvideoOutlinedIcon from '@material-ui/icons/SettingsInputSvideoOutlined';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
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
            <Resource name="yadak" icon={SettingsInputSvideoOutlinedIcon} options={{ "label": "قطعات یدکی", "isMenuParent": true }} />
            <Resource name="PMWorks/SparePartDimension" icon={ArrowLeftOutlinedIcon} options={{ label: 'واحد اندازه‌گیری', "menuParent": "yadak"}} list={SparePartDimensionList} edit={SparePartDimensionEdit} create={SparePartDimensionCreate} show={SparePartDimensionShow}/>
            <Resource name="paye" icon={SettingsOutlinedIcon} options={{ "label": "تنظیمات پایه", "isMenuParent": true }} />    
            <Resource name="PMWorks/Delay" icon={ArrowLeftOutlinedIcon} options={{ label: 'تاخیرات', "menuParent": "paye"}} list={DelayList} edit={DelayEdit} create={DelayCreate} show={DelayShow}/>
      
    </Admin>
);
export default App;


