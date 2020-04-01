import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { Alert, View, ActivityIndicator, Text } from 'react-native'
import { getArticles } from '../../services/news'
import  DataItem  from '../../component/dataItem'
import Modal from '../../component/model'


export default class ListThumbnailExample extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState ({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getArticles().then(data=> {
      this.setState({
        isLoading: false,
        data: data
      });
    }, errror => {
      Alert.alert('Error','Something went wrong!');
    })
  }

  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating= {this.state.isLoading} color = '#00f0ff'/>
        <Text style= {{marginTop: 10}}>Please wait!!</Text>
      </View>
    ): (
      <List
           dataArray = {this.state.data}
           renderRow={(item)=> {
             return(
                <DataItem onPress = {this.handleItemDataOnPress} data = {item} />
             )
           }}
          />
    )
    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal
          showModal = {this.state.setModalVisible}
          articleData = {this.state.modalArticleData}
          onClose = {this.handleModalClose}
        > 
        </Modal>
      </Container>
    );
  }
}