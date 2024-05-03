import React, { useState } from "react";
import { Container, VStack, Heading, Text, Input, Button, Textarea, useToast } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [article, setArticle] = useState("");
  const toast = useToast();

  const handleGenerateArticle = () => {
    // Aquí se simula la generación de un artículo
    // En un caso real, se conectaría con un backend que utiliza un modelo de IA
    setArticle(`Este es un artículo generado sobre ${keywords}.`);
    toast({
      title: "Artículo generado",
      description: "El artículo ha sido generado exitosamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Generador de Artículos de Investigación
        </Heading>
        <Text>Ingrese los detalles para generar un nuevo artículo de investigación en ciencias sociales.</Text>

        <Input placeholder="Título del artículo" value={title} onChange={(e) => setTitle(e.target.value)} />

        <Input placeholder="Palabras clave (separadas por comas)" value={keywords} onChange={(e) => setKeywords(e.target.value)} />

        <Button leftIcon={<FaRobot />} colorScheme="teal" onClick={handleGenerateArticle}>
          Generar Artículo
        </Button>

        <Textarea placeholder="Aquí aparecerá el artículo generado..." value={article} readOnly height="200px" />
      </VStack>
    </Container>
  );
};

export default Index;
