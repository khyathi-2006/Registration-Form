export interface FormData {
  name: string
  qualification: string
  stream: string
  institution: string
  gradYear: string
}

export interface StepProps {
  formData: FormData
  updateFormData: (field: keyof FormData, value: string) => void
  onNext: () => void
  onBack: () => void
  isFirst: boolean
  isLast: boolean
}

export const qualifications = [
  "High School",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other"
]

export const streams = [
  "Science",
  "Commerce",
  "Arts",
  "Engineering",
  "Medicine",
  "Law",
  "Management",
  "Other"
]

export const gradYears = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() + 5 - i).toString())
