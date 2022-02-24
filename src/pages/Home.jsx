import { Banner } from '../components';
import { Box, Center, Heading } from '@chakra-ui/react';
import goc from '../images/goc.png'

export default function Home() {
  return <div>
    <Banner />

    <Box mt={6} mb={6}>
      <Center>'
        <Heading>
          GANET ORGANIZATIONAL CHART
        </Heading>

        <img src={goc} />
      </Center>
    </Box>

  </div>;
}
