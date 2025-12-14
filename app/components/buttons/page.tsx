import ButtonDownload from "@/components/arona-ui/buttons/button-download";
import ButtonDuplicate from "@/components/arona-ui/buttons/button-duplicate";
import ButtonGroupGhost from "@/components/arona-ui/buttons/button-group-ghost";
import ButtonMessagesBadge from "@/components/arona-ui/buttons/button-message";
import ButtonNotificationsBadge from "@/components/arona-ui/buttons/button-notification";
import ButtonPermissions from "@/components/arona-ui/buttons/button-permission";
import ButtonSocialIcons from "@/components/arona-ui/buttons/button-social";
import ButtonUpgrade from "@/components/arona-ui/buttons/button-upgrade";
import IconButtonSoft from "@/components/arona-ui/buttons/icon-button-soft";

const Page = () => {
  return (
    <div
      className="group/grid grid divide-x divide-y divide-dashed"
      style={{ gridTemplateColumns: "repeat(3, minmax(0px, 1fr))" }}
    >
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <ButtonDownload />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <ButtonUpgrade />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <ButtonDuplicate />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <ButtonPermissions />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <ButtonNotificationsBadge />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <ButtonMessagesBadge />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <IconButtonSoft />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <ButtonSocialIcons />
      </div>
      <div className="group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4">
        <ButtonGroupGhost />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Page;
