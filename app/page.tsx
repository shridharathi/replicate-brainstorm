import ImageGenerator from "@/components/image-generator"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ backgroundColor: "#222223" }}>
      <Header />
      <main className="flex flex-1 overflow-hidden pt-20" style={{ backgroundColor: "#222223" }}>
        <ImageGenerator />
      </main>
    </div>
  )
}

