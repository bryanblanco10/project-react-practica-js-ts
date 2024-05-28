import { People } from "@/data";
import { addPeople } from "@/redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PeopleTable } from "./components";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addPeople(People))
  }, [])

  
  return (
    <>
      <PeopleTable />
    </>
  );
};

export default Home;
