"use client";
import FileManagerCard from "@/components/apps/file-manager/file-manager-card";
import { FileText, FolderDot, Image, Video } from "lucide-react";

const Page = () => {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FileManagerCard
          title="Documents"
          icon={FileText}
          value={1390}
          usedLabel="2.1 GB used"
          percentage={35}
          onActionClick={() => console.log("View documents")}
        />
        <FileManagerCard
          title="Images"
          icon={Image}
          value={1293}
          usedLabel="3.8 GB used"
          percentage={60}
          onActionClick={() => console.log("View documents")}
          color="yellow-500"
        />
        <FileManagerCard
          title="Videos"
          icon={Video}
          value={876}
          usedLabel="7.5 GB used"
          percentage={87}
          onActionClick={() => console.log("View documents")}
          color="red-500"
        />
        <FileManagerCard
          title="Others"
          icon={FolderDot}
          value={176}
          usedLabel="1.3 GB used"
          percentage={20}
          onActionClick={() => console.log("View documents")}
          color="green-500"
        />
      </div>
    </div>
  );
};

export default Page;
