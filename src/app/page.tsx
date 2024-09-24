import Navbar from "@/components/Common/Navbar/Navbar";
import Header from "@/components/Header/Header";
import PaddingContainer from "@/components/Common/PaddingContainer/PaddingContainer";
export default function Home() {
  return (
    <main>
      <PaddingContainer>
      <Navbar/>
      <Header/>
      </PaddingContainer>
    </main>
  );
}
