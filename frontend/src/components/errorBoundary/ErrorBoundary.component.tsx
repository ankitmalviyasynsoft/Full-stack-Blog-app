import { Component, ErrorInfo } from "react"
import { Box, Container, Typography, Button } from "@mui/material"
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.interface";



export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: props.isError || false }
  }

  static getDerivedStateFromError(_: Error): Partial<ErrorBoundaryState> {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box component='section' textAlign='center' my={10}>
          <style global jsx>{`
            main{
              display:flex;
              justify-content:center;
              align-items:center;
            }
          `}</style>

          <Container>
            <Typography variant='subtitle'>Sorry! Something went wrong</Typography>
            <Button variant='contained' size='small' onClick={() => window.location.reload()} sx={{ mt: 2, px: 5 }}>Try again</Button>
          </Container>
        </Box>
      )
    }

    return this.props.children
  }
}
