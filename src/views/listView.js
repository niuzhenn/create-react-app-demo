import React, { Component } from 'react';
import { notification, Checkbox, Collapse } from 'antd';
import { checkBoxChange } from '../actions/actions';
import _ from 'lodash';

export default class ListView extends Component {

  openNotification = () => {
    notification.open({
      message: 'Selected Checkbox',
      description: '',
    });
  };

  checkBoxChange = (e) => {
    const { dispatch, checkBox } = this.props;
    let check = _.clone(checkBox);
    check.map((_check)=>{
      _check.selected = _check.name === e.name;
    });
    dispatch(checkBoxChange(check));
  }

  render() {
    const { checkBox } = this.props;
    const Panel = Collapse.Panel;
    const CheckboxGroup = Checkbox.Group;
    let checkOption = [];
    checkBox.map((_check)=>{
      checkOption.push()
    })
    return (
      <Collapse defaultActiveKey={['1']} onChange={()=>{}}>
        <Panel header="Check Box Panel" key="1">
        {/* <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} /> */}
        {
          checkBox.map((_checkBox)=>{
            return (
              <Checkbox key={_checkBox.name} onChange={(e)=>{this.checkBoxChange(e)}} checked={_checkBox.selected}>
                {_checkBox.name}
              </Checkbox>
            )
          })
        }
        </Panel>
      </Collapse>
    )
  }
}