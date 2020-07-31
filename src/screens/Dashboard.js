import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'

const data = [
    {
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9415346313"
    },
    {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9415346314"
    },
    {
        "id": 3,
        "name": "test3",

        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9415346315"
    },
    {
        "id": 4,
        "name": "test4",
        "age": "14",
        "gender": "male",
        "email": "test4@gmail.com",
        "phoneNo": "9415346316"
    },
    {
        "id": 5,
        "name": "test5",
        "age": "15",
        "gender": "male",
        "email": "test5@gmail.com",
        "phoneNo": "9415346317"
    },
    {
        "id": 6,
        "name": "test6",
        "age": "16",
        "gender": "male",
        "email": "test6@gmail.com",
        "phoneNo": "9415346318"
    }
]


class Dashboard extends Component {


    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 3,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };


    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, borderColor: '#000', borderWidth: 1, padding: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}><Text>Name: </Text>{item.name}</Text>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}><Text>Age: </Text>{item.age}</Text>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}><Text>Gender: </Text>{item.gender}</Text>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}><Text>Email: </Text>{item.email}</Text>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}><Text>PhoneNo: </Text>{item.phoneNo}</Text>

            </View>
        )
    }

    render() {
        const { employee } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.text}>LIST OF EMPLOYEES</Text>
                <FlatList
                    data={employee}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'employee')
    return {
        employee: state.employee
    }
}

export default connect(mapStateToProps)(Dashboard)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text: {
        padding: 20,
        fontSize: 22,
        fontWeight: 'bold'
    }
})
