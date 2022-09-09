import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, theme, VStack, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getCounter = setInterval(() => {
      setCounter(prev => (prev <= 360 ? prev + 1 : 0));
    }, 25);

    return () => {
      clearInterval(getCounter);
    };
  }, [counter]);

  return (
    <ChakraProvider theme={theme}>
      <body>
      <Box
        textAlign="center"
        maxH="100vh"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <ColorModeSwitcher />
        <VStack
          fontFamily="Public Sans"
          bgGradient={`linear(to-l, hsl(${270 + counter}, 67%, 47%), hsl(${
            330 + counter
          }, 100%, 50%))`}
          bgClip="text"
        >
          <Text fontSize={['5xl', '5xl', '9xl']}>
            {new Date().toLocaleTimeString()}
          </Text>
          <Text fontSize={['md', 'md', '2xl']}>
            {new Date().toLocaleDateString()}
          </Text>
        </VStack>
      </Box>
      </body>
    </ChakraProvider>
  );
}

export default App;
