import React from 'react'
import {
  Box,
  Card as MuiCard,
  CardContent,
  Typography,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

const Card = () => (
  <MuiCard style={{ width: '300px' }}>
    <Box p={1} align="right">
      <EditIcon fontSize="small" />
    </Box>
    <CardContent>
      <Typography align="left" variant="body1" color="primary">
        Post title
      </Typography>
      <Typography align="left" variant="body2" color="textSecondary">
        User name
      </Typography>
    </CardContent>
  </MuiCard>
)

export default Card
