import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploading");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-row items-start justify-start py-0 pr-[30px] pl-0 box-border gap-[30px] tracking-[normal] mq450:gap-[15px] mq1050:pl-[30px] mq1050:box-border">
      <div className="h-[32.9px] w-[197.6px] relative hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-light-gohan hidden" />
      </div>
      <div className="w-[218px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border mq1050:hidden">
        <div className="self-stretch h-[1025px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
          <nav className="m-0 self-stretch bg-light-gohan flex flex-col items-start justify-start pt-[51px] px-0 pb-[480px] gap-[39px] text-left text-base text-text font-nunito mq1050:pt-[33px] mq1050:pb-[312px] mq1050:box-border mq750:pt-[21px] mq750:pb-[203px] mq750:box-border">
            <div className="self-stretch relative bg-light-gohan h-[1047px] hidden" />
            <div className="self-stretch h-[53px] flex flex-row items-start justify-start py-0 pr-[55px] pl-14 box-border text-5xl">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <div className="h-[42px] w-[42px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full hidden z-[1]"
                    alt=""
                    src="/subtract.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                    loading="eager"
                    alt=""
                    src="/subtract.svg"
                  />
                </div>
                <h3 className="m-0 h-[33px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq750:text-lgi">
                  Base
                </h3>
              </div>
            </div>
            <div className="w-[146px] flex flex-col items-end justify-start gap-[24px] text-darkgray-100">
              <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[14px]">
                <img
                  className="h-6 w-6 relative object-cover min-h-[24px] z-[1]"
                  loading="eager"
                  alt=""
                  src="/iconlyboldcategory@2x.png"
                />
                <div className="h-[22px] relative font-semibold inline-block z-[1]">
                  Dashboard
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[27px] pl-0 text-mediumslateblue-200">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-12 flex-1 relative">
                    <img
                      className="absolute top-[13px] left-[33px] w-5 h-[22px] object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/chart1@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none [background:linear-gradient(90deg,_#aca9ff,_rgba(172,_169,_255,_0))] w-full h-full opacity-[0.2] z-[2]" />
                  </div>
                  <div className="relative font-semibold z-[1]">Upload</div>
                </div>
              </div>
            </div>
            <div className="h-6 flex flex-row items-start justify-start py-0 px-[31px] box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <img
                    className="w-6 h-[16.4px] relative object-cover z-[1]"
                    loading="eager"
                    alt=""
                    src="/iconlyboldticket@2x.png"
                  />
                </div>
                <div className="relative font-semibold inline-block h-[13px] opacity-[0.5] z-[1]">
                  Invoice
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[31px]">
              <div className="flex flex-row items-center justify-start gap-[14px]">
                <img
                  className="h-[26.4px] w-6 relative object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/iconlybolddocument@2x.png"
                />
                <div className="h-[22px] relative font-semibold inline-block opacity-[0.5] z-[1]">
                  Schedule
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[31px]">
              <div className="flex flex-row items-center justify-start gap-[14px]">
                <img
                  className="h-[26.4px] w-6 relative object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/calendar@2x.png"
                />
                <div className="h-[22px] relative font-semibold inline-block opacity-[0.5] z-[1]">
                  Calendar
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[31px]">
              <div className="flex flex-row items-center justify-start gap-[14px]">
                <img
                  className="h-[26.4px] w-6 relative object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/iconlyboldnotification@2x.png"
                />
                <div className="h-[22px] relative font-semibold inline-block opacity-[0.5] z-[1]">
                  Notification
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[31px]">
              <div className="flex flex-row items-center justify-start gap-[14px]">
                <img
                  className="h-[26.4px] w-6 relative object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/iconlyboldsetting@2x.png"
                />
                <div className="relative font-semibold opacity-[0.5] z-[1]">
                  Settings
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <section className="flex-1 flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border max-w-[calc(100%_-_248px)] text-left text-5xl text-black font-paragraph-ui-type-text-2xl-s mq450:pt-8 mq450:box-border mq1050:max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[137px] max-w-full mq450:gap-[34px] mq750:gap-[17px]">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[34px] max-w-full mq450:gap-[17px]">
            <div className="flex-1 flex flex-col items-start justify-center min-w-[684px] max-w-full z-[1] mq450:min-w-full">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq750:text-lgi mq750:leading-[26px]">
                    Upload CSV
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[28px]">
              <img
                className="h-[23px] w-[18px] relative"
                loading="eager"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="h-[30px] w-[30px] relative object-cover"
                loading="eager"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
          </div>
          <div className="w-[622px] flex flex-row items-start justify-start py-0 pr-[26px] pl-0 box-border max-w-full text-center text-base text-light-trunks">
            <div className="flex-1 rounded-lg bg-light-gohan flex flex-col items-center justify-start p-4 box-border gap-[21px] max-w-full">
              <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-start pt-[98px] pb-[84px] pr-5 pl-[21px] gap-[16px] max-w-full z-[1] border-[1px] border-dashed border-light-beerus-hover">
                <img
                  className="w-9 h-9 relative"
                  loading="eager"
                  alt=""
                  src="/frame-76821.svg"
                />
                <div className="relative leading-[24px]">
                  <span>{`Drop your excel sheet here or `}</span>
                  <span className="text-mediumslateblue-200">browse</span>
                </div>
                <div className="w-[564px] h-[258px] relative rounded-lg box-border hidden max-w-full border-[1px] border-dashed border-light-beerus-hover" />
                <div className="w-[464px] hidden max-w-full" />
              </div>
              <button
                className="cursor-pointer [border:none] py-4 px-5 bg-mediumslateblue-200 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center gap-[8px] hover:bg-mediumslateblue-100"
                onClick={onSizemdIconLeftTypePrimaClick}
              >
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/icon.svg"
                />
                <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-left">
                  Upload
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upload;
