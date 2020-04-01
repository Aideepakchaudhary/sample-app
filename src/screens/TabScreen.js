import React, { Component } from 'react';
import {Container,Header,Content,Left,Right,Body,Title,Icon,Tab,Tabs} from "native-base";
import { View, Text,StyleSheet,style} from 'react-native'
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
export default class TabsScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#009387'}} hasTabs>
            <Left/>
          <Body>
            <Text style={{color:'white'}}>News App</Text>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}