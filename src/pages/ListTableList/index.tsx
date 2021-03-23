import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef, useCallback, useEffect } from 'react';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType, IntlProvider, enUSIntl } from '@ant-design/pro-table';
import { SorterResult } from 'antd/es/table/interface';
import CreateForm from './components/CreateForm';
// import UpdateForm, { FormValueType } from './components/UpdateForm';
import { TableListItem } from './data.d';
import UpdateForm from './components/UpdateForm';

enum EUser {
  Admin = 'admin',
  Manager = 'manager',
  Operator = 'operator',
}

const TableList: React.FC<{}> = () => {
  const [sorter, setSorter] = useState<string>('');
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [updateId, setUpdateId] = useState<number>();
  const [dataSource, setDataSource] = useState<{ [key: number]: TableListItem }>({
    0: {
      key: 0,
      name: 'Admin',
      email: 'root.admin@ems.com',
      isActive: true,
      createdAt: moment('2020-10-10', 'YYYY-MM-DD'),
      phoneNo: '09876543221',
      role: EUser.Admin,
      updatedAt: moment('2020-10-10', 'YYYY-MM-DD'),
      dob: moment('1997-10-20', 'YYYY-MM-DD'),
    },
  });

  const actionRef = useRef<ActionType>();

  const handleRemove = async (key: number) => {
    setDataSource((ds) => {
      delete dataSource[key];
      return { ...ds };
    });
  };

  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
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
      dataIndex: 'key',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              setUpdateId(record.key);
              handleUpdateModalVisible(true);
            }}
          >
            Update
          </a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              handleRemove(record.key);
            }}
          >
            Remove
          </a>
        </>
      ),
    },
  ];

  const handleAdd = ({ name, email, phoneNo, role, dob }: TableListItem, key: number) => {
    message.loading('Creating');
    try {
      const user = {
        key,
        name,
        email,
        isActive: true,
        createdAt: moment(),
        phoneNo,
        role: role as EUser,
        updatedAt: moment(),
        dob: dob,
      };

      setDataSource((ds) => ({ ...ds, [key]: user }));

      handleModalVisible(false);
      message.success('Created successfully!');
    } catch (error) {
      console.error(error);
      message.error('Failed to add');
    }
  };

  const handleUpdate = (
    { name, email, phoneNo, role, dob, isActive }: TableListItem,
    key: number,
  ) => {
    message.loading('Updating');

    try {
      const user = {
        key,
        name,
        email,
        isActive,
        createdAt: moment(),
        phoneNo,
        role: role as EUser,
        updatedAt: moment(),
        dob: dob,
      };

      setDataSource((ds) => ({ ...ds, [key]: user }));

      message.success('Updated successfully!');
      handleUpdateModalVisible(false);
    } catch (error) {
      console.error(error);
      message.error('Failed to update');
    }
  };

  return (
    // <PageHeaderWrapper>
    <>
      <IntlProvider value={{ intl: enUSIntl }}>
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
            </div>
          )}
          dataSource={Object.values(dataSource)}
          columns={columns}
          rowSelection={{}}
        />
      </IntlProvider>
      <CreateForm
        onSubmit={(fields) => {
          handleAdd(fields, Object.values(dataSource).length);
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }}
        onCancel={() => {
          handleModalVisible(false);
        }}
        modalVisible={createModalVisible}
      />
      {/* <ProTable<TableListItem, TableListItem>
          onSubmit={async (value) => {
            const success = await handleAdd(value, Object.values(dataSource).length);
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
        /> */}
      {/* </CreateForm> */}
      {dataSource[updateId ?? -1] && (
        <UpdateForm
          initValue={dataSource[updateId ?? -1]}
          onCancel={() => handleUpdateModalVisible(false)}
          modalVisible={updateModalVisible}
          onSubmit={(fields) => {
            handleUpdate(fields, updateId ?? -1);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }}
        />
      )}
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
    </>
    // </PageHeaderWrapper>
  );
};

export default TableList;
