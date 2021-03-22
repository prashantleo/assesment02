import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text ,Title} from 'native-base';
import CameraPage from './Tabs/Camera.page'
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Videopicker from './Tabs/Videopicker'
import {StyleSheet} from 'react-native'
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs><Title style={styles.title}>Assesment</Title></Header>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <CameraPage/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="image" /><Text>Prediction</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  title: {
   textAlign:"center",
   marginTop:20,

  }
});