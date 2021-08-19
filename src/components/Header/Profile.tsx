import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leandro Guaraldi</Text>
          <Text color="gray.300" fontSize="small">teste@teste.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Leandro Guaraldi" src="https://github.com/leeandro319.png" />
    </Flex>
  )
}