import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReadyToSimplyFy from "@/components/TenantManagement/ReadyToSimplyFy";
import TheSolution from "@/components/TenantManagement/TheSolution";

export default function TenantManagement() {
  return (
    <main className="flex justify-center">
      <div className="w-full ">
        {/* <Header /> */}
        <TheSolution/>
        <ReadyToSimplyFy/>
        <Footer />
      </div>
    </main>
  );
}

