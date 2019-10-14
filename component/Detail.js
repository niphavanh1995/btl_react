import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity,Dimensions,ScrollView } from 'react-native';
import AddModal from "./addModal";
class DetailsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            item: this.props.navigation.getParam('item',[])
        }
        this.mua = this.mua.bind(this);
    }
    mua(){
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1,justifyContent:'center',alignContent:'center'}}>
                <View style={{flex: 2,flexDirection:'row'}}>
                    <Image style={{ flex: 1 }} source={{ uri: 'http://tittee.000webhostapp.com/' + this.state.item.anh }} style={{ width: Dimensions.get("window").width/2, height: Dimensions.get("window").height/2}} />
                    <View style={{ flex: 1}}>
                        <Text style={{ marginLeft: 5 }}>Tên: {this.state.item.ten}</Text>
                        <Text style={{ marginLeft: 5 }}>Mô tả: {this.state.item.mota}</Text>
                        <Text style={{ marginLeft: 5 }}>Giá: {this.state.item.gia} VNĐ</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:20}}>
                    <Text style={{ flex: 1 }}></Text>
                    <TouchableOpacity onPress={()=>{this.mua()}} style={{borderRadius: 4, backgroundColor: 'gray', flex:1 }}>
                        <Text style={{ flex: 1, textAlign: 'center',height:40,top:10 }}>Mua</Text>
                    </TouchableOpacity>
                    <Text style={{ flex: 1 }}></Text>
                </View>
                
                <AddModal ref={'addModal'} item={this.state.item}>

                </AddModal>
            </ScrollView>  
        );
    }
}
export default DetailsScreen;