import { useNavigate } from "react-router"
import LayoutView from "./layout.view"
import { useEffect } from "react";

const LayoutPage = () => {
  /**
   * 
   * state
   * 
   * **/
  const navigate = useNavigate();

  /**
   * 
   * hooks
   * 
   * **/
  useEffect(() => {
    // push something
  }, [])

  return <LayoutView />
}

export default LayoutPage