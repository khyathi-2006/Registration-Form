"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import type { StepProps } from "@/lib/form-types"

export function NameStep({ formData, updateFormData, onNext }: StepProps) {
  const [error, setError] = useState("")

  const handleNext = () => {
    if (!formData.name.trim()) {
      setError("Please enter your full name")
      return
    }
    if (formData.name.trim().length < 2) {
      setError("Name must be at least 2 characters")
      return
    }
    setError("")
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          {"What's your name?"}
        </h2>
        <p className="text-muted-foreground">
          {"Let's start with your full name"}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => {
            updateFormData("name", e.target.value)
            if (error) setError("")
          }}
          className={`h-12 text-base ${error ? "border-destructive" : ""}`}
          onKeyDown={(e) => e.key === "Enter" && handleNext()}
          autoFocus
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>

      <Button onClick={handleNext} className="w-full h-12 text-base font-semibold">
        Continue
      </Button>
    </div>
  )
}
