import React from 'react'
import {Box,Container,Heading,Image, Stack,Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions ={
      pos:"absolute",
      left:"50%", 
      top:"50%",
      transform:"translate(-50%,-50%)",
      textTransform:"upperCase",
      p:"4",
      size:"3xl"
}

const Home = () => {
  return <Box>
         <MyCarousel/>
         <Container minH={'100vh'} maxW={'container.xl'} padding={'16'}>
               <Heading textTransform={"uppercase"} py={'2'} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>
                   Services
               </Heading>

               <Stack  h={"full"} p={'4'} alignItems={'center'} direction={['column','row']}>
                       <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
                       <Text letterSpacing={"widset"} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis vero placeat, obcaecati sunt cum minus, odio voluptates quo aut deleniti, corporis harum. Reiciendis neque, itaque rem consequuntur fugit sit eum?
                           Perferendis necessitatibus consequatur illum vitae voluptate soluta ipsam ipsa, quod nisi saepe corrupti quaerat nemo esse inventore aspernatur molestias. Corrupti pariatur est saepe aperiam, ducimus ullam molestias ea ut quibusdam.
                           Iusto iure dolores error earum? Repellat est corporis sunt, cupiditate similique animi asperiores consectetur. Necessitatibus autem non perferendis, excepturi, hic ex, quisquam quia vel sint minus atque! Incidunt, ab obcaecati?
                           Voluptates, soluta temporibus! Voluptatibus aspernatur assumenda harum maiores cum reprehenderit vitae ipsam aut suscipit iusto aliquid reiciendis deleniti placeat at, ut sint, magnam doloribus impedit. Aut quam possimus nobis consectetur.
                           Aliquid, illo. Totam iure cupiditate voluptatibus rerum, qui iste earum eligendi? Nam voluptates facilis dolorum delectus optio quod distinctio omnis. Nulla vel inventore odit ipsum sunt! Explicabo q
                       </Text>
               </Stack>
         </Container>
    </Box>;
  
};

const MyCarousel = ()=>(
     
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
           
           <Box w="full" h={'100vh'}>
                <Image src={img1}/>
                <Heading color={'white'} bg={'blackAlpha.600'} {...headingOptions}>
                    Watch the Future
                </Heading>
           </Box>

           <Box w="full" h={'100vh'}>
                <Image src={img2}/>
                <Heading color={'white'} bg={'blackAlpha.900'} {...headingOptions}>
                    Future is gaming
                </Heading>
           </Box>

           <Box w="full" h={'100vh'}>
                <Image src={img3}/>
                <Heading color={'white'} bg={'blackAlpha.600'} {...headingOptions}>
                    Gaming on console
                </Heading>
           </Box>

           <Box w="full" h={'100vh'}>
                <Image src={img4}/>
                <Heading color={'white'} bg={'blackAlpha.600'} {...headingOptions}>
                    night life is cool
                </Heading>
           </Box>
          
    </Carousel>

)

export default Home