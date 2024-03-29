import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  box: {
    height: '40px',
    backgroundColor: '#222',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextColor: {
    color: '#b2b2b2',
  },
  border: {
    paddingRight: '15px',
    paddingLeft: '15px',
    borderLeft: '1px solid rgba(255,255,255,0.3)',
  },
  aloneBorder: {
    borderRight: '1px solid rgba(255,255,255,0.3)',
  },
}))

const TopBar = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Container className={classes.flex}>
        <Grid className={classes.TextColor}>
          Free shipping for standard order over $100
        </Grid>
        <Grid className={classes.flexGrid}>
          <Grid className={classes.border}>
            <Button className={classes.TextColor} href="#">
              Help & FAQs
            </Button>
          </Grid>
          <Grid className={classes.border}>
            <Button className={classes.TextColor} href="#">
              My Account
            </Button>
          </Grid>
          <Grid className={classes.border}>
            <Button className={classes.TextColor} href="#">
              EN
            </Button>
          </Grid>
          <Grid className={clsx(classes.border, classes.aloneBorder)}>
            <Button className={classes.TextColor} href="#">
              USD
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TopBar
