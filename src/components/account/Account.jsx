import React, { useRef, useState } from "react";

const Account = () => {
  function copyCodeToClipboard() {
    const codeElement = document.getElementById("code");
    const textToCopy = codeElement.textContent;
  }
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopyClick = () => {
    codeRef.current.select();
    document.execCommand('copy');
    setIsCopied(true);
  };
  return (
    <>
      <div className="flex flex-col p-6 sm:ml-40 gap-5">
        {/* 1st div */}
        <div>
          <p className="text-[#616161] text-xl font-semibold font-lato">
            Account Status and Payment Info
          </p>
          <p className="text-[#A1ADAE] mt-2 font-lato">
            Manage your subscriptions, referrals and account status
          </p>
        </div>
        {/* 2nd div */}
        <div className="mt-2">
          <p className="text-[#3A3A3B] font-lato">Subscription status</p>
          <div className="flex flex-row gap-2">
            <p className="text-[#A1ADAE] font-lato">Free </p>
            <p className="text-[#A1ADAE] border-b w-36 font-lato cursor-pointer">
              Manage Subcription
            </p>
          </div>
        </div>
        {/* 3rd div */}
        <div>
          <span className="text-[#3A3A3B] font-lato">Referral Code</span>
          <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2">
            <input
              ref={codeRef}
              type="text"
              className="text-[#A1ADAE] font-lato border-none focus:!border-none w-60"
              value="xkj1234sdfa678911a5sagk135"
              readOnly
            />
            <button
              className="text-[#A1ADAE] border-b font-lato cursor-pointer"
              onClick={handleCopyClick}
              disabled={isCopied}
            >
              {isCopied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>
        {/* 4th div */}
        <div>
          <p className="text-[#3A3A3B] font-lato">Account status</p>
          <div className="flex flex-row gap-2">
            <p className="text-[#A1ADAE] font-lato">Active </p>
            <p className="text-[#FF3B30] border-b border-[#FF3B30] font-lato cursor-pointer">
              Delete Account
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
