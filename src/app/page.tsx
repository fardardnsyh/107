import FormGenerator from "./form-generator";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react";
import { db } from "@/db";
import FormsList from "./forms/FormsList";

export default async function Home() {
  const forms = await db.query.forms.findMany();

  return (
    <SessionProvider>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-between p-24">
        <FormGenerator />
        <FormsList forms={forms} />
      </main>
    </SessionProvider>
  );
}
