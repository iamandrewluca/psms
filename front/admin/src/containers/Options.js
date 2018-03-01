import React from 'react'
import {connect} from "react-redux"
import {Button, Card, CardHeader, FormText, ListGroup, ListGroupItem} from "reactstrap"
import {updateProviders} from "../actions"

const Options = ({updateProviders}) => (
  <Card className="mt-3">
    <CardHeader>Options</CardHeader>
    <ListGroup>
      <ListGroupItem>
        <Button onClick={updateProviders}>Update Number Providers</Button>
        <FormText>Note: All current providers will be deleted. Providers are updated automatically once a day</FormText>
      </ListGroupItem>
    </ListGroup>
  </Card>
)

export default connect(null, {updateProviders})(Options)
