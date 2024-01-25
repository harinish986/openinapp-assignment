import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-row items-center justify-start gap-[94px] tracking-[normal] text-left text-[72px] text-light-gohan font-montserrat lg:flex-wrap mq450:gap-[23px] mq750:gap-[47px]">
      <div className="h-[1024px] w-[1440px] relative bg-ghostwhite hidden max-w-full" />
      <div className="w-[723px] flex flex-col items-center justify-start pt-[462px] pb-[67px] pr-[152px] pl-5 box-border relative gap-[359px] min-w-[723px] max-w-full lg:flex-1 mq450:pt-[195px] mq450:pb-[29px] mq450:box-border mq1050:pt-[300px] mq1050:pb-11 mq1050:box-border mq1050:min-w-full mq750:gap-[179px] mq750:pr-[76px] mq750:box-border">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2.5">
          <h1 className="m-0 h-[88px] relative text-inherit font-bold font-inherit inline-block z-[2] mq450:text-[43px] mq1050:text-[58px]">
            BASE
          </h1>
        </div>
        <div className="w-[301px] flex flex-row items-center justify-between py-0 px-0 box-border gap-[20px] z-[2]">
          <img
            className="h-11 w-11 relative object-cover"
            loading="eager"
            alt=""
            src="/vector@2x.png"
          />
          <img
            className="h-[41px] w-[42px] relative object-cover"
            loading="eager"
            alt=""
            src="/vector-1@2x.png"
          />
          <div className="h-12 w-12 relative overflow-hidden shrink-0">
            <img
              className="absolute h-[74.58%] w-9/12 top-[12.5%] right-[12.5%] bottom-[12.92%] left-[12.5%] max-w-full overflow-hidden max-h-full"
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="h-12 w-[50px] relative overflow-hidden shrink-0">
            <img
              className="absolute h-[8.96%] w-[23.8%] top-[46.67%] right-[38.4%] bottom-[44.38%] left-[37.8%] max-w-full overflow-hidden max-h-full"
              loading="eager"
              alt=""
              src="/vector-3.svg"
            />
            <img
              className="absolute h-[81.25%] w-[71%] top-[12.5%] right-[14.6%] bottom-[6.25%] left-[14.4%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
        <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[3px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/left-side@2x.png"
          />
          <div className="absolute top-[54.3px] left-[61px] rounded-[50%] bg-gray-100 w-[80.2px] h-[80.2px] z-[2]" />
          <img
            className="absolute top-[83.7px] left-[59px] w-[82.8px] h-[22px] z-[3]"
            loading="eager"
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
      <img className="h-0 w-0 relative hidden" alt="" />
      <form className="m-0 w-[423px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[22px] min-w-[423px] max-w-full lg:flex-1 mq450:min-w-full">
        <div className="w-[196px] h-[81px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[6px]">
          <h1 className="m-0 w-[143.8px] h-[48.3px] relative text-[36px] font-bold font-montserrat text-black text-left inline-block shrink-0 z-[1] mq450:text-[22px] mq1050:text-[29px]">
            Sign In
          </h1>
          <div className="self-stretch relative text-base font-lato text-black text-left z-[1]">
            Sign in to your account
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[28px] min-h-[38px] mq450:flex-wrap">
          <button className="cursor-pointer [border:none] pt-[9px] pb-[7px] pr-[21px] pl-5 bg-[transparent] flex-1 flex flex-row items-start justify-start box-border relative gap-[12px] min-w-[129px]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[-1px] right-[0.2px] bottom-[2.1px] left-[0.2px] z-[1]">
              <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-light-gohan" />
            </div>
            <img
              className="h-[15.4px] w-[15.4px] relative overflow-hidden shrink-0 object-cover z-[2]"
              alt=""
              src="/googleicon-1@2x.png"
            />
            <div className="flex-1 relative text-xs font-montserrat text-secondary-text text-center z-[2]">
              Sign in with Google
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-[9px] pb-[7px] pr-[21px] pl-5 bg-[transparent] flex-1 flex flex-row items-start justify-start box-border relative gap-[12px] min-w-[129px]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[-1px] right-[0.2px] bottom-[2.1px] left-[0.2px] z-[1]">
              <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-light-gohan" />
            </div>
            <img
              className="h-[15.4px] w-[15.4px] relative overflow-hidden shrink-0 object-cover z-[2]"
              alt=""
              src="/apple-1@2x.png" 
            />
            <div className="flex-1 relative text-xs font-montserrat text-secondary-text text-center z-[2]">
              Sign in with Apple
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start p-[33px] box-border relative gap-[23px] max-w-full mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[-0.1px] right-[0.2px] bottom-[5.1px] left-[0.2px] z-[1]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[20px] bg-light-gohan" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative text-base font-lato text-black text-left z-[2]">
              Email address
            </div>
            <div className="self-stretch flex flex-row items-center justify-start max-w-full">
              <div className="h-[43.9px] w-[356.8px] relative max-w-full z-[2]">
                <div className="absolute h-full w-full top-[-1.03%] right-[-0.03%] bottom-[1.03%] left-[0.03%] rounded-3xs bg-background" />
              </div>
              <input
                className="w-[141px] [border:none] [outline:none] font-lato text-base bg-[transparent] h-5 relative text-black text-left inline-block whitespace-nowrap z-[3] ml-[-340px]"
                placeholder="johndoe@gmail.com"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative text-base font-lato text-black text-left z-[2]">
              Password
            </div>
            <div className="self-stretch rounded-3xs bg-field-color-darker flex flex-row items-end justify-start pt-[11px] px-4 pb-3 box-border gap-[12px] max-w-full z-[2]">
              <div className="h-[43.9px] w-[356.8px] relative rounded-3xs bg-field-color-darker hidden max-w-full" />
              <input
                className="w-[70px] [border:none] [outline:none] font-lato text-base bg-[transparent] h-5 relative text-black text-left inline-block z-[3]"
                placeholder="••••••••"
                type="text"
              />
              <div className="h-[20.8px] w-px relative box-border z-[3] border-r-[1px] border-solid border-darkgray-200" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
            <div className="w-[136.1px] relative text-base font-lato text-link text-left inline-block shrink-0 z-[2]">
              Forgot password?
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start max-w-full hover:bg-mediumslateblue-100">
            <div className="h-[43.9px] w-[356.8px] relative max-w-full z-[2]">
              <div
                className="absolute h-full w-full top-[-0.11%] right-[-0.03%] bottom-[0.11%] left-[0.03%] rounded-3xs bg-mediumslateblue-200 cursor-pointer"
                onClick={onButtonPrimaryClick}
              />
            </div>
            <b className="w-[111.9px] relative text-base inline-block font-montserrat text-light-gohan text-center shrink-0 whitespace-nowrap z-[3] ml-[-233px]">
              Sign In
            </b>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[68px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 relative text-base font-lato text-center z-[1]">
            <span className="text-secondary-text">{`Don't have an account? `}</span>
            <span className="text-link">Register here</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
