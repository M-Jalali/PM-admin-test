import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    TopToolbar,
    useNotify,
    useRefresh,
    useRedirect,
    ListButton,
    SimpleShowLayout,
    Show,
    EditButton,
    ShowButton,
    Toolbar,
    SimpleList,
    Filter,
    CreateButton,
    ExportButton,
    downloadCSV
}
from 'react-admin';
import { ImportButton } from "react-admin-import-csv";
import { makeStyles } from '@material-ui/core';
import jsonExport from 'jsonexport/dist';


const SparePartDimensionTitle = ({ record }) => {
    return <span> {record ? `"${record.SparePartDimensionName}"` : ''}</span>;
};


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

const useStyles = makeStyles({
    ex: {
        fontFamily: 'inherit',
    }
});

const ListActions = (props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
      <CreateButton/>
      <ExportButton className={classes.ex} label="خروجی"/>
      <ImportButton label="ورودی" {...props} {...importOptions}/>
    </TopToolbar>
  );
};

export const SparePartDimensionList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<SparePartDimensionFilter />} {...props} title="سطح قطعات">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SparePartDimensionName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
                    <TextField label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);

export const SparePartDimensionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode__icontains" alwaysOn resettable/>
        <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName__icontains" alwaysOn resettable/>
    </Filter>
);

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.SparePartDimensionCode) {
        errors.SparePartDimensionCode = 'کد را وارد کنید';
    }
    if (!values.SparePartDimensionName) {
        errors.SparePartDimensionName = 'نام را وارد کنید';
    }
    return errors
};

 export const SparePartDimensionEdit = props => (
    <Edit actions={<EditActions />} title={<SparePartDimensionTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
            <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
        </SimpleForm>
    </Edit>
);

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);


export const SparePartDimensionShow = (props) => {


    return(
    <Show actions={<ShowActions/>} title={<SparePartDimensionTitle />} {...props}>
        <SimpleShowLayout>
            <TextField  label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
            <TextField  label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
        </SimpleShowLayout>
    </Show>
);
    };

    const CreateActions = ({ basePath, record, resource }) => (
        <TopToolbar>
            <ListButton basePath={basePath} />
        </TopToolbar>
    );
    export const SparePartDimensionCreate = props => {

        const notify = useNotify();
        const refresh = useRefresh();
        const redirect = useRedirect();
    
        const onSuccess = () => {
            notify(`دیتا ذخیره شد`)
            redirect('/PMWorks/SparePartDimension/create');
            refresh();
        };
    return(
        <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد سطح">
            <SimpleForm validate={validateError}>
                <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
                <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
            </SimpleForm>
        </Create>
    );
    };    