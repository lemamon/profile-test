import { useEffect, useState } from "react";
import { Data } from "./../types";

const URL = "https://62b5a98f42c6473c4b376da3.mockapi.io/user";

const useUser = () => {
  const [profile, setProfile] = useState<Data>({
    name: "",
    jobTitle: "",
    favoriteFood: "",
    avatar: "",
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const data: any = await response.json(); //chnage to type
      setProfile(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { profile, loading };
};

export default useUser;
