import { RegistrationForm } from "@/components/registration-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:py-12 flex items-center justify-center">
      <div className="w-full">
        <RegistrationForm />
        <p className="text-center text-muted-foreground text-sm mt-6">
          Your information is secure and will be kept confidential
        </p>
      </div>
    </main>
  )
}
