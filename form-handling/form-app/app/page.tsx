import ContactForm from "./components/form/ContactForm";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      
      <main className="mt-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page!</h1>
        <ContactForm/>
      </main>
    </div>
  );
}
