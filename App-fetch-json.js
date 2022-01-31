import React, {Component} from 'react';
import {Text, view, TouchableOpacity, FlatList, Image} from 'react-native';
class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: [],
        }
    }
    componentDidMount(){
        this.getData();
    }
 getData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => {
            this.setState({data: json});
            console.log(json);
        })
        .catch((error) => {
            console.error(error);
        });
 };

 render() {
    return (
        <view style={{flex :1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
              data={this.state.data}
              renderItem={({item, index}) => (
                  <view style={{margin:20}}>
                      <Text>albumId: {item.albumId}</Text>
                      <Text>id: {item.id}</Text>
                      <Text>title: {item.title}</Text>
                      <Image>url: {item.url}</Image>
                      <Image>thumbnailUrl: {item.thumbnailUrl}</Image>
                  </view>
                
              )}
              keyExtractor={(item) => item.id}
              />
             <TouchableOpacity onPress={() => this.getData()}>
                 <text>Refresh Data</text>
             </TouchableOpacity>
        </view>
    );
   }
}













}
