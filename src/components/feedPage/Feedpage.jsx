import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import Header from "../common/Header";
import UserProfile from "../userProfile/UserProfile";
import Account from "../account/Account";
import Weddings from "../weddings/Weddings";
import Help from "../help/Help";
import Portfolio from "../portfolio/Portfolio";
import Request from "../request/Request";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Feedpage = () => {
  const [handleMenuBar, setHandleMenuBar] = useState(false);
  const [setselectedTab, setSetselectedTab] = useState("portfolio");
  const router = useRouter();
  
  

  const handleTab = (tab) => {
    setSetselectedTab(tab);
  };
  const handleMenuopen = () => {
    setHandleMenuBar(true);
  };
  const handleMenuClose = () => {
    setHandleMenuBar(false);
  };

  useEffect(() => {

    setHandleMenuBar(window.innerWidth > 680);

    const handleResize = () => {
      setHandleMenuBar(window.innerWidth > 680);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data: session, status } = useSession({
    required:true,
    onUnauthenticated() {
      router.push('/dashboard/login');
    }
  });

  if (status !== 'authenticated') return null;

  return (
    <>
      <div className="flex  h-full w-full relative ">
        {handleMenuBar && (
          <div className=" h-full sm:h-screen top-0 left-0   sm:static absolute z-10  w-[242px] ">
            <MenuBar
              handleTab={handleTab}
              handleMenuopen={handleMenuopen}
              handleMenuClose={handleMenuClose}
            />
          </div>
        )}

        <div className="flex flex-col w-full">
          <div className="w-full">
            <Header
              showlogo={handleMenuBar ? false : true}
              showUser={true}
              handleMenuopen={handleMenuopen}
            />
          </div>
          {setselectedTab === "portfolio" ? (
            <Portfolio />
          ) : setselectedTab === "userProfile" ? (
            <UserProfile />
          ) : setselectedTab === "account" ? (
            <Account />
          ) : setselectedTab === "weddings" ? (
            <Weddings />
          ) : setselectedTab === "request" ? (
            <Request />
          ) : setselectedTab === "help" ? (
            <Help />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Feedpage;
