import DoubleSpin from "@/components/arona-ui/loaders/loader-double-spin";
import LoaderRectSpinner from "@/components/arona-ui/loaders/loader-rect-spinner";
import LoaderRipple from "@/components/arona-ui/loaders/loader-ripple";
import LoaderSpinnerBadge from "@/components/arona-ui/loaders/loader-spinner-badge";
import LoaderSpinner from "@/components/arona-ui/loaders/spinner";
import {
  Spinner,
  type SpinnerProps,
} from "@/components/arona-ui/loaders/spinners";

const variants: SpinnerProps["variant"][] = [
  "default",
  "circle",
  "pinwheel",
  "circle-filled",
  "ellipsis",
  "ring",
  "bars",
  "infinite",
];

const Page = () => {
  return (
    <div
      className="group/grid grid divide-x divide-y divide-dashed"
      style={{ gridTemplateColumns: "repeat(3, minmax(0px, 1fr))" }}
    >
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <LoaderSpinner />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <LoaderRectSpinner />
      </div>

      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <DoubleSpin />
      </div>
      {variants.map((variant) => (
        <div
          className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4"
          key={variant}
        >
          <Spinner key={variant} variant={variant} />
        </div>
      ))}
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <LoaderSpinnerBadge />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4 bg-[#212121]">
        <LoaderRipple />
      </div>
    </div>
  );
};

export default Page;
