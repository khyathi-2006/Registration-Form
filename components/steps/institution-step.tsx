"use client"

import { useState } from "react"
import { Building, ChevronLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import type { StepProps } from "@/lib/form-types"

export function InstitutionStep({ formData, updateFormData, onNext, onBack }: StepProps) {
  const [error, setError] = useState("")

  const handleNext = () => {
    if (!formData.institution.trim()) {
      setError("Please enter your institution name")
      return
    }
    if (formData.institution.trim().length < 3) {
      setError("Institution name must be at least 3 characters")
      return
    }
    setError("")
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Building className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Your Institution
        </h2>
        <p className="text-muted-foreground">
          Enter the name of your college or university
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="institution" className="text-sm font-medium">
          Institution Name
        </Label>
        <Input
          id="institution"
          type="text"
          placeholder="Enter institution name"
          value={formData.institution}
          onChange={(e) => {
            updateFormData("institution", e.target.value)
            if (error) setError("")
          }}
          className={`h-12 text-base ${error ? "border-destructive" : ""}`}
          onKeyDown={(e) => e.key === "Enter" && handleNext()}
          autoFocus
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1 h-12">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
        <Button onClick={handleNext} className="flex-1 h-12 font-semibold">
          Continue
        </Button>
      </div>
    </div>
  )
}
