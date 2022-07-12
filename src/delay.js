import * as React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    List,
    Edit,
    Create,
    Datagrid,
    useNotify,
    useRefresh,
    useRedirect,
    TextField,
    EditButton,
    SimpleForm,
    TextInput,
    TopToolbar,
    Filter,
    downloadCSV
} from 'react-admin';


import { ImportButton } from "react-admin-import-csv";
import { CreateButton, ExportButton,ListButton } from "ra-ui-materialui";
import jsonExport from 'jsonexport/dist';

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};
  
const exporter = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'SparePartDimensionList')
  
    })
};


const DelayTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

 const DelayFilter = (props) => (
    <Filter {...props}>
            <TextInput textAlgin="right" source="DelayCode__icontains"  label="کد تاخیر " alwaysOn resettable/>
            <TextInput textAlgin="right" source="DelayName__icontains"  label="نام تاخیر" alwaysOn resettable />
    </Filter>
);


const ListActions = (props) => {
    return (
       
      <TopToolbar >
        <CreateButton  />
        <ExportButton   />
        <ImportButton  label=" ورودی"   {...importOptions} {...props} />
      </TopToolbar> 
        
    );
  };

export const DelayList = (props) => (
    <List {...props} title="تاخیرات" exporter={exporter} filters={ <DelayFilter />} actions={<ListActions />}> 
    
        <Datagrid>
            <TextField textAlgin="right" source="DelayCode" label="کد تاخیر "/>,
            <TextField textAlgin="right" source="DelayName"  label="نام تاخیر"/>
            <ShowButton />
        </Datagrid>
    </List>
);

const DelayEditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath}/>
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);
export const DelayEdit = (props) => (
    <Edit actions={<DelayEditActions />} {...props}>
        <SimpleForm>
<TextInput textAlgin="right" source="DelayCode"  label="کد تاخیر "/>
<TextInput textAlgin="right" source="DelayName"  label="نام تاخیر"/>
</SimpleForm>
</Edit>
);

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

export const DelayCreate = props => {
    const notify = useNotify();
        const refresh = useRefresh();
        const redirect = useRedirect();
    
        const onSuccess = () => {
            notify(`دیتا ذخیره شد`)
            redirect('/PMWorks/Delay/create');
            refresh();
        };
    return(
    <Create actions={<CreateActions />} {...props} onSuccess={onSuccess} title="ایجاد تاخیر">
        <SimpleForm>
            <TextInput textAlgin="right" source="DelayCode"  label="کد تاخیر "/>
            <TextInput textAlgin="right" source="DelayName"  label="نام تاخیر"/>
        </SimpleForm>
    </Create>
    );
};


const DelayShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath}/>
        <EditButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const DelayShow = props => (
    <Show  actions={<DelayShowActions />}  {...props}>
        <SimpleShowLayout>
            <TextField textAlgin="right" source="DelayCode"  label="کد تاخیر " />
            <TextField textAlgin="right" source="DelayName"  label="نام تاخیر" />
        </SimpleShowLayout>
    </Show>
);

