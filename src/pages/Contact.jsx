import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Text,
  Divider,
  Center,
  Textarea,
  Grid,
  GridItem,
  Button

} from '@chakra-ui/react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [value, setValue] = useState();
  const [state, handleSubmit] = useForm("xgedkjak");
  if (state.succeeded) {
    return (
      <Box bg="purple" m={3} p={3}>
        <Box>
          Thank You For Your Submission
        </Box>
        <Button mt={4} colorScheme='purple'>
          <Link to="/" style={{ textDecoration: 'none' }}>Return Home</Link>
        </Button>
      </Box>
    )
  }
  return <div>
    <Text fontSize='3xl' mt={2} color='purple'>
      <Divider />
      <Center style={{ fontWeight: '500' }}>
        CONTACT US
      </Center>
    </Text>

    <Grid templateColumns='repeat(5, 1fr)' gap={9}>
      <GridItem colSpan={3}>

        <Box m={6}>
          <Text mb={3}>GENDER ADVOCACY NETWORK (GANET)</Text>
          <Text mb={3}><span style={{ fontWeight: '500' }}>Phone number: </span> 07065495376</Text>
          <Text mb={3}><span style={{ fontWeight: '500' }}>Email: </span> genderadvocacy13@gmail.com</Text>
          <Text mb={3}><span style={{ fontWeight: '500' }}>Address: </span> Plot 13A Location Road Orazi - G.R.A Link Road, PH</Text>

        </Box>
      </GridItem>
      <GridItem colStart={1} colEnd={6}>

        <Box m={6}>
          <Text fontSize='3xl' mt={2} color='purple'>
            <Center style={{ fontWeight: '500' }}>
              GET IN TOUCH
            </Center>
          </Text>

          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input id='name' type='text' name="Name" id="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <FormLabel htmlFor='number'>Phone Number</FormLabel>
              <PhoneInput
                international
                value={value}
                onChange={setValue}
                name="phone_number" />
              <ValidationError
                prefix="Phone Number"
                field="phone_number"
                errors={state.errors}
              />


              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input id='email' type='email' />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <FormLabel htmlFor='address'>Address</FormLabel>
              <Textarea placeholder='Address' name="address" />
              <ValidationError
                prefix="Address"
                field="address"
                errors={state.errors}
              />

              <FormLabel htmlFor='comments'>Comments</FormLabel>
              <Textarea placeholder='Comments' name="comments" />
              <ValidationError
                prefix="Comments"
                field="comment"
                errors={state.errors}
              />
              <Button mt={4} colorScheme='purple' type="submit" name="action">Submit</Button>
            </FormControl>

          </form>


        </Box>
      </GridItem>
    </Grid>

  </div>;
}
