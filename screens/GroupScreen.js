import React, { Component, Fragment } from "react";
import { View } from "react-native";
import ActionBar from "../components/ActionBar";
import axios from "axios";
import { Card, CardItem, Body, Text } from "native-base";
import Icon from "react-native-vector-icons/dist/FontAwesome";

class GroupScreen extends Component {
  state = {
    description: "add description here",
  };

  componentDidMount() {
    const id = this.props.navigation.getParam("id", " ");
    console.log(id);
    axios
      .get("/groups/" + id)
      .then(res => {
        console.log(res.data);
        this.setState({ description: res.data.description });
      })
      .catch(err => console.log(err));
  }

  render() {
    const name = this.props.navigation.getParam("name", " ");

    return (
      <Fragment>
        <ActionBar navigation={this.props.navigation} name={name} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 5,
            marginTop: 10,
          }}
        >
          <Card style={{ width: "50%", height: 150 }}>
            <CardItem>
              <Body>
                <Text>Percentage</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{ width: "50%", height: 150 }}>
            <CardItem>
              <Body>
                <Text>Tasks</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Card style={{ width: "50%", height: 150 }}>
            <CardItem>
              <Body>
                <Text>Members</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{ width: "50%", height: 150 }}>
            <CardItem>
              <Body>
                <Text>Notes</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
        <View
          style={{
            paddingBottom: 190,
            margin: 5,
          }}
        >
          <View
          style={{
            display: "flex",
            flexDirection: "row"
          }}>
            <Icon name="sticky-note-o" size={25} />
            <Text style={{ marginLeft: 5 }}>About</Text>
          </View>
          <Text>{this.state.description}</Text>
        </View>
      </Fragment>
    );
  }
}

export default GroupScreen;
