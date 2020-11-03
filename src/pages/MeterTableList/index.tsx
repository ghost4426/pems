import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType, IntlProvider, enUSIntl } from '@ant-design/pro-table';
import { SorterResult } from 'antd/es/table/interface';
import CreateForm from './components/CreateForm';
// import UpdateForm, { FormValueType } from './components/UpdateForm';
import { TableListItem } from './data';
import UpdateForm from './components/UpdateForm';
import DocumentModal from './components/DocumentModal';

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

const LineTableList: React.FC<{}> = () => {
  const [sorter, setSorter] = useState<string>('');
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [documentModalVisible, setDocumentModalVisible] = useState<boolean>(false);
  const [url, setUrl] = useState('');

  const [dataSource] = useState<TableListItem[]>([
    {
      key: 1,
      name: 'F8',
      image: '/Meter.jpg',
      createdAt: moment('1997/10/20', 'YYYY/MM/DD'),
      updatedAt: moment('2020/08/20', 'YYYY/MM/DD'),
    },
    {
      key: 2,
      name: 'M4.1',
      image: '/Meter.jpg',
      createdAt: moment('1997/10/20', 'YYYY/MM/DD'),
      updatedAt: moment('2020/08/20', 'YYYY/MM/DD'),
    },
    {
      key: 3,
      name: 'M4.2',
      image: '/Meter.jpg',
      createdAt: moment('1997/10/20', 'YYYY/MM/DD'),
      updatedAt: moment('2020/08/20', 'YYYY/MM/DD'),
    },
    {
      key: 4,
      name: 'M4',
      image: '/Meter.jpg',
      createdAt: moment('1997/10/20', 'YYYY/MM/DD'),
      updatedAt: moment('2020/08/20', 'YYYY/MM/DD'),
    },
    {
      key: 5,
      name: 'M10',
      image: '/Meter.jpg',
      createdAt: moment('1997/10/20', 'YYYY/MM/DD'),
      updatedAt: moment('2020/08/20', 'YYYY/MM/DD'),
    },
  ]);

  const actionRef = useRef<ActionType>();

  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (_, record) => (
        <a
          onClick={() => {
            setDocumentModalVisible(true);
            setUrl(record.image);
          }}
        >
          View image
        </a>
      ),
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
            }}
          >
            Update
          </a>
          <Divider type="vertical" />
          <a>Remove</a>
        </>
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
      <IntlProvider value={{ intl: enUSIntl }}>
        <ProTable<TableListItem>
          headerTitle="Meter list"
          actionRef={actionRef}
          rowKey="key"
          search={false}
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
              <PlusOutlined /> Create Meter
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
              {/* <span>
            Total number of service calls {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} 万
            </span> */}
            </div>
          )}
          dataSource={dataSource}
          columns={columns}
          rowSelection={{}}
        />
      </IntlProvider>
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
      <UpdateForm
        onCancel={() => handleUpdateModalVisible(false)}
        modalVisible={updateModalVisible}
      />
      <DocumentModal
        url={url}
        onDismiss={() => setDocumentModalVisible(false)}
        visible={documentModalVisible}
        fileType={'jpg'}
      />
    </PageHeaderWrapper>
  );
};

export default LineTableList;
