// @flow

import React from 'react'
import Relay from 'react-relay'

import { Card, CardHeader, CardText } from 'material-ui/Card'
import ResponsiveContentArea from '../../../../webapp/components/ResponsiveContentArea'

class MUI_Home extends React.Component {
  render() {
    return (
      <ResponsiveContentArea>
        <Card>
          <CardHeader title="Icons" subtitle="How to generate all icons" />
          <CardText>
            If all icons need to be generated, then comment out the line
            <pre>
              if( key > 50 ) return;
            </pre>
            in units/urb-example-mui/scripts/build-mui-icon-list.js and run
            <pre>
              npm run build-mui-icon-list
            </pre>
          </CardText>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default Relay.createContainer(MUI_Home, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
})
