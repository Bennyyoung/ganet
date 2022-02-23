import { Heading, Text, Center, Box, Divider } from "@chakra-ui/react";

export default function About() {
 return <div>
  <Text fontSize='3xl' mt={2} color='purple'>
   <Divider />
   <Center style={{ fontWeight: '500' }}>
    ABOUT GANET
   </Center>
  </Text>

  <Box pb={3}>
   <Text>
    Gender Advocacy Network (GANET) started in 2012 by a group of activists who saw the need for women to play  a more proactive role in promioting gender justice in the Niger Delta
   </Text>
  </Box>

  <Box pb={3}>
   <Text>
    GANET has a clear interest in working together with women groups to bring a gender perspective and policy change to National and Regional processes
   </Text>
  </Box>

  <Box pb={3}>
   <Text>
    GANET seeks to achieve gender eqaulity and equity and draw attention to violations of women's rights.
   </Text>
  </Box>


  <Box pb={3}>
   <Text>
    Through its programming, it aims to create space for debates, platform, discussions, dialogue, information sharing and dissemination within the Niger Delta Women's Rights Movement and create public awareness about Women's Human Rights Advocacy.
   </Text>
  </Box>
  <Box pb={3}>
   <Text>
    GANET seeks to address gaps identified in the lack of collective approach to addressing women's human rights issues. There is need for response to critical issues confronting women in the Niger Delta region and GANET seeks to provide that platform that can effectively support the work of the national machinery on women issues.
   </Text>
  </Box>
  <Box pb={3}>
   <Text>
    GANET also works at improving women's access to justice, champoining women's rights protection and engaging men as male champions for women's rights.
   </Text>
  </Box>

  <Box pb={3}>
   <Center>
    <Text color='red' style={{ fontWeight: '500' }}>
     VISION
    </Text>
   </Center>
  </Box>

  <Box pb={3}>
   <Text>
    A just and fair socierty where women are fully empowered to participate and benefit from decision making processes.
   </Text>
  </Box>

  <Box pb={3}>
   <Center>
    <Text color='purple' style={{ fontWeight: '500' }}>
     MISSION
    </Text>
   </Center>
  </Box>

  <Box pb={3}>
   <Text>
    To build partnerships and collaborations that can effectively champion women's Right and development
   </Text>
  </Box>

  <Box pb={3}>
   <Center>
    <Text color='purple' style={{ fontWeight: '500' }}>
     OBJECTIVES/GOALS
    </Text>
   </Center>
  </Box>

  <Box pb={3}>
   <Text>
    <ol>
     <li>
      To build a stong coalition and network of women's rights groups committed to campaigning for women's rights
     </li>

     <li>
      Provide a forum for imformation sharing, women's learning, networking and exprerience sharing.
     </li>
     <li>
      To strengthen and support CSO presence and participation in the women's rights discourse.
     </li>
     <li>
      Advocate for gender equality in Government laws, policies and programmes.
     </li>
     <li>
      Identify and implement strategies for grassroots mobilixation to help change beliefs and behaviours that perpetuate gender violence.
     </li>
     <li>
      Build synergies for a collective voice on gender equity and women's empowerment.
     </li>
    </ol>
   </Text>

  </Box>

  <Box pb={3}>
   <Text style={{ fontWeight: '500' }}>
    VALUES:
   </Text>
   <ol>
    <li>
     Sisterhood
    </li>
    <li>
     Respect for Human Rights
    </li>
    <li>
     Respect for Diversity
    </li>
   </ol>
  </Box>

 </div>;
}
