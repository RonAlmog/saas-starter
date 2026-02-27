import { PricingTable, Protect } from "@clerk/nextjs";

function ActualFeatures() {
  return <div className="flex flex-col items-start gap-4">features</div>;
}

function UpgradeCard() {
  return (
    <div className="rounded-lg border bg-popover p-4">
      <h3 className="text-lg font-semibold">Upgrade Required</h3>
      <p className="text-sm text-muted-foreground mb-4">
        To access this feature, please upgrade your account.
      </p>
      <PricingTable />
    </div>
  );
}
const PaymentGatedPage = () => {
  return (
    <div className="flex flex-col gap-4 px-8">
      <Protect
        condition={(has) => {
          return has({ plan: "free_plan" });
        }}
        fallback={<UpgradeCard />}
      >
        <ActualFeatures />
      </Protect>
    </div>
  );
};

export default PaymentGatedPage;
