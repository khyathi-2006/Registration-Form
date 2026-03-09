"use client"

import { useState } from "react"
import { Calendar, ChevronLeft } from "lucide-react"
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
import { gradYears } from "@/lib/form-types"

export function GradYearStep({ formData, updateFormData, onNext, onBack }: StepProps) {
  const [error, setError] = useState("")

  const handleSubmit = () => {
    if (!formData.gradYear) {
      setError("Please select your graduation year")
      return
    }
    setError("")
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Graduation Year
        </h2>
        <p className="text-muted-foreground">
          When did you (or will you) graduate?
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="gradYear" className="text-sm font-medium">
          Year of Graduation
        </Label>
        <Select
          value={formData.gradYear}
          onValueChange={(value) => {
            updateFormData("gradYear", value)
            if (error) setError("")
          }}
        >
          <SelectTrigger id="gradYear" className={`h-12 text-base ${error ? "border-destructive" : ""}`}>
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {gradYears.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
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
        <Button onClick={handleSubmit} className="flex-1 h-12 font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
          Complete Registration
        </Button>
      </div>
    </div>
  )
}
