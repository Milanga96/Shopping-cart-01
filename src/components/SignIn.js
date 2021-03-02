import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import {Button} from 'antd';
import { blue } from '@material-ui/core/colors';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const SignIn = () => (
  <Tabs  defaultActiveKey="1" onChange={callback}>
    <TabPane tab="LOGIN" key="1">
   <input type="username" name="UserName" placeholder="username"/><br></br><br></br>
   <input type="password" name="password" placeholder="password"/><br></br><br></br><br></br><br></br>
    

    <Button>Submit</Button>
    </TabPane>
    <TabPane tab="REGISTER" key="2">
    <input type="username" name="username" placeholder="username"/><br></br><br></br>
   <input type="mobilenumber" name="mobilenumber" placeholder="mobilenumber"/><br></br><br></br>
   <input type="password" name="password" placeholder="password"/><br></br><br></br>
   <Button  style={{color:blue}}>Submit</Button>
    </TabPane>
   
  </Tabs>
);

export default SignIn;