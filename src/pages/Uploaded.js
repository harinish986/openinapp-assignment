import { useState, useCallback } from "react";
import Popover from "../components/Popover";
import PortalPopup from "../components/PortalPopup";

const Uploaded = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isPopover1Open, setPopover1Open] = useState(false);
  const [isPopover2Open, setPopover2Open] = useState(false);
  const [isPopover3Open, setPopover3Open] = useState(false);
  const [isPopover4Open, setPopover4Open] = useState(false);

  const openPopover = useCallback(() => {
    setPopoverOpen(true);
  }, []);

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
  }, []);

  const openPopover1 = useCallback(() => {
    setPopover1Open(true);
  }, []);

  const closePopover1 = useCallback(() => {
    setPopover1Open(false);
  }, []);

  const openPopover2 = useCallback(() => {
    setPopover2Open(true);
  }, []);

  const closePopover2 = useCallback(() => {
    setPopover2Open(false);
  }, []);

  const openPopover3 = useCallback(() => {
    setPopover3Open(true);
  }, []);

  const closePopover3 = useCallback(() => {
    setPopover3Open(false);
  }, []);

  const openPopover4 = useCallback(() => {
    setPopover4Open(true);
  }, []);

  const closePopover4 = useCallback(() => {
    setPopover4Open(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-0 pb-[199px] pr-[30px] pl-0 box-border gap-[30px] tracking-[normal] mq450:gap-[15px] mq1050:pl-[30px] mq1050:box-border">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0 shrink-0 mq1050:hidden">
          <nav className="m-0 bg-light-gohan flex flex-col items-start justify-start pt-[51px] px-0 pb-[480px] gap-[39px] text-left text-base text-text font-nunito mq450:pt-[21px] mq450:pb-[203px] mq450:box-border mq1050:pt-[33px] mq1050:pb-[312px] mq1050:box-border">
            <div className="self-stretch relative bg-light-gohan h-[1047px] hidden" />
            <div className="h-[53px] flex flex-row items-start justify-start py-0 pr-[55px] pl-14 box-border text-5xl">
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
                <h2 className="m-0 h-[33px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq750:text-lgi">
                  Base
                </h2>
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
                      src="/chart@2x.png"
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
        <main className="flex-1 flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border max-w-[calc(100%_-_248px)] shrink-0 lg:pt-8 lg:box-border mq450:pt-[21px] mq450:box-border mq1050:max-w-full">
          <section className="self-stretch flex flex-col items-center justify-start gap-[104px] max-w-full text-left text-5xl text-black font-paragraph-ui-type-text-2xl-s lg:gap-[52px] mq450:gap-[26px]">
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[34px] min-h-[65px] max-w-full mq450:gap-[17px]">
              <div className="flex-1 flex flex-col items-start justify-center min-w-[684px] max-w-full mq450:min-w-full">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq750:text-lgi mq750:leading-[26px]">
                      Upload CSV
                    </h2>
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
                    src="/frame-7682.svg"
                  />
                  <div className="relative leading-[24px]">
                    <span>{`Drop your excel sheet here or `}</span>
                    <span className="text-mediumslateblue-200">browse</span>
                  </div>
                  <div className="w-[564px] h-[258px] relative rounded-lg box-border hidden max-w-full border-[1px] border-dashed border-light-beerus-hover" />
                  <div className="w-[464px] hidden max-w-full" />
                </div>
                <button className="cursor-pointer [border:none] py-4 px-5 bg-mediumslateblue-200 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center gap-[8px] opacity-[0.4] hover:bg-mediumslateblue-100">
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
            <div className="w-[1076px] flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-h-[521px] max-w-full mq450:gap-[23px]">
                <h2 className="m-0 w-[133px] relative text-inherit leading-[32px] font-semibold font-inherit flex items-center mq750:text-lgi mq750:leading-[26px]">
                  Uploads
                </h2>
                <form className="m-0 self-stretch h-[443px] rounded-lg bg-background flex flex-col items-center justify-start pt-3.5 pb-0 pr-[15px] pl-4 box-border gap-[13px] max-w-full mq450:h-auto">
                  <div className="h-[18px] rounded-md overflow-hidden shrink-0 hidden flex-row items-center justify-start py-[3px] pr-1.5 pl-[3px] box-border">
                    <img className="h-[9px] w-[9px] relative" alt="" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full shrink-0">
                    <div className="w-[808px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                      <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                        Sl No.
                      </div>
                      <div className="w-[145px] flex flex-col items-start justify-start">
                        <div className="w-[43px] relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                          Links
                        </div>
                      </div>
                      <div className="w-[110px] flex flex-col items-start justify-start">
                        <div className="w-[47px] relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                          Prefix
                        </div>
                      </div>
                      <div className="w-[137px] flex flex-col items-start justify-start">
                        <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          Add Tags
                        </div>
                      </div>
                      <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                        Selected Tags
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border min-h-[85px] max-w-full shrink-0">
                    <div className="flex-1 rounded-lg bg-light-gohan flex flex-row flex-wrap items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px] max-w-full mq450:gap-[18px] mq1050:gap-[35px]">
                      <div className="h-6 w-6 relative hidden">
                        <div className="absolute h-[66.67%] w-[66.67%] top-[83.33%] right-[16.67%] bottom-[-50%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-between min-w-[421px] gap-[20px] max-w-full mq450:flex-wrap mq450:min-w-full">
                        <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                          01
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                          <a
                            className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                            href="https://www.google.com"
                            target="_blank"
                          >
                            www.google.com
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            prefixsample
                          </div>
                        </div>
                        <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Select Tags
                          </div>
                          <div
                            className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1 cursor-pointer"
                            onClick={openPopover}
                          >
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/controls.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row flex-wrap items-start justify-start gap-[8px]">
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 1
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 2
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 3
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 4
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img className="h-4 w-4 relative" alt="" />
                        </div>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img className="h-4 w-4 relative" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[54px] box-border max-w-full shrink-0">
                    <div className="flex-1 rounded-lg bg-light-gohan flex flex-row flex-wrap items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px] max-w-full mq450:gap-[18px] mq1050:gap-[35px]">
                      <div className="h-6 w-6 relative hidden">
                        <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-between min-w-[421px] gap-[20px] max-w-full mq450:flex-wrap mq450:min-w-full">
                        <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                          02
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                          <a
                            className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                            href="https://www.google.com"
                            target="_blank"
                          >
                            www.google.com
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            prefixsample
                          </div>
                        </div>
                        <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Select Tags
                          </div>
                          <div
                            className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1 cursor-pointer"
                            onClick={openPopover1}
                          >
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/controls.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-[270px] flex flex-row flex-wrap items-start justify-start gap-[8px]">
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 1
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 2
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img className="h-4 w-4 relative" alt="" />
                        </div>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img className="h-4 w-4 relative" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[294px] flex flex-row items-start justify-end shrink-0">
                    <div className="w-[150px] flex flex-col items-center justify-center relative">
                      <div className="w-[1034px] my-0 mx-[!important] absolute top-[-51px] left-[-514px] rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px]">
                        <div className="h-6 w-6 relative hidden">
                          <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
                          <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                            03
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                            <a
                              className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                              href="https://www.google.com"
                              target="_blank"
                            >
                              www.google.com
                            </a>
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                            <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                              prefixsample
                            </div>
                          </div>
                          <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                            <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                              Select Tags
                            </div>
                            <div
                              className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1 cursor-pointer"
                              onClick={openPopover2}
                            >
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/controls.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row flex-wrap items-start justify-start gap-[8px]">
                          <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              TAG 1
                            </div>
                            <img
                              className="h-4 w-4 relative min-h-[16px]"
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              TAG 2
                            </div>
                            <img
                              className="h-4 w-4 relative min-h-[16px]"
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              TAG 3
                            </div>
                            <img
                              className="h-4 w-4 relative min-h-[16px]"
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              TAG 4
                            </div>
                            <img
                              className="h-4 w-4 relative min-h-[16px]"
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              your label
                            </div>
                            <img className="h-4 w-4 relative" alt="" />
                          </div>
                          <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              your label
                            </div>
                            <img className="h-4 w-4 relative" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="w-[1034px] my-0 mx-[!important] absolute top-[23px] left-[-514px] rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px]">
                        <div className="h-6 w-6 relative hidden">
                          <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
                          <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                            04
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                            <a
                              className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                              href="https://www.google.com"
                              target="_blank"
                            >
                              www.google.com
                            </a>
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                            <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                              prefixsample
                            </div>
                          </div>
                          <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                            <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                              Select Tags
                            </div>
                            <input
                              className="m-0 h-6 w-6 rounded-lg overflow-hidden shrink-0 cursor-pointer"
                              type="checkbox"
                              onClick={openPopover3}
                            />
                          </div>
                        </div>
                        <div className="w-[270px] flex flex-row flex-wrap items-center justify-start gap-[8px]">
                          <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              TAG 1
                            </div>
                            <img
                              className="h-4 w-4 relative min-h-[16px]"
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              your label
                            </div>
                            <img className="h-4 w-4 relative" alt="" />
                          </div>
                          <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              your label
                            </div>
                            <img className="h-4 w-4 relative" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="w-[1034px] my-0 mx-[!important] absolute bottom-[50px] left-[-514px] rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px]">
                        <div className="h-6 w-6 relative hidden">
                          <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
                          <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                            05
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                            <a
                              className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                              href="https://www.google.com"
                              target="_blank"
                            >
                              www.google.com
                            </a>
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                            <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                              prefixsample
                            </div>
                          </div>
                          <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                            <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                              Select Tags
                            </div>
                            <div
                              className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1 cursor-pointer"
                              onClick={openPopover4}
                            >
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/controls.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[270px] flex flex-row flex-wrap items-start justify-start gap-[8px]">
                          <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              TAG 1
                            </div>
                            <img
                              className="h-4 w-4 relative min-h-[16px]"
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              TAG 2
                            </div>
                            <img
                              className="h-4 w-4 relative min-h-[16px]"
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              TAG 3
                            </div>
                            <img
                              className="h-4 w-4 relative min-h-[16px]"
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              your label
                            </div>
                            <img className="h-4 w-4 relative" alt="" />
                          </div>
                          <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                            <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                              your label
                            </div>
                            <img className="h-4 w-4 relative" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[205px] rounded-xl bg-light-gohan shadow-[0px_8px_24px_-6px_rgba(0,_0,_0,_0.16),_0px_0px_1px_rgba(0,_0,_0,_0.4)] overflow-y-auto shrink-0 flex flex-col items-center justify-start pt-2 px-0 pb-0 box-border gap-[4px] z-[1]">
                        <div className="w-[134px] rounded-lg bg-background overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                          <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Tag 1
                          </div>
                        </div>
                        <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 pr-10 pl-2 box-border gap-[8px]">
                          <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Tag 2
                          </div>
                          <div className="h-6 w-6 relative hidden" />
                        </div>
                        <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                          <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Tag 3
                          </div>
                        </div>
                        <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                          <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Tag 4
                          </div>
                        </div>
                        <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                          <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Tag 5
                          </div>
                        </div>
                        <button className="cursor-pointer [border:none] p-2 bg-light-gohan w-[134px] h-10 rounded-lg overflow-hidden shrink-0 flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-gainsboro">
                          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                            Tag 6
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] p-2 bg-light-gohan w-[134px] h-10 rounded-lg overflow-hidden shrink-0 flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-gainsboro">
                          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                            Tag 7
                          </div>
                        </button>
                        <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                            Tag 8
                          </div>
                        </div>
                        <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                            Tag 9
                          </div>
                        </div>
                        <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                            Tag 10
                          </div>
                        </div>
                        <div className="w-[284px] rounded-lg bg-light-gohan h-10 overflow-hidden shrink-0 hidden flex-row items-center justify-start p-2 box-border gap-[8px]">
                          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-avertastd-regular text-light-bulma text-left flex items-center">
                            Single line item
                          </div>
                          <div className="h-6 w-6 relative">
                            <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-56xl box-border border-[0.8px] border-solid border-light-trunks" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
      {isPopoverOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover}
        >
          <Popover onClose={closePopover} />
        </PortalPopup>
      )}
      {isPopover1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover1}
        >
          <Popover onClose={closePopover1} />
        </PortalPopup>
      )}
      {isPopover2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover2}
        >
          <Popover onClose={closePopover2} />
        </PortalPopup>
      )}
      {isPopover3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover3}
        >
          <Popover onClose={closePopover3} />
        </PortalPopup>
      )}
      {isPopover4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover4}
        >
          <Popover onClose={closePopover4} />
        </PortalPopup>
      )}
    </>
  );
};

export default Uploaded;
