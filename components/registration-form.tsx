"use client"

import { useState, useCallback } from "react"
import { StepIndicator } from "@/components/step-indicator"
import { NameStep } from "@/components/steps/name-step"
import { QualificationStep } from "@/components/steps/qualification-step"
import { StreamStep } from "@/components/steps/stream-step"
import { InstitutionStep } from "@/components/steps/institution-step"
import { GradYearStep } from "@/components/steps/grad-year-step"
import { SuccessScreen } from "@/components/success-screen"
import type { FormData } from "@/lib/form-types"

const steps = ["Name", "Qualification", "Stream", "Institution", "Grad Year"]

const initialFormData: FormData = {
  name: "",
  qualification: "",
  stream: "",
  institution: "",
  gradYear: "",
}

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isComplete, setIsComplete] = useState(false)

  const updateFormData = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setIsComplete(true)
    }
  }, [currentStep])

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  const handleReset = useCallback(() => {
    setFormData(initialFormData)
    setCurrentStep(0)
    setIsComplete(false)
  }, [])

  const stepProps = {
    formData,
    updateFormData,
    onNext: handleNext,
    onBack: handleBack,
    isFirst: currentStep === 0,
    isLast: currentStep === steps.length - 1,
  }

  const renderStep = () => {
    if (isComplete) {
      return <SuccessScreen formData={formData} onReset={handleReset} />
    }

    switch (currentStep) {
      case 0:
        return <NameStep {...stepProps} />
      case 1:
        return <QualificationStep {...stepProps} />
      case 2:
        return <StreamStep {...stepProps} />
      case 3:
        return <InstitutionStep {...stepProps} />
      case 4:
        return <GradYearStep {...stepProps} />
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border p-6 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6">
            Profile Registration
          </h1>
          {!isComplete && <StepIndicator steps={steps} currentStep={currentStep} />}
        </div>

        {/* Form Content */}
        <div className="p-6 sm:p-8">
          <div className="transition-all duration-300 ease-in-out">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  )
}
