import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { checkUser } from "../utils/checkUser";
import getUserImg from "../utils/getUserImg";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("jake whittaker");
  const [username, setUsername] = useState("daydream22");
  const [newUser, setNewUser] = useState(null);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (newUser && checkUser(newUser)) {
      getUserImg(newUser.username).then((userImg) => {
        setUser({
          name: newUser.name,
          username: newUser.username,
          avatar_url: userImg,
        });
      });
      navigate("/");
    }
  }, [newUser]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNewUser({ name, username });
    setName("");
    setUsername("");
  };

  return (
    <Box display="flex" justifyContent="center" mt="20%">
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={3}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit" m="auto" colorScheme="teal">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
