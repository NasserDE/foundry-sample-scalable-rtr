import { EmptyStateSVG } from "@/lib/icons";

export function NoAuditLogs() {
  return (
    <div className="h-screen-without-header flex justify-center items-center">
      <div className="flex flex-col items-center gap-10 text-base">
        <EmptyStateSVG />
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-2xl">No audit log entries yet</h2>
          <p className="text-csbodyandlabels">
            When jobs are modified, you&apos;ll see them here
          </p>
        </div>
      </div>
    </div>
  );
}
