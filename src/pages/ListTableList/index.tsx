import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType,  IntlProvider ,enUSIntl} from '@ant-design/pro-table';
import { SorterResult } from 'antd/es/table/interface';
import CreateForm from './components/CreateForm';
// import UpdateForm, { FormValueType } from './components/UpdateForm';
import { TableListItem } from './data.d';
import UpdateForm from './components/UpdateForm';



// 生成 intl 对象
// const enUSIntl = createIntl('en_US', enLocale);
// 使用
/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('Creating');
  try {
    await addRule({ ...fields });
    hide();
    message.success('Created successfully!');
    return true;
  } catch (error) {
    hide();
    message.error('Failed to add');
    return false;
  }
};

/**
 * 更新节点
 * @param fields
 */
// const handleUpdate = async (fields: FormValueType) => {
//   const hide = message.loading('Updating');
//   try {
//     await updateRule({
//       name: fields.name,
//       desc: fields.desc,
//       key: fields.key,
//     });
//     hide();

//     message.success('Updated Successfully!');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('Failed to update');
//     return false;
//   }
// };

/**
 *  删除节点
 * @param selectedRows
 */
const handleRemove = async () => null;

const TableList: React.FC<{}> = () => {
  const [sorter, setSorter] = useState<string>('');
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [dataSource] = useState<TableListItem[]>([{
    key:1,name:"A Tran",email:'At@pems.com',isActive: true,createdAt: moment('1997/10/20', 'YYYY/MM/DD'),phoneNo: '0987654321',role: 'Admin',updatedAt: moment('2020/08/20', 'YYYY/MM/DD'),dob: moment('1997/10/20', 'YYYY/MM/DD')
  }])
  
  const actionRef = useRef<ActionType>();






  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      // rules: [
      //   {
      //     required: true,
      //     message: '规则名称为必填项',
      //   },
      // ],
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone No',
      dataIndex: 'phoneNo',
      sorter: true,
      // renderText: (val: string) => `${val} 万`,
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      hideInForm: true,
      valueEnum: {
        true: { text: 'Active', status: 'Success' },
        false: { text: 'Inactive', status: 'Error' },
      },
    },
    {
      title: 'Role',
      dataIndex: 'role',
      hideInForm: true,
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'dateTime',
      hideInForm: true,
    },
    {
      title: '',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            Update
          </a>
          <Divider type="vertical" />
          <a >Remove</a>
        </>
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
<IntlProvider value={ {intl: enUSIntl}}>

      <ProTable<TableListItem>
        headerTitle="User list"
        actionRef={actionRef}
        rowKey="key"
        onChange={(_, _filter, _sorter) => {
          const sorterResult = _sorter as SorterResult<TableListItem>;
          if (sorterResult.field) {
            setSorter(`${sorterResult.field}_${sorterResult.order}`);
          }
        }}
        params={{
          sorter,
        }}
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> Create User
          </Button>,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async (e) => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      action.reload();
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">Remove</Menu.Item>
                </Menu>
              }
            >
              <Button>
                Actions <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys }) => (
          <div>
            Selected <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> user&nbsp;&nbsp;
            {/* <span>
            Total number of service calls {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} 万
            </span> */}
          </div>
        )}
        dataSource={dataSource}
        columns={columns}
        rowSelection={{}}
      />
</IntlProvider>;

      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable<TableListItem, TableListItem>
          onSubmit={async (value) => {
            const success = await handleAdd(value);
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          columns={columns}
          rowSelection={{}}
        />
      </CreateForm>
      <UpdateForm  onCancel={() => handleUpdateModalVisible(false)} modalVisible={updateModalVisible}/>

      {/* {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null} */}
    </PageHeaderWrapper>
  );
};

export default TableList;
