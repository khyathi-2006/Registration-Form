"use client"

import { CheckCircle2, User, GraduationCap, BookOpen, Building, Calendar, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { FormData } from "@/lib/form-types"

interface SuccessScreenProps {
  formData: FormData
  onReset: () => void
}

export function SuccessScreen({ formData, onReset }: SuccessScreenProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center animate-in zoom-in duration-300">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Registration Complete!
        </h2>
        <p className="text-muted-foreground">
          Your profile has been successfully created
        </p>
      </div>

      <div className="bg-muted/50 rounded-xl p-6 space-y-4">
        <h3 className="font-semibold text-foreground mb-4">Profile Summary</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Full Name</p>
              <p className="font-medium text-foreground">{formData.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Qualification</p>
              <p className="font-medium text-foreground">{formData.qualification}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Stream</p>
              <p className="font-medium text-foreground">{formData.stream}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Building className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Institution</p>
              <p className="font-medium text-foreground">{formData.institution}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Graduation Year</p>
              <p className="font-medium text-foreground">{formData.gradYear}</p>
            </div>
          </div>
        </div>
      </div>

      <Button variant="outline" onClick={onReset} className="w-full h-12">
        <RotateCcw className="w-4 h-4 mr-2" />
        Start New Registration
      </Button>
    </div>
  )
}
