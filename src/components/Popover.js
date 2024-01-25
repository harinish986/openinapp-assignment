const Popover = ({ onClose }) => {
  return (
    <div className="w-[150px] h-[205px] relative rounded-xl bg-light-gohan shadow-[0px_8px_24px_-6px_rgba(0,_0,_0,_0.16),_0px_0px_1px_rgba(0,_0,_0,_0.4)] overflow-y-auto flex flex-col items-center justify-start pt-2 px-0 pb-0 box-border gap-[4px] max-w-full max-h-full overflow-auto text-left text-sm text-light-bulma font-paragraph-ui-type-text-2xl-s">
      <div className="w-[134px] rounded-lg bg-background overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="flex-1 relative leading-[24px]">Tag 1</div>
      </div>
      <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 pr-10 pl-2 box-border gap-[8px]">
        <div className="flex-1 relative leading-[24px]">Tag 2</div>
        <div className="h-6 w-6 relative hidden" />
      </div>
      <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="flex-1 relative leading-[24px]">Tag 3</div>
      </div>
      <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="flex-1 relative leading-[24px]">Tag 4</div>
      </div>
      <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="flex-1 relative leading-[24px]">Tag 5</div>
      </div>
      <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
          Tag 6
        </div>
      </div>
      <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
          Tag 7
        </div>
      </div>
      <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
          Tag 8
        </div>
      </div>
      <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
          Tag 9
        </div>
      </div>
      <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
          Tag 10
        </div>
      </div>
      <div className="w-[284px] rounded-lg bg-light-gohan h-10 overflow-hidden shrink-0 hidden flex-row items-center justify-start p-2 box-border gap-[8px] font-avertastd-regular">
        <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
          Single line item
        </div>
        <div className="h-6 w-6 relative">
          <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-56xl box-border border-[0.8px] border-solid border-light-trunks" />
        </div>
      </div>
    </div>
  );
};

export default Popover;
