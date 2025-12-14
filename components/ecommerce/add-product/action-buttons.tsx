import { Button } from "@/components/ui/button";
import { XCircle, CloudDownload, Send } from "lucide-react";

export function ActionButtons() {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <div className="flex items-center gap-3 w-full flex-wrap">
        <Button
          variant="outline"
          className="bg-red-200/50 hover:text-red-600 text-red-600 border-red-600 flex-1 cursor-pointer"
        >
          <XCircle className="w-4 h-4 mr-2" />
          Discard
        </Button>

        <Button
          variant="outline"
          className="bg-green-200/50 hover:text-green-600 text-green-600 border-green-600 flex-1 cursor-pointer"
        >
          <CloudDownload className="w-4 h-4 mr-2" />
          Save Draft
        </Button>

        <Button
          variant="outline"
          className="bg-blue-200/50 hover:text-blue-600 text-blue-600 border-blue-600 flex-1 cursor-pointer"
        >
          <Send className="w-4 h-4 mr-2" />
          Publish
        </Button>
      </div>
    </div>
  );
}
