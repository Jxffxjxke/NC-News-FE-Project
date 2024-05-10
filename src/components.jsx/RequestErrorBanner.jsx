import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";

const RequestErrorBanner = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>An error occured</AlertTitle>
      <AlertDescription>
        Sorry, this request could not be completed.
      </AlertDescription>
    </Alert>
  );
}

export default RequestErrorBanner