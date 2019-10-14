import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
class FlatListItem extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, borderColor: 'white', borderWidth: 1, borderRadius: 4 }}>
                <Image style={{ flex: 1 }} source={{ uri: 'http://tittee.000webhostapp.com/' + this.props.item.anh }} style={{ width: Dimensions.get("window").width / 1.96, height: Dimensions.get("window").height / 2 }} />
                <Text style={{ flex: 1, color: 'red', textAlign: 'center', padding: 2 }}>{this.props.item.ten}</Text>
            </View>
        );
    }
}

export default class VayScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        this.getData(2);
    }
    async getData(params) {
        const url = 'http://tittee.000webhostapp.com/tee/get.php?id=' + params;
        let res = await fetch(url);
        let resJson = await res.json();
        this.setState({
            data: resJson.data,
        })
    }
    render() {
        return (
            <FlatList numColumns={2} style={{ flex: 1, flexDirection: 'column' }} data={this.state.data} renderItem={({ item, index }) => {
                return (<TouchableOpacity onPress={() => this.props.navigation.navigate("Details", {
                    item: item,
                })}><FlatListItem item={item} index={index} /></TouchableOpacity>)
            }} />
        );
    }
}