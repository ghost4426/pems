import React from 'react';
import { Chart, Geom, Axis, Tooltip, Label, Legend } from 'bizcharts';
import numeral from 'numeral';
import { connect } from 'umi';

class Stackedcolumn extends React.Component {
  state = {
    ActualVisible: true,
    KPIVisible: true,
  };

  onLegendClick = (ev) => {
    if (ev.data.value === 'Actual') {
      this.setState({
        ActualVisible: !this.state.ActualVisible,
      });
    }
    if (ev.data.value === 'KPI') {
      this.setState({
        KPIVisible: !this.state.KPIVisible,
      });
    }
  };

  render() {
    const { ActualVisible, KPIVisible } = this.state;
    const data = [
      { name: 'Actual', month: 'Jan.', 月均降雨量: 18.9, temperature: 21.3 },
      { name: 'Actual', month: 'Feb.', 月均降雨量: 28.8, temperature: 52 },
      { name: 'Actual', month: 'Mar.', 月均降雨量: 39.3, temperature: 73.8 },
      { name: 'Actual', month: 'Apr.', 月均降雨量: 81.4, temperature: 181 },
      { name: 'Actual', month: 'May', 月均降雨量: 47, temperature: 99.6 },
      { name: 'Actual', month: 'Jun.', 月均降雨量: 20.3, temperature: 55.8 },
      { name: 'Actual', month: 'Jul.', 月均降雨量: 24, temperature: 61.4 },
      { name: 'Actual', month: 'Aug.', 月均降雨量: 35.6, temperature: 78 },
      { name: 'KPI', month: 'Jan.', 月均降雨量: 12.4, temperature: 21.3 },
      { name: 'KPI', month: 'Feb.', 月均降雨量: 23.2, temperature: 52 },
      { name: 'KPI', month: 'Mar.', 月均降雨量: 34.5, temperature: 73.8 },
      { name: 'KPI', month: 'Apr.', 月均降雨量: 99.7, temperature: 181 },
      { name: 'KPI', month: 'May', 月均降雨量: 52.6, temperature: 99.6 },
      { name: 'KPI', month: 'Jun.', 月均降雨量: 35.5, temperature: 55.8 },
      { name: 'KPI', month: 'Jul.', 月均降雨量: 37.4, temperature: 61.4 },
      { name: 'KPI', month: 'Aug.', 月均降雨量: 42.4, temperature: 78 },
    ];

    return (
      <div>
        <Chart height={400} data={data} forceFit onLegendItemClick={this.onLegendClick}>
          <Legend />
          <Axis name="month" />
          {/* <Axis name="月均降雨量" /> */}
          <Tooltip />
          <Geom
            type="intervalStack"
            position="month*月均降雨量"
            color={'name'}
            style={{
              stroke: '#fff',
              lineWidth: 1,
            }}
          >
            <Label
              content={[
                'temperature*月均降雨量',
                (temperature, itemValue) => {
                  // 用于格式化 最终显示的 label
                  if (ActualVisible && KPIVisible) {
                    // 显示总数
                    return numeral(temperature).format('0.00');
                  }
                  return numeral(itemValue).format('0.00');
                },
              ]}
              formatter={(text, item) => {
                if (ActualVisible && KPIVisible) {
                  // 仅显示 最上面一组的 label 达成总数显示需求
                  if (item._origin.name === 'KPI') {
                    return null;
                  }
                  // 显示总数
                  return text;
                }
                return text;
              }}
            />
          </Geom>
        </Chart>
      </div>
    );
  }
}

export default connect()(Stackedcolumn);
