"use client"

import { useState } from "react"
import { BookOpen, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import type { StepProps } from "@/lib/form-types"
import { streams } from "@/lib/form-types"

export function StreamStep({ formData, updateFormData, onNext, onBack }: StepProps) {
  const [error, setError] = useState("")

  const handleNext = () => {
    if (!formData.stream) {
      setError("Please select your stream")
      return
    }
    setError("")
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Your Stream
        </h2>
        <p className="text-muted-foreground">
          Select your field of study
        </p>
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-medium">Stream / Field</Label>
        <div className="grid grid-cols-2 gap-3">
          {streams.map((stream) => (
            <button
              key={stream}
              onClick={() => {
                updateFormData("stream", stream)
                if (error) setError("")
              }}
              className={cn(
                "p-4 rounded-lg border-2 text-sm font-medium transition-all duration-200 hover:border-primary/50",
                formData.stream === stream
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-foreground hover:bg-muted"
              )}
            >
              {stream}
            </button>
          ))}
        </div>
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
