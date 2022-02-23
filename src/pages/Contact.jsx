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
  GridItem

} from '@chakra-ui/react'

export default function Contact() {
  return <div>
    <Text fontSize='3xl' mt={2} color='purple'>
      <Divider />
      <Center style={{ fontWeight: '500' }}>
        CONTACT US
      </Center>
    </Text>

    <Grid templateColumns='repeat(5, 1fr)' gap={1}>
      <GridItem colSpan={3}>
      <Text fontSize='3xl' mt={2} color='purple'>
      <Divider />
      <Center style={{ fontWeight: '500' }}>
        GET IN TOUCH
      </Center>
    </Text>
        <Box m={6}>
          <Text mb={3}>GENDER ADVOCACY NETWORK (GANET)</Text>

          <Text mb={3}><span style={{ fontWeight: '500' }}>Phone number: </span> 07065495376</Text>
          <Text mb={3}><span style={{ fontWeight: '500' }}>Email: </span> genderadvocacy13@gmail.com</Text>
          <Text mb={3}><span style={{ fontWeight: '500' }}>Address: </span> Plot 13A Location Road Orazi - G.R.A Link Road, PH</Text>

        </Box>
      </GridItem>
      <GridItem colStart={4} colEnd={6}>

        <Box m={6}>

          <FormControl>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input id='name' type='name' />

            <FormLabel htmlFor='number'>Phone Number</FormLabel>
            <Input id='number' type='number' />


            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>

            <FormLabel htmlFor='name'>Address</FormLabel>
            <Textarea placeholder='Address' />

            <FormLabel htmlFor='name'>Comments</FormLabel>
            <Textarea placeholder='Comments' />
          </FormControl>

        </Box>
      </GridItem>
    </Grid>

  </div>;
}
