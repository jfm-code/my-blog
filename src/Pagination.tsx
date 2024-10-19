import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function DefaultPagination({ currentPage, setPage, totalPages }: { currentPage: number, setPage: (page: number) => void, totalPages: number }) {
  const [active, setActive] = React.useState(currentPage);

  const getItemProps = (index : number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "white",
      onClick: () => {
        setActive(index);
        setPage(index);
      },
      className: active === index ? "rounded-sm bg-primary text-white" : "rounded-sm text-primary hover:bg-primarylight", // Override with your custom hex color
    } as any);

    const next = () => {
      if (currentPage < totalPages) {
        setPage(currentPage + 1);
        setActive(currentPage + 1);
      }
    };

    const prev = () => {
      if (currentPage > 1) {
        setPage(currentPage - 1);
        setActive(currentPage - 1);
      }
    };

    React.useEffect(() => {
      setActive(currentPage); // Sync local active state with parent when currentPage changes
    }, [currentPage]);

  return (
    <div className="flex justify-center items-center mt-7 gap-4">
      <Button
            variant="text"
            className="flex items-center py-[11px] px-4 rounded-sm hover:bg-primarylight"
            onClick={prev}
            disabled={currentPage  === 1}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
        >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-primary" />
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <IconButton {...getItemProps(index + 1)} key={index + 1}>{index + 1}</IconButton>
        ))}
      </div>
      <Button
            variant="text"
            className="flex items-center py-[11px] px-4 rounded-sm hover:bg-primarylight"
            onClick={next}
            disabled={currentPage  === totalPages} 
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
}