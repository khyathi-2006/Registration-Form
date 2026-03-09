"use client"

import { useState } from "react"
import { GraduationCap, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { StepProps } from "@/lib/form-types"
import { qualifications } from "@/lib/form-types"

export function QualificationStep({ formData, updateFormData, onNext, onBack }: StepProps) {
  const [error, setError] = useState("")

  const handleNext = () => {
    if (!formData.qualification) {
      setError("Please select your qualification")
      return
    }
    setError("")
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Your Qualification
        </h2>
        <p className="text-muted-foreground">
          Select your highest qualification
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="qualification" className="text-sm font-medium">
          Qualification
        </Label>
        <Select
          value={formData.qualification}
          onValueChange={(value) => {
            updateFormData("qualification", value)
            if (error) setError("")
          }}
        >
          <SelectTrigger id="qualification" className={`h-12 text-base ${error ? "border-destructive" : ""}`}>
            <SelectValue placeholder="Select qualification" />
          </SelectTrigger>
          <SelectContent>
            {qualifications.map((qual) => (
              <SelectItem key={qual} value={qual}>
                {qual}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
